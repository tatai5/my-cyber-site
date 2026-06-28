import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div>
      {/* Badge */}

      <span
        className="
          inline-flex
          rounded-full
          border
          border-green-500/30
          bg-green-500/10
          px-4
          py-2
          text-sm
          font-medium
          text-green-400
        "
      >
        Cybersecurity Researcher
      </span>

      {/* Heading */}

      <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
        Saswata
        <br />

        <span className="text-green-400">
          Raul
        </span>
      </h1>

      {/* Description */}

      <p
        className="
          mt-8
          max-w-xl
          text-lg
          leading-8
          text-zinc-400
        "
      >
        Passionate about Bug Bounty,
        Web Security,
        Linux,
        OSINT
        and Python.

        <br />
        <br />

        This website is my personal Cyber Journal
        where I document everything I learn,
        build security tools
        and share research.
      </p>

      <HeroButtons />

      <HeroStats />
    </div>
  );
}