type SectionHeadingProps = {
  title: string;
  highlight: string;
};

export default function SectionHeading({
  title,
  highlight,
}: SectionHeadingProps) {
  return (
    <h2 className="mt-8 text-4xl font-black leading-tight md:text-5xl">
      {title}
      <span className="text-green-400">
        {" "}
        {highlight}
      </span>
    </h2>
  );
}