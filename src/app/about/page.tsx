import Navbar from "@/components/layout/navbar/Navbar";
import AboutSection from "@/components/about/AboutSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main className="pt-28">
        <AboutSection />
      </main>

      <Footer />

      <ScrollToTop />
    </>
  );
}