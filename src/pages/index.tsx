import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ScrollSection from "@/components/ScrollSection";

export default function Home() {
  return (
    <>
      {/* Estilos globales para scrollbar ultra-delgada y oscura */}
      <style jsx global>{`
        html, body {
          scroll-behavior: smooth;
          scrollbar-width: thin;
          scrollbar-color: rgba(17, 24, 39, 0.8) transparent;
          overflow-x: hidden;
        }
        
        html::-webkit-scrollbar, body::-webkit-scrollbar {
          width: 4px;
        }
        
        html::-webkit-scrollbar-track, body::-webkit-scrollbar-track {
          background: transparent;
        }
        
        html::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb {
          background: rgba(17, 24, 39, 0.8);
          border-radius: 2px;
        }
        
        html::-webkit-scrollbar-thumb:hover, body::-webkit-scrollbar-thumb:hover {
          background: rgba(17, 24, 39, 0.95);
        }
        
        /* Scrollbar en modo dark - aún más oscura */
        @media (prefers-color-scheme: dark) {
          html, body {
            scrollbar-color: rgba(0, 0, 0, 0.9) transparent;
          }
          
          html::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.9);
          }
          
          html::-webkit-scrollbar-thumb:hover, body::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 0, 0, 1);
          }
        }
      `}</style>

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
    </>
  );
}