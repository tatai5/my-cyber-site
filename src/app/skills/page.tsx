import Navbar from "@/components/layout/navbar/Navbar";
import SkillsSection from "@/components/skills/SkillsSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

export default function SkillsPage() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main className="pt-28">
        <SkillsSection />
      </main>

      <Footer />

      <ScrollToTop />
    </>
  );
}