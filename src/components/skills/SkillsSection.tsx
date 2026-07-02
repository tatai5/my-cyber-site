import { skills } from "@/data/skills";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#09090B] px-6 py-28 text-white"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
          Skills
        </span>

        <h2 className="mt-8 text-4xl font-black md:text-5xl">
          Technologies &
          <span className="text-green-400">
            {" "}Learning Focus
          </span>
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Technologies, operating systems and cybersecurity domains
          that I actively study, practice and continuously improve.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.name}
              category={skill.category}
              level={skill.level}
            />
          ))}

        </div>

      </div>
    </section>
  );
}