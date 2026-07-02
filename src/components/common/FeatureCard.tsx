import Link from "next/link";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  badge: string;
  href: string;
  buttonText?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  badge,
  href,
  buttonText = "View Details →",
}: FeatureCardProps) {
  return (
    <Link href={href} className="block">
      <article
        className="
          group
          rounded-2xl
          border
          border-green-500/20
          bg-zinc-900/60
          p-8
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-green-400
          hover:shadow-[0_0_35px_rgba(34,197,94,.18)]
        "
      >
        <div className="mb-5 text-4xl">
          {icon}
        </div>

        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-5 leading-7 text-zinc-400">
          {description}
        </p>

        <div className="mt-8 flex items-center justify-between">

          <span className="rounded-lg bg-green-500/10 px-3 py-1 text-sm text-green-400">
            {badge}
          </span>

          <span
            className="
              text-green-400
              transition
              duration-300
              group-hover:translate-x-1
            "
          >
            {buttonText}
          </span>

        </div>
      </article>
    </Link>
  );
}