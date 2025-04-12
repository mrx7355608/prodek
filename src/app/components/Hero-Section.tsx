"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative hero h-[110vh]">
      <div className="container mx-auto px-4 max-w-6xl relative z-10 flex items-center h-full pb-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 text-white mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Transforming Ideas into Digital Experience
            </h1>
            <p className="text-lg md:text-xl mb-8 text-sky-100">
              We help businesses grow by creating innovative digital solutions
              that connect brands with their customers.
            </p>
            <button className="px-6 py-3 bg-white text-black text-sm cursor-pointer rounded-full font-medium hover:bg-sky-50 transition-colors shadow-lg">
              See our work
            </button>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative w-full max-w-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/Partnership.png"
              alt="Partnership"
              width={400}
              height={400}
              className="w-[90%] h-auto"
            />
          </motion.div>
        </div>
      </div>
      <img
        src="/vector-1.png"
        alt="ss"
        className="w-[100vw] absolute bottom-0"
      />
    </section>
  );
}
