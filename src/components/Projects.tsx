import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-zinc-950 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[5px] text-green-400">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-zinc-400">
            A collection of my cybersecurity learning journey,
            practical research and security projects.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)]"
            >
              <div className="text-5xl">
                {project.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {project.description}
              </p>

              <span className="mt-8 inline-block rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
                {project.category}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}