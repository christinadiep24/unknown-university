# AGENTS.md

## Cursor Cloud specific instructions

This is a single Next.js 15 (App Router) + TypeScript + Tailwind app ("Unknown University", an online learning platform). There is one service.

Standard commands live in `package.json` (`dev`, `build`, `start`, `lint`). Run with `npm run dev` (serves on `http://localhost:3000`).

Non-obvious caveats:
- Supabase is optional. `lib/supabase.ts` falls back to a valid placeholder URL when `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` are unset, so the app builds and runs without any env vars. Most pages render from local sample data (`lib/sample-data.ts`, `lib/campus-data.ts`).
- Do NOT `cp .env.example .env.local` unless you replace the placeholder values with real Supabase credentials. The example file's `your_supabase_url` is not a valid URL and breaks `next build` (the `/login` and `/register` pages prerender and call `createClient` with the invalid value). With no `.env.local`, the build/dev work fine.
- Auth (login/register) requires real Supabase credentials; without them, sign-up/sign-in return a "Supabase is not configured" error. For functional testing without Supabase, use pages backed by sample data (e.g. `/ai-room` chat, `/dashboard`, `/programs`, `/community`).
