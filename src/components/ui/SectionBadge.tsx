type SectionBadgeProps = {
  children: React.ReactNode;
};

export default function SectionBadge({
  children,
}: SectionBadgeProps) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-green-500/20
        bg-green-500/10
        px-4
        py-2
        text-sm
        font-medium
        text-green-400
        backdrop-blur-xl
      "
    >
      {children}
    </span>
  );
}