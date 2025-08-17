import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ScrollSection from "@/components/ScrollSection";

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="snap-y snap-mandatory">
        <ScrollSection variant="zoom">
          <Hero />
        </ScrollSection>
        <ScrollSection variant="zoom">
          <About />
        </ScrollSection>
        <ScrollSection variant="zoom">
          <Experience />
        </ScrollSection>
        <ScrollSection variant="zoom">
          <Contact />
        </ScrollSection>
      </div>
    </main>
  );
}