"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ServicesList from "./services/ServicesList";

// Service card data
const services = [
  {
    id: 1,
    title: "Web Design",
    description:
      "We design modern, responsive websites that blend aesthetics with functionality—crafted to engage users, boost conversions, and elevate your online presence.",
    image: "/web-design-service.jpg",
  },
  {
    id: 2,
    title: "App Development",
    description:
      "From concept to launch, we create powerful, user-centric mobile and web applications with seamless performance and intuitive interfaces across all platforms.",
    image: "/app-dev-service.jpg",
  },
  {
    id: 3,
    title: "Branding",
    description:
      "We help you build a distinctive brand identity through logo design, color schemes, typography, and brand voice—everything needed to tell your story and stand out in a crowded market.",
    image: "/branding-service.jpg",
  },
  {
    id: 4,
    title: "Animations",
    description:
      "We create dynamic animations and motion graphics that enhance storytelling, simplify complex ideas, and add personality to your brand—perfect for websites, apps, social media, and explainer videos.",
    image: "/animation-service.jpg",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: any) => {
    const container = scrollRef.current;
    if (container) {
      e.preventDefault();
      container.scrollLeft += e.deltaY * 3;
    }
  };

  return (
    <section
      ref={ref}
      onWheel={handleWheel}
      className="py-20 relative overflow-x-hidden"
      id="services"
      style={{
        background:
          "linear-gradient(to bottom, #FFFFFF 0%, #D7F3FD 32%, #AEE6FB 64%)",
        scrollBehavior: "smooth",
      }}
    >
      <div className="overflow-x-hidden px-0">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 md:px-4 py-1 rounded-full bg-sky-100 text-sky-600 font-medium text-sm mb-6">
            SERVICES
          </div>
          <h2 className="md:px-0 px-3 text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            Solutions That Drive Success
          </h2>
          <p className="text-md md:text-lg text-gray-700 max-w-3xl mx-auto">
            We offer cutting-edge digital services, from web development to
            design and beyond, helping businesses grow with seamless, innovative
            solutions.
          </p>
        </motion.div>

        {/* LIST OF SERVICES */}
        <ServicesList ref={scrollRef} isInView={isInView} services={services} />
      </div>
    </section>
  );
}
