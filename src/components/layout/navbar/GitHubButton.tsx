export default function GitHubButton() {
  return (
    <a
      href="https://github.com/tatai5"
      target="_blank"
      rel="noopener noreferrer"
      className="
        hidden
        md:inline-flex
        items-center
        justify-center
        rounded-2xl
        border
        border-green-500/25
        bg-zinc-900/60
        px-5
        py-2.5
        text-sm
        font-medium
        text-green-400
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-green-400
        hover:bg-green-500
        hover:text-black
        hover:shadow-[0_0_30px_rgba(34,197,94,.30)]
      "
    >
      GitHub
    </a>
  );
}