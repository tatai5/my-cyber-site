export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  status: "Completed" | "In Progress" | "Learning" | "Research";
  year: string;
  featured: boolean;
  technologies: string[];
  github: string;
  live: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "my-cyber-site",

    title: "My Cyber Site",

    shortDescription:
      "Personal cybersecurity portfolio built with Next.js.",

    fullDescription:
      "A modern multi-page cybersecurity portfolio featuring research, notes, projects, writeups and tools. Built with Next.js, TypeScript and Tailwind CSS.",

    category: "Portfolio",

    status: "In Progress",

    year: "2026",

    featured: true,

    image: "/projects/my-cyber-site.jpg",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],

    github: "https://github.com/tatai5/my-cyber-site",

    live: "/",
  },

  {
    id: 2,
    slug: "designarena-clone",

    title: "DesignArena Clone",

    shortDescription:
      "Frontend practice inspired by a modern AI platform.",

    fullDescription:
      "Responsive frontend project built for learning modern UI and component architecture.",

    category: "Frontend",

    status: "Completed",

    year: "2025",

    featured: false,

    image: "/projects/designarena.jpg",

    technologies: [
      "React",
      "Vite",
      "CSS",
    ],

    github: "#",

    live: "#",
  },

  {
    id: 3,
    slug: "osint-notes",

    title: "OSINT Notes",

    shortDescription:
      "Collection of practical OSINT resources.",

    fullDescription:
      "Learning notes covering reconnaissance, metadata analysis, search techniques and intelligence gathering.",

    category: "Research",

    status: "Learning",

    year: "2026",

    featured: true,

    image: "/projects/osint.jpg",

    technologies: [
      "OSINT",
      "Linux",
      "Research",
    ],

    github: "#",

    live: "#",
  },

  {
    id: 4,
    slug: "bug-bounty-notes",

    title: "Bug Bounty Notes",

    shortDescription:
      "Learning notes from bug bounty practice.",

    fullDescription:
      "Personal notes documenting methodologies, recon workflow and web security learning.",

    category: "Cybersecurity",

    status: "Research",

    year: "2026",

    featured: true,

    image: "/projects/bug-bounty.jpg",

    technologies: [
      "Web Security",
      "Markdown",
      "Recon",
    ],

    github: "#",

    live: "#",
  },
];