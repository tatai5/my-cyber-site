import { Note } from "@/data/notesData";

interface NoteContentProps {
  note: Note;
}

export default function NoteContent({
  note,
}: NoteContentProps) {
  return (
    <section className="mt-16 space-y-10">

      {/* Overview */}

      <div>
        <h2 className="mb-5 text-3xl font-bold text-white">
          Overview
        </h2>

        <p className="leading-8 text-zinc-400">
          {note.summary}
        </p>

        <p className="mt-6 leading-8 text-zinc-400">
          This article is currently using placeholder
          content. Once the website is fully completed,
          it will be replaced with real cybersecurity
          research, personal notes, practical examples,
          screenshots, walkthroughs and references.
        </p>
      </div>

      {/* Key Concepts */}

      <div>
        <h2 className="mb-5 text-3xl font-bold text-white">
          Key Concepts
        </h2>

        <ul className="space-y-4 text-zinc-400">
          <li>✔ Practical explanation</li>
          <li>✔ Real world examples</li>
          <li>✔ Offensive & Defensive concepts</li>
          <li>✔ Common mistakes</li>
          <li>✔ Best practices</li>
        </ul>
      </div>

      {/* Tags */}

      <div>
        <h2 className="mb-5 text-3xl font-bold text-white">
          Tags
        </h2>

        <div className="flex flex-wrap gap-3">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-green-500/20
                bg-green-500/10
                px-4
                py-2
                text-sm
                text-green-400
              "
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}