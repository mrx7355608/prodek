"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ServicesList from "./services/ServicesList";

// Service card data
const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom web applications built with the latest technologies to deliver exceptional user experiences.",
    image: "/service.png",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that engage users and drive business growth.",
    image: "/service.png",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive, seamless, and enjoyable digital experiences.",
    image: "/service.png",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Strategic marketing solutions that increase visibility and drive conversions.",
    image: "/service.png",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e) => {
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
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #FFFFFF 0%, #D7F3FD 32%, #AEE6FB 64%)",
        scrollBehavior: "smooth",
      }}
    >
      <div className="overflow-hidden">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-sky-100 text-sky-600 font-medium text-sm mb-6">
            SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Solutions That Drive Success
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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
