import Link from "next/link";
import { Note } from "@/data/notesData";

interface NoteNavigationProps {
  previousNote: Note | null;
  nextNote: Note | null;
}

export default function NoteNavigation({
  previousNote,
  nextNote,
}: NoteNavigationProps) {
  return (
    <div className="mt-20 grid gap-6 border-t border-zinc-800 pt-10 md:grid-cols-2">

      {previousNote ? (
        <Link
          href={`/notes/${previousNote.slug}`}
          className="
            rounded-2xl
            border
            border-zinc-800
            p-6
            transition
            hover:border-green-400
          "
        >
          <p className="text-sm text-zinc-500">
            ← Previous Note
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            {previousNote.title}
          </h3>
        </Link>
      ) : (
        <div />
      )}

      {nextNote ? (
        <Link
          href={`/notes/${nextNote.slug}`}
          className="
            rounded-2xl
            border
            border-zinc-800
            p-6
            text-right
            transition
            hover:border-green-400
          "
        >
          <p className="text-sm text-zinc-500">
            Next Note →
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            {nextNote.title}
          </h3>
        </Link>
      ) : (
        <div />
      )}

    </div>
  );
}