export interface Note {
  id: number;
  slug: string;
  title: string;
  category: string;
  summary: string;
  date: string;
  readTime: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
}

export const notesData: Note[] = [
  {
    id: 1,
    slug: "introduction-to-xss",
    title: "Introduction to XSS",
    category: "Web Security",
    summary:
      "Learn how Cross-Site Scripting works, its types, and how attackers exploit vulnerable applications.",
    date: "28 June 2026",
    readTime: "8 min read",
    level: "Beginner",
    tags: ["XSS", "OWASP", "JavaScript"],
  },

  {
    id: 2,
    slug: "osint-basics",
    title: "OSINT Basics",
    category: "OSINT",
    summary:
      "Discover how to collect public information using search engines, metadata, social media and passive reconnaissance.",
    date: "29 June 2026",
    readTime: "10 min read",
    level: "Beginner",
    tags: ["OSINT", "Recon", "Google Dork"],
  },

  {
    id: 3,
    slug: "linux-privilege-escalation",
    title: "Linux Privilege Escalation",
    category: "Linux",
    summary:
      "Understand common privilege escalation vectors including SUID binaries, PATH hijacking and misconfigurations.",
    date: "30 June 2026",
    readTime: "15 min read",
    level: "Intermediate",
    tags: ["Linux", "Privilege Escalation", "CTF"],
  },

  {
    id: 4,
    slug: "bug-bounty-methodology",
    title: "Bug Bounty Methodology",
    category: "Bug Bounty",
    summary:
      "A structured workflow for reconnaissance, enumeration, testing and reporting vulnerabilities efficiently.",
    date: "1 July 2026",
    readTime: "12 min read",
    level: "Intermediate",
    tags: ["Bug Bounty", "Recon", "Workflow"],
  },

  {
    id: 5,
    slug: "sql-injection-essentials",
    title: "SQL Injection Essentials",
    category: "Web Security",
    summary:
      "Understand SQL Injection fundamentals, detection techniques and defensive coding practices.",
    date: "2 July 2026",
    readTime: "14 min read",
    level: "Beginner",
    tags: ["SQLi", "Database", "OWASP"],
  },

  {
    id: 6,
    slug: "network-enumeration",
    title: "Network Enumeration",
    category: "Networking",
    summary:
      "Learn practical host discovery, service enumeration and fingerprinting during security assessments.",
    date: "3 July 2026",
    readTime: "11 min read",
    level: "Intermediate",
    tags: ["Nmap", "Networking", "Enumeration"],
  },
];