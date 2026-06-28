export default function BackgroundGlow() {
  return (
    <>
      {/* Left Glow */}
      <div
        className="
          absolute
          -left-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-green-500/20
          blur-[140px]
          animate-pulse
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          -right-40
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-emerald-400/10
          blur-[140px]
          animate-pulse
        "
      />

      {/* Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-green-400/10
          blur-[120px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.06]
          [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      {/* Radial Fade */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_80%)]
        "
      />
    </>
  );
}