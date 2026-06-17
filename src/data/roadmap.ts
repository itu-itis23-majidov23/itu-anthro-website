import type { LocalizedText } from "./site";

export type RoadmapPhase = {
  id: "short" | "mid" | "long";
  term: LocalizedText;
  title: LocalizedText;
  points: LocalizedText[];
};

// Short / medium / long-term goals, from the founding documents.
export const roadmap: RoadmapPhase[] = [
  {
    id: "short",
    term: { tr: "Kısa Vade", en: "Short term" },
    title: {
      tr: "İlk humanoid platform & ilk yarışmalar",
      en: "First humanoid platform & first competitions",
    },
    points: [
      {
        tr: "Küçük ölçekli, futbol oynayabilen bir insansı robot platformu geliştirmek.",
        en: "Build a small-scale, soccer-playing humanoid robot platform.",
      },
      {
        tr: "RoboCup Humanoid League ve HuroCup yarışmalarına katılım sağlamak.",
        en: "Enter the RoboCup Humanoid League and HuroCup competitions.",
      },
      {
        tr: "Mekanik tasarım, kontrol, gömülü sistem ve yapay zekada uygulamalı deneyim kazanmak.",
        en: "Gain applied experience in mechanical design, control, embedded systems and AI.",
      },
    ],
  },
  {
    id: "mid",
    term: { tr: "Orta Vade", en: "Medium term" },
    title: {
      tr: "Araştırma ve yetkinlik derinleşmesi",
      en: "Deepening research and capability",
    },
    points: [
      {
        tr: "Yürüme algoritmaları (locomotion), denge kontrolü ve bilgisayar görüsü üzerine araştırma.",
        en: "Research on locomotion algorithms, balance control and computer vision.",
      },
      {
        tr: "Çok ajanlı robot sistemleri ve yapay zeka tabanlı karar mekanizmaları.",
        en: "Multi-agent robot systems and AI-based decision-making.",
      },
      {
        tr: "Reinforcement Learning, Computer Vision ve NLP alanlarında derinleşme.",
        en: "Deepening work in reinforcement learning, computer vision and NLP.",
      },
      {
        tr: "İnsan-robot etkileşimi için EEG tabanlı beyin-bilgisayar arayüzü araştırmaları.",
        en: "EEG-based brain–computer interface research for human–robot interaction.",
      },
    ],
  },
  {
    id: "long",
    term: { tr: "Uzun Vade", en: "Long term" },
    title: {
      tr: "Gerçek dünya uygulamaları",
      en: "Real-world applications",
    },
    points: [
      {
        tr: "İnsan boyutuna yakın, daha gelişmiş insansı robot platformları geliştirmek.",
        en: "Develop more advanced, human-scale humanoid robot platforms.",
      },
      {
        tr: "Endüstri, lojistik, inşaat sahaları ve afet müdahale senaryolarına yönelik teknolojiler.",
        en: "Technologies for industry, logistics, construction sites and disaster response.",
      },
      {
        tr: "Akademik araştırmalara, bilimsel yayınlara ve öğrenci projelerine temel oluşturmak.",
        en: "Form a basis for academic research, scientific publications and student projects.",
      },
    ],
  },
];
