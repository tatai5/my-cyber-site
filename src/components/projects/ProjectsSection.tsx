import ProjectCard from "./ProjectCard";
import ProjectHeader from "./ProjectHeader";
import { projects } from "./projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#09090B] px-6 py-28 text-white"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        <ProjectHeader />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              status={project.status}
              tech={project.tech}
              github={project.github}
              demo={project.demo}
            />
          ))}

        </div>

      </div>
    </section>
  );
}