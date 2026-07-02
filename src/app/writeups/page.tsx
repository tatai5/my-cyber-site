import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/Footer";

import PageHeader from "@/components/common/PageHeader";
import PageContainer from "@/components/common/PageContainer";

export default function WriteupsPage() {
  return (
    <>
      <Navbar />

      <PageContainer>
        <PageHeader
          badge="Security Writeups"
          title="CTF &"
          highlight="Writeups"
          description="A collection of CTF walkthroughs, TryHackMe labs, Hack The Box machines, PortSwigger labs and security challenge writeups. Real content will be published after development is complete."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <article
              key={item}
              className="
                rounded-2xl
                border
                border-green-500/20
                bg-zinc-900/60
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-green-400
                hover:shadow-[0_0_35px_rgba(34,197,94,.18)]
              "
            >
              <div className="mb-5 text-4xl">
                🛡️
              </div>

              <h2 className="text-2xl font-bold text-white">
                Writeup Title
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                Placeholder writeup description.
                Future walkthroughs, CTF solutions,
                penetration testing reports and lab notes
                will appear here.
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="rounded-lg bg-green-500/10 px-3 py-1 text-sm text-green-400">
                  Coming Soon
                </span>

                <button className="text-green-400">
                  Read →
                </button>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>

      <Footer />
    </>
  );
}