import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Arsenal from "@/components/Arsenal";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Arsenal />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
