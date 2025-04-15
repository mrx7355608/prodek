import ServicesSection from "./components/Services-Section";
import PortfolioSection from "./components/Portfolio-Section";
import TestimonialsSection from "./components/testimonials-section";
import ContactSection from "./components/Contact-Section";
import HeroSection from "./components/Hero-Section";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
