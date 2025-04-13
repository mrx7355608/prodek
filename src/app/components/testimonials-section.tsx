"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    image: "/placeholder.svg?height=64&width=64",
    content:
      "Working with ProSoft has been a game-changer for our business. Their team delivered a website that exceeded our expectations and has significantly improved our online presence.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director, GrowthLabs",
    image: "/placeholder.svg?height=64&width=64",
    content:
      "The mobile app developed by ProSoft has revolutionized how we interact with our customers. The intuitive design and seamless functionality have received overwhelmingly positive feedback.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Founder, EcoShop",
    image: "/placeholder.svg?height=64&width=64",
    content:
      "ProSoft understood our vision from day one and translated it into a beautiful, functional e-commerce platform. Their attention to detail and commitment to quality is unmatched.",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // const nextTestimonial = () => {
  //   if (currentIndex >= 2) return;
  //   setCurrentIndex((prev) => prev + 1);
  // };
  //
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextTestimonial();
  //   }, 5000);
  //
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-white text-gray-800"
    >
      <div className="container mx-auto md:px-6 pt-[calc(5vw+40px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-2"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-3 py-1.5 md:px-4 md:py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium mb-4"
          >
            TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 mt-6 md:mt-10"
          >
            What Our Clients Say About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="md:max-w-6xl md:mx-auto overflow-x-auto"
        >
          {/* LIST OF TESTIMONIALS */}
          <div className=" relative py-8 w-full mt-8">
            <div
              className="flex transition-transform duration-900 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-xs max-w-xs md:min-w-sm md:max-w-sm px-4 flex flex-col"
                >
                  <div className="bg-gray-50 p-5 md:p-7 h-full rounded-3xl shadow-lg border border-gray-200">
                    {/* STARS */}
                    <div className="flex mt-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* REVIEW */}
                    <p className="text-sm md:text-md text-gray-700 mb-6 font-medium h-[50%] overflow-y-scroll my-hide-scrollbar">
                      {testimonial.content}
                    </p>

                    {/* USER */}
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden mr-2 md:mr-4 border-2 border-gray-200">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-md">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
