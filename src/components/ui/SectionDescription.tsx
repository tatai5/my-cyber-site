type SectionDescriptionProps = {
  children: React.ReactNode;
};

export default function SectionDescription({
  children,
}: SectionDescriptionProps) {
  return (
    <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
      {children}
    </p>
  );
}