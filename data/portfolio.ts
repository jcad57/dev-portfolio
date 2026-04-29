export const hero = {
  status: "Open to work — Austin, TX",
  name: "Jon Deichmann",
  role: "React Web & Native Developer",
  description:
    "I build production apps that ship — from a live iOS festival app used by real attendees, to a full e-commerce platform processing secure Stripe payments.",
};

export const skillPills = [
  { dot: "bg-emerald-400", label: "iOS App Store launch" },
  { dot: "bg-sky-400", label: "Stripe + Printful integration" },
  { dot: "bg-amber-400", label: "Full CMS architecture" },
  { dot: "bg-violet-400", label: "TypeScript" },
  { dot: "bg-emerald-400", label: "React Native + Expo" },
  { dot: "bg-sky-400", label: "React / Next.js" },
  { dot: "bg-rose-400", label: "Tailwind / Figma / Photoshop" },
];

export type FeaturedProject = {
  badge: string;
  title: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
  screenshots?: { src: string; alt: string }[];
};

export const featuredProjectsLarge: FeaturedProject[] = [
  // {
  //   badge: "iOS App Launch",
  //   title: "CrittrApp",
  //   description:
  //     "Crittr keeps daily care, health history, and household coordination in one calm, organized place — built for the people who love their animals most.",
  //   tech: ["React Native", "Supabase", "TypeScript", "Figma", "iOS", "Expo"],
  //   links: [
  //     { label: "App repo", href: "#" },
  //     { label: "Live site", href: "#" },
  //   ],
  // },
  {
    badge: "iOS App Launch",
    title: "Hell's Heroes Festival App + CMS",
    description:
      "React Native iOS app deployed to the App Store for a multi-day music festival. Features one-tap schedule builder, interactive local map, live newsfeed, and social share cards that adapt based on band selection. Paired with a fully custom Next.js CMS so fest staff can manage lineup, stages, vendors, and external links from a single dashboard.",
    tech: [
      "React Native",
      "Next.js",
      "Supabase",
      "TypeScript",
      "Firebase",
      "Figma",
      "iOS",
      "Expo",
    ],
    links: [
      {
        label: "App repo",
        href: "https://github.com/jcad57/hells-heroes-viii",
      },
      {
        label: "CMS repo",
        href: "https://github.com/jcad57/hells-heroes-app-cms",
      },
    ],
    screenshots: [
      {
        src: "/hhfest/collection1.png",
        alt: "Hell's Heroes Festival App Screenshot 1",
      },
      {
        src: "/hhfest/collection2.png",
        alt: "Hell's Heroes Festival App Screenshot 2",
      },
      {
        src: "/hhfest/hhfestcms1.png",
        alt: "Hell's Heroes Festival CMS Screenshot",
      },
      {
        src: "/hhfest/hhfestcms2.png",
        alt: "Hell's Heroes Festival CMS Screenshot 2",
      },
      {
        src: "/hhfest/hhfestcms3.png",
        alt: "Hell's Heroes Festival CMS Screenshot 3",
      },
      {
        src: "/hhfest/hhfestcms4.png",
        alt: "Hell's Heroes Festival CMS Screenshot 4",
      },
    ],
  },
  {
    badge: "E-commerce Storefront - codeshirt.io",
    title: "CodeShirt",
    description:
      "Full-stack e-commerce app where coders design t-shirts using real code. In-browser code editor, Stripe payment processing, Printful print-on-demand fulfillment, and a community platform with social sharing and code previews.",
    tech: [
      "Next.js",
      "Supabase",
      "TypeScript",
      "Tailwind",
      "Printful API",
      "Stripe API",
      "Agentic Coding",
      "In-browser code editor",
      "Figma",
    ],
    links: [
      { label: "App repo", href: "https://github.com/jcad57/codeshirt" },
      { label: "Live site", href: "https://codeshirt.io/" },
    ],
    screenshots: [
      {
        src: "/codeshirt/codeshirt3.png",
        alt: "CodeShirt App Screenshot 3",
      },
      {
        src: "/codeshirt/codeshirt1.png",
        alt: "CodeShirt App Screenshot 1",
      },
      {
        src: "/codeshirt/codeshirt2.png",
        alt: "CodeShirt App Screenshot 2",
      },
      {
        src: "/codeshirt/codeshirt4.png",
        alt: "CodeShirt App Screenshot 4",
      },
      {
        src: "/codeshirt/codeshirt5.png",
        alt: "CodeShirt App Screenshot 5",
      },
    ],
  },
];

export const featuredProjectsSmall: FeaturedProject[] = [
  {
    badge: "Solo Project",
    title: "Personal Finance Dashboard",
    description:
      "Full-stack app with Supabase auth, budget tracking, URL param sorting, and pagination to help users track their personal finances. Level 5 guru Frontend Mentor challenge.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Figma"],
    links: [
      {
        label: "Live demo",
        href: "https://personal-finance-app-test-ruddy.vercel.app/",
      },
      {
        label: "App repo",
        href: "https://github.com/jcad57/personal-finance-app",
      },
    ],
  },
  {
    badge: "Meal planning app",
    title: "Weekly Bytes",
    description:
      "An intuitive web application designed to help managers effortlessly create and share weekly meal plans while prioritizing staff safety and dietary needs. Weekly Bytes generates a randomized menu—ensuring variety and eliminating meal repetition within the same week.",
    tech: [
      "React",
      "React ROuter",
      "Firebase",
      "Tailwind",
      "TypeScript",
      "SPA",
      "Auth",
    ],
    links: [
      {
        label: "App repo",
        href: "https://github.com/chingu-voyages/V53-tier2-team-26",
      },
    ],
  },
  // {
  //   badge: "API",
  //   title: "Webhook bridge",
  //   description:
  //     "Reliable delivery layer between storefront events and fulfillment providers.",
  //   tech: ["Node", "TypeScript", "Vercel"],
  //   links: [{ label: "Docs", href: "#" }],
  // },
  // {
  //   badge: "OSS",
  //   title: "CLI utilities",
  //   description:
  //     "Small developer tools for scaffolding and release automation.",
  //   tech: ["TypeScript", "CLI"],
  //   links: [{ label: "GitHub", href: "#" }],
  // },
];

export type WorkEntry = {
  dates: string;
  kind: string;
  badge: string;
  title: string;
  context: string;
  bullets: string[];
};

export const contractWork: WorkEntry[] = [
  {
    dates: "Oct 2025 – Mar 2026",
    kind: "Re-contract",
    badge: "React Native + Next.js, iOS",
    title: "Hell's Heroes Festival App + CMS",
    context: "White Oak Music Hall",
    bullets: [
      "Re-contracted to build on the previous festival app, migrating from state-managed tabs to full page routing for a cleaner navigation architecture.",
      "Improved UX for the local food and drinks map—more fluid scrolling and snappier tap response on the overlaid business carousel.",
      "Drastically enhanced the schedule sharing feature to dynamically render image cards based on the number of bands selected, eliminating single-band card clutter and producing share-worthy visuals for social media.",
      "Rebuilt the CMS from the ground up—fest staff can now manage everything: lineup, show dates, stages, vendor list, local businesses, and external/social links, plus a new overview page displaying a live snapshot of all app data.",
      "Expanded app platform to iOS and Android.",
    ],
  },
  {
    dates: "May 2025 – Dec 2025",
    kind: "Internship",
    badge: "React Native, iOS + Android",
    title: "Duolingo-style Financial Learning App",
    context: "Mognito · Remote",
    bullets: [
      "Explored and understood the existing app architecture and codebase to ensure a smooth transition and maintain consistency.",
      "Developed and deployed reusable UI templates for various user activities.",
      "Built user profile pages with editable settings and reminders, avatars, and goal/streak tracking.",
      "Enhanced existing UI components to align with Figma designs to improve reusability and consistency.",
      "Contributed to MVP scoping and goal-setting; collaborated with UI designer, back end engineers, and CEO to ensure the app was built to spec and met the needs of the users.",
    ],
  },
  {
    dates: "Oct 2024 – Mar 2025",
    kind: "Contract",
    badge: "React Native + Next.js",
    title: "Hell's Heroes Festival App + CMS",
    context: "White Oak Music Hall",
    bullets: [
      "Transitioned from traditional React developement to learning and understanding React Native development to build a native iOS app.",
      "Contracted to design (w/ Figma) and develop a React Native iOS app and a web-based CMS for managing real-time news and events for a music festival.",
      "Integrated Firebase (Firestore & Auth) for storing and retrieving bands, set times, news feed, and selected local shops/restaurants.",
      "Built a one-tap schedule-building feature, leveraged regex text formatting, and led testing and deployment—all while rapidly mastering TypeScript/React Native/Expo and libraries like react-view-shot,react-native-maps, and async-storage",
    ],
  },
];

export const skillCategories = [
  {
    title: "Core stack",
    items: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "Agentic Coding",
    ],
  },
  {
    title: "Also familiar",
    items: ["Firebase", "Stripe API", "Printful API", "Expo", "Vite", "Vercel"],
  },
  {
    title: "Design tools",
    items: ["Figma", "Canva", "Photoshop", "Premiere"],
  },
  {
    title: "Learning now",
    items: ["PostgreSQL"],
  },
];

export const about = {
  paragraphs: [
    "I'm a developer & former musician who found an intense passion for developing beautiful, responsive web apps. In three short years I’ve mastered building websites and web / native apps using TypeScript, React (Web / Native), NextJS and Tailwind.",
    "Outside of client work I am building personal projects and learning new technologies to improve my skills and expand my knowledge.",
  ],
  details: [
    { label: "Location", value: "Austin, TX" },
    {
      label: "Email",
      value: "jcadeichmann@gmail.com",
      href: "mailto:jcadeichmann@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/jon-deichmann/",
      href: "https://www.linkedin.com/in/jon-deichmann/",
    },
    { label: "Status", value: "Open to work", highlight: "mint" },
  ],
};

export const footer = {
  links: [
    {
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/~01546826936414b499?mp_source=share",
    },
    { label: "GitHub", href: "https://github.com/jcad57" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jon-deichmann/" },
    {
      label: "Resume PDF",
      href: "/Jon_Deichmann_Resume_2026.pdf",
    },
  ],
};
