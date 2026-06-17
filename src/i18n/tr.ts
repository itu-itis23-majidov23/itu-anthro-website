// Türkçe içerik sözlüğü. `en.ts`'deki `Dictionary` şekline birebir uymalıdır;
// eksik bir çeviri TypeScript hatası verir (iki dil senkron kalır).

import type { Dictionary } from "./en";

export const tr: Dictionary = {
  brand: {
    name: "İTÜ AnthRo",
    full: "Anthropomorphic Robotics",
    tagline:
      "İnsansı robot teknolojileri üzerine araştırma ve geliştirme yürüten İTÜ öğrenci takımı.",
  },

  nav: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    teams: "Ekipler",
    projects: "Projeler",
    focus: "Çalışma Alanları",
    roadmap: "Yol Haritası",
    join: "Bize Katıl",
    support: "Destek",
    contact: "İletişim",
  },

  ui: {
    joinUs: "Bize Katıl",
    learnMore: "Daha fazla",
    viewAll: "Tümünü gör",
    contactUs: "İletişime geç",
    exploreFocus: "Çalışma alanlarını keşfet",
    viewTeams: "Ekipleri gör",
    viewProjects: "Projeleri gör",
    viewRoadmap: "Yol haritasını gör",
    active: "Aktif",
    skipToContent: "İçeriğe geç",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    menuLabel: "Ana menü",
    toggleLang: "Dili değiştir",
    comingSoon: "Yakında",
    imageComingSoon: "Görsel yakında",
    homeLabel: "Ana sayfa",
  },

  footer: {
    affiliation: "İstanbul Teknik Üniversitesi",
    faculty: "Bilgisayar ve Bilişim Fakültesi (BBF)",
    campus: "Ayazağa Kampüsü, İstanbul",
    exploreLabel: "Keşfet",
    contactLabel: "İletişim",
    rights: "Tüm hakları saklıdır.",
    madeNote: "İTÜ AnthRo — öğrenci proje takımı",
  },

  home: {
    meta: {
      title: "İnsansı Robotik Takımı",
      description:
        "İTÜ AnthRo; insansı robot teknolojileri, yapay zeka ve kontrol sistemleri üzerine araştırma ve geliştirme yürüten bir İstanbul Teknik Üniversitesi öğrenci takımıdır.",
    },
    hero: {
      eyebrow: "İstanbul Teknik Üniversitesi · Öğrenci Proje Takımı",
      title: "İTÜ AnthRo",
      titleAccent: "Anthropomorphic Robotics",
      subtitle:
        "İnsansı robotları tasarlıyor, kontrol ediyor ve onlara zeka kazandırıyoruz. İleri robotik ile yapay zekayı tek bir mühendislik disiplininde buluşturan İTÜ öğrenci takımı.",
      badge: "2026'da kuruldu",
    },
    stats: [
      { value: "2026", label: "Kuruluş yılı" },
      { value: "4", label: "Koordinatörlük" },
      { value: "3", label: "Aktif proje" },
      { value: "İTÜ", label: "EEF · BBF, Ayazağa" },
    ],
    mission: {
      heading: "Neden buradayız",
      body: "İTÜ AnthRo; öğrencilerin ileri robotik alanındaki mühendislik yetkinliklerini geliştirmek, insansı robot teknolojileri üzerine araştırma ve geliştirme yürütmek ve üniversitemizi ulusal ile uluslararası robotik yarışmalarında temsil etmek için kuruldu.",
    },
    explore: {
      heading: "Keşfet",
      about: "Takımımız, amacımız ve vizyonumuz.",
    },
    focus: {
      heading: "Çalışma alanlarımız",
      subheading:
        "Mekanik tasarımdan yapay zekaya — insansı bir robotu hayata geçiren tüm disiplinler.",
    },
    teams: {
      heading: "Ekiplerimiz",
      subheading: "Dört koordinatörlük, birlikte üretiyor.",
    },
    projects: {
      heading: "Aktif projeler",
      subheading: "Şu anda geliştirdiğimiz üç proje.",
    },
    roadmap: {
      heading: "Yol haritamız",
      subheading: "Futbol oynayan ilk humanoid robotumuzdan gerçek dünya uygulamalarına.",
    },
    joinBand: {
      heading: "Robotiğin geleceğini birlikte inşa edelim",
      body: "Robotik, yapay zeka, elektronik veya mekanik tasarıma tutkusu olan her İTÜ'lüyü aramıza bekliyoruz.",
    },
  },

  about: {
    meta: {
      title: "Hakkımızda",
      description:
        "İTÜ AnthRo, 2026 yılında İstanbul Teknik Üniversitesi'nde kurulan disiplinler arası bir insansı robotik öğrenci takımıdır.",
    },
    eyebrow: "Hakkımızda",
    title: "İnsansı robotiğin İTÜ'deki adresi",
    lead: "İTÜ AnthRo (Anthropomorphic Robotics), insansı robot teknolojileri üzerine araştırma ve geliştirme yürütmek amacıyla 2026 yılında İstanbul Teknik Üniversitesi'nde kurulan disiplinler arası bir öğrenci proje takımıdır.",
    identity: {
      heading: "Takım kimliği",
      body: "AnthRo; elektrik, bilgisayar, makine ve uçak-uzay mühendisliği gibi farklı alanlardan öğrencileri tek bir hedef etrafında bir araya getiriyor: insansı robotlar tasarlamak ve geliştirmek. Takım, İTÜ Elektrik-Elektronik Fakültesi (EEF) bünyesinde kurulmuş olup çalışmalarını Ayazağa Kampüsü'ndeki Bilgisayar ve Bilişim Fakültesi'nde (BBF) disiplinler arası bir araştırma ve mühendislik ortamı olarak sürdürmektedir.",
    },
    mission: {
      heading: "Amacımız",
      body: "Öğrencilerin ileri robotik teknolojileri alanındaki mühendislik yetkinliklerini geliştirmek, insansı robotlar üzerine araştırma ve geliştirme çalışmaları yürütmek ve üniversitemizi ulusal ve uluslararası robotik yarışmalarında temsil etmek.",
    },
    vision: {
      heading: "Vizyonumuz",
      body: "Uzun vadede; daha yetenekli, insan boyutuna yakın insansı robot platformları ve bunların endüstriyel ortamlar, lojistik operasyonlar, inşaat sahaları ve afet müdahale senaryoları gibi gerçek dünya uygulamalarında kullanılabileceği teknolojiler geliştirmeyi, aynı zamanda üniversitedeki akademik araştırmalara ve bilimsel çıktılara katkı sağlamayı hedefliyoruz.",
    },
    why: {
      heading: "Neden insansı robotlar?",
      body: "İnsansı robotlar, mühendisliğin en zorlu problemlerinden biridir: mekanik tasarımı, kontrol teorisini, gömülü sistemleri, bilgisayar görüsünü ve yapay zekayı hareket eden tek bir sistemde birleştirir. Onları üretmek, öğrencilerin tüm bu disiplinlerde aynı anda derin ve uygulamalı deneyim kazanmasının en iyi yollarından biridir.",
    },
    peopleHeading: "Takım yönetimi",
    captainRole: "Takım Kaptanı",
    coCaptainRole: "Takım Kaptanı",
    advisorRole: "Akademik Danışman",
  },

  teams: {
    meta: {
      title: "Ekipler",
      description:
        "İTÜ AnthRo dört koordinatörlükten oluşur: Kontrol ve Sistem, Mekanik, Yapay Zeka ve Organizasyon — her biri kendi ekiplerini barındırır.",
    },
    eyebrow: "Ekipler",
    title: "Dört koordinatörlük, tek takım",
    lead: "İTÜ AnthRo, her biri birden fazla ekibi barındıran dört koordinatörlük altında örgütlenir. Birlikte, insansı bir robotu üretmenin her katmanını kapsarlar — mekanik ve elektronikten yapay zekaya ve organizasyona kadar.",
    subUnitsLabel: "Ekipler",
  },

  projects: {
    meta: {
      title: "Projeler",
      description:
        "İTÜ AnthRo'nun aktif projeleri: baştan sona kendi ürettiğimiz bir humanoid, yazılım odaklı bir orkestrasyon katmanı ve hızlı deneysel yan projeler.",
    },
    eyebrow: "Projeler",
    title: "Neler geliştiriyoruz?",
    lead: "Genç bir takım olmamıza rağmen üç aktif projemiz var — tamamen kendi imkânlarımızla ürettiğimiz bir humanoidden hızlı, deneysel yan projelere.",
    statusActive: "Aktif",
  },

  focus: {
    meta: {
      title: "Çalışma Alanları",
      description:
        "İnsansı robot mekanik tasarımı ve yürüme algoritmalarından pekiştirmeli öğrenmeye, bilgisayar görüsüne, doğal dil işlemeye ve EEG tabanlı beyin-bilgisayar arayüzlerine.",
    },
    eyebrow: "Çalışma Alanları",
    title: "Uçtan uca insansı robotik",
    lead: "Çalışmalarımız, bir insansı robotun tüm katmanlarını kapsar — mekanik tasarım ve kontrolden yapay zekaya ve insan-robot etkileşimine.",
  },

  roadmap: {
    meta: {
      title: "Yol Haritası",
      description:
        "İTÜ AnthRo'nun kısa, orta ve uzun vadeli hedefleri — futbol oynayan bir humanoid robot platformundan gerçek dünya uygulamaları için insan boyutunda robotlara.",
    },
    eyebrow: "Yol Haritası",
    title: "Kısa vadeden uzun vadeye hedeflerimiz",
    lead: "AnthRo; takımın yetkinliğini adım adım büyüten kısa, orta ve uzun vadeli planlar doğrultusunda çalışır.",
    sustainabilityTitle: "Sürdürülebilirlik ve kaynaklar",
    sustainabilityBody:
      "Takımın gelir kaynakları; kurumsal sponsorluklar, sanayi iş birlikleri, üniversite proje destek programları, TÜBİTAK ve benzeri araştırma fonları ile ulusal ve uluslararası yarışma destek programlarından sağlanacaktır. Ayrıca üyeler, İTÜ bünyesindeki LÖKAP-T ve LÖKAP-A programlarına ve TÜBİTAK 2209-A gibi ulusal destek programlarına başvurmaya teşvik edilecektir.",
  },

  join: {
    meta: {
      title: "Bize Katıl",
      description:
        "İTÜ AnthRo; robotik, yapay zeka, elektronik ve mekanik tasarıma tutkulu öğrencileri İTÜ'nün mühendislik fakültelerinden aramıza bekliyor.",
    },
    eyebrow: "Bize Katıl",
    title: "Geleceğin robotlarını birlikte üretelim",
    lead: "İTÜ AnthRo yeni bir takım — bu da onu şekillendirecek alan olduğu anlamına geliyor. Robotik ve yapay zekada uygulamalı deneyim kazanmak isteyen meraklı ve istekli öğrenciler arıyoruz.",
    lookingForTitle: "Kimleri arıyoruz?",
    lookingForBody:
      "İTÜ'nün mühendislik fakültelerinden gelen öğrencileri aramıza bekliyoruz — kod yazsan, mekanizma tasarlasan, devre kursan, model eğitsen ya da organizasyon yapıp kaynak bulsan da sana uygun bir yer var.",
    departmentsLabel: "Hedef fakülte ve bölümler",
    whatYouDoTitle: "Neler yapacaksın?",
    whatYouDoBody:
      "İlgi alanına göre ekiplerimizden birine katılacak; mekanik tasarım, kontrol sistemleri, gömülü sistemler, bilgisayar görüsü, makine öğrenmesi ya da iş geliştirme alanlarında uygulamalı deneyim kazanırken uluslararası yarışmalara hazırlanacaksın.",
    howToApplyTitle: "Nasıl başvurulur?",
    howToApplyBody:
      "Başvuru formumuzu doldur ve hangi alanda çalışmak istediğini bize anlat. Soruların mı var? Her zaman e-posta ile ulaşabilirsin.",
    applyButton: "E-posta ile başvur",
    applyFormButton: "Başvuru formunu doldur",
    orEmail: "ya da e-posta gönder",
    formComingSoon: "Başvuru formu yakında",
  },

  support: {
    meta: {
      title: "Destek",
      description:
        "İTÜ AnthRo'ya sponsorluk, sanayi iş birliği veya ayni destekle katkı sağlayın ve İTÜ'de insansı robotiğin gelişmesine destek olun.",
    },
    eyebrow: "Destek",
    title: "Bize destek olun",
    lead: "İnsansı robot üretmek; donanım, ekipman ve iş birlikleri gerektirir. Desteğiniz, İTÜ'lü öğrencilerin dünya standartlarında mühendislik deneyimi kazanmasına yardımcı olur.",
    whyTitle: "Neden destek olmalı?",
    whyBody:
      "Yeni kurulan bir takım olarak katkınızın etkisi çok büyük — ilk robotumuzu, ilk yarışmalarımızı ve İTÜ'de sürdürülebilir bir mühendislik kültürünü doğrudan mümkün kılar. Karşılığında destekçilerimiz, yetenekli öğrenciler arasında görünürlük ve ileri robotik araştırmalarıyla bağlantı kazanır.",
    waysTitle: "Destek yolları",
    ways: [
      {
        title: "Kurumsal sponsorluk",
        body: "Bileşen, üretim ve yarışma katılımını finanse eden, platformlarımızda marka görünürlüğü sağlayan finansal destek.",
      },
      {
        title: "Sanayi iş birliği",
        body: "Ortak Ar-Ge, mentorluk ve teknik danışmanlık ile üniversite-sanayi projeleri.",
      },
      {
        title: "Ayni destek",
        body: "Üretmemize ve test etmemize yardımcı olan bileşen, malzeme, üretim, laboratuvar alanı veya ekipman.",
      },
    ],
    sponsorsTitle: "Sponsorlarımız",
    sponsorsNote:
      "Sponsorlarımız yakında burada yer alacak. İlk destekçilerimiz arasında olmak ister misiniz?",
    ctaTitle: "Birlikte üretelim",
    ctaBody: "Nasıl iş birliği yapabileceğimizi konuşmak için bizimle iletişime geçin.",
  },

  contact: {
    meta: {
      title: "İletişim",
      description:
        "İstanbul Teknik Üniversitesi insansı robotik öğrenci takımı İTÜ AnthRo ile iletişime geçin.",
    },
    eyebrow: "İletişim",
    title: "Bize ulaşın",
    lead: "Sorularınız, iş birliği fikirleriniz mi var ya da aramıza mı katılmak istiyorsunuz? Sizden haber almak isteriz.",
    emailLabel: "E-posta",
    locationLabel: "Konum",
    locationValue: "İTÜ Bilgisayar ve Bilişim Fakültesi (BBF), Ayazağa Kampüsü, Sarıyer / İstanbul",
    socialLabel: "Sosyal medya",
    socialNote: "Sosyal medya hesaplarımız yakında.",
  },

  notFound: {
    code: "404",
    title: "Sayfa bulunamadı",
    body: "Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.",
    button: "Ana sayfaya dön",
  },
};
