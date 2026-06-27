import { research } from "@/data/research";

export default function Research() {
  return (
    <section
      id="research"
      className="bg-zinc-950 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-14 text-center">

          <p className="uppercase tracking-[5px] text-green-400">
            Research
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Latest Research Notes
          </h2>

          <p className="mt-4 text-zinc-400">
            Bug Bounty • Linux • Web Security • OSINT
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {research.map((item) => (

            <div
              key={item.id}
              className="rounded-xl border border-zinc-800 bg-black p-6 transition hover:border-green-500"
            >

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                {item.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold">
                {item.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">

                {item.tags.map((tag) => (

                  <span
                    key={tag}
                    className="rounded bg-zinc-800 px-3 py-1 text-xs"
                  >
                    #{tag}
                  </span>

                ))}

              </div>

              <div className="mt-6 flex justify-between text-sm text-zinc-500">

                <span>{item.difficulty}</span>

                <span>{item.readingTime}</span>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}