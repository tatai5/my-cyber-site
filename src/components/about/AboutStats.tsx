const stats = [
  {
    value: "24/7",
    title: "Learning",
  },
  {
    value: "OSINT",
    title: "Research",
  },
  {
    value: "Linux",
    title: "Daily",
  },
  {
    value: "Web",
    title: "Security",
  },
];

export default function AboutStats() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 backdrop-blur-xl transition duration-300 hover:border-green-500/30"
        >
          <h3 className="text-2xl font-bold text-green-400">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-zinc-300">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}