import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import PageHeader from "@/components/common/PageHeader";
import PageContainer from "@/components/common/PageContainer";
import FeatureCard from "@/components/common/FeatureCard";

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
          {Array.from({ length: 6 }).map((_, index) => (
            <FeatureCard
              key={index}
              icon="🚀"
              title="Project Title"
              description="This project description is placeholder content. Real projects will be added after the website development is completed."
              badge="Coming Soon"
              buttonText="Details →"
            />
          ))}
        </div>
      </PageContainer>

      <Footer />
    </>
  );
}