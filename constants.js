export const METADATA = {
  author: "MANDO Hamidou Christ-Of-Fair",
  title: "Portfolio | MANDO Christ-Of-Fair",
  description:
    "MANDO Hamidou Christ-Of-Fair est un Dévelopeur FrontEnd et un UI/UX designer passioné. Et fraichement diplômé de l'école 241.",
  // siteUrl: "https://www.shubhporwal.me/",
  keywords: [
    "MANDO Hamidou Christ-Of-Fair",
    "Frontend Engineer",
    "Next js Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "French",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Accueil",
    ref: "home",
  },
  {
    name: "Compétences",
    ref: "skills",
  },
  {
    name: "Projets",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  
  "Un développeur Frontend Pragmatique",
  "Je conçois des applications esthétiques et modernes",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: mandochrist13@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/christ-of-fair-mando-6610b02a5/",
  },
  {
    name: "github",
    url: "https://github.com/mandochrist13",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    // "sass",
    "nodejs",
    // "webpack",
    "vite",
    "firebase",
    "figma",
    // "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    // "redux",
    "nextjs",
    "tailwindcss",
    // "styledcomponents",
    "antdesign",
    // "chakra-ui",
  ],
  databases: ["mysql"],
  other: ["git"],
};

export const PROJECTS = [
  {
    name: "Phyto Science Gabon",
    image: "/projects/phyto.PNG",
    blurImage: "/projects/phyto.PNG",
    description: "Phyto Science est une entreprise mondiale de santé et de bien-être",
    gradient: ["#377a00", "#adc476"],
    url: "https://phytoscience.vercel.app/",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "Suncomcocotier",
    image: "/projects/suncom.PNG",
    blurImage: "/projects/suncom.PNG",
    description: "SUNCOM COCOTIERS est une PME de droit gabonais dont l’offre de services s’articule à la vente des solutions et des produits aux particuliers et aux Entreprises.",
    gradient: ["#732657", "#d44a91"],
    url: "https://suncomcocotiers.com/fr/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  },
  {
    name: "Saveurs Bantu",
    image: "/projects/bantu.PNG",
    blurImage: "/projects/bantu.PNG",
    description:
      "Saveurs Bantu est né du désir de partager l`authentique cuisine gabonaise avec le monde.",
    gradient: ["#facc14", "#fff18a"],
    url: "https://restaurant-flax-three.vercel.app/",
    tech: ["react", "chakra-ui", "alan"],
  },
  {
    name: "Desty Shop",
    image: "/projects/desty.PNG",
    blurImage: "/projects/desty.PNG",
    description: "Boutique en ligne où la mode et les tendances se rencontrent",
    gradient: ["#dbae97", "#dbae97"],
    url: "https://destyshop.fr/",
    tech: ["react"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  DUKAAN: [
    {
      title: "Irt-Shop",
      description:
        "Irt-Shop est une platforme d'e-commerce de produit tech.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Révolutionner le commerce, un clic à la fois.
        </div>
      ),
    },
    {
      title: "Transformation et Création de la Plateforme",
      description:
        "En 2023, j’ai conçu et développé Irt-Shop, une plateforme d'e-commerce dédiée aux produits technologiques, en utilisant un CMS performant. Mon rôle comprenait l’analyse des besoins spécifiques de la structure, la personnalisation du CMS pour répondre aux exigences du marché local et l’intégration de fonctionnalités essentielles :Gestion des produits et des stocks. Paiement en ligne sécurisé via des passerelles adaptées. Interface utilisateur intuitive, optimisée pour l’expérience client (UX/UI).",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Développeur CMS Prestashop
        </div>
      ),
    },
    {
      title: "Évolution et Optimisation",
      description:
        "Après le lancement initial, j’ai supervisé les optimisations nécessaires pour améliorer les performances de la plateforme et augmenter l'engagement des utilisateurs. Ces améliorations incluaient : La réduction des temps de chargement des pages grâce à une configuration optimisée. L’ajout d’outils analytiques pour suivre et ajuster les performances en fonction des comportements des utilisateurs. La mise en place d’un design adaptatif pour garantir une navigation fluide sur mobile et tablette.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Développeur CMS junior
        </div>
      ),
    },
    {
      title: "Résultats",
      description:
        "Grâce à ce projet, Irt-Shop s’est rapidement imposé comme un acteur clé du commerce en ligne technologique au Gabon. La plateforme a permis : Une augmentation significative des ventes en ligne. Une visibilité accrue pour la marque grâce à une expérience utilisateur moderne et engageante. Une gestion simplifiée pour l’équipe de l’entreprise grâce aux fonctionnalités avancées du CMS.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Développeur Front-End CMS
        </div>
      ),
    },
  ],
  AVIATE: [
    {
      title: "Fourniture en Ligne",
      description:
        "Fourniture en Ligne est une plateforme intuitive qui connecte les parents et les établissements scolaires pour simplifier l'achat de fournitures. Grâce à une interface claire et ergonomique, les utilisateurs peuvent facilement rechercher, sélectionner et commander les produits nécessaires pour leurs enfants ou leurs besoins professionnels.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Facilitez vos achats de fournitures scolaires et bureautiques en quelques clics.
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "J’ai participé à la conception des interfaces phares de Fourniture en Ligne. Je me suis accentué sur l'expérience et l'inteface utilisateur et j'ai participé à l'intégration grâce au framework NEXT JS.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developper NEXT JS
        </div>
      ),
    },
  ],
  // SPACENOS: [
  //   {
  //     title: "Spacenos",
  //     description:
  //       "A dynamic startup dedicated to creating innovative products that make the world a better place.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         We build apps that solve problems for the next billion people
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Trailblazing",
  //     description:
  //       "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Web Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
};

export const GTAG = "G-5HCTL2TJ5W";
