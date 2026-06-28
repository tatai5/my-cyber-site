import TypingTerminal from "./TypingTerminal";

export default function TerminalCard() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-green-500/20
        bg-[#0b0f0d]/90
        shadow-2xl
        backdrop-blur-xl
      "
    >
      {/* Top Bar */}

      <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <span className="text-xs text-zinc-500">
          terminal
        </span>
      </div>

      {/* Terminal Body */}

      <div className="p-6">
        <TypingTerminal />
      </div>

      {/* Bottom Glow */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-20
          w-full
          bg-gradient-to-t
          from-green-500/10
          to-transparent
        "
      />
    </div>
  );
}