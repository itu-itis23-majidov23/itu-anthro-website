# İTÜ AnthRo — Website

Official website for **İTÜ AnthRo (Anthropomorphic Robotics)** — a humanoid-robotics
R&D student project team at Istanbul Technical University (İstanbul Teknik Üniversitesi),
founded in 2026.

İstanbul Teknik Üniversitesi insansı robotik öğrenci proje takımı **İTÜ AnthRo**'nun
resmi web sitesi.

## Tech stack

- [Astro](https://astro.build) (static output) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`)
- Self-hosted fonts: **Sora** (display) + **Inter** (body) via `@fontsource-variable`
- Bilingual: **Turkish** (default, at `/`) + **English** (at `/en/`)

## Develop

```bash
nvm use          # Node 20 (see .nvmrc)
npm install
npm run dev      # http://localhost:4321
```

| Command           | Action                               |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Build the static site to `./dist`    |
| `npm run preview` | Preview the production build locally |
| `npm run check`   | Type-check (`astro check`)           |
| `npm run format`  | Format with Prettier                 |

## Project structure

```
src/
  pages/            TR routes at root, EN routes under /en/ (thin wrappers)
  components/
    pages/          One lang-parameterized body component per page
    ...             Reusable UI (Header, Footer, Hero, cards, ...)
  layouts/          BaseLayout, PageLayout
  i18n/             utils (routing) + tr.ts / en.ts content dictionaries
  data/             site.ts, teams.ts, projects.ts, focusAreas.ts, roadmap.ts
  styles/global.css Tailwind import + İTÜ brand tokens (@theme)
public/
  brand/            logo / favicon placeholders (replaceable)
  images/           drop real photos here (see public/images/README.md)
```

## Editing content

- **Text** (both languages): `src/i18n/tr.ts` and `src/i18n/en.ts`. They share a
  type, so a missing translation is a compile error.
- **Teams / projects / focus areas / roadmap**: the typed arrays in
  `src/data/*.ts` (`teams.ts`, `projects.ts`, `focusAreas.ts`, `roadmap.ts`) —
  each item carries `{ tr, en }`.
- **Team facts, email, socials, application-form URL**: `src/data/site.ts`
  (look for `TODO` markers — socials and the join-form URL are stubbed).
- **Logo & photos**: drop real files into `public/brand/` and `public/images/`
  (see the README in each folder for exact file names).

> **Team structure:** İTÜ AnthRo is organized into **four coordinatorships**
> (Control & Systems, Mechanical, Artificial Intelligence, Organization), each
> containing several teams. The single source of truth is `src/data/teams.ts`.
>
> **Affiliation:** Founded under the Faculty of Electrical & Electronics
> Engineering (EEF); based at the Faculty of Computer & Informatics (BBF),
> Ayazağa Campus.

## Deploy (GitHub Pages + custom domain)

Pushing to `main` triggers `.github/workflows/deploy.yml` (Astro → Pages).
One-time setup: **Repo → Settings → Pages → Source = "GitHub Actions"**.

The site is served from the custom domain **`labsanthro.com`** (root path):

- `astro.config.mjs` → `site: "https://labsanthro.com"`, `base: "/"`.
- `public/CNAME` contains `labsanthro.com` (published to the site root so GitHub
  Pages keeps the custom domain on every deploy).

### Connecting the domain (one-time)

1. **GitHub:** Repo → Settings → Pages → **Custom domain** = `labsanthro.com` → Save,
   then tick **Enforce HTTPS** (after DNS propagates).
2. **DNS at your registrar** for `labsanthro.com`:
   - Apex `@` → four **A** records: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - (optional IPv6) `@` → **AAAA**: `2606:50c0:8000::153`, `2606:50c0:8001::153`,
     `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `www` → **CNAME** → `itu-itis23-majidov23.github.io.`
3. DNS can take minutes–hours to propagate. Verify with
   `dig labsanthro.com +short` (should show the GitHub IPs).

> Internal links go through `localizedPath()`, so switching back to the
> `github.io` project URL is just a two-line change (`base` + `site`).
