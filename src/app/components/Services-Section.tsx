"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Smartphone, Globe, BarChart } from "lucide-react"

const services = [
  {
    icon: <Code className="w-12 h-12 text-sky-600" />,
    title: "Web Development",
    description: "We build responsive, high-performance websites that deliver exceptional user experiences.",
  },
  {
    icon: <Smartphone className="w-12 h-12 text-sky-600" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that engage users and drive business growth.",
  },
  {
    icon: <Globe className="w-12 h-12 text-sky-600" />,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, seamless, and enjoyable digital experiences.",
  },
  {
    icon: <BarChart className="w-12 h-12 text-sky-600" />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions that increase visibility and drive conversions.",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

