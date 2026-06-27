"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        (scrollTop / documentHeight) * 100;

      setWidth(progress);
    }

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[9999] h-1 bg-green-400 transition-all duration-150"
      style={{
        width: `${width}%`,
      }}
    />
  );
}