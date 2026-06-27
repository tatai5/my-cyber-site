export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <h1 className="text-xl font-bold text-green-400">
          Cyber Journal
        </h1>

        <ul className="hidden gap-8 text-sm text-gray-300 md:flex">

          <li>
            <a
              href="#home"
              className="transition hover:text-green-400"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="transition hover:text-green-400"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#research"
              className="transition hover:text-green-400"
            >
              Research
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="transition hover:text-green-400"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#notes"
              className="transition hover:text-green-400"
            >
              Notes
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="transition hover:text-green-400"
            >
              About
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}