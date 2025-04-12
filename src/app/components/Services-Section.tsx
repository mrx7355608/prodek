"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Automatically slide to the next service every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length,
    );
  };

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #FFFFFF 0%, #D7F3FD 32%, #AEE6FB 64%)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative w-[100vw]"
        >
          {services.map((service) => (
            <div
              className="max-w-5xl border border-gray-300 mx-auto rounded-4xl bg-white p-8 shadow-lg"
              key={service.id}
            >
              <div
                className="flex transition-transform duration-1000 ease-in-out w-full h-full"
                // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {/* SERVICE */}
                <div className="w-full flex gap-8 justify-center p-4">
                  <div className="flex flex-col justify-start w-1/2 p-6 pl-2">
                    <h3 className="text-3xl font-bold text-gray-300 mb-8">
                      0{service.id}.
                    </h3>
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-5">
                      We craft high-performance, user-friendly websites tailored
                      to your business needs. From sleek designs to seamless
                      functionality, we build digital experiences that drive
                      growth and engagement.
                    </p>
                    <button className="flex items-center gap-2 mt-6 self-start bg-gray-900 font-medium text-white px-6 py-2 rounded-full cursor-pointer hover:bg-gray-800">
                      Learn More
                      <ArrowRight size={15} />
                    </button>
                  </div>
                  <div className="relative h-64 md:h-full rounded-xl w-[40%] overflow-hidden p-8">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Previous and next buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Slide indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? "bg-sky-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-4 text-gray-600">
            {currentIndex + 1} / {services.length}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
