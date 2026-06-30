export default function NotesHeader() {
  return (
    <section className="mb-14 text-center">

      <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400">
        📚 Cyber Security Knowledge Base
      </div>

      <h1 className="mt-8 text-5xl font-extrabold text-white md:text-6xl">
        Research
        <br />
        <span className="text-green-400">
          Notes
        </span>
      </h1>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
        A collection of my cybersecurity learning notes,
        research, bug bounty methodologies, Linux tips,
        OSINT techniques, web security concepts and
        practical write-ups.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-5">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 px-8 py-5">
          <p className="text-3xl font-bold text-green-400">
            50+
          </p>

          <p className="mt-2 text-zinc-400">
            Future Notes
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 px-8 py-5">
          <p className="text-3xl font-bold text-green-400">
            10+
          </p>

          <p className="mt-2 text-zinc-400">
            Categories
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 px-8 py-5">
          <p className="text-3xl font-bold text-green-400">
            ∞
          </p>

          <p className="mt-2 text-zinc-400">
            Learning
          </p>
        </div>

      </div>

    </section>
  );
}