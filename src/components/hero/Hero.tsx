import BackgroundGlow from "./BackgroundGlow";
import HeroContent from "./HeroContent";
import TerminalCard from "./TerminalCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#09090B] text-white"
    >
      {/* Background */}

      <BackgroundGlow />

      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-screen
          max-w-7xl
          items-center
          gap-16
          px-6
          py-24
          lg:grid-cols-2
        "
      >
        {/* Left */}

        <HeroContent />

        {/* Right */}

        <TerminalCard />
      </div>
    </section>
  );
}