import type { Lang } from "./content"

type Dict = {
  nav: { home: string; about: string; projects: string; services: string; contact: string }
  hero: {
    availability: string
    role: string
    tagline: string
    talk: string
    viewProjects: string
    downloadCv: string
    scroll: string
  }
  about: {
    kicker: string
    title: string
    p1: string
    p2: string
    journey: string
    financeStep: string
    engineeringStep: string
    fintechStep: string
    philosophy: string
    philosophyText: string
    learn: string
    test: string
    build: string
    viewCerts: string
    viewDistinctions: string
    specialties: string
    ghezoTitle: string
    ghezoFounded: string
    ghezoText: string
    ghezoStat: string
  }
  skills: { kicker: string; title: string; subtitle: string }
  projects: {
    kicker: string
    title: string
    subtitle: string
    live: string
    archived: string
    all: string
    viewCase: string
    visit: string
    why: string
    problem: string
    vision: string
    solution: string
    tech: string
    status: string
    close: string
  }
  services: { kicker: string; title: string; subtitle: string }
  contact: {
    kicker: string
    title: string
    subtitle: string
    talk: string
    downloadCv: string
    phone: string
    email: string
  }
  modals: {
    certsTitle: string
    certsSubtitle: string
    distinctionsTitle: string
    distinctionsSubtitle: string
    institution: string
  }
  footer: { rights: string; built: string }
  specialtiesList: string[]
}

export const dictionary: Record<Lang, Dict> = {
  fr: {
    nav: { home: "Accueil", about: "À propos", projects: "Projets", services: "Services", contact: "Contact" },
    hero: {
      availability: "Disponible pour de nouveaux projets",
      role: "Software Engineer",
      tagline:
        "Je construis des solutions technologiques concrètes, avec une spécialisation en fintech, blockchain et systèmes logiciels.",
      talk: "Discutons",
      viewProjects: "Voir mes projets",
      downloadCv: "Télécharger mon CV",
      scroll: "Défiler",
    },
    about: {
      kicker: "À propos",
      title: "De la finance à l'ingénierie logicielle",
      p1: "Diplômé en finance et comptabilité, je suis passionné par la technologie et la résolution de problèmes. Mon objectif est d'utiliser la technologie pour résoudre des problèmes concrets, avec une approche orientée solution.",
      p2: "Mon quotidien consiste à apprendre, tester et construire. Mon parcours financier est un véritable atout pour comprendre les problématiques métier de la fintech.",
      journey: "Le parcours",
      financeStep: "Finance & Comptabilité",
      engineeringStep: "Software Engineering",
      fintechStep: "Fintech & Blockchain",
      philosophy: "Philosophie",
      philosophyText: "Apprendre, expérimenter et transformer les idées en solutions concrètes.",
      learn: "Apprendre",
      test: "Tester",
      build: "Construire",
      viewCerts: "Voir les certifications",
      viewDistinctions: "Voir les distinctions",
      specialties: "Spécialités",
      ghezoTitle: "Ghezo Hub",
      ghezoFounded: "Projet communautaire · fondé en 2023",
      ghezoText:
        "Former et sensibiliser les jeunes aux métiers du numérique, aux opportunités qu'il offre et aux risques liés au digital.",
      ghezoStat: "jeunes déjà formés",
    },
    skills: {
      kicker: "Compétences",
      title: "Une stack pensée pour la fintech",
      subtitle: "Des technologies éprouvées, choisies pour résoudre des problèmes réels.",
    },
    projects: {
      kicker: "Projets",
      title: "Projets sélectionnés",
      subtitle: "Des produits fintech, blockchain et logiciels métier, du prototype à la production.",
      live: "En ligne",
      archived: "Archivé",
      all: "Tous",
      viewCase: "Voir l'étude",
      visit: "Visiter le projet",
      why: "Pourquoi ce projet",
      problem: "Problème identifié",
      vision: "Vision",
      solution: "Solution",
      tech: "Technologies",
      status: "Statut",
      close: "Fermer",
    },
    services: {
      kicker: "Services",
      title: "Comment je peux aider",
      subtitle: "De l'architecture au produit livré, je couvre l'ensemble du cycle.",
    },
    contact: {
      kicker: "Contact",
      title: "Envie de construire quelque chose d'utile ensemble ?",
      subtitle: "Un projet, une idée ou un produit à faire grandir ? Parlons-en.",
      talk: "Discutons",
      downloadCv: "Télécharger mon CV",
      phone: "Téléphone",
      email: "Email",
    },
    modals: {
      certsTitle: "Certifications",
      certsSubtitle: "Formations et certifications obtenues.",
      distinctionsTitle: "Distinctions",
      distinctionsSubtitle: "Reconnaissances et sélections.",
      institution: "Institution",
    },
    footer: { rights: "Tous droits réservés.", built: "Conçu & développé par" },
    specialtiesList: [
      "Fintech",
      "Microservices",
      "Mobile Money",
      "Crypto & Blockchain",
      "Automatisation",
      "Développement logiciel",
      "Solutions sur mesure",
    ],
  },
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", services: "Services", contact: "Contact" },
    hero: {
      availability: "Available for new projects",
      role: "Software Engineer",
      tagline:
        "I build concrete technology solutions, with a focus on fintech, blockchain and software systems.",
      talk: "Let's talk",
      viewProjects: "View my projects",
      downloadCv: "Download my CV",
      scroll: "Scroll",
    },
    about: {
      kicker: "About",
      title: "From finance to software engineering",
      p1: "With a degree in finance and accounting, I'm passionate about technology and problem solving. My goal is to use technology to solve real problems, with a solution-oriented approach.",
      p2: "My days are about learning, testing and building. My finance background is a real asset for understanding the business challenges of fintech.",
      journey: "The journey",
      financeStep: "Finance & Accounting",
      engineeringStep: "Software Engineering",
      fintechStep: "Fintech & Blockchain",
      philosophy: "Philosophy",
      philosophyText: "Learn, experiment, and turn ideas into concrete solutions.",
      learn: "Learn",
      test: "Test",
      build: "Build",
      viewCerts: "View certifications",
      viewDistinctions: "View distinctions",
      specialties: "Specialties",
      ghezoTitle: "Ghezo Hub",
      ghezoFounded: "Community project · founded in 2023",
      ghezoText:
        "Training and raising awareness among young people about digital careers, the opportunities they offer, and the risks of the digital world.",
      ghezoStat: "young people trained",
    },
    skills: {
      kicker: "Skills",
      title: "A stack built for fintech",
      subtitle: "Battle-tested technologies, chosen to solve real problems.",
    },
    projects: {
      kicker: "Projects",
      title: "Selected work",
      subtitle: "Fintech, blockchain and business software products, from prototype to production.",
      live: "Live",
      archived: "Archived",
      all: "All",
      viewCase: "View case study",
      visit: "Visit project",
      why: "Why this project",
      problem: "The problem",
      vision: "Vision",
      solution: "Solution",
      tech: "Technologies",
      status: "Status",
      close: "Close",
    },
    services: {
      kicker: "Services",
      title: "How I can help",
      subtitle: "From architecture to shipped product, I cover the whole cycle.",
    },
    contact: {
      kicker: "Contact",
      title: "Want to build something useful together?",
      subtitle: "A project, an idea, or a product to grow? Let's talk about it.",
      talk: "Let's talk",
      downloadCv: "Download my CV",
      phone: "Phone",
      email: "Email",
    },
    modals: {
      certsTitle: "Certifications",
      certsSubtitle: "Courses and certifications earned.",
      distinctionsTitle: "Distinctions",
      distinctionsSubtitle: "Recognitions and selections.",
      institution: "Institution",
    },
    footer: { rights: "All rights reserved.", built: "Designed & built by" },
    specialtiesList: [
      "Fintech",
      "Microservices",
      "Mobile Money",
      "Crypto & Blockchain",
      "Automation",
      "Software development",
      "Custom solutions",
    ],
  },
}
