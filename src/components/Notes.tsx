import { notes } from "@/data/notes";

export default function Notes() {
  return (
    <section
      id="notes"
      className="bg-black py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-14 text-center">
          <p className="uppercase tracking-[5px] text-green-400">
            Notes
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Knowledge Base
          </h2>

          <p className="mt-4 text-zinc-400">
            Quick references and personal cybersecurity notes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {notes.map((note) => (

            <div
              key={note.id}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-green-500"
            >

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                {note.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold">
                {note.title}
              </h3>

              <p className="mt-4 text-zinc-400">
                {note.description}
              </p>

              <div className="mt-6 text-sm text-zinc-500">
                {note.date}
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}