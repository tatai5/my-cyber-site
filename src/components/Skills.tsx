import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-14 text-center">

          <p className="uppercase tracking-[5px] text-green-400">
            Expertise
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Technical Skills
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Technologies, tools and cybersecurity domains that I am
            continuously learning and practicing.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {skills.map((skill) => (
            <div
              key={skill.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-green-500"
            >
              <div className="mb-3 flex items-center justify-between">

                <div>
                  <h3 className="font-semibold">
                    {skill.name}
                  </h3>

                  <p className="text-sm text-zinc-500">
                    {skill.category}
                  </p>
                </div>

                <span className="font-bold text-green-400">
                  {skill.level}%
                </span>

              </div>

              <div className="h-3 rounded-full bg-zinc-700">

                <div
                  className="h-3 rounded-full bg-green-500 transition-all duration-500"
                  style={{
                    width: `${skill.level}%`,
                  }}
                />

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}