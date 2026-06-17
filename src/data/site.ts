// Central team facts + everything still unknown (isolated here so non-developers
// can fill one file later). Bilingual values use { tr, en }.

export type LocalizedText = { tr: string; en: string };

export const site = {
  name: "İTÜ AnthRo",
  fullName: "İTÜ AnthRo — Anthropomorphic Robotics",
  foundedYear: 2026,
  email: "itu.anthro@gmail.com",
  university: {
    tr: "İstanbul Teknik Üniversitesi",
    en: "Istanbul Technical University",
  },
  // Founded under EEF; based at (located in) BBF.
  foundedFaculty: {
    tr: "Elektrik-Elektronik Fakültesi (EEF)",
    en: "Faculty of Electrical & Electronics Engineering (EEF)",
  },
  faculty: {
    tr: "Bilgisayar ve Bilişim Fakültesi (BBF)",
    en: "Faculty of Computer & Informatics (BBF)",
  },
  campus: {
    tr: "Ayazağa Kampüsü, Sarıyer / İstanbul",
    en: "Ayazağa Campus, Sarıyer / İstanbul",
  },
  ituUrl: "https://www.itu.edu.tr/",
  teamsPortalUrl: "https://ogrencifaaliyetleri.itu.edu.tr/teams",

  // Application form. When null, the Join page falls back to a mailto: link.
  joinFormUrl: "https://forms.gle/WbEjU8gJLT8CBP8D9" as string | null,
} as const;

// A link is rendered only when `url` is non-null.
// TODO(content): add GitHub / YouTube URLs when available.
export type Social = { key: string; label: string; url: string | null };
export const socials: Social[] = [
  { key: "instagram", label: "Instagram", url: "https://www.instagram.com/itu.anthro/" },
  { key: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/company/itu-anthro/" },
  { key: "github", label: "GitHub", url: null },
  { key: "youtube", label: "YouTube", url: null },
];

// Only confirmed people are listed. `image` points to a file the team can drop
// in later; until then the UI shows an initials placeholder.
export type Person = {
  name: string;
  roleKey: "captainRole" | "coCaptainRole" | "advisorRole";
  image: string | null;
};
export const people: Person[] = [
  { name: "Azizagha Majidov", roleKey: "captainRole", image: "/images/teams/captain-majidov.jpg" },
  { name: "Azra Demir", roleKey: "coCaptainRole", image: "/images/teams/cocaptain-demir.jpg" },
  {
    name: "Prof. Dr. Hakan Temeltaş",
    roleKey: "advisorRole",
    image: "/images/teams/advisor-temeltas.jpg",
  },
];

// Recruitment targets (from the founding documents).
export const targetFaculties: LocalizedText[] = [
  { tr: "Elektrik-Elektronik Fakültesi", en: "Faculty of Electrical & Electronics Engineering" },
  { tr: "Bilgisayar ve Bilişim Fakültesi", en: "Faculty of Computer & Informatics Engineering" },
  { tr: "Makina Fakültesi", en: "Faculty of Mechanical Engineering" },
  { tr: "Uçak ve Uzay Bilimleri Fakültesi", en: "Faculty of Aeronautics & Astronautics" },
];
export const targetDepartments: LocalizedText[] = [
  { tr: "Kontrol ve Otomasyon Mühendisliği", en: "Control & Automation Engineering" },
  { tr: "Elektronik ve Haberleşme Mühendisliği", en: "Electronics & Communication Engineering" },
  { tr: "Bilgisayar Mühendisliği", en: "Computer Engineering" },
  { tr: "Mekatronik Mühendisliği", en: "Mechatronics Engineering" },
  { tr: "Makine Mühendisliği", en: "Mechanical Engineering" },
];

// Asset paths (relative to /public). Components prepend the deploy base.
// Drop real files at these exact paths to replace the placeholders.
export const assets = {
  logo: "/brand/logo.png",
  logoMark: "/brand/logo-mark.svg",
  faviconIco: "/favicon.ico",
  faviconPng32: "/brand/favicon-32.png",
  faviconPng16: "/brand/favicon-16.png",
  appleTouchIcon: "/brand/apple-touch-icon.png",
  ogDefault: "/images/og/og-default.png",
  heroTeam: "/images/hero/hero-team.jpg",
} as const;
