import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import Research from "@/components/Research";
import Notes from "@/components/Notes";

export default function HomeSections() {
  return (
    <>
      <Hero />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <Research />

      <Notes />
    </>
  );
}