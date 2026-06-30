import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090B] px-6">

      <div className="max-w-3xl text-center">

        <p className="text-lg font-semibold tracking-[4px] text-green-400">
          ERROR 404
        </p>

        <h1 className="mt-6 text-7xl font-extrabold text-white md:text-8xl">
          Page Not
          <span className="block text-green-400">
            Found
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          The page you are looking for doesn't exist,
          has been moved or the URL is incorrect.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="
              rounded-xl
              bg-green-500
              px-6
              py-3
              font-semibold
              text-black
              transition
              hover:bg-green-400
            "
          >
            Go Home
          </Link>

          <Link
            href="/notes"
            className="
              rounded-xl
              border
              border-green-500/40
              px-6
              py-3
              font-semibold
              text-green-400
              transition
              hover:bg-green-500
              hover:text-black
            "
          >
            Browse Notes
          </Link>

        </div>

        <div className="mt-20 font-mono text-sm text-zinc-600">
          SYSTEM STATUS :
          <span className="ml-2 text-green-400">
            ONLINE
          </span>
        </div>

      </div>

    </main>
  );
}