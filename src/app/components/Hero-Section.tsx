"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background with gradient and wave */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 z-0">
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="white"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
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
              <Image
                src="/images/hero-illustration.png"
                alt="Digital Transformation Illustration"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

