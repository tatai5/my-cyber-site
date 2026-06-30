import Link from "next/link";
import { Note } from "@/data/notesData";

interface RelatedNotesProps {
  notes: Note[];
}

export default function RelatedNotes({
  notes,
}: RelatedNotesProps) {
  if (notes.length === 0) {
    return null;
  }

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Related Notes
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {notes.map((note) => (
          <Link
            key={note.id}
            href={`/notes/${note.slug}`}
            className="
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900/50
              p-6
              transition
              hover:border-green-400
            "
          >
            <p className="text-sm text-green-400">
              {note.category}
            </p>

            <h3 className="mt-3 text-xl font-bold text-white">
              {note.title}
            </h3>

            <p className="mt-3 text-zinc-400">
              {note.summary}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}