type ProjectCardProps = {
  title: string;
  description: string;
  category: string;
  status: string;
  tech: string[];
  github: string;
  demo: string;
};

export default function ProjectCard({
  title,
  description,
  category,
  status,
  tech,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-green-500/20
        bg-zinc-900/60
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-green-400
        hover:shadow-[0_0_40px_rgba(34,197,94,.18)]
      "
    >
      {/* Top */}

      <div className="flex items-center justify-between">

        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
          {category}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${status === "Active"
              ? "bg-green-500/10 text-green-400"
              : "bg-yellow-500/10 text-yellow-400"
            }`}
        >
          {status}
        </span>

      </div>

      {/* Title */}

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-4 leading-7 text-zinc-400">
        {description}
      </p>

      {/* Tech Stack */}

      <div className="mt-6 flex flex-wrap gap-2">

        {tech.map((item) => (
          <span
            key={item}
            className="
              rounded-full
              border
              border-green-500/20
              bg-green-500/10
              px-3
              py-1
              text-xs
              text-zinc-200
            "
          >
            {item}
          </span>
        ))}

      </div>

      {/* Buttons */}

      <div className="mt-8 flex gap-3">

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-xl
            border
            border-green-500/30
            px-5
            py-3
            text-sm
            font-medium
            text-green-400
            transition-all
            duration-300
            hover:bg-green-500
            hover:text-black
          "
        >
          GitHub
        </a>

        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-xl
            bg-green-500
            px-5
            py-3
            text-sm
            font-medium
            text-black
            transition-all
            duration-300
            hover:bg-green-400
          "
        >
          Live Demo
        </a>

      </div>
    </div>
  );
}