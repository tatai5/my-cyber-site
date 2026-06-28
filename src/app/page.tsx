import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Notes from "@/components/Notes";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Research />

      <Notes />

      <Footer />

      <ScrollToTop />
    </>
  );
}