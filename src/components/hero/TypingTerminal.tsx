"use client";

import { useEffect, useState } from "react";

const lines = [
  "$ whoami",
  "saswata",
  "",
  "$ cat skills.txt",
  "✔ Web Security",
  "✔ Bug Bounty",
  "✔ Linux",
  "✔ OSINT",
  "✔ Python",
  "✔ Networking",
  "",
  "$ uptime",
  "Learning every day...",
];

export default function TypingTerminal() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setVisibleLines(lines.slice(0, index + 1));

      index++;

      if (index >= lines.length) {
        clearInterval(interval);
      }
    }, 350);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-1">
      {visibleLines.map((line, index) => (
        <div
          key={index}
          className="font-mono text-sm leading-7 text-zinc-300"
        >
          {line.startsWith("$") ? (
            <>
              <span className="text-green-400">$</span>
              {line.substring(1)}
            </>
          ) : (
            line
          )}
        </div>
      ))}

      <div className="flex items-center">
        <span className="mr-2 text-green-400">$</span>

        <span
          className="
            h-5
            w-[10px]
            animate-pulse
            rounded-sm
            bg-green-400
          "
        />
      </div>
    </div>
  );
}