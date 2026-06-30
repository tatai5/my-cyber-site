"use client";

import { useState } from "react";

export default function NoteActions() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(window.location.href);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      alert("Unable to copy link.");
    }
  }

  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <button
        onClick={handleCopy}
        className="
          rounded-xl
          border
          border-green-500/30
          px-5
          py-3
          font-medium
          text-green-400
          transition
          hover:bg-green-500
          hover:text-black
        "
      >
        {copied ? "✅ Link Copied" : "📋 Copy Link"}
      </button>

      <button
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: document.title,
              url: window.location.href,
            });
          } else {
            alert("Sharing is not supported on this device.");
          }
        }}
        className="
          rounded-xl
          border
          border-zinc-700
          px-5
          py-3
          font-medium
          text-zinc-300
          transition
          hover:border-green-400
          hover:text-green-400
        "
      >
        🔗 Share
      </button>

    </div>
  );
}