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
      title: "Dukaan",
      description:
        "Dukaan is a platform that enables businesses to launch their online stores at ease.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing commerce, one click at a time
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Since 2023, the Dukaan Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Dukaan's largest and most impactful migration.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer Intern
        </div>
      ),
    },
  ],
  AVIATE: [
    {
      title: "Aviate",
      description:
        "Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Finding the right job isn&apos;t fate, it&apos;s navigation
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer Intern
        </div>
      ),
    },
  ],
  SPACENOS: [
    {
      title: "Spacenos",
      description:
        "A dynamic startup dedicated to creating innovative products that make the world a better place.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          We build apps that solve problems for the next billion people
        </div>
      ),
    },
    {
      title: "Trailblazing",
      description:
        "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web Developer Intern
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
