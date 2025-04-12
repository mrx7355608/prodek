"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent absolute top-2 z-20 w-full">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-center justify-between bg-white rounded-full px-3 md:px-2 py-2">
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
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="#services"
              className="font-medium text-gray-700 hover:text-[#00A6ED] flex items-center"
            >
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="#about"
              className="font-medium text-gray-700 hover:text-[#00A6ED] flex items-center"
            >
              About
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="#portfolio"
              className="font-medium text-gray-700 hover:text-[#00A6ED] flex items-center"
            >
              Our Work
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
          </nav>

          <Link
            href="#contact"
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
      {isMenuOpen && (
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
              href="#services"
              className="font-medium text-gray-700 hover:text-[#00A6ED]"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="font-medium text-gray-700 hover:text-[#00A6ED]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#portfolio"
              className="font-medium text-gray-700 hover:text-[#00A6ED]"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Work
            </Link>
            <Link
              href="#contact"
              className="px-5 py-2 rounded-full font-medium bg-[#00A6ED] text-white hover:bg-[#0091d4] inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
