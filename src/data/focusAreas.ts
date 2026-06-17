import type { LocalizedText } from "./site";

export type FocusIconKey = "humanoid" | "trophy" | "cpu" | "brain" | "wave" | "gear";

export type FocusArea = {
  id: string;
  iconKey: FocusIconKey;
  title: LocalizedText;
  body: LocalizedText;
  tags?: LocalizedText[];
};

// Focus / activity areas, taken directly from the founding documents.
export const focusAreas: FocusArea[] = [
  {
    id: "humanoid-design",
    iconKey: "humanoid",
    title: {
      tr: "İnsansı Robot Tasarımı",
      en: "Humanoid Robot Design",
    },
    body: {
      tr: "İnsansı robot platformlarının mekanik ve sistem düzeyinde tasarımı ve geliştirilmesi.",
      en: "Designing and developing humanoid robot platforms at the mechanical and system level.",
    },
  },
  {
    id: "competitions",
    iconKey: "trophy",
    title: {
      tr: "Uluslararası Yarışmalar",
      en: "International Competitions",
    },
    body: {
      tr: "RoboCup Humanoid League, HuroCup ve benzeri uluslararası robotik yarışmalarına katılım.",
      en: "Competing in RoboCup Humanoid League, HuroCup and similar international robotics competitions.",
    },
    tags: [
      { tr: "RoboCup", en: "RoboCup" },
      { tr: "HuroCup", en: "HuroCup" },
    ],
  },
  {
    id: "ai-control",
    iconKey: "cpu",
    title: {
      tr: "Yapay Zeka Tabanlı Kontrol",
      en: "AI-Based Control",
    },
    body: {
      tr: "Yapay zeka destekli robot kontrol sistemleri ve karar mekanizmalarının geliştirilmesi.",
      en: "Developing AI-supported robot control systems and decision-making mechanisms.",
    },
  },
  {
    id: "ml-research",
    iconKey: "brain",
    title: {
      tr: "RL · CV · NLP Araştırmaları",
      en: "RL · CV · NLP Research",
    },
    body: {
      tr: "Pekiştirmeli öğrenme, bilgisayar görüsü ve doğal dil işleme üzerine araştırmalar.",
      en: "Research in reinforcement learning, computer vision and natural language processing.",
    },
  },
  {
    id: "hri-bci",
    iconKey: "wave",
    title: {
      tr: "İnsan-Robot Etkileşimi & BCI",
      en: "Human–Robot Interaction & BCI",
    },
    body: {
      tr: "İnsan-robot etkileşimi ve EEG tabanlı beyin-bilgisayar arayüzü (BCI) araştırmaları.",
      en: "Human–robot interaction and EEG-based brain–computer interface (BCI) research.",
    },
  },
  {
    id: "mechanical-control",
    iconKey: "gear",
    title: {
      tr: "Mekanik Tasarım & Kontrol",
      en: "Mechanical Design & Control",
    },
    body: {
      tr: "Robotik mekanik tasarım, yürüme (locomotion), denge kontrolü ve kontrol sistemleri.",
      en: "Robotic mechanical design, locomotion, balance control and control systems.",
    },
  },
];
