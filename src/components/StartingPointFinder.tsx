"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type StepId = "situation" | "context" | "difficulty";
type RecommendationId =
  | "alignment-read"
  | "decision-sprint"
  | "retained-advisory"
  | "first-90-days"
  | "focused-senior-coaching";

type Option = {
  id: string;
  label: string;
  note?: string;
  recommendation?: RecommendationId;
};

type Selection = Partial<Record<StepId, string>>;

const situationOptions: Option[] = [
  {
    id: "stuck-decision",
    label: "A decision is stuck and no one wants to say why",
    note: "The formal analysis may be done, but the real room has not moved.",
    recommendation: "alignment-read",
  },
  {
    id: "convening",
    label: "A retreat or convening has to produce real movement",
    note: "The room cannot become another polite conversation.",
    recommendation: "decision-sprint",
  },
  {
    id: "misaligned-team",
    label: "A leadership team is capable but misaligned",
    note: "The talent is there; trust, roles, or shared direction are not.",
    recommendation: "alignment-read",
  },
  {
    id: "new-leader",
    label: "A new senior leader is stepping into a sensitive role",
    note: "The early moves matter because the politics are already live.",
    recommendation: "first-90-days",
  },
  {
    id: "reform-losing-momentum",
    label: "A reform, program, or transformation is losing momentum",
    note: "The work needs pace, alignment, and steadier judgment over time.",
    recommendation: "retained-advisory",
  },
  {
    id: "public-narrative",
    label: "A public narrative or stakeholder issue is getting hard to manage",
    note: "Coordination, message discipline, and trust are starting to fray.",
    recommendation: "retained-advisory",
  },
  {
    id: "high-stakes-communication",
    label: "A senior person needs to communicate with confidence under pressure",
    note: "The stakes sit inside both the message and the person carrying it.",
    recommendation: "focused-senior-coaching",
  },
  {
    id: "crisis-transition",
    label: "A crisis or transition needs calm decision discipline",
    note: "The system needs a steadier way to decide while pressure is high.",
    recommendation: "retained-advisory",
  },
  {
    id: "sensitive-other",
    label: "Something else, but it is sensitive and consequential",
    note: "If it is hard to describe cleanly, that is often the point.",
    recommendation: "alignment-read",
  },
];

const contextOptions: Record<string, Option[]> = {
  default: [
    { id: "government", label: "Government or public institution" },
    { id: "multilateral", label: "Multilateral or donor-funded program" },
    { id: "sovereign", label: "Sovereign-backed or national initiative" },
    { id: "family-enterprise", label: "Family enterprise or founder-led business" },
    { id: "private-sector", label: "Large private-sector organization" },
    { id: "nonprofit", label: "Nonprofit, school, or civic institution" },
    { id: "cross-sector", label: "Cross-sector partnership" },
    { id: "other-context", label: "Other" },
  ],
  "stuck-decision": [
    { id: "government", label: "Government or public institution" },
    { id: "multilateral", label: "Multilateral or donor-funded program" },
    { id: "sovereign", label: "Sovereign-backed or national initiative" },
    { id: "family-enterprise", label: "Family enterprise or founder-led business" },
    { id: "private-sector", label: "Large private-sector organization" },
    { id: "cross-sector", label: "Cross-sector partnership" },
    { id: "other-context", label: "Other" },
  ],
  convening: [
    { id: "cross-sector", label: "Cross-sector partnership" },
    { id: "government", label: "Government or public institution" },
    { id: "multilateral", label: "Multilateral or donor-funded program" },
    { id: "nonprofit", label: "Nonprofit, school, or civic institution" },
    { id: "private-sector", label: "Large private-sector organization" },
    { id: "other-context", label: "Other" },
  ],
  "new-leader": [
    { id: "government", label: "Government or public institution" },
    { id: "multilateral", label: "Multilateral or donor-funded program" },
    { id: "sovereign", label: "Sovereign-backed or national initiative" },
    { id: "family-enterprise", label: "Family enterprise or founder-led business" },
    { id: "private-sector", label: "Large private-sector organization" },
    { id: "nonprofit", label: "Nonprofit, school, or civic institution" },
    { id: "other-context", label: "Other" },
  ],
  "high-stakes-communication": [
    { id: "multilateral", label: "Multilateral or donor-funded program" },
    { id: "government", label: "Government or public institution" },
    { id: "private-sector", label: "Large private-sector organization" },
    { id: "nonprofit", label: "Nonprofit, school, or civic institution" },
    { id: "cross-sector", label: "Cross-sector partnership" },
    { id: "other-context", label: "Other" },
  ],
};

const difficultyOptions: Record<string, Option[]> = {
  default: [
    { id: "too-many-stakeholders", label: "Too many stakeholders", recommendation: "retained-advisory" },
    { id: "low-trust", label: "Low trust or guarded conversations", recommendation: "alignment-read" },
    { id: "decision-rights", label: "Unclear decision rights", recommendation: "alignment-read" },
    { id: "competing-priorities", label: "Competing incentives or priorities" },
    { id: "political-cultural", label: "Political or cultural sensitivity", recommendation: "retained-advisory" },
    { id: "strong-personalities", label: "Strong personalities" },
    { id: "public-visibility", label: "Public visibility or reputation risk", recommendation: "retained-advisory" },
    { id: "previous-attempts", label: "Previous attempts have not worked", recommendation: "alignment-read" },
    { id: "time-pressure", label: "Time pressure" },
  ],
  "stuck-decision": [
    { id: "low-trust", label: "Low trust or guarded conversations", recommendation: "alignment-read" },
    { id: "decision-rights", label: "Unclear decision rights", recommendation: "alignment-read" },
    { id: "competing-priorities", label: "Competing incentives or priorities" },
    { id: "political-cultural", label: "Political or cultural sensitivity", recommendation: "retained-advisory" },
    { id: "strong-personalities", label: "Strong personalities" },
    { id: "previous-attempts", label: "Previous attempts have not worked", recommendation: "alignment-read" },
  ],
  convening: [
    { id: "low-trust", label: "Low trust or guarded conversations", recommendation: "alignment-read" },
    { id: "too-many-stakeholders", label: "Too many stakeholders", recommendation: "retained-advisory" },
    { id: "strong-personalities", label: "Strong personalities" },
    { id: "previous-attempts", label: "Previous attempts have not worked", recommendation: "decision-sprint" },
    { id: "time-pressure", label: "Time pressure", recommendation: "decision-sprint" },
    { id: "public-visibility", label: "Public visibility or reputation risk", recommendation: "retained-advisory" },
  ],
  "misaligned-team": [
    { id: "low-trust", label: "Low trust or guarded conversations", recommendation: "alignment-read" },
    { id: "decision-rights", label: "Unclear decision rights", recommendation: "alignment-read" },
    { id: "competing-priorities", label: "Competing incentives or priorities" },
    { id: "strong-personalities", label: "Strong personalities" },
    { id: "previous-attempts", label: "Previous attempts have not worked", recommendation: "alignment-read" },
  ],
  "new-leader": [
    { id: "political-cultural", label: "Political or cultural sensitivity", recommendation: "first-90-days" },
    { id: "low-trust", label: "Low trust or guarded conversations", recommendation: "first-90-days" },
    { id: "too-many-stakeholders", label: "Too many stakeholders", recommendation: "first-90-days" },
    { id: "public-visibility", label: "Public visibility or reputation risk", recommendation: "first-90-days" },
    { id: "time-pressure", label: "Time pressure", recommendation: "first-90-days" },
  ],
  "reform-losing-momentum": [
    { id: "too-many-stakeholders", label: "Too many stakeholders", recommendation: "retained-advisory" },
    { id: "competing-priorities", label: "Competing incentives or priorities", recommendation: "retained-advisory" },
    { id: "political-cultural", label: "Political or cultural sensitivity", recommendation: "retained-advisory" },
    { id: "low-trust", label: "Low trust or guarded conversations", recommendation: "alignment-read" },
    { id: "previous-attempts", label: "Previous attempts have not worked", recommendation: "alignment-read" },
  ],
  "public-narrative": [
    { id: "public-visibility", label: "Public visibility or reputation risk", recommendation: "retained-advisory" },
    { id: "too-many-stakeholders", label: "Too many stakeholders", recommendation: "retained-advisory" },
    { id: "low-trust", label: "Low trust or guarded conversations", recommendation: "alignment-read" },
    { id: "competing-priorities", label: "Competing incentives or priorities", recommendation: "retained-advisory" },
    { id: "time-pressure", label: "Time pressure", recommendation: "retained-advisory" },
  ],
  "high-stakes-communication": [
    { id: "public-visibility", label: "Public visibility or reputation risk", recommendation: "focused-senior-coaching" },
    { id: "time-pressure", label: "Time pressure", recommendation: "focused-senior-coaching" },
    { id: "strong-personalities", label: "Strong personalities", recommendation: "focused-senior-coaching" },
    { id: "low-trust", label: "Low trust or guarded conversations", recommendation: "focused-senior-coaching" },
  ],
  "crisis-transition": [
    { id: "time-pressure", label: "Time pressure", recommendation: "retained-advisory" },
    { id: "too-many-stakeholders", label: "Too many stakeholders", recommendation: "retained-advisory" },
    { id: "decision-rights", label: "Unclear decision rights", recommendation: "alignment-read" },
    { id: "public-visibility", label: "Public visibility or reputation risk", recommendation: "retained-advisory" },
    { id: "political-cultural", label: "Political or cultural sensitivity", recommendation: "retained-advisory" },
  ],
};

const recommendations: Record<
  RecommendationId,
  {
    title: string;
    label: string;
    summary: string;
    memo: string;
  }
> = {
  "alignment-read": {
    title: "Alignment Read",
    label: "Likely starting point",
    summary:
      "A focused diagnostic to understand where alignment is breaking, what is really at stake, and what should happen next.",
    memo:
      "This likely needs a confidential read of the room before another meeting, retreat, or decision process is added.",
  },
  "decision-sprint": {
    title: "Decision Sprint",
    label: "Likely starting point",
    summary:
      "A structured sprint around a specific stalled decision or consequential convening, from stakeholder preparation through follow-through.",
    memo:
      "This likely needs the room designed before the room begins, with enough structure to turn conversation into movement.",
  },
  "retained-advisory": {
    title: "Retained Advisory",
    label: "Likely starting point",
    summary:
      "Ongoing senior support through a reform, transformation, public narrative, crisis, or multi-stakeholder effort that needs steady judgment.",
    memo:
      "This likely needs a trusted outside advisor close enough to the work to help sponsors keep alignment, pace, and judgment intact.",
  },
  "first-90-days": {
    title: "First 90 Days",
    label: "Likely starting point",
    summary:
      "Confidential support for a newly appointed senior leader navigating early decisions, stakeholder expectations, and political sensitivity.",
    memo:
      "This likely needs careful early mapping, sponsor judgment, and enough momentum to avoid creating resistance too soon.",
  },
  "focused-senior-coaching": {
    title: "Focused Senior Coaching",
    label: "Likely starting point",
    summary:
      "Targeted support for senior communication, confidence, influence, and composure when the moment has real stakes.",
    memo:
      "This likely needs focused preparation that sharpens the message while steadying the person who has to carry it.",
  },
};

const stepOrder: StepId[] = ["situation", "context", "difficulty"];
const stepMeta: Record<StepId, { eyebrow: string; question: string }> = {
  situation: {
    eyebrow: "Step 01 / Live issue",
    question: "What kind of situation are you trying to move through?",
  },
  context: {
    eyebrow: "Step 02 / Context",
    question: "Where is this happening?",
  },
  difficulty: {
    eyebrow: "Step 03 / Friction",
    question: "What makes it hard?",
  },
};
const recommendationPriority: RecommendationId[] = [
  "first-90-days",
  "focused-senior-coaching",
  "decision-sprint",
  "retained-advisory",
  "alignment-read",
];

function getOptions(step: StepId, selected: Selection) {
  if (step === "situation") return situationOptions;
  if (step === "context") return contextOptions[selected.situation ?? ""] ?? contextOptions.default;
  return difficultyOptions[selected.situation ?? ""] ?? difficultyOptions.default;
}

function getOption(step: StepId, optionId: string | undefined, selected: Selection) {
  return getOptions(step, selected).find((option) => option.id === optionId);
}

function getRecommendationId(selected: Selection): RecommendationId {
  const situationRecommendation = getOption("situation", selected.situation, selected)?.recommendation;
  const difficultyRecommendation = getOption("difficulty", selected.difficulty, selected)?.recommendation;
  const candidates = [situationRecommendation, difficultyRecommendation].filter(
    (value): value is RecommendationId => Boolean(value)
  );

  return (
    recommendationPriority.find((recommendation) => candidates.includes(recommendation)) ??
    situationRecommendation ??
    difficultyRecommendation ??
    "alignment-read"
  );
}

function nextStep(step: StepId) {
  return stepOrder[stepOrder.indexOf(step) + 1];
}

export default function StartingPointFinder() {
  const [selected, setSelected] = useState<Selection>({});
  const [activeStep, setActiveStep] = useState<StepId>("situation");
  const memoRef = useRef<HTMLElement>(null);
  const activeStepIndex = stepOrder.indexOf(activeStep);
  const activeOptions = getOptions(activeStep, selected);
  const completedCount = stepOrder.filter((step) => selected[step]).length;
  const isComplete = completedCount === stepOrder.length;
  const recommendationId = getRecommendationId(selected);
  const recommendation = recommendations[recommendationId];

  const selectedLabels = useMemo(
    () => ({
      situation: getOption("situation", selected.situation, selected)?.label,
      context: getOption("context", selected.context, selected)?.label,
      difficulty: getOption("difficulty", selected.difficulty, selected)?.label,
    }),
    [selected]
  );

  const mailtoHref = useMemo(() => {
    const subject = `Confidential conversation: ${recommendation.title}`;
    const body = [
      "Shareef,",
      "",
      "I would like to request a confidential conversation.",
      "",
      `Situation: ${selectedLabels.situation ?? ""}`,
      `Context: ${selectedLabels.context ?? ""}`,
      `What makes it hard: ${selectedLabels.difficulty ?? ""}`,
      `Suggested starting point: ${recommendation.title}`,
      "",
      "A short note on what is happening:",
    ].join("\n");

    return `mailto:shareef@3ts-inc.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [recommendation.title, selectedLabels]);

  function selectOption(step: StepId, option: Option) {
    setSelected((current) => {
      if (step === "situation") {
        return { situation: option.id };
      }
      if (step === "context") {
        return { ...current, context: option.id, difficulty: undefined };
      }
      return { ...current, difficulty: option.id };
    });

    const upcomingStep = nextStep(step);
    if (upcomingStep) {
      setActiveStep(upcomingStep);
    } else {
      window.setTimeout(() => {
        if (window.matchMedia("(min-width: 1280px)").matches) return;

        memoRef.current?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
          block: "start",
        });
      }, 700);
    }
  }

  const memoCta = (
    <a
      href={isComplete ? mailtoHref : undefined}
      aria-disabled={!isComplete}
      className={`group inline-flex w-full items-center justify-between gap-4 border px-5 py-4 text-sm font-medium uppercase tracking-[0.14em] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
        isComplete
          ? "border-charcoal bg-charcoal text-cream hover:-translate-y-0.5 hover:bg-[#2A372C]"
          : "pointer-events-none border-charcoal/10 bg-charcoal/5 text-charcoal/35"
      }`}
    >
      <span>Send this to Shareef</span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-lg transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </a>
  );

  return (
    <section id="starting-point" className="site-gutter site-section relative w-full scroll-mt-28 overflow-hidden border-t border-[#111613] bg-[#111613] text-cream">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="site-container">
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 flex flex-col items-start space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Find the right starting point
              </span>
              <div className="h-[2px] w-12 bg-gold/60" />
            </div>
            <h2 className="site-heading-lg max-w-3xl font-serif tracking-tight text-cream">
              Start with the situation, not the service menu.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-lg leading-relaxed text-cream/62"
          >
            A short diagnostic for sponsors and senior leaders who know the
            problem is consequential, but may not yet know what kind of help to
            ask for.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="grid overflow-hidden border border-cream/10 bg-cream/[0.03] xl:grid-cols-[1fr_0.72fr]"
        >
          <div className="min-h-[min(42rem,86svh)] p-6 md:p-8 lg:p-10">
            <div className="mb-9 grid gap-px overflow-hidden border border-cream/10 bg-cream/10 md:grid-cols-3">
              {stepOrder.map((step, index) => {
                const isActive = step === activeStep;
                const isLocked = index > 0 && !selected[stepOrder[index - 1]];

                return (
                  <button
                    key={step}
                    type="button"
                    disabled={isLocked}
                    onClick={() => setActiveStep(step)}
                    className={`min-h-24 bg-[#111613] px-5 py-4 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                      isActive
                        ? "text-cream"
                        : isLocked
                          ? "text-cream/28"
                          : "text-cream/58 hover:text-cream"
                    }`}
                  >
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="font-serif text-2xl text-gold/80">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                        {selected[step] ? "Selected" : isLocked ? "Waiting" : "Open"}
                      </span>
                    </div>
                    <div className="text-sm leading-snug">
                      {selected[step]
                        ? getOption(step, selected[step], selected)?.label
                        : stepMeta[step].question}
                    </div>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-8 max-w-3xl border-b border-cream/10 pb-7">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                    {stepMeta[activeStep].eyebrow}
                  </p>
                  <h3 className="font-serif text-3xl leading-tight text-cream md:text-5xl">
                    {stepMeta[activeStep].question}
                  </h3>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {activeOptions.map((option) => {
                    const isSelected = selected[activeStep] === option.id;

                    return (
                      <button
                        key={option.id}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => selectOption(activeStep, option)}
                        className={`group min-h-28 border px-5 py-4 text-left transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                          isSelected
                            ? "border-gold/70 bg-gold/12 text-cream"
                            : "border-cream/10 bg-cream/[0.025] text-cream/68 hover:border-gold/35 hover:bg-cream/[0.055] hover:text-cream"
                        }`}
                      >
                        <span className="mb-3 flex items-center gap-3">
                          <span
                            className={`h-2 w-2 shrink-0 rounded-full transition-colors duration-300 ${
                              isSelected ? "bg-gold" : "bg-cream/18 group-hover:bg-gold/60"
                            }`}
                          />
                          <span className="text-base leading-snug">{option.label}</span>
                        </span>
                        {option.note && (
                          <span className="block pl-5 text-xs leading-relaxed text-cream/42">
                            {option.note}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-cream/10 pt-5">
                  <span className="text-xs uppercase tracking-[0.18em] text-cream/35">
                    {completedCount}/{stepOrder.length} answered
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-gold/85">
                    {activeStepIndex < stepOrder.length - 1 ? "Next adapts to this answer" : "Memo ready after this"}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <aside
            ref={memoRef}
            className="relative scroll-mt-24 flex flex-col justify-between border-t border-cream/10 bg-[#f8f6f2] p-7 text-charcoal xl:border-l xl:border-t-0 lg:p-10"
          >
            <div>
              <div className="mb-10 flex items-center justify-between gap-6 border-b border-charcoal/10 pb-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                  Recommendation memo
                </span>
                <span className="font-serif text-3xl text-charcoal/35">
                  {completedCount}/{stepOrder.length}
                </span>
              </div>

              <div className="mb-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {isComplete ? recommendation.label : "Builds as you answer"}
                </p>
                <h3 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
                  {recommendation.title}
                </h3>
              </div>

              <div className="mb-8">{memoCta}</div>

              <p className="mb-8 text-lg leading-relaxed text-charcoal/74">
                {isComplete
                  ? recommendation.memo
                  : "Answer one stage at a time. The next options narrow around the situation, so the path feels closer to the actual problem."}
              </p>

              <dl className="space-y-4 border-y border-charcoal/10 py-6">
                {[
                  ["Situation", selectedLabels.situation],
                  ["Context", selectedLabels.context],
                  ["Friction", selectedLabels.difficulty],
                ].map(([label, value], index) => (
                  <div key={label} className="grid grid-cols-[5.5rem_1fr] gap-4">
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-charcoal/38">
                      {label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-charcoal/74">
                      {value ?? `Waiting for step ${index + 1}`}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 text-sm leading-relaxed text-charcoal/62">
                {recommendation.summary}
              </p>
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
