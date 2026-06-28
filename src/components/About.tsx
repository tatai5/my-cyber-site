const features = [
  {
    title: "Web Security",
    description:
      "Learning web application security, vulnerability assessment and secure development practices.",
  },
  {
    title: "Bug Bounty",
    description:
      "Documenting my bug bounty journey and improving my penetration testing workflow.",
  },
  {
    title: "OSINT",
    description:
      "Researching open-source intelligence techniques and investigation methodologies.",
  },
  {
    title: "Linux",
    description:
      "Using Linux as my primary environment for cybersecurity learning and development.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#09090B] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Title */}

        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
          About Me
        </span>

        <h2 className="mt-8 text-4xl font-bold md:text-5xl">
          Building Skills Through
          <span className="text-green-400">
            {" "}Continuous Learning
          </span>
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          I am passionate about cybersecurity and continuously
          improving my knowledge in Web Security,
          Bug Bounty Hunting,
          Linux,
          Networking and OSINT.

          <br />
          <br />

          This Cyber Journal serves as my personal learning
          portfolio where I document research,
          projects and practical experiences.
        </p>

        {/* Feature Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="
                rounded-2xl
                border
                border-green-500/20
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-green-400
                hover:bg-green-500/10
              "
            >
              <h3 className="text-xl font-semibold text-green-400">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

        {/* Button */}

        <div className="mt-14">

          <button
            className="
              rounded-xl
              border
              border-green-500/40
              px-8
              py-4
              font-semibold
              transition-all
              duration-300
              hover:bg-green-500
              hover:text-black
            "
          >
            Download Resume
          </button>

        </div>

      </div>
    </section>
  );
}