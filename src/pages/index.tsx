import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
    </main>
  );
}
