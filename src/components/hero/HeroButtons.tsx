export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-wrap gap-5">
      {/* Explore Button */}

      <a
        href="#research"
        className="
          inline-flex
          items-center
          justify-center
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
          hover:shadow-[0_0_30px_rgba(34,197,94,0.45)]
        "
      >
        Explore Research
      </a>

      {/* GitHub Button */}

      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          justify-center
          rounded-xl
          border
          border-green-500/40
          bg-white/5
          px-8
          py-4
          font-semibold
          text-white
          backdrop-blur
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-green-400
          hover:bg-green-500/10
        "
      >
        GitHub
      </a>
    </div>
  );
}