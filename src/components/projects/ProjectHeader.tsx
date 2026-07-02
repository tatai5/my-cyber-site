export default function ProjectHeader() {
  return (
    <>
      <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
        Featured Projects
      </span>

      <h2 className="mt-8 text-4xl font-black md:text-5xl">
        Things I've
        <span className="text-green-400"> Built</span>
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
        A selection of projects focused on cybersecurity,
        automation, web development and research.
      </p>
    </>
  );
}