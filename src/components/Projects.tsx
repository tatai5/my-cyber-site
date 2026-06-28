import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#09090B] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Badge */}

        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
          Projects
        </span>

        {/* Heading */}

        <h2 className="mt-8 text-4xl font-bold md:text-5xl">
          Featured
          <span className="text-green-400">
            {" "}Projects
          </span>
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Projects that represent my learning journey in
          cybersecurity, web development and research.
        </p>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                rounded-2xl
                border
                border-green-500/20
                bg-white/5
                p-7
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-green-400
                hover:bg-green-500/10
              "
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-green-400">
                  {project.title}
                </h3>

                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-300">
                  {project.status}
                </span>
              </div>

              <p className="mt-5 leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-green-500/20 bg-black/30 px-3 py-1 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href={project.github}
                  className="rounded-xl border border-green-500/30 px-5 py-2 transition hover:bg-green-500 hover:text-black"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="rounded-xl border border-zinc-700 px-5 py-2 transition hover:border-green-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}