"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ServicesList from "./services/ServicesList";

// Service card data
const services = [
  {
    id: 1,
    title: "Branding & Design",
    description: "First Impressions That Last Forever",
    image: "/branding-service.jpg",
    offers: [
      {
        title: "Logo Design",
        tagline: "Crafted to steal attention and hearts",
      },
      {
        title: "Brand Identity",
        tagline: 'Colors, fonts, and guidelines that scream "This is US."',
      },
      {
        title: "Graphic Design",
        tagline: "Social posts, brochures, ads—scroll-stoppers guaranteed.",
      },
      {
        title: "Before & After Designs",
        tagline: "Show your glow-up with jaw-dropping transformations",
      },
    ],
  },
  {
    id: 2,
    title: "Web & App Development",
    description: "Digital Homes That Print Money",
    image: "/app-dev-service.jpg",
    offers: [
      {
        title: "Custom Websites",
        tagline: "Bespoke designs that mirror your brand’s soul",
      },
      {
        title: "Mobile Apps",
        tagline: "iOS/Android apps that users obsess over",
      },
      {
        title: "E-Commerce Stores",
        tagline:
          "Shopify, Magento, WooCommerce—cart-abandonment? Never heard of her.",
      },
    ],
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Traffic, Leads, Sales – We Turn Dials to 11",
    image: "/branding-service.jpg",
    offers: [
      {
        title: "SEO",
        tagline: "Dominate Google’s first page. Your competitors will cry",
      },
      {
        title: "PPC Ads",
        tagline: "Laser-targeted campaigns for instant ROI.",
      },
      {
        title: "Social Media Marketing",
        tagline: "Content so addictive, followers beg for more.",
      },
    ],
  },
  {
    id: 4,
    title: "Animation & Video",
    description: "Pixels That Punch Above Their Weight",
    image: "/branding-service.jpg",
    offers: [
      {
        title: "2D/3D Animation",
        tagline: "Explainer videos, ads, and product demos that convert",
      },
      {
        title: "Motion Graphics",
        tagline: "Instagram reels, YouTube intros—watch views skyrocket",
      },
      {
        title: "",
        tagline: "",
      },
      {
        title: "",
        tagline: "",
      },
    ],
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
          <h2 className="md:px-0 px-3 text-3xl md:text-4xl lg:text-5xl md:max-w-2xl mx-auto font-bold mb-4 md:mb-6 text-gray-900">
            Your Growth Playbook – Services That Crush Goals
          </h2>
          {/* <p className="text-md md:text-lg text-gray-700 max-w-3xl mx-auto"> */}
          {/*   We offer cutting-edge digital services, from web development to */}
          {/*   design and beyond, helping businesses grow with seamless, innovative */}
          {/*   solutions. */}
          {/* </p> */}
        </motion.div>

        {/* LIST OF SERVICES */}
        <ServicesList ref={scrollRef} isInView={isInView} services={services} />
      </div>
    </section>
  );
}
