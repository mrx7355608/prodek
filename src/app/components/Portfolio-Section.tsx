"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const categories = ["All", "Web Design", "Mobile Apps", "UI/UX", "Branding"]

const projects = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    category: "Web Design",
    image: "/images/portfolio-1.jpg",
    description:
      "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
  },
  {
    id: 2,
    title: "Finance Mobile App",
    category: "Mobile Apps",
    image: "/images/portfolio-2.jpg",
    description: "A user-friendly mobile application for personal finance management with intuitive dashboards.",
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    category: "UI/UX",
    image: "/images/portfolio-3.jpg",
    description: "An intuitive dashboard for healthcare professionals to monitor patient data and analytics.",
  },
  {
    id: 4,
    title: "Restaurant Branding",
    category: "Branding",
    image: "/images/portfolio-4.jpg",
    description:
      "Complete brand identity design for a high-end restaurant chain including logo and marketing materials.",
  },
  {
    id: 5,
    title: "Travel Booking Platform",
    category: "Web Design",
    image: "/images/portfolio-5.jpg",
    description: "A comprehensive travel booking platform with advanced filtering and recommendation features.",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    category: "Mobile Apps",
    image: "/images/portfolio-6.jpg",
    description:
      "A mobile application for tracking fitness activities, nutrition, and health metrics with social features.",
  },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category ? "bg-sky-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="text-sm text-sky-300 font-medium">{project.category}</span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-sky-600 font-medium hover:text-sky-700 transition-colors">View Project</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

