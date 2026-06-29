export default function NotesHeader() {
  return (
    <section className="text-center">
      {/* Badge */}
      <div className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
        📚 Cyber Security Knowledge Base
      </div>

      {/* Title */}
      <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
        Research
        <span className="block text-green-400">Notes</span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        A collection of my cybersecurity learning notes, research,
        bug bounty methodologies, Linux tips, OSINT techniques,
        web security concepts and practical write-ups.
      </p>

      {/* Stats */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-6 py-4">
          <p className="text-2xl font-bold text-green-400">50+</p>
          <p className="text-sm text-zinc-400">Future Notes</p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-6 py-4">
          <p className="text-2xl font-bold text-green-400">10+</p>
          <p className="text-sm text-zinc-400">Categories</p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-6 py-4">
          <p className="text-2xl font-bold text-green-400">∞</p>
          <p className="text-sm text-zinc-400">Learning</p>
        </div>
      </div>
    </section>
  );
}