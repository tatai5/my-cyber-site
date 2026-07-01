type SkillCardProps = {
  title: string;
  technologies: string[];
};

export default function SkillCard({
  title,
  technologies,
}: SkillCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-green-500/20
        bg-zinc-900/60
        p-7
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-green-400
        hover:shadow-[0_0_35px_rgba(34,197,94,0.15)]
      "
    >
      <h3 className="text-2xl font-bold text-green-400">
        {title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-green-500/20
              bg-green-500/10
              px-4
              py-2
              text-sm
              text-zinc-200
              transition
              group-hover:border-green-400/40
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}