import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Research", href: "/#research" },
  { label: "Notes", href: "/notes" },
  { label: "Contact", href: "/contact" },
];

const resources = [
  { label: "Notes", href: "/notes" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Writeups", href: "/writeups" },
  { label: "Tools", href: "/tools" },
];

const social = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:contact@example.com" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800 bg-[#09090B]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500 font-bold text-black">
                S
              </div>
              <div>
                <h2 className="font-bold text-white">Saswata</h2>
                <p className="text-sm text-zinc-500">Cyber Journal</p>
              </div>
            </div>
            <p className="mt-6 leading-7 text-zinc-400">
              Personal cybersecurity portfolio, research hub and knowledge base
              built with Next.js, TypeScript and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-400 hover:text-green-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-400 hover:text-green-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Connect</h3>
            <ul className="space-y-3">
              {social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-zinc-400 hover:text-green-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="/"
              className="mt-8 inline-flex rounded-xl border border-green-500/40 px-5 py-3 text-green-400 hover:bg-green-500 hover:text-black"
            >
              ↑ Back to Top
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>© 2026 Saswata. All rights reserved.</p>
          <p>Built with Next.js + TypeScript + Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}