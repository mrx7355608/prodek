"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
                <span className="text-sky-600 font-bold text-lg">P</span>
              </div>
              <span className={`text-xl font-bold ${isScrolled ? "text-sky-600" : "text-white"}`}>ProSoft</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-sky-600" : "text-white hover:text-sky-200"
              }`}
            >
              Home
            </Link>
            <Link
              href="#services"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-sky-600" : "text-white hover:text-sky-200"
              }`}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-sky-600" : "text-white hover:text-sky-200"
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="#testimonials"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-sky-600" : "text-white hover:text-sky-200"
              }`}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-sky-600" : "text-white hover:text-sky-200"
              }`}
            >
              Contact
            </Link>
          </nav>

          <button
            className={`px-6 py-2.5 rounded-full font-medium hidden md:block transition-colors ${
              isScrolled ? "bg-sky-600 text-white hover:bg-sky-700" : "bg-white text-sky-600 hover:bg-sky-50"
            }`}
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className={isScrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="font-medium text-gray-800 hover:text-sky-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="font-medium text-gray-800 hover:text-sky-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="font-medium text-gray-800 hover:text-sky-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#testimonials"
              className="font-medium text-gray-800 hover:text-sky-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="font-medium text-gray-800 hover:text-sky-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button
              className="px-5 py-2 rounded-full font-medium bg-sky-600 text-white hover:bg-sky-700 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

