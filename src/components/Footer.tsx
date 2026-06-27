export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-10 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <div className="flex flex-col items-center gap-4 text-center">

          <h2 className="text-2xl font-bold text-green-400">
            Cyber Journal
          </h2>

          <p className="max-w-xl text-sm text-zinc-400">
            Personal Cybersecurity Research Journal focused on
            Bug Bounty, Web Security, Linux, OSINT and Continuous Learning.
          </p>

          <div className="flex gap-6 text-sm">

            <a
              href="#"
              className="transition hover:text-green-400"
            >
              GitHub
            </a>

            <a
              href="#"
              className="transition hover:text-green-400"
            >
              Contact
            </a>

            <a
              href="#"
              className="transition hover:text-green-400"
            >
              Email
            </a>

          </div>

          <div className="mt-4 border-t border-zinc-800 pt-4 text-sm text-zinc-500">
            © 2026 Saswata • Built with Next.js & Tailwind CSS
          </div>

        </div>

      </div>
    </footer>
  );
}