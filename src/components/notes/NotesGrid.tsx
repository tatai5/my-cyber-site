import NoteCard from "./NoteCard";
import { Note } from "@/data/notesData";

interface NotesGridProps {
  notes: Note[];
}

export default function NotesGrid({ notes }: NotesGridProps) {
  if (notes.length === 0) {
    return (
      <section className="mt-14">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-12 text-center">
          <h3 className="text-2xl font-bold text-white">
            No notes found
          </h3>

          <p className="mt-4 text-zinc-400">
            Try another search keyword.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-14">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
          />
        ))}
      </div>
    </section>
  );
}