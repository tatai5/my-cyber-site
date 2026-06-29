import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import PageHeader from "@/components/common/PageHeader";
import PageContainer from "@/components/common/PageContainer";

export default function ToolsPage() {
  return (
    <>
      <Navbar />

      <PageContainer>
        <PageHeader
          badge="Cyber Security Toolkit"
          title="Security"
          highlight="Tools"
          description="A curated collection of cybersecurity tools, utilities, scripts and resources that I frequently use during learning, research and ethical hacking."
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
                🧰
              </div>

              <h2 className="text-2xl font-bold text-white">
                Tool Name
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                Placeholder description for security
                tools, utilities and resources.
                Real recommendations will be added
                after the website is completed.
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="rounded-lg bg-green-500/10 px-3 py-1 text-sm text-green-400">
                  Coming Soon
                </span>

                <button className="text-green-400">
                  View →
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