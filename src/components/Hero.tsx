export default function Hero() {
  const stats = [
    {
      value: "2026",
      title: "Started",
      subtitle: "Journey",
    },
    {
      value: "Web",
      title: "Security",
      subtitle: "Focus",
    },
    {
      value: "OSINT",
      title: "Research",
      subtitle: "Active",
    },
    {
      value: "24/7",
      title: "Learning",
      subtitle: "Mindset",
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#09090B] text-white"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="absolute -left-44 top-0 h-[450px] w-[450px] rounded-full bg-green-500/10 blur-[140px]" />

      <div className="absolute -right-44 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-[140px]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* LEFT */}

        <div className="space-y-8">

          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm font-medium text-green-400 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Cybersecurity Researcher
          </div>

          <div>
            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Building
              <br />

              <span className="text-green-400">
                Secure Digital
              </span>

              <br />

              Experiences
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              Hi, I'm <span className="font-semibold text-white">Saswata Raul</span>.
              I focus on Web Security, Bug Bounty, OSINT, Linux and Cybersecurity
              Research. This website is my digital lab where I publish projects,
              research, notes and experiments.
            </p>
          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4">

            <button
              className="
                rounded-xl
                bg-green-500
                px-8
                py-4
                font-semibold
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-green-400
                hover:shadow-[0_0_35px_rgba(34,197,94,.35)]
              "
            >
              Explore Research
            </button>

            <button
              className="
                rounded-xl
                border
                border-green-500/30
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:border-green-400
                hover:bg-green-500/10
              "
            >
              View Projects
            </button>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-4">

            {stats.map((item) => (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-zinc-900/60
                  p-5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-green-500/30
                  hover:-translate-y-1
                "
              >
                <h3 className="text-2xl font-bold text-green-400">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm font-medium text-white">
                  {item.title}
                </p>

                <p className="text-xs text-zinc-500">
                  {item.subtitle}
                </p>
              </div>
            ))}

          </div>

        </div>
        {/* RIGHT */}

        <div className="relative">

          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-green-500/20
              bg-zinc-900/70
              p-8
              shadow-[0_0_45px_rgba(34,197,94,.12)]
              backdrop-blur-2xl
              transition-all
              duration-500
              hover:border-green-500/40
              hover:shadow-[0_0_60px_rgba(34,197,94,.18)]
            "
          >

            {/* Window Buttons */}

            <div className="mb-8 flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-red-500" />

              <div className="h-3 w-3 rounded-full bg-yellow-500" />

              <div className="h-3 w-3 rounded-full bg-green-500" />

              <div className="ml-auto text-xs text-zinc-500">
                terminal
              </div>

            </div>

            <pre className="overflow-x-auto font-mono text-sm leading-8 text-green-400">

              {`$ whoami

saswata

$ specialization

Web Security
OSINT
Linux
Bug Bounty
Python

$ current_status

Building My Cyber Site...

$ uptime

Learning every day...

$ █`}

            </pre>

          </div>

          {/* Background Glow */}

          <div className="absolute -right-10 -top-10 -z-10 h-48 w-48 rounded-full bg-green-500/10 blur-[90px]" />

          <div className="absolute -bottom-10 -left-10 -z-10 h-56 w-56 rounded-full bg-emerald-400/10 blur-[90px]" />

        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          Scroll
        </span>

        <div className="flex h-10 w-6 justify-center rounded-full border border-green-500/30">
          <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-green-400" />
        </div>
      </div>
    </section>
  );
}