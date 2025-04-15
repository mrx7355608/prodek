import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero-Section";
import ServicesSection from "./components/Services-Section";
import PortfolioSection from "./components/Portfolio-Section";
import TestimonialsSection from "./components/testimonials-section";
import ContactSection from "./components/Contact-Section";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero-Section";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
