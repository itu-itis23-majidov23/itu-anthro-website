// English content dictionary. This file is the SINGLE SOURCE OF TRUTH for the
// shape of the site's copy: `Dictionary = typeof en`. `tr.ts` must satisfy the
// same shape, so a missing translation becomes a TypeScript error.

export const en = {
  brand: {
    name: "İTÜ AnthRo",
    full: "Anthropomorphic Robotics",
    tagline: "An İTÜ student team researching and developing humanoid robot technologies.",
  },

  nav: {
    home: "Home",
    about: "About",
    teams: "Teams",
    projects: "Projects",
    focus: "Focus Areas",
    roadmap: "Roadmap",
    join: "Join Us",
    support: "Support",
    contact: "Contact",
  },

  ui: {
    joinUs: "Join Us",
    learnMore: "Learn more",
    viewAll: "View all",
    contactUs: "Contact us",
    exploreFocus: "Explore focus areas",
    viewTeams: "View teams",
    viewProjects: "View projects",
    viewRoadmap: "View roadmap",
    active: "Active",
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuLabel: "Main menu",
    toggleLang: "Switch language",
    comingSoon: "Coming soon",
    imageComingSoon: "Image coming soon",
    homeLabel: "Home",
  },

  footer: {
    affiliation: "Istanbul Technical University",
    faculty: "Faculty of Computer & Informatics (BBF)",
    campus: "Ayazağa Campus, İstanbul",
    exploreLabel: "Explore",
    contactLabel: "Contact",
    rights: "All rights reserved.",
    madeNote: "İTÜ AnthRo — student project team",
  },

  home: {
    meta: {
      title: "Humanoid Robotics Team",
      description:
        "İTÜ AnthRo is an Istanbul Technical University student team researching and developing humanoid robot technologies, AI, and control systems.",
    },
    hero: {
      eyebrow: "Istanbul Technical University · Student Project Team",
      title: "İTÜ AnthRo",
      titleAccent: "Anthropomorphic Robotics",
      subtitle:
        "We design, control, and bring intelligence to humanoid robots — an İTÜ student team uniting advanced robotics and artificial intelligence in one engineering discipline.",
      badge: "Founded in 2026",
    },
    stats: [
      { value: "2026", label: "Founded" },
      { value: "4", label: "Coordinatorships" },
      { value: "3", label: "Active projects" },
      { value: "İTÜ", label: "EEF · BBF, Ayazağa" },
    ],
    mission: {
      heading: "Why we exist",
      body: "İTÜ AnthRo was founded to develop students' engineering skills in advanced robotics, to conduct research and development on humanoid robot technologies, and to represent our university in national and international robotics competitions.",
    },
    explore: {
      heading: "Explore",
      about: "Our team, mission and vision.",
    },
    focus: {
      heading: "What we work on",
      subheading:
        "From mechanical design to artificial intelligence — every discipline that brings a humanoid robot to life.",
    },
    teams: {
      heading: "Our teams",
      subheading: "Four coordinatorships, building together.",
    },
    projects: {
      heading: "Active projects",
      subheading: "Three projects we are building right now.",
    },
    roadmap: {
      heading: "Our roadmap",
      subheading: "From our first soccer-playing humanoid to real-world applications.",
    },
    joinBand: {
      heading: "Build the future of robotics with us",
      body: "We welcome every İTÜ student passionate about robotics, artificial intelligence, electronics, or mechanical design.",
    },
  },

  about: {
    meta: {
      title: "About",
      description:
        "İTÜ AnthRo is an interdisciplinary humanoid-robotics student team founded in 2026 at Istanbul Technical University.",
    },
    eyebrow: "About us",
    title: "Humanoid robotics at İTÜ",
    lead: "İTÜ AnthRo (Anthropomorphic Robotics) is an interdisciplinary student project team founded in 2026 at Istanbul Technical University to carry out research and development on humanoid robot technologies.",
    identity: {
      heading: "Team identity",
      body: "AnthRo brings together students from electrical, computer, mechanical and aerospace engineering around a single goal: designing and building humanoid robots. The team was founded under İTÜ's Faculty of Electrical & Electronics Engineering (EEF) and carries out its work at the Faculty of Computer & Informatics (BBF) on the Ayazağa Campus, as an interdisciplinary research and engineering environment.",
    },
    mission: {
      heading: "Our mission",
      body: "To develop students' engineering competence in advanced robotics technologies, to conduct research and development on humanoid robots, and to represent our university in national and international robotics competitions.",
    },
    vision: {
      heading: "Our vision",
      body: "In the long term, we aim to develop more capable, human-scale humanoid platforms and technologies that can be used in real-world scenarios — industrial environments, logistics operations, construction sites and disaster response — while contributing to academic research and scientific output at the university.",
    },
    why: {
      heading: "Why humanoid robots?",
      body: "Humanoid robots are among the most demanding challenges in engineering: they combine mechanical design, control theory, embedded systems, computer vision and artificial intelligence into one moving system. Building them is one of the best ways for students to gain deep, applied experience across all of these disciplines at once.",
    },
    peopleHeading: "Team leadership",
    captainRole: "Team Captain",
    coCaptainRole: "Team Captain",
    advisorRole: "Academic Advisor",
  },

  teams: {
    meta: {
      title: "Teams",
      description:
        "İTÜ AnthRo is organized into four coordinatorships — Control & Systems, Mechanical, Artificial Intelligence and Organization — each with several teams.",
    },
    eyebrow: "Teams",
    title: "Four coordinatorships, one team",
    lead: "İTÜ AnthRo is organized into four coordinatorships, each containing several teams. Together they cover every layer of building a humanoid robot — from mechanics and electronics to AI and organization.",
    subUnitsLabel: "Teams",
  },

  projects: {
    meta: {
      title: "Projects",
      description:
        "İTÜ AnthRo's active projects: a full-stack humanoid built end to end, a software orchestration layer, and quick experimental side projects.",
    },
    eyebrow: "Projects",
    title: "What we are building",
    lead: "As a young team we already have three active projects — from a humanoid built entirely in-house to fast, experimental side builds.",
    statusActive: "Active",
  },

  focus: {
    meta: {
      title: "Focus Areas",
      description:
        "From humanoid mechanical design and locomotion to reinforcement learning, computer vision, NLP and EEG-based brain–computer interfaces.",
    },
    eyebrow: "Focus Areas",
    title: "End-to-end humanoid robotics",
    lead: "Our work spans the full stack of a humanoid robot — from mechanical design and control to artificial intelligence and human–robot interaction.",
  },

  roadmap: {
    meta: {
      title: "Roadmap",
      description:
        "İTÜ AnthRo's short, medium and long-term goals — from a soccer-playing humanoid platform to human-scale robots for real-world applications.",
    },
    eyebrow: "Roadmap",
    title: "Our goals, from short to long term",
    lead: "AnthRo works toward short-, medium- and long-term plans that grow the team's capability step by step.",
    sustainabilityTitle: "Sustainability & funding",
    sustainabilityBody:
      "The team's funding will come from corporate sponsorships, industry collaborations, university project support, research funds such as TÜBİTAK, and national/international competition support programmes. Members will also be encouraged to apply to İTÜ's LÖKAP-T and LÖKAP-A programmes and national support programmes such as TÜBİTAK 2209-A.",
  },

  join: {
    meta: {
      title: "Join Us",
      description:
        "İTÜ AnthRo is recruiting students passionate about robotics, AI, electronics and mechanical design from across İTÜ's engineering faculties.",
    },
    eyebrow: "Join Us",
    title: "Let's build the robots of the future, together",
    lead: "İTÜ AnthRo is a new team — which means there is room to shape it. We are looking for curious, committed students who want hands-on experience in robotics and artificial intelligence.",
    lookingForTitle: "Who we're looking for",
    lookingForBody:
      "We welcome students from across İTÜ's engineering faculties — whether you write code, design mechanisms, build circuits, train models, or organize and find resources, there is a place for you.",
    departmentsLabel: "Target faculties & departments",
    whatYouDoTitle: "What you'll do",
    whatYouDoBody:
      "Depending on your interests, you'll join one of our teams and gain applied experience in mechanical design, control systems, embedded systems, computer vision, machine learning or business development — while working toward international competitions.",
    howToApplyTitle: "How to apply",
    howToApplyBody:
      "Fill out our application form and tell us which area you'd like to work in. Got questions? Reach us by email anytime.",
    applyButton: "Apply by email",
    applyFormButton: "Fill out the application form",
    orEmail: "or email us",
    formComingSoon: "Application form coming soon",
  },

  support: {
    meta: {
      title: "Support",
      description:
        "Support İTÜ AnthRo through sponsorship, industry collaboration, or in-kind contributions and help build humanoid robotics at İTÜ.",
    },
    eyebrow: "Support",
    title: "Support us",
    lead: "Building humanoid robots takes hardware, tools and partners. Your support helps İTÜ students gain world-class engineering experience.",
    whyTitle: "Why support us?",
    whyBody:
      "As an early-stage team, your contribution has outsized impact — it directly enables our first robot, our first competitions, and a sustainable engineering culture at İTÜ. In return, partners gain visibility among talented students and a connection to advanced robotics research.",
    waysTitle: "Ways to support",
    ways: [
      {
        title: "Corporate sponsorship",
        body: "Financial support to fund components, manufacturing and competition participation, with brand visibility on our platforms.",
      },
      {
        title: "Industry collaboration",
        body: "Joint R&D, mentorship and technical guidance, and university–industry projects.",
      },
      {
        title: "In-kind support",
        body: "Components, materials, manufacturing, lab space or equipment that help us build and test.",
      },
    ],
    sponsorsTitle: "Our sponsors",
    sponsorsNote:
      "Our sponsors will appear here soon. Would you like to be among our first supporters?",
    ctaTitle: "Let's build together",
    ctaBody: "Get in touch to discuss how we can partner.",
  },

  contact: {
    meta: {
      title: "Contact",
      description:
        "Get in touch with İTÜ AnthRo — Istanbul Technical University's humanoid robotics student team.",
    },
    eyebrow: "Contact",
    title: "Get in touch",
    lead: "Questions, partnership ideas, or interested in joining? We'd love to hear from you.",
    emailLabel: "Email",
    locationLabel: "Location",
    locationValue:
      "İTÜ Faculty of Computer & Informatics (BBF), Ayazağa Campus, Sarıyer / İstanbul",
    socialLabel: "Social media",
    socialNote: "Our social media accounts are coming soon.",
  },

  notFound: {
    code: "404",
    title: "Page not found",
    body: "The page you're looking for may have moved or never existed.",
    button: "Back to home",
  },
};

// Without `as const`, the literals above are already inferred at their widened
// types (string, string[], etc.). So `typeof en` is exactly the structural
// shape every locale must provide — `tr.ts` is checked against it.
export type Dictionary = typeof en;
