export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="mb-12 text-center text-4xl font-bold text-green-400">
          About Me
        </h2>

        <div className="grid gap-10 md:grid-cols-2 items-center">

          <div>
            <img
              src="https://placehold.co/500x500/111111/00ff88?text=Your+Photo"
              alt="Profile"
              className="rounded-2xl border border-green-500 shadow-lg"
            />
          </div>

          <div>

            <h3 className="text-3xl font-bold">
              Hi, I'm Saswata
            </h3>

            <p className="mt-6 text-gray-400 leading-8">
              I am passionate about Cybersecurity, Ethical Hacking,
              OSINT, Digital Forensics, Web Security and Bug Bounty.
              I enjoy learning new technologies and documenting my
              research through this Cyber Journal.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                Ethical Hacking
              </span>

              <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                OSINT
              </span>

              <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                Bug Bounty
              </span>

              <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                Linux
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}