"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: "#00A6ED" }}>
        {/* Exact wave shape from the image */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            style={{ display: "block" }}
          >
         <path d="M0,96 C240,40 480,160 720,96 C960,32 1200,128 1440,96 L1440,150 L0,150 Z" fill="#FFFFFF" />


          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16 pb-32">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 text-white mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforming Ideas into Digital Experience
            </h1>
            <p className="text-lg md:text-xl mb-8 text-sky-100">
              We help businesses grow by creating innovative digital solutions that connect brands with their customers.
            </p>
            <button className="px-8 py-3 bg-white text-sky-600 rounded-full font-medium hover:bg-sky-50 transition-colors shadow-lg">
              Get Started
            </button>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              <Image src="/Partnership.png" alt="Partnership" width={500} height={500} className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
