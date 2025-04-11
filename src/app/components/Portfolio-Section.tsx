"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Portfolio categories
const categories = ["ALL", "DIGITAL MARKETING", "GRAPHIC DESIGNING", "UI/UX", "WEBSITES", "APPLICATIONS"]

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
    category: "WEBSITES",
    image: "/images/portfolio-2.jpg",
    description:
      "A complete overhaul of an online store with improved user experience, streamlined checkout process, and mobile-first approach. The redesign resulted in a 45% increase in conversion rate and significantly reduced cart abandonment.",
  },
  {
    id: 3,
    title: "Brand Identity Package",
    category: "GRAPHIC DESIGNING",
    image: "/images/portfolio-3.jpg",
    description:
      "Comprehensive brand identity development including logo design, color palette, typography, and brand guidelines. The cohesive visual language helped establish a strong market presence and brand recognition.",
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "DIGITAL MARKETING",
    image: "/images/portfolio-4.jpg",
    description:
      "Strategic social media campaign across multiple platforms that increased brand engagement by 78% and generated a significant ROI. The campaign included content creation, audience targeting, and performance analytics.",
  },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("ALL")
  const [visibleProjects, setVisibleProjects] = useState(projects)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()

  // Filter projects based on selected category
  const filterProjects = (category: string) => {
    setActiveCategory(category)
    if (category === "ALL") {
      setVisibleProjects(projects)
    } else {
      setVisibleProjects(projects.filter((project) => project.category === category))
    }
  }

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

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
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  }

  return (
    <section
      ref={ref}
      className="py-20 relative"
      style={{
        background: "linear-gradient(to bottom, #1D1D1D 0%, #171717 50%, #000000 100%)",
        color: "#FFFFFF",
      }}
    >
      {/* Top curved shape */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          style={{ display: "block" }}
        >
          <path d="M0,100 C480,0 960,0 1440,100 L1440,0 L0,0 Z"
      fill="#1D1D1D" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-6 py-2 rounded-full bg-[#003D53] text-[#6BD8FF] font-medium text-sm mb-6">
            PORTFOLIO
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">Portfolio Of Our Best Work</h2>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterProjects(category)}
                className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={itemVariants}
              className="bg-[#1D1D1D] rounded-3xl overflow-hidden shadow-lg hover:shadow-[#6BD8FF]/10 transition-all duration-500"
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(107, 216, 255, 0.2)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative h-64 md:h-72 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-[#CECECE] mb-6">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#6BD8FF]">{project.category}</span>
                  <motion.button
                    className="flex items-center gap-2 bg-[#373737] hover:bg-[#6BD8FF] hover:text-[#171717] text-white px-5 py-2 rounded-full transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination indicator */}
        <div className="flex justify-center mt-12">
          <div className="bg-[#373737] rounded-full px-4 py-2 text-[#D3D3D3]">1 / 1</div>
        </div>
      </div>
    </section>
  )
}
