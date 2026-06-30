"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionLinks = [
    { label: "About", hash: "#about" },
    { label: "Skills", hash: "#skills" },
    { label: "Projects", hash: "#projects" },
    { label: "Research", hash: "#research" },
  ];

  const buildHref = (hash: string) => pathname === "/" ? hash : `/${hash}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/70 px-6 py-4 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 font-bold text-black">S</div>
            <div>
              <h2 className="font-bold text-white">Saswata</h2>
              <p className="text-xs text-zinc-400">Cyber Journal</p>
            </div>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            <li><Link href="/" className={pathname === "/" ? "text-green-400" : "text-zinc-300 hover:text-green-400"}>Home</Link></li>
            {sectionLinks.map(item => (
              <li key={item.hash}><Link href={buildHref(item.hash)} className="text-zinc-300 hover:text-green-400">{item.label}</Link></li>
            ))}
            <li><Link href="/notes" className={pathname.startsWith("/notes") ? "text-green-400" : "text-zinc-300 hover:text-green-400"}>Notes</Link></li>
            <li><Link href="/contact" className={pathname === "/contact" ? "text-green-400" : "text-zinc-300 hover:text-green-400"}>Contact</Link></li>
          </ul>

          <div className="flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hidden md:block rounded-xl border border-green-500/40 px-5 py-2 text-sm text-green-400 hover:bg-green-500 hover:text-black">GitHub</a>
            <button className="text-3xl text-white lg:hidden" onClick={() => setMenuOpen(v => !v)}>☰</button>
          </div>
        </nav>

        {menuOpen && (
          <div className="mt-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 lg:hidden">
            <div className="flex flex-col gap-4">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              {sectionLinks.map(item => (
                <Link key={item.hash} href={buildHref(item.hash)} onClick={() => setMenuOpen(false)}>{item.label}</Link>
              ))}
              <Link href="/notes" onClick={() => setMenuOpen(false)}>Notes</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}