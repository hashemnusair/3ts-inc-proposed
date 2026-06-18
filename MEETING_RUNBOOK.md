# Hosting handover meeting runbook

Meeting: June 18, 2026 at 10:00 PM. Confirm the timezone at the start.

## Bring

- This runbook.
- Both GitHub repository pages.
- Both local sites or current preview URLs.
- Shareef's domain registrar login for `3ts-inc.com`.
- Shareef's email/Google Workspace administrator access if applicable.
- A list of desired repository/project names.

Do not ask Shareef to send passwords or verification codes. He should type them
on his screen.

## Opening

> Before I go into the mechanics, can I calibrate how familiar you are with
> GitHub, Vercel, and domains? No issue at all if any of this is new. My goal is
> not to turn you into a developer; it is to make sure the sites are owned by
> you, hosted under your accounts, and editable without depending on me for
> every small change.

Then say:

> There are four pieces. GitHub safely stores the website code and its history.
> Vercel turns that code into the hosted website. The domain is the public
> address and remains controlled at your registrar. The CMS will be the editing
> dashboard for normal content changes. You should own all four; I will remain
> available as a collaborator.

## Decide before clicking

Confirm:

- Is the current 3Ts site staying on `3ts-inc.com`?
- Is Mawzun replacing 3Ts eventually or launching as a separate site?
- Does Shareef already have a preferred Mawzun domain?
- Where is `3ts-inc.com` registered?
- Is domain email using Google Workspace or another provider?
- Does Shareef want you to retain GitHub admin access?
- Does he need direct shared Vercel dashboard access, or is GitHub-based support
  enough?

## GitHub

Recommended path: transfer the existing repositories instead of creating empty
repositories. A transfer preserves commit history and makes the ownership change
explicit.

1. Shareef signs into GitHub.
2. He creates an organization.
3. He invites Hashem. Owner access is simplest during transfer; it can be
   reduced afterward.
4. Hashem transfers:
   - `3ts-inc` to the organization as `3ts-inc`
   - `3ts-inc-proposed` as `mawzun-advisory`
5. Confirm Shareef can open repository Settings.
6. Confirm `main` is the default branch.
7. Add branch protection later, after tonight's deployment.

If Shareef prefers new empty repositories, create them without README,
`.gitignore`, or license, then change each local remote and push:

```bash
git remote set-url origin git@github.com:ORG/REPOSITORY.git
git push -u origin main
```

## Vercel

For each site:

1. Shareef signs into Vercel using GitHub.
2. Choose Add New, then Project.
3. Grant the Vercel GitHub App access to the organization/repositories.
4. Import one repository.
5. Keep the detected Next.js defaults.
6. Add `NEXT_PUBLIC_SITE_URL`.
7. Deploy.
8. Open the generated `vercel.app` URL and verify navigation, mobile layout,
   contact links, images, and page titles.
9. Repeat for the second repository.

Suggested project names:

- `3ts-inc`
- `mawzun-advisory`

## Domains

Do not begin by changing DNS.

1. Deploy and verify the Vercel project first.
2. Add `3ts-inc.com` and `www.3ts-inc.com` to the 3Ts Vercel project.
3. Let Vercel display the exact DNS records.
4. Inspect existing DNS and preserve email-related records.
5. Update only the website records required by Vercel.
6. Choose one canonical domain and redirect the other.
7. Verify HTTPS, `www`, apex domain, and email after propagation.

The Mawzun project can remain on its `vercel.app` URL until a domain is chosen.

## CMS explanation

> I recommend a controlled CMS rather than making the whole design
> drag-and-drop. You will be able to edit the content that naturally changes:
> copy, services, testimonials, case studies, contact details, images, and SEO.
> The layout and interactions remain protected so an ordinary edit cannot break
> the site.

> I have prepared the content model. The Sanity account and project should be
> created under your ownership. Once those exist, I can connect both sites and
> import the current content.

Do not promise a completed CMS during this hosting call. Agree on the content
Shareef wants to edit most often and schedule the CMS implementation.

## Close

> The important outcome is that the code, hosting, domains, and future CMS are
> in your accounts. I can continue helping technically, but you are not
> dependent on my accounts or availability.

End by recording:

- Repository organization and URLs.
- Vercel project URLs.
- Domain decisions and pending DNS work.
- CMS owner and chosen setup.
- Your access level.
- Next action, owner, and date.
