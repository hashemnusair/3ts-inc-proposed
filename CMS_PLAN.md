# CMS plan

## Recommendation

Use Sanity for content editing while keeping layout and design in the Next.js
codebase.

Create the Sanity organization and project under Shareef's account. Invite
Hashem as a technical administrator or developer.

## Why Sanity

- Browser-based editor for non-technical users.
- Structured fields prevent accidental layout damage.
- Supports images, rich text, ordered collections, drafts, and publishing.
- Integrates cleanly with Next.js and Vercel.
- Can later support visual editing without rebuilding the site design.

## Phase 1

Keep the current static export. On publish:

1. Shareef edits and publishes content in Sanity Studio.
2. A Sanity webhook calls a Vercel deploy hook.
3. Vercel rebuilds and publishes the site.

This is the lowest-risk first release. Content changes will usually appear after
the Vercel build completes rather than instantly.

## Editable content

- Site settings: brand name, Arabic name, email, locations, social links.
- Homepage: hero heading, introduction, patterns, services, impact statistics,
  selected engagements, testimonials, and section images.
- About: biography, competencies, credentials, and portrait.
- Approach: section headings and body copy.
- Services: service names, descriptions, durations, ordering, and images.
- Impact: case studies, results, ordering, and labels.
- Testimonials: quote, attribution, role, category, and ordering.
- Contact: email, locations, confidentiality copy, and optional scheduling URL.
- SEO: page title, description, social image, and canonical URL.

## Design-controlled fields

The CMS should not expose layout grids, arbitrary CSS, animation settings,
navigation structure, or unrestricted HTML.

## Proposed schema types

- `siteSettings`
- `homePage`
- `standardPage`
- `service`
- `impactCase`
- `testimonial`
- `engagement`
- `seo`

## Environment variables

The exact values are created after Shareef owns the Sanity project:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
SANITY_REVALIDATE_SECRET=
```

Public published-content reads may not require a token. Draft preview and
private datasets require one. Secrets belong in Vercel, never in Git.

## Implementation sequence

1. Create Shareef-owned Sanity organization/project.
2. Define schemas and deploy Sanity Studio.
3. Import the existing local content as initial documents.
4. Add typed Sanity queries with local fallback during migration.
5. Replace component-local copy section by section.
6. Add Vercel deploy hook and Sanity webhook.
7. Test editing, publishing, rollback, images, and mobile rendering.
8. Train Shareef using a small content-editing checklist.
