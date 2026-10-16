# RURANGO web

Next.js App Router application for the RURANGO technology portfolio.

## Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Geist / Geist Mono

Design specs live in `/docs` at the repository root.

## Environment

Copy `.env.example` to `.env.local` for local overrides:

- `NEXT_PUBLIC_SITE_URL` — canonical site origin (for metadata / sitemap)
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` — contact delivery
