import { tr } from "./tr";
import { en, type Dictionary } from "./en";

export type Lang = "tr" | "en";

export const LANGS: Lang[] = ["tr", "en"];
export const DEFAULT_LANG: Lang = "tr";

/** Every page keyed once, with its localized slug per language. */
export type RouteKey =
  | "home"
  | "about"
  | "teams"
  | "projects"
  | "focus"
  | "roadmap"
  | "join"
  | "support"
  | "contact";

export const routes: Record<RouteKey, Record<Lang, string>> = {
  home: { tr: "/", en: "/en/" },
  about: { tr: "/hakkimizda/", en: "/en/about/" },
  teams: { tr: "/ekipler/", en: "/en/teams/" },
  projects: { tr: "/projeler/", en: "/en/projects/" },
  focus: { tr: "/calisma-alanlari/", en: "/en/focus-areas/" },
  roadmap: { tr: "/yol-haritasi/", en: "/en/roadmap/" },
  join: { tr: "/bize-katil/", en: "/en/join/" },
  support: { tr: "/destek/", en: "/en/support/" },
  contact: { tr: "/iletisim/", en: "/en/contact/" },
};

/** Order of the main navigation text links. `join` is rendered separately as a
 *  CTA button; `support` lives in the footer. */
export const NAV_ORDER: RouteKey[] = [
  "home",
  "about",
  "teams",
  "projects",
  "focus",
  "roadmap",
  "contact",
];

const dictionaries: Record<Lang, Dictionary> = { tr, en };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === "tr" ? "en" : "tr";
}

/**
 * Prepend the deploy base path (e.g. "/itu-anthro-website") to an absolute
 * app path so links work both at root and under a GitHub Pages sub-path.
 */
export function withBase(path: string): string {
  const rawBase = import.meta.env.BASE_URL || "/";
  const base = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Resolve a route key to a base-aware, localized href. */
export function localizedPath(key: RouteKey, lang: Lang): string {
  return withBase(routes[key][lang]);
}

/** Same page, other language — used by the language switcher. */
export function switchLangPath(key: RouteKey, lang: Lang): string {
  return localizedPath(key, otherLang(lang));
}

/** Full canonical/alternate URLs (absolute) for SEO. */
export function absoluteUrl(path: string, siteOrigin: string): string {
  return new URL(withBase(path), siteOrigin).href;
}

export const htmlLang: Record<Lang, string> = { tr: "tr-TR", en: "en" };
