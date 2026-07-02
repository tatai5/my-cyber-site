import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/Footer";

import PageHeader from "@/components/common/PageHeader";
import PageContainer from "@/components/common/PageContainer";
import FeatureCard from "@/components/common/FeatureCard";

import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <PageContainer>
        <PageHeader
          badge="Cyber Security Projects"
          title="My"
          highlight="Projects"
          description="A collection of cybersecurity tools, web applications, automation projects, OSINT utilities and learning experiments that I have built and continue to improve."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <FeatureCard
              key={project.id}
              icon="🚀"
              title={project.title}
              description={project.shortDescription}
              badge={project.status}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </PageContainer>

      <Footer />
    </>
  );
}