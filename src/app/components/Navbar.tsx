"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#00A6ED] w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between bg-white rounded-full px-4 py-2">
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
            className="px-6 py-2 rounded-full font-medium bg-[#00A6ED] text-white hover:bg-[#0091d4] transition-colors"
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
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
  )
}
