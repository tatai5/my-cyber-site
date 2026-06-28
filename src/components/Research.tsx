import { research } from "@/data/research";

export default function Research() {
  return (
    <section
      id="research"
      className="bg-[#09090B] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
          Research
        </span>

        <h2 className="mt-8 text-4xl font-bold md:text-5xl">
          Security
          <span className="text-green-400">
            {" "}Research Journal
          </span>
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          A collection of topics, notes and practical research
          that I am currently studying throughout my
          cybersecurity learning journey.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {research.map((item) => (
            <div
              key={item.title}
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
                <h3 className="text-xl font-semibold text-green-400">
                  {item.title}
                </h3>

                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-300">
                  {item.status}
                </span>
              </div>

              <p className="mt-5 leading-7 text-zinc-400">
                {item.summary}
              </p>

              <div className="mt-6 inline-flex rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
                {item.category}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}