const skills = [
  {
    title: "Web Security",
    technologies: [
      "OWASP Top 10",
      "Burp Suite",
      "Recon",
      "XSS",
      "SQL Injection",
    ],
  },
  {
    title: "Linux",
    technologies: [
      "Kali Linux",
      "Bash",
      "Networking",
      "Terminal",
      "File System",
    ],
  },
  {
    title: "OSINT",
    technologies: [
      "Google Dorking",
      "WHOIS",
      "DNS",
      "Metadata",
      "Reconnaissance",
    ],
  },
  {
    title: "Development",
    technologies: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Git",
      "GitHub",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#09090B] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Badge */}

        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
          Skills
        </span>

        {/* Heading */}

        <h2 className="mt-8 text-4xl font-bold md:text-5xl">
          Technologies &
          <span className="text-green-400">
            {" "}Learning Focus
          </span>
        </h2>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          These are the technologies, tools and concepts
          that I actively study and practice as part of my
          cybersecurity learning journey.
        </p>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {skills.map((skill) => (

            <div
              key={skill.title}
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

              <h3 className="text-2xl font-semibold text-green-400">
                {skill.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">

                {skill.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-green-500/20
                      bg-green-500/10
                      px-4
                      py-2
                      text-sm
                      text-zinc-200
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}