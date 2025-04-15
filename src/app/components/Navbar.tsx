"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        headerRef.current?.classList.remove("bg-transparent");
        headerRef.current?.classList.add("my-bg");
        headerRef.current?.classList.add("backdrop-blur-sm");
        headerRef.current?.classList.add("shadow-sm");
        navbarRef.current?.classList.remove("bg-white");
        navbarRef.current?.classList.add("bg-transparent");
      } else if (window.scrollY < 200) {
        headerRef.current?.classList.add("bg-transparent");
        headerRef.current?.classList.remove("backdrop-blur-sm");
        headerRef.current?.classList.remove("my-bg");
        headerRef.current?.classList.remove("shadow-sm");
        navbarRef.current?.classList.remove("bg-transparent");
        navbarRef.current?.classList.add("bg-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 bg-transparent duration-500 transition-colors absolute z-20 w-full"
    >
      <div className="max-w-6xl mx-auto p-2 md:p-4">
        <div
          ref={navbarRef}
          className="flex items-center justify-between bg-white rounded-full px-3 md:px-2 py-2"
        >
          <Link href="/" className="flex items-center space-x-3">
            {/* Logo in a circle */}
            <div className="flex justify-center items-center">
              <Image
                src="/logo.png"
                alt="ProSoft Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-[#00A6ED] flex items-center"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-medium text-gray-700 hover:text-[#00A6ED] flex items-center"
            >
              About
            </Link>
            <Link
              href="/services"
              className="font-medium text-gray-700 hover:text-[#00A6ED] flex items-center"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="font-medium text-gray-700 hover:text-[#00A6ED] flex items-center"
            >
              Pricing
            </Link>
            <Link
              href="/portfolio"
              className="font-medium text-gray-700 hover:text-[#00A6ED] flex items-center"
            >
              Our Work
            </Link>
          </nav>

          <Link
            href="/contact"
            className="hidden lg:block px-6 py-2 rounded-full font-medium bg-[#00A6ED] text-white hover:bg-[#0091d4] transition-colors"
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 rounded-full hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </header>
  );
}

function MobileMenu({ setIsMenuOpen }: { setIsMenuOpen: any }) {
  return (
    <div className="md:hidden bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col space-y-4">
        <Link
          href="/"
          className="font-medium text-gray-700 hover:text-[#00A6ED]"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/services"
          className="font-medium text-gray-700 hover:text-[#00A6ED]"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          href="/about"
          className="font-medium text-gray-700 hover:text-[#00A6ED]"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          href="/portfolio"
          className="font-medium text-gray-700 hover:text-[#00A6ED]"
          onClick={() => setIsMenuOpen(false)}
        >
          Our Work
        </Link>
        <Link
          href="/pricing"
          className="font-medium text-gray-700 hover:text-[#00A6ED]"
          onClick={() => setIsMenuOpen(false)}
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className="px-5 py-2 rounded-full font-medium bg-[#00A6ED] text-white hover:bg-[#0091d4] inline-block text-center"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
