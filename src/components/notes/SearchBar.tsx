"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="mt-12">
      <div className="relative">
        {/* Search Icon */}

        <svg
          className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.35-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search notes..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full
            rounded-2xl
            border
            border-green-500/20
            bg-zinc-900/70
            py-4
            pl-14
            pr-5
            text-white
            outline-none
            backdrop-blur-xl
            transition-all
            duration-300
            placeholder:text-zinc-500
            focus:border-green-400
            focus:ring-2
            focus:ring-green-500/30
          "
        />
      </div>
    </div>
  );
}