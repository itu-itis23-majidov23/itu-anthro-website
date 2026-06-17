import type { LocalizedText } from "./site";

export type Project = {
  id: string;
  iconKey: string;
  name: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  tags: LocalizedText[];
  status: "active";
};

// Active projects. Add new ones here; the Projects page and home preview
// pick them up automatically.
export const projects: Project[] = [
  {
    id: "full-stack-humanoid",
    iconKey: "humanoid",
    name: { tr: "Full-Stack Humanoid", en: "Full-Stack Humanoid" },
    tagline: {
      tr: "Baştan sona kendi humanoid robotumuz",
      en: "Our own humanoid, built end to end",
    },
    description: {
      tr: "Mekanikten elektroniğe, elektronikten yazılıma kadar bir insansı robotun her parçasını kendimiz tasarlayıp ürettiğimiz amiral gemisi projemiz.",
      en: "Our flagship project: designing and building every part of a humanoid robot ourselves — from mechanics to electronics to software.",
    },
    tags: [
      { tr: "Mekanik", en: "Mechanical" },
      { tr: "Elektronik", en: "Electronics" },
      { tr: "Yazılım", en: "Software" },
    ],
    status: "active",
  },
  {
    id: "humanoid-orchestration",
    iconKey: "cpu",
    name: { tr: "Humanoid Orchestration", en: "Humanoid Orchestration" },
    tagline: {
      tr: "Yazılım odaklı orkestrasyon katmanı",
      en: "A software-focused orchestration layer",
    },
    description: {
      tr: "İnsansı robotların davranışlarını, görevlerini ve alt sistemlerini koordine eden yazılım odaklı bir orkestrasyon projesi.",
      en: "A software-focused project that orchestrates the behaviors, tasks and subsystems of humanoid robots.",
    },
    tags: [
      { tr: "Yazılım", en: "Software" },
      { tr: "Yapay Zeka", en: "AI" },
      { tr: "Sistem", en: "Systems" },
    ],
    status: "active",
  },
  {
    id: "yan-projeler",
    iconKey: "gear",
    name: { tr: "Yan Projeler", en: "Side Projects" },
    tagline: {
      tr: "Hızlı, 1-2 haftalık keşif projeleri",
      en: "Quick 1–2 week exploration projects",
    },
    description: {
      tr: "Masaüstü robot kol, küçük robot köpek gibi 1-2 hafta süren; yeni fikirleri ve üyeleri hızla denemeye olanak tanıyan küçük ölçekli projeler.",
      en: "Small-scale 1–2 week builds — a desktop robot arm, a small robot dog and more — to quickly try new ideas and onboard members.",
    },
    tags: [
      { tr: "Robot Kol", en: "Robot Arm" },
      { tr: "Robot Köpek", en: "Robot Dog" },
      { tr: "Prototip", en: "Prototype" },
    ],
    status: "active",
  },
];
