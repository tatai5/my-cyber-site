import { notFound } from "next/navigation";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#09090B] pt-32 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            {project.category}
          </span>

          <h1 className="mt-8 text-5xl font-black">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            {project.fullDescription}
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-green-500/20 bg-zinc-900 px-4 py-2 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-green-400">Status</h3>

              <p className="mt-3">
                {project.status}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-green-400">Category</h3>

              <p className="mt-3">
                {project.category}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-green-400">Year</h3>

              <p className="mt-3">
                {project.year}
              </p>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}