type SectionProps = {
  id?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-[#09090B] px-6 py-28 text-white"
    >
      {/* Left Glow */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-green-500/10 blur-[120px]" />

      {/* Right Glow */}
      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
}