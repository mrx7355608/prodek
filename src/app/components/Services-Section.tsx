"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ServicesList from "./services/ServicesList";

// Service card data
const services = [
  {
    id: 1,
    title: "Branding & Design",
    description:
      "We build memorable brands from the ground up. From logo design and visual identity to brand strategy, we ensure your business stands out with a consistent and powerful message.",
    image: "/branding-service.jpg",
  },
  {
    id: 2,
    title: "Web & App Development",
    description:
      "We create modern, responsive, and lightning-fast websites tailored to your goals. Whether it's a simple landing page or a full-fledged web app, we combine functionality with flawless design.",
    image: "/app-dev-service.jpg",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Boost your online presence and reach the right audience. Our digital marketing services cover SEO, social media, email campaigns, and paid ads—tailored to drive results and growth.",
    image: "/branding-service.jpg",
  },
  {
    id: 4,
    title: "Animation & Video",
    description:
      "Bring your ideas to life with smooth, captivating animations. Whether it’s explainer videos, motion graphics, or interactive web animations, we craft visual stories that leave a lasting impression",
    image: "/branding-service.jpg",
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
          <h2 className="md:px-0 px-3 text-3xl md:text-4xl lg:text-5xl md:max-w-4xl mx-auto font-bold mb-4 md:mb-6 text-gray-900">
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
