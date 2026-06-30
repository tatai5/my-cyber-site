import Link from "next/link";
import { Note } from "@/data/notesData";

interface NoteHeaderProps {
  note: Note;
}

export default function NoteHeader({
  note,
}: NoteHeaderProps) {
  return (
    <>
      {/* Back Button */}

      <Link
        href="/notes"
        className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          border
          border-green-500/30
          px-5
          py-3
          text-green-400
          transition
          hover:bg-green-500
          hover:text-black
        "
      >
        ← Back to Notes
      </Link>

      {/* Category */}

      <div className="mt-10">
        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
          {note.category}
        </span>
      </div>

      {/* Title */}

      <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl">
        {note.title}
      </h1>

      {/* Meta */}

      <div className="mt-6 flex flex-wrap gap-6 text-sm text-zinc-500">
        <span>📅 {note.date}</span>

        <span>⏱ {note.readTime}</span>

        <span>🎯 {note.level}</span>
      </div>

      {/* Summary */}

      <p className="mt-10 text-xl leading-9 text-zinc-300">
        {note.summary}
      </p>
    </>
  );
}