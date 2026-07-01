"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Notes",
    href: "/notes",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Research",
    href: "/research",
  },
  {
    label: "Writeups",
    href: "/writeups",
  },
  {
    label: "Tools",
    href: "/tools",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <nav
          className={`flex items-center justify-between rounded-2xl border px-6 py-4 transition-all duration-300 ${scrolled
              ? "border-green-500/20 bg-zinc-950/85 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,.45)]"
              : "border-white/10 bg-zinc-900/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,.35)]"
            }`}
        >
          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/favicon.svg"
              alt="Logo"
              width={42}
              height={42}
              className="rounded-xl"
              priority
            />

            <div className="leading-tight">
              <h2 className="font-bold tracking-wide text-white">
                Saswata
              </h2>

              <p className="text-xs text-zinc-400">
                Cybersecurity Research
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}

          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative pb-1 text-sm font-medium transition-all duration-300 ${pathname === item.href
                      ? "text-green-400"
                      : "text-zinc-300 hover:text-green-400"
                    }`}
                >
                  {item.label}

                  {pathname === item.href && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-green-400" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right */}

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/tatai5"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl border border-green-500/40 px-5 py-2 text-sm font-medium text-green-400 transition-all duration-300 hover:bg-green-500 hover:text-black md:block"
            >
              GitHub
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl text-white transition hover:text-green-400 lg:hidden"
            >
              ☰
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div
            className="
            mt-3
            overflow-hidden
            rounded-2xl
            border
            border-green-500/20
            bg-zinc-950/95
            p-5
            shadow-2xl
            backdrop-blur-2xl
            lg:hidden
          "
          >
            <div className="flex flex-col gap-5">

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-2 py-2 text-base font-medium transition-all duration-300 ${pathname === item.href
                      ? "bg-green-500/10 text-green-400"
                      : "text-zinc-300 hover:bg-zinc-900 hover:text-green-400"
                    }`}
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="https://github.com/tatai5"
                target="_blank"
                rel="noopener noreferrer"
                className="
                mt-2
                rounded-xl
                border
                border-green-500/40
                px-4
                py-3
                text-center
                font-medium
                text-green-400
                transition-all
                duration-300
                hover:bg-green-500
                hover:text-black
              "
              >
                GitHub
              </a>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}