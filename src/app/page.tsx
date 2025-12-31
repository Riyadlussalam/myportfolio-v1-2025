import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Reveal from "@/components/Reveal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="pt-24">
        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Experience />
        </Reveal>
        
        <Reveal>
        <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
