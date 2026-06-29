interface PageHeaderProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
}

export default function PageHeader({
  badge,
  title,
  highlight,
  description,
}: PageHeaderProps) {
  return (
    <section className="pb-16">

      <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
        {badge}
      </span>

      <h1 className="mt-8 text-5xl font-extrabold md:text-6xl">
        {title}
        <span className="text-green-400">
          {" "}
          {highlight}
        </span>
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
        {description}
      </p>

    </section>
  );
}