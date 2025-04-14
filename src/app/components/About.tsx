"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative py-20 bg-white" ref={ref} id="about">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
          {/* Left side content */}
          <motion.div
            className="w-[90%] md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-block px-3 md:px-4 py-1 rounded-full bg-sky-100 text-sky-600 font-medium text-xs mb-8 md:mb-6">
              ABOUT US
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              200+ Brains, One Heartbeat –{" "}
              <span className="text-sky-500">Your Growth</span> Army Since 2001
            </h2>

            <p className="text-gray-700 mb-10 text-md">
              In 2001, we planted our roots in Texas with one mission: to make
              brands unstoppable. Today, Growdek is a powerhouse of 200+
              in-house specialists—developers coding like rockstars, designers
              painting dreams, SEO wizards conjuring Google magic, and animators
              making pixels dance.
            </p>

            <button className="cursor-pointer mb-10 px-5 py-2 md:px-7 md:py-3 text-sm rounded-full bg-sky-400 text-white font-bold flex items-center gap-2 my-shadow">
              Get Started
              <ArrowRight size={19} />
            </button>

            <div className="grid grid-cols-3 gap-6">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
                  500+
                </h3>
                <p className="text-gray-600 mt-2 text-sm md:text-md">
                  Projects Delivered
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
                  98%
                </h3>
                <p className="text-gray-600 mt-2 text-sm md:text-md">
                  Clients Satisfaction
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
                  05+
                </h3>
                <p className="text-sm md:text-md text-gray-600 mt-2">
                  Years of Experience
                </p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="w-1/2 order-1 md:order-2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1.0 }}
          >
            <Image
              src="/money.svg"
              alt="About"
              width={1000}
              height={1000}
              className="hidden md:block w-[85%] object-contain ml-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
