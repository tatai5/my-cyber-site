import AboutContent from "./AboutContent";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#09090B] py-32"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <div className="flex justify-center">

          <div
            className="
              flex
              h-80
              w-80
              items-center
              justify-center
              rounded-3xl
              border
              border-green-500/20
              bg-zinc-900/60
              text-7xl
              font-black
              text-green-400
              shadow-[0_0_40px_rgba(34,197,94,0.15)]
              backdrop-blur-xl
            "
          >
            S
          </div>

        </div>

        {/* Right */}

        <AboutContent />

      </div>
    </section>
  );
}