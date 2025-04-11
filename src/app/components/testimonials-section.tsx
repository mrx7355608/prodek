"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"

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
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="relative py-20 bg-white text-gray-800 overflow-hidden">
      {/* Single black wave at the top */}
      <div className="absolute top-0 left-0 right-0 h-[5vw] min-h-[60px] max-h-[120px] bg-black" />
      {/* <div className="absolute top-0 left-0 right-0 h-[5vw] min-h-[60px] max-h-[120px]">
        <svg
          className="absolute bottom-0 w-full h-full text-white fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="animate-wave"
          />
        </svg>
      </div> */}

      <div className="container mx-auto px-4 md:px-6 pt-[calc(5vw+40px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
          >
            TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-8 md:p-10 rounded-lg shadow-lg border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gray-200">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.position}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-blue-500 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
