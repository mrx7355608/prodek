"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Portfolio categories
const categories = [
  "ALL",
  "BRANDING",
  "WEB DESIGNING",
  "ANIMATIONS",
  "APPLICATIONS",
];

// Portfolio projects
const projects = [
  {
    id: 1,
    title: "Music Management System",
    category: "APPLICATIONS",
    image: "/images/portfolio-1.jpg",
    description:
      "This project focuses on designing a sleek, modern, and fully responsive landing page for a digital product or service. The design emphasizes user engagement, clear call-to-action elements, and a visually appealing layout that adapts seamlessly across all devices.",
  },
  {
    id: 2,
    title: "E-commerce Website Redesign",
    category: "WEB DESIGNING",
    image: "/images/portfolio-2.jpg",
    description:
      "A complete overhaul of an online store with improved user experience, streamlined checkout process, and mobile-first approach. The redesign resulted in a 45% increase in conversion rate and significantly reduced cart abandonment.",
  },
  {
    id: 3,
    title: "Brand Identity Package",
    category: "ANIMATIONS",
    image: "/images/portfolio-3.jpg",
    description:
      "Comprehensive brand identity development including logo design, color palette, typography, and brand guidelines. The cohesive visual language helped establish a strong market presence and brand recognition.",
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "BRANDING",
    image: "/images/portfolio-4.jpg",
    description:
      "Strategic social media campaign across multiple platforms that increased brand engagement by 78% and generated a significant ROI. The campaign included content creation, audience targeting, and performance analytics.",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();

  // Filter projects based on selected category
  const filterProjects = (category: string) => {
    setActiveCategory(category);
    if (category === "ALL") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(
        projects.filter((project) => project.category === category),
      );
    }
  };

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       stiffness: 100,
  //       damping: 15,
  //       duration: 0.6,
  //     },
  //   },
  // };

  return (
    <section ref={ref} className="py-20 relative bg-zinc-900" id="portfolio">
      <div className="w-full md:container mx-auto px-4 md:px-6 pt-10">
        <motion.div
          className="text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-2 md:px-6 md:py-2 rounded-full bg-[#003D53] text-[#6BD8FF] font-medium text-xs md:text-sm mb-6">
            PORTFOLIO
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
            Portfolio Of Our Best Work
          </h2>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterProjects(category)}
                className={`cursor-pointer text-sm md:text-md px-3 py-1 md:px-4 md:py-2 rounded-full border-2 transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#6BD8FF] text-[#171717] border-[#6BD8FF]"
                    : "bg-transparent text-[#D9D9D9] border-[#373737] hover:border-[#BFBFBF]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-18 gap-y-10 md:gap-y-24 w-full max-w-6xl mx-auto"
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              className="w-[100%] text-white"
            >
              {/* PROJECT IMAGE */}
              <div className="relative h-64 md:h-88 w-full">
                <Image
                  src="/sample-project.jpg"
                  alt={project.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* PROJECT DESC */}
              <div className="py-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-[#CECECE] mb-6">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
