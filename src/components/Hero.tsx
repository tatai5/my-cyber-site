export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#09090B] text-white"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-green-500/10 blur-[120px]" />

      <div className="absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            Cybersecurity Researcher
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">

            Saswata

            <br />

            <span className="text-green-400">
              Raul
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">

            Passionate about Bug Bounty, Web Security,
            Linux, OSINT and Python.

            This website is my personal Cyber Journal
            where I document everything I learn.

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <button
              className="
              rounded-xl
              bg-green-500
              px-8
              py-4
              font-semibold
              text-black
              transition
              duration-300
              hover:scale-105
              hover:bg-green-400
              "
            >
              Explore Research
            </button>

            <button
              className="
              rounded-xl
              border
              border-green-500/40
              px-8
              py-4
              transition
              duration-300
              hover:bg-green-500/10
              "
            >
              GitHub
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <div
            className="
            rounded-3xl
            border
            border-green-500/20
            bg-zinc-900/70
            p-8
            shadow-[0_0_40px_rgba(34,197,94,0.15)]
            backdrop-blur-xl
            "
          >

            <div className="mb-8 flex gap-3">

              <div className="h-3 w-3 rounded-full bg-red-500" />

              <div className="h-3 w-3 rounded-full bg-yellow-500" />

              <div className="h-3 w-3 rounded-full bg-green-500" />

            </div>

            <pre className="font-mono text-green-400 leading-8">

              {`$ whoami

saswata

$ focus

Web Security

OSINT

Linux

Bug Bounty

Python

$ status

Learning every day...
█`}

            </pre>

          </div>

        </div>

      </div>
    </section>
  );
}