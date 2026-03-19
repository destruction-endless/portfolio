export interface Demo {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  image?: string;
  isVibe: boolean;
}

export const demos: Demo[] = [
  {
    slug: "photo-video-events-website-frontend",
    title: "Photo & Video Events Website",
    description:
      "A full-featured events portfolio with gallery views, booking forms, and responsive layouts — built in a single focused session using AI-assisted rapid development.",
    tags: ["Vue 3", "Tailwind CSS", "Responsive Design"],
    demoUrl: "https://gcreative.ph.kingzeusbiong.dev",
    image: `https://image.thum.io/get/width/800/https://gcreative.ph.kingzeusbiong.dev`,
    isVibe: true,
  },
  {
    slug: "find-my-home-fe",
    title: "Find My Home",
    description:
      "A property listing platform with search, filtering, and responsive design. The frontend was scaffolded and refined rapidly using AI-assisted development.",
    tags: ["Vue 3", "Tailwind CSS", "Property Listings"],
    demoUrl: "https://find-my-home.kingzeusbiong.dev",
    image: `https://image.thum.io/get/width/800/https://find-my-home.kingzeusbiong.dev`,
    isVibe: true,
  },
  {
    slug: "brs-accounting-website",
    title: "BRS Accounting Website",
    description:
      "A professional accounting firm website with service breakdowns, contact forms, and clean corporate design — rapidly iterated with vibe coding.",
    tags: ["Vue 3", "Tailwind CSS", "Corporate Website"],
    demoUrl: "https://brs-accounting.kingzeusbiong.dev",
    image: `https://image.thum.io/get/width/800/crop/800/wait/6/fullpage/https://brs-accounting.kingzeusbiong.dev`,
    isVibe: true,
  },
  {
    slug: "goldquest-demo",
    title: "GoldQuest Demo",
    description:
      "An interactive demo application showcasing dynamic UI components and smooth animations, built with rapid AI-assisted iteration.",
    tags: ["Vue 3", "Tailwind CSS", "Interactive UI"],
    demoUrl: "https://goldquest.kingzeusbiong.dev",
    image: `https://image.thum.io/get/width/800/https://goldquest.kingzeusbiong.dev`,
    isVibe: true,
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    description:
      "This very portfolio site — built with Vue 3, Tailwind CSS, and deployed on Vercel. Vibe coding powered the rapid iteration and design refinement.",
    tags: ["Vue 3", "Tailwind CSS", "Vite", "Vercel"],
    demoUrl: "https://kingzeusbiong.dev",
    image: `https://image.thum.io/get/width/800/https://kingzeusbiong.dev`,
    isVibe: true,
  },
];
