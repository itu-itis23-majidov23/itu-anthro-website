import type { LocalizedText } from "./site";

export type IconKey = "control" | "ai" | "mechanical" | "business";

// A coordinatorship (koordinatörlük) groups several teams (ekip).
export type Team = {
  id: string;
  iconKey: IconKey;
  name: LocalizedText;
  summary: LocalizedText;
  /** Teams (ekipler) within this coordinatorship — shown as chips. */
  subUnits?: LocalizedText[];
  /** Optional photo, dropped in later at /images/teams/<id>.jpg */
  image?: string;
};

// SINGLE SOURCE OF TRUTH for the team structure.
// İTÜ AnthRo is organized into FOUR coordinatorships (koordinatörlük), each
// containing several teams (ekip). Edit here to change the public structure.
export const teams: Team[] = [
  {
    id: "kontrol-sistem",
    iconKey: "control",
    name: {
      tr: "Kontrol ve Sistem Koordinatörlüğü",
      en: "Control & Systems Coordination",
    },
    summary: {
      tr: "Robotun beyni ve sinir sistemi: kontrol algoritmaları, yazılım altyapısı ve elektronik donanım birlikte çalışır.",
      en: "The robot's brain and nervous system: control algorithms, software infrastructure and electronics working as one.",
    },
    subUnits: [
      { tr: "Kontrol", en: "Control" },
      { tr: "Yazılım", en: "Software" },
      { tr: "Elektronik", en: "Electronics" },
    ],
    image: "/images/teams/kontrol-sistem.jpg",
  },
  {
    id: "mekanik",
    iconKey: "mechanical",
    name: {
      tr: "Mekanik Koordinatörlüğü",
      en: "Mechanical Coordination",
    },
    summary: {
      tr: "Robotun bedeni: yapısal analiz, mekanik tasarım ve imalat ile iskeleti, eklemleri ve hareketi hayata geçirir.",
      en: "The robot's body: structural analysis, mechanical design and manufacturing bring the frame, joints and motion to life.",
    },
    subUnits: [
      { tr: "Yapısal Analiz", en: "Structural Analysis" },
      { tr: "Tasarım", en: "Design" },
      { tr: "İmalat", en: "Manufacturing" },
    ],
    image: "/images/teams/mekanik.jpg",
  },
  {
    id: "yapay-zeka",
    iconKey: "ai",
    name: {
      tr: "Yapay Zeka Koordinatörlüğü",
      en: "Artificial Intelligence Coordination",
    },
    summary: {
      tr: "Robotun algılaması, öğrenmesi ve etkileşimi: pekiştirmeli öğrenme, bilgisayar görüsü, NLP ve insan-robot etkileşimi.",
      en: "How the robot perceives, learns and interacts: reinforcement learning, computer vision, NLP and human–robot interaction.",
    },
    subUnits: [
      { tr: "Reinforcement Learning", en: "Reinforcement Learning" },
      { tr: "Robot-Human Interaction", en: "Robot–Human Interaction" },
      { tr: "NLP", en: "NLP" },
      { tr: "Computer Vision", en: "Computer Vision" },
    ],
    image: "/images/teams/yapay-zeka.jpg",
  },
  {
    id: "organizasyon",
    iconKey: "business",
    name: {
      tr: "Organizasyon Koordinatörlüğü",
      en: "Organization Coordination",
    },
    summary: {
      tr: "Takımın görünürlüğü ve sürdürülebilirliği: sosyal medya, etkinlikler, sponsorluk ve proje takibi.",
      en: "The team's visibility and sustainability: social media, events, sponsorship and project tracking.",
    },
    subUnits: [
      { tr: "Sosyal Medya", en: "Social Media" },
      { tr: "Etkinlik", en: "Events" },
      { tr: "Sponsorluk", en: "Sponsorship" },
      { tr: "Proje Takip", en: "Project Tracking" },
    ],
    image: "/images/teams/organizasyon.jpg",
  },
];
