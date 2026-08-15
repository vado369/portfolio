export type Lang = "fr" | "en"

export type ProjectStatus = "live" | "archived"

export type Project = {
  id: string
  name: string
  status: ProjectStatus
  image: string
  tech: string[]
  link?: string
  short: Record<Lang, string>
  why: Record<Lang, string>
  problem: Record<Lang, string>
  vision: Record<Lang, string>
  solution: Record<Lang, string>
}

export type Certification = {
  id: string
  name: string
  institution: string
  link?: string
}

export type Distinction = {
  id: string
  year: string
  title: Record<Lang, string>
  detail: Record<Lang, string>
}

export type Service = {
  id: string
  icon: string
  title: Record<Lang, string>
  description: Record<Lang, string>
}

export const CONTACT = {
  phone: "+229 0167613132",
  email: "oswald.len@proton.me",
  x: "#",
  linkedin: "#",
  github: "#",
  whatsapp: "#",
}

export const skillGroups: {
  id: string
  label: Record<Lang, string>
  items: string[]
}[] = [
  {
    id: "backend",
    label: { fr: "Backend", en: "Backend" },
    items: ["PHP", "Laravel", "Node.js", "Python"],
  },
  {
    id: "frontend",
    label: { fr: "Frontend", en: "Frontend" },
    items: ["JavaScript", "TypeScript", "HTML", "CSS", "Next.js", "React Native"],
  },
  {
    id: "databases",
    label: { fr: "Bases de données", en: "Databases" },
    items: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    id: "infra",
    label: { fr: "Infrastructure", en: "Infrastructure" },
    items: ["Docker", "Redis", "RabbitMQ", "BullMQ", "Linux", "Git", "GitHub"],
  },
  {
    id: "blockchain",
    label: { fr: "Blockchain", en: "Blockchain" },
    items: ["Solidity", "Ethers.js", "Smart Contracts", "Crypto"],
  },
  {
    id: "apis",
    label: { fr: "APIs & Automatisation", en: "APIs & Automation" },
    items: ["REST APIs", "Telegram API", "Meta API", "Google Apps Script", "Zapier"],
  },
]

export const services: Service[] = [
  {
    id: "saas",
    icon: "layers",
    title: { fr: "Développement SaaS", en: "SaaS Development" },
    description: {
      fr: "Conception et développement de produits SaaS, de l'idée à la mise en production.",
      en: "Design and development of SaaS products, from idea to production.",
    },
  },
  {
    id: "software",
    icon: "code",
    title: { fr: "Développement logiciel", en: "Software Development" },
    description: {
      fr: "Applications et logiciels sur mesure adaptés aux besoins métier.",
      en: "Custom applications and software tailored to business needs.",
    },
  },
  {
    id: "maintenance",
    icon: "wrench",
    title: { fr: "Maintenance informatique", en: "IT Maintenance" },
    description: {
      fr: "Maintenance et accompagnement technique continu de vos systèmes.",
      en: "Ongoing maintenance and technical support for your systems.",
    },
  },
  {
    id: "smart-contract",
    icon: "file-code",
    title: { fr: "Smart Contracts", en: "Smart Contract Development" },
    description: {
      fr: "Développement, audit et intégration de smart contracts.",
      en: "Development, review and integration of smart contracts.",
    },
  },
  {
    id: "custom",
    icon: "puzzle",
    title: { fr: "Solutions sur mesure", en: "Custom Tech Solutions" },
    description: {
      fr: "Conception de solutions adaptées à des problématiques spécifiques.",
      en: "Building solutions designed around specific problems.",
    },
  },
  {
    id: "tech-lead",
    icon: "compass",
    title: { fr: "Tech Lead & Pilotage", en: "Tech Lead & Delivery" },
    description: {
      fr: "Architecture, accompagnement technique et pilotage de projets.",
      en: "Architecture, technical guidance and project delivery.",
    },
  },
]

export const projects: Project[] = [
  {
    id: "cicapay",
    name: "CicaPay",
    status: "live",
    image: "/projects/cicapay.jpg",
    link: "#",
    tech: ["PHP", "PostgreSQL", "Next.js", "RabbitMQ", "Redis", "Docker", "Solidity", "Ethers.js", "TypeScript", "Python"],
    short: {
      fr: "Agrégateur de paiement en ligne combinant Mobile Money et crypto, désormais fortement orienté paiements crypto.",
      en: "Online payment aggregator combining Mobile Money and crypto, now strongly focused on crypto payments.",
    },
    why: {
      fr: "Le paiement en ligne en Afrique reste fragmenté entre Mobile Money local et rails internationaux difficiles d'accès.",
      en: "Online payments in Africa remain fragmented between local Mobile Money and hard-to-access international rails.",
    },
    problem: {
      fr: "Les entreprises doivent jongler entre plusieurs fournisseurs, un KYC inadapté et une conversion crypto/fiat complexe.",
      en: "Businesses juggle multiple providers, KYC that doesn't fit local realities, and complex crypto/fiat conversion.",
    },
    vision: {
      fr: "Décentraliser le paiement en ligne : le Mobile Money pour le local, les cryptos pour l'international sans frontières.",
      en: "Decentralize online payments: Mobile Money for local needs, crypto for borderless international payments.",
    },
    solution: {
      fr: "Un agrégateur qui gère toute la complexité technique (paiements, blockchain, KYC adapté à l'Afrique) pour que les entreprises se concentrent sur leur activité.",
      en: "An aggregator that handles all technical complexity (payments, blockchain, Africa-fit KYC) so businesses can focus on their core activity.",
    },
  },
  {
    id: "mcica",
    name: "mCica",
    status: "live",
    image: "/projects/mcica.jpg",
    link: "#",
    tech: ["React Native", "Expo", "Firebase", "JavaScript", "CicaPay API"],
    short: {
      fr: "Application mobile connectée à CicaPay pour vendre des produits digitaux et générer des liens de paiement.",
      en: "Mobile app connected to CicaPay to sell digital products and generate payment links.",
    },
    why: {
      fr: "Utiliser les APIs de CicaPay demande normalement un site web et des compétences techniques.",
      en: "Using the CicaPay APIs normally requires a website and technical skills.",
    },
    problem: {
      fr: "Les vendeurs de produits digitaux n'ont pas toujours les moyens techniques de créer une boutique en ligne.",
      en: "Digital product sellers often lack the technical means to build an online store.",
    },
    vision: {
      fr: "Permettre à n'importe qui de vendre en ligne, sans site web ni compétences techniques.",
      en: "Let anyone sell online, without a website or technical skills.",
    },
    solution: {
      fr: "Une app mobile qui crée des boutiques virtuelles et des liens de paiement en quelques clics via l'API CicaPay.",
      en: "A mobile app that creates virtual stores and payment links in a few taps through the CicaPay API.",
    },
  },
  {
    id: "coges",
    name: "COGES",
    status: "live",
    image: "/projects/coges.jpg",
    tech: ["PHP", "SQLite", "Electron", "PHP Desktop", "CicaPay API", "JavaScript"],
    short: {
      fr: "Logiciel de gestion des notes scolaires intégré à EducMaster, utilisable hors ligne.",
      en: "School grade management software integrated with EducMaster, usable offline.",
    },
    why: {
      fr: "De nombreux établissements scolaires disposent d'un accès très limité à Internet.",
      en: "Many schools have very limited access to the internet.",
    },
    problem: {
      fr: "La saisie des notes et le pont avec la plateforme nationale EducMaster sont chronophages et répétitifs.",
      en: "Entering grades and bridging with the national EducMaster platform is time-consuming and repetitive.",
    },
    vision: {
      fr: "Un logiciel léger, rapide et hors ligne pour gérer les notes localement.",
      en: "A lightweight, fast, offline-first tool to manage grades locally.",
    },
    solution: {
      fr: "Gestion locale des notes avec envoi vers EducMaster en fin de semestre et export de la base en un clic pour les sauvegardes.",
      en: "Local grade management with end-of-term export to EducMaster and one-click database export for backups.",
    },
  },
  {
    id: "sig",
    name: "SIG",
    status: "live",
    image: "/projects/sig.jpg",
    tech: ["PHP", "SQLite", "Electron", "PHP Desktop", "JavaScript"],
    short: {
      fr: "Logiciel d'édition automatique de cartes scolaires recto-verso.",
      en: "Software for automatic generation of double-sided student ID cards.",
    },
    why: {
      fr: "La création manuelle des cartes scolaires demande énormément de temps aux opérateurs.",
      en: "Creating student cards manually takes operators an enormous amount of time.",
    },
    problem: {
      fr: "Assembler photos et données élèves puis mettre en page chaque carte est fastidieux et source d'erreurs.",
      en: "Combining photos and student data then laying out each card is tedious and error-prone.",
    },
    vision: {
      fr: "Automatiser entièrement la génération des cartes scolaires.",
      en: "Fully automate student card generation.",
    },
    solution: {
      fr: "À partir des photos et d'un fichier Excel des élèves, le logiciel génère automatiquement les cartes recto-verso.",
      en: "From photos and an Excel file of students, the software automatically generates double-sided cards.",
    },
  },
  {
    id: "cstock",
    name: "Cstock",
    status: "live",
    image: "/projects/cstock.jpg",
    tech: ["PHP", "SQLite", "Electron", "PHP Desktop", "JavaScript"],
    short: {
      fr: "Logiciel de gestion : stocks, facturation, proformas et caisse, en réseau et hors ligne.",
      en: "Management software: inventory, invoicing, proformas and cash register, networked and offline.",
    },
    why: {
      fr: "Une entreprise de fournitures de bureau avait besoin d'un outil de gestion complet fiable sans dépendre d'Internet.",
      en: "An office-supply company needed a reliable, complete management tool without depending on the internet.",
    },
    problem: {
      fr: "Les solutions cloud sont inadaptées aux environnements à connexion instable et aux besoins d'accès par rôle.",
      en: "Cloud solutions are unsuited to unstable connections and role-based access needs.",
    },
    vision: {
      fr: "Un logiciel métier sur mesure, installable sur un réseau local avec gestion des accès.",
      en: "A tailor-made business tool, installable on a local network with access management.",
    },
    solution: {
      fr: "Application offline gérant stocks, facturation, proformas et caisse, avec contrôle des accès par rôle.",
      en: "An offline app managing inventory, invoicing, proformas and cash, with role-based access control.",
    },
  },
  {
    id: "achat-vente-benin",
    name: "Achat Vente Bénin",
    status: "live",
    image: "/projects/achat-vente-benin.jpg",
    link: "#",
    tech: ["PHP", "MySQL", "HTML", "JavaScript", "CSS"],
    short: {
      fr: "Plateforme e-commerce béninoise avec annuaire de pharmacies et de contacts professionnels.",
      en: "Beninese e-commerce platform with a pharmacy directory and professional contacts directory.",
    },
    why: {
      fr: "Les marchands locaux manquent de vitrines en ligne accessibles.",
      en: "Local merchants lack accessible online storefronts.",
    },
    problem: {
      fr: "Publier et trouver des produits locaux reste difficile sans plateforme dédiée.",
      en: "Publishing and finding local products remains difficult without a dedicated platform.",
    },
    vision: {
      fr: "Une place de marché locale pour donner de la visibilité aux marchands béninois.",
      en: "A local marketplace giving visibility to Beninese merchants.",
    },
    solution: {
      fr: "Une plateforme e-commerce enrichie d'un annuaire des pharmacies et d'un annuaire de contacts professionnels.",
      en: "An e-commerce platform enriched with a pharmacy directory and a professional contacts directory.",
    },
  },
  {
    id: "el-casa",
    name: "El CASA APP",
    status: "live",
    image: "/projects/el-casa.jpg",
    link: "#",
    tech: ["PHP", "MySQL", "Telegram API", "JavaScript"],
    short: {
      fr: "Web app Telegram pour la communauté El CASA : mini-formations et jeu quotidien récompensé en USDT.",
      en: "Telegram web app for the El CASA community: micro-courses and a daily reward game in USDT.",
    },
    why: {
      fr: "Une communauté Telegram active souhaitait engager et former ses membres.",
      en: "An active Telegram community wanted to engage and train its members.",
    },
    problem: {
      fr: "Maintenir l'engagement et récompenser l'apprentissage au sein d'une communauté est un défi.",
      en: "Sustaining engagement and rewarding learning within a community is a challenge.",
    },
    vision: {
      fr: "Transformer l'apprentissage en une expérience ludique et gratifiante.",
      en: "Turn learning into a fun and rewarding experience.",
    },
    solution: {
      fr: "Des mini-formations et un jeu quotidien permettant de gagner des USDT et des points convertibles en tickets de formation.",
      en: "Micro-courses and a daily game to earn USDT and points convertible into training tickets.",
    },
  },
  {
    id: "sanctuaire",
    name: "Sanctuaire",
    status: "live",
    image: "/projects/sanctuaire.jpg",
    link: "#",
    tech: ["PHP", "MySQL", "Telegram API", "JavaScript"],
    short: {
      fr: "Web app Telegram dédiée à la prière, avec des prières classées par problématique.",
      en: "Telegram web app dedicated to prayer, with prayers organized by topic.",
    },
    why: {
      fr: "Trouver la bonne prière pour une situation donnée n'est pas toujours simple.",
      en: "Finding the right prayer for a given situation isn't always easy.",
    },
    problem: {
      fr: "Les prières sont dispersées et difficiles à rechercher selon un besoin précis.",
      en: "Prayers are scattered and hard to search by a specific need.",
    },
    vision: {
      fr: "Faciliter l'accès à la prière selon la problématique ou l'objectif.",
      en: "Make prayer easy to find by topic or goal.",
    },
    solution: {
      fr: "Une bibliothèque de prières classées par problématique et par objectif, directement dans Telegram.",
      en: "A library of prayers organized by topic and goal, directly inside Telegram.",
    },
  },
  {
    id: "bryo-xchange",
    name: "BRYO XCHANGE",
    status: "archived",
    image: "/projects/bryo-xchange.jpg",
    tech: ["PHP", "MySQL", "Solidity", "Fedapay API", "PayDunya API", "JavaScript"],
    short: {
      fr: "Exchange crypto facilitant les échanges entre crypto et Mobile Money.",
      en: "Crypto exchange enabling swaps between crypto and Mobile Money.",
    },
    why: {
      fr: "L'adoption de la crypto en Afrique de l'Ouest était freinée par le manque de ponts avec le Mobile Money.",
      en: "Crypto adoption in West Africa was held back by the lack of bridges with Mobile Money.",
    },
    problem: {
      fr: "Échanger de la crypto contre de la monnaie locale restait complexe et peu accessible.",
      en: "Swapping crypto for local currency remained complex and hard to access.",
    },
    vision: {
      fr: "Faciliter l'adoption de la blockchain et rendre les échanges crypto plus accessibles.",
      en: "Ease blockchain adoption and make crypto exchanges more accessible.",
    },
    solution: {
      fr: "Un exchange reliant crypto et Mobile Money via les APIs Fedapay et PayDunya.",
      en: "An exchange connecting crypto and Mobile Money through the Fedapay and PayDunya APIs.",
    },
  },
  {
    id: "blearn",
    name: "Blearn",
    status: "archived",
    image: "/projects/blearn.jpg",
    tech: ["PHP", "MySQL", "Solidity", "Fedapay API", "PayDunya API", "JavaScript"],
    short: {
      fr: "Plateforme d'e-learning basée sur la blockchain, récompensant les apprenants en tokens.",
      en: "Blockchain-based e-learning platform rewarding learners with tokens.",
    },
    why: {
      fr: "La motivation est un enjeu central de l'apprentissage en ligne.",
      en: "Motivation is a core challenge of online learning.",
    },
    problem: {
      fr: "Les apprenants abandonnent souvent les cours faute d'incitation concrète.",
      en: "Learners often drop out for lack of concrete incentive.",
    },
    vision: {
      fr: "Une nouvelle approche de l'e-learning où terminer un cours rapporte des tokens.",
      en: "A new approach to e-learning where completing a course earns tokens.",
    },
    solution: {
      fr: "Une plateforme récompensant l'achèvement des cours par des tokens on-chain.",
      en: "A platform rewarding course completion with on-chain tokens.",
    },
  },
  {
    id: "belta",
    name: "Belta",
    status: "archived",
    image: "/projects/belta.jpg",
    tech: ["PHP", "MySQL", "Solidity", "Telegram API", "JavaScript"],
    short: {
      fr: "Plateforme de suivi des investissements crypto centrée sur les résultats réels.",
      en: "Crypto investment tracker focused on real, actual results.",
    },
    why: {
      fr: "Les investisseurs veulent suivre leurs gains et pertes réels sans exposer leurs comptes.",
      en: "Investors want to track their real gains and losses without exposing their accounts.",
    },
    problem: {
      fr: "Connecter des wallets ou des comptes CEX pose des problèmes de confidentialité et de sécurité.",
      en: "Connecting wallets or CEX accounts raises privacy and security concerns.",
    },
    vision: {
      fr: "Suivre ses investissements en préservant la confidentialité, avec gestion des investissements différés.",
      en: "Track investments while preserving privacy, with support for staggered investments.",
    },
    solution: {
      fr: "Les données sont saisies par l'utilisateur, sans connexion aux wallets ni aux CEX, avec suivi séparé de chaque capital investi.",
      en: "Data is entered by the user, without connecting wallets or CEXs, tracking each invested capital separately.",
    },
  },
  {
    id: "bryo-quick",
    name: "BRYO QUICK Exchange",
    status: "archived",
    image: "/projects/bryo-quick.jpg",
    tech: ["PHP", "MySQL", "Solidity", "ChangeNOW API", "JavaScript"],
    short: {
      fr: "Plateforme de swap de crypto sans passer directement par un CEX.",
      en: "Crypto swap platform that avoids going directly through a CEX.",
    },
    why: {
      fr: "Swapper de petits montants de crypto reste souvent coûteux et fastidieux.",
      en: "Swapping small amounts of crypto is often costly and cumbersome.",
    },
    problem: {
      fr: "Les CEX imposent des comptes et des minimums peu adaptés aux petits swaps.",
      en: "CEXs require accounts and minimums that don't fit small swaps.",
    },
    vision: {
      fr: "Faciliter le swap de cryptomonnaies, y compris pour de petits montants.",
      en: "Make crypto swaps easy, even for small amounts.",
    },
    solution: {
      fr: "Un service de swap s'appuyant sur l'API ChangeNOW, sans compte CEX requis.",
      en: "A swap service built on the ChangeNOW API, without requiring a CEX account.",
    },
  },
]

export const certifications: Certification[] = [
  { id: "hacking-advanced", name: "Hacking Advanced", institution: "Programming Hub" },
  { id: "javascript", name: "JavaScript", institution: "Programming Hub" },
  { id: "it-basics", name: "IT Basics", institution: "Programming Hub" },
  { id: "cryptography", name: "Cryptography", institution: "Programming Hub" },
  { id: "cyber-security", name: "Cyber Security", institution: "Programming Hub" },
  { id: "ethical-hacking", name: "Ethical Hacking", institution: "Programming Hub" },
  { id: "marketing-numerique", name: "Marketing Numérique", institution: "D-CLIC (OIF)" },
  {
    id: "force-n",
    name: "Acculturation à l'Entrepreneuriat Numérique",
    institution: "FORCE N",
  },
]

export const distinctions: Distinction[] = [
  {
    id: "dsi-awards",
    year: "2025",
    title: {
      fr: "2ᵉ Leader des Services Numériques — DSI Awards",
      en: "2nd Digital Services Leader — DSI Awards",
    },
    detail: { fr: "Projet : CicaPay", en: "Project: CicaPay" },
  },
  {
    id: "open-conscience",
    year: "2024",
    title: {
      fr: "2ᵉ place — Open Conscience Awards",
      en: "2nd place — Open Conscience Awards",
    },
    detail: {
      fr: "Catégorie : Best Digital Entrepreneur / Innovator",
      en: "Category: Best Digital Entrepreneur / Innovator",
    },
  },
  {
    id: "mtn-labs",
    year: "2025",
    title: {
      fr: "Présélection — MTN Innovation Labs",
      en: "Shortlisted — MTN Innovation Labs",
    },
    detail: { fr: "", en: "" },
  },
  {
    id: "mali-digital",
    year: "2025",
    title: {
      fr: "Présélection — Mali Digital Awards",
      en: "Shortlisted — Mali Digital Awards",
    },
    detail: { fr: "", en: "" },
  },
  {
    id: "fenou",
    year: "2025",
    title: {
      fr: "Présélection — FENOU Startup Challenge",
      en: "Shortlisted — FENOU Startup Challenge",
    },
    detail: { fr: "", en: "" },
  },
]
