import { Note } from "@/data/notesData";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-green-500/20
        bg-[#0d1117]/80
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-green-400/60
        hover:shadow-[0_0_35px_rgba(34,197,94,0.18)]
      "
    >
      {/* Top Glow */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-green-400
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Category + Level */}
      <div className="mb-5 flex items-center justify-between">
        <span
          className="
            rounded-full
            border
            border-green-500/30
            bg-green-500/10
            px-3
            py-1
            text-xs
            font-semibold
            text-green-400
          "
        >
          {note.category}
        </span>

        <span className="text-xs text-zinc-500">
          {note.level}
        </span>
      </div>

      {/* Title */}
      <h3
        className="
          text-2xl
          font-bold
          text-white
          transition-colors
          duration-300
          group-hover:text-green-400
        "
      >
        {note.title}
      </h3>

      {/* Summary */}
      <p
        className="
          mt-4
          leading-7
          text-zinc-400
        "
      >
        {note.summary}
      </p>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-lg
              bg-zinc-800
              px-2.5
              py-1
              text-xs
              text-zinc-300
            "
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div
        className="
          mt-8
          flex
          items-center
          justify-between
          border-t
          border-zinc-800
          pt-5
        "
      >
        <div>
          <p className="text-xs text-zinc-500">
            {note.date}
          </p>

          <p className="mt-1 text-sm text-green-400">
            {note.readTime}
          </p>
        </div>

        <button
          className="
            rounded-xl
            border
            border-green-500/30
            px-4
            py-2
            text-sm
            font-semibold
            text-green-400
            transition-all
            duration-300
            hover:bg-green-500
            hover:text-black
          "
        >
          Read →
        </button>
      </div>
    </article>
  );
}