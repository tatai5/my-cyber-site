type SkillCardProps = {
  title: string;
  category: string;
  level: number;
};

export default function SkillCard({
  title,
  category,
  level,
}: SkillCardProps) {
  return (
    <div className="rounded-2xl border border-green-500/20 bg-zinc-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-400">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-green-400">
          {title}
        </h3>

        <span className="text-sm text-zinc-400">
          {level}%
        </span>
      </div>

      <p className="mt-2 text-sm text-zinc-500">
        {category}
      </p>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-green-500 transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}