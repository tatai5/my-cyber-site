const stats = [
  {
    value: "2026",
    label: "Started Journey",
  },
  {
    value: "Web",
    label: "Security Focus",
  },
  {
    value: "OSINT",
    label: "Research",
  },
  {
    value: "24/7",
    label: "Learning",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="
            rounded-2xl
            border
            border-green-500/20
            bg-white/5
            p-5
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-green-400
            hover:bg-green-500/10
          "
        >
          <h3 className="text-2xl font-bold text-green-400">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}