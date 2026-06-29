import Link from "next/link";
import { notesData } from "@/data/notesData";

export default function Notes() {
  const featuredNotes = notesData.slice(0, 3);

  return (
    <section
      id="notes"
      className="bg-[#09090B] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Badge */}

        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
          Featured Notes
        </span>

        {/* Heading */}

        <h2 className="mt-8 text-4xl font-bold md:text-5xl">
          Latest
          <span className="text-green-400">
            {" "}Research Notes
          </span>
        </h2>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          A selection of my latest cybersecurity learning
          notes covering web security, Linux, OSINT,
          networking and bug bounty.
        </p>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {featuredNotes.map((note) => (

            <div
              key={note.id}
              className="
                rounded-2xl
                border
                border-green-500/20
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-green-400
              "
            >

              <span className="text-sm text-green-400">
                {note.category}
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                {note.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {note.summary}
              </p>

              <p className="mt-6 text-sm text-zinc-500">
                {note.readTime}
              </p>

            </div>

          ))}

        </div>

        {/* Button */}

        <div className="mt-14 flex justify-center">

          <Link
            href="/notes"
            className="
              rounded-xl
              border
              border-green-500/40
              px-8
              py-4
              font-semibold
              text-green-400
              transition-all
              duration-300
              hover:bg-green-500
              hover:text-black
            "
          >
            View All Notes →
          </Link>

        </div>

      </div>
    </section>
  );
}