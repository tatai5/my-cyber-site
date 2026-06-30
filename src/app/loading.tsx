export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090B]">

      <div className="text-center">

        {/* Spinner */}

        <div
          className="
            mx-auto
            h-20
            w-20
            animate-spin
            rounded-full
            border-4
            border-zinc-800
            border-t-green-400
          "
        />

        <h2 className="mt-10 text-3xl font-bold text-white">
          Initializing...
        </h2>

        <p className="mt-3 text-zinc-500">
          Loading Cyber Knowledge Base
        </p>

        {/* Progress */}

        <div className="mt-10 h-2 w-72 overflow-hidden rounded-full bg-zinc-800">

          <div
            className="
              h-full
              w-1/2
              animate-pulse
              rounded-full
              bg-green-400
            "
          />

        </div>

        <p className="mt-6 font-mono text-sm text-green-400">
          SYSTEM STATUS : LOADING...
        </p>

      </div>

    </main>
  );
}