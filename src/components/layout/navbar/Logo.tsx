import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="
        group
        flex
        items-center
        gap-3
        transition-all
        duration-300
      "
    >
      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-green-500/20
          bg-zinc-900/70
          p-1
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:border-green-400
          group-hover:shadow-[0_0_25px_rgba(34,197,94,.25)]
        "
      >
        <Image
          src="/favicon.svg"
          alt="Saswata Logo"
          width={42}
          height={42}
          priority
        />
      </div>

      <div className="leading-tight">
        <h2 className="font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-green-400">
          Saswata
        </h2>

        <p className="text-xs text-zinc-400">
          Cybersecurity Research
        </p>
      </div>
    </Link>
  );
}