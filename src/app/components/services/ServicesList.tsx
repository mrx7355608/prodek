import { useState, forwardRef, RefObject } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  services: any[];
  isInView: boolean;
}

const ServicesList = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { services, isInView } = props;
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = ref as RefObject<HTMLDivElement>;

  if (!scrollRef) {
    return;
  }

  const handleMouseDown = (e: any) => {
    if (!scrollRef.current) {
      return;
    }

    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className={`my-hide-scrollbar select-none w-[100vw] pb-8 md:p-8 md:pt-0 flex overflow-x-scroll gap-2 md:gap-8 scroll-smooth ${isDragging ? "cursor-grab" : "cursor-normal"}`}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      ref={scrollRef}
    >
      {services.map((service) => (
        <div
          className="min-w-[95%] mx-2 md:min-w-5xl border border-gray-300 rounded-4xl bg-white p-2 md:p-8 shadow-xl"
          key={service.id}
        >
          {/* SERVICE */}
          <div className="flex transition-transform duration-1000 ease-in-out w-full h-full">
            <div className="relative flex-col-reverse md:flex-row w-full flex gap-2 md:gap-8 md:justify-center p-4">
              {/* SERIVCE DETAILS (Desktop) */}
              <div className="hidden md:flex flex-col justify-start w-1/2 p-6 pl-0">
                <h3 className="text-3xl font-bold text-gray-300 mb-8">
                  0{service.id}.
                </h3>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-5">
                  We craft high-performance, user-friendly websites tailored to
                  your business needs. From sleek designs to seamless
                  functionality, we build digital experiences that drive growth
                  and engagement.
                </p>
                <Link href="#contact">
                  <button className="my-dark-shadow flex items-center gap-2 mt-6 self-start bg-gray-900 font-medium text-white px-6 py-2 rounded-full cursor-pointer hover:bg-gray-800">
                    Learn More
                    <ArrowRight size={15} />
                  </button>
                </Link>
              </div>

              {/* SERIVCE DETAILS (Mobile) */}
              <div className="md:hidden flex flex-col justify-start w-full p-2 md:w-1/2 md:p-6 md:pl-0">
                <div className="flex gap-2 my-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    0{service.id}.
                  </h3>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p
                  className="text-gray-700 mb-4 text-sm"
                  style={{ lineHeight: "22px" }}
                >
                  We craft high-performance, user-friendly websites tailored to
                  your business needs. From sleek designs to seamless
                  functionality, we build digital experiences that drive growth
                  and engagement.
                </p>
                <Link href="#contact">
                  <button className="my-dark-shadow flex items-center gap-2 mt-4 self-start bg-gray-900 font-medium text-white px-4 py-2.5 text-sm rounded-full cursor-pointer hover:bg-gray-800">
                    Learn More
                    <ArrowRight size={14} />
                  </button>
                </Link>
              </div>

              {/* IMAGE */}
              <div className="relative h-64 md:h-full rounded-2xl w-full p-0 md:w-[40%] overflow-hidden md:p-8">
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
    </motion.div>
  );
});

ServicesList.displayName = "ServicesList";
export default ServicesList;
