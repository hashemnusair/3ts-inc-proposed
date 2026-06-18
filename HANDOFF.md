# Mawzun Advisory website handoff

## Ownership

The production repository, Vercel project, domain, and CMS should be owned by
Shareef. Hashem should remain a GitHub collaborator for technical support.

Recommended repository name: `mawzun-advisory`

## Local verification

```bash
npm ci
npm run lint
npm run build
```

The site is a Next.js 16 App Router project and currently produces a static
export. It has no required secrets or external services.

## Vercel import settings

Import the GitHub repository as a new project and keep Vercel's detected
defaults:

- Framework Preset: Next.js
- Root Directory: `./`
- Install Command: default
- Build Command: default (`next build`)
- Output Directory: do not override
- Production Branch: `main`

Set this environment variable after the final domain is known:

```text
NEXT_PUBLIC_SITE_URL=https://www.example.com
```

Apply it to Production, Preview, and Development. Redeploy after changing it.

## Domain

Add the final domain in Vercel before changing DNS. Vercel will show the exact
records required by the current project. Copy those records at the domain
registrar.

Do not delete or replace MX, SPF, DKIM, or DMARC records used by email.

## Deployment behavior

Every push to `main` creates a production deployment. Pull requests and other
branches create preview deployments.

## CMS

The recommended CMS is Sanity, owned by Shareef. The first CMS phase should use
a browser-based Sanity Studio plus a Vercel deploy hook. Publishing content in
Sanity will trigger a new static site build.

See `CMS_PLAN.md` for the proposed content model and implementation sequence.
