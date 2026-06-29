import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <nav
          className="
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-white/10
            bg-zinc-900/70
            px-6
            py-4
            backdrop-blur-xl
            shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          "
        >
          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-green-500
                font-bold
                text-black
              "
            >
              S
            </div>

            <div>
              <h2 className="font-bold text-white">
                Saswata
              </h2>

              <p className="text-xs text-zinc-400">
                Cyber Journal
              </p>
            </div>
          </Link>

          {/* Navigation */}

          <ul className="hidden items-center gap-8 lg:flex">

            <li>
              <Link
                href="/"
                className="text-zinc-300 transition hover:text-green-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="text-zinc-300 transition hover:text-green-400"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="/research"
                className="text-zinc-300 transition hover:text-green-400"
              >
                Research
              </Link>
            </li>

            <li>
              <Link
                href="/notes"
                className="text-zinc-300 transition hover:text-green-400"
              >
                Notes
              </Link>
            </li>

            <li>
              <Link
                href="/writeups"
                className="text-zinc-300 transition hover:text-green-400"
              >
                Writeups
              </Link>
            </li>

            <li>
              <Link
                href="/tools"
                className="text-zinc-300 transition hover:text-green-400"
              >
                Tools
              </Link>
            </li>

          </ul>

          {/* GitHub */}

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-xl
              border
              border-green-500/40
              px-5
              py-2
              text-sm
              text-green-400
              transition
              hover:bg-green-500
              hover:text-black
            "
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}