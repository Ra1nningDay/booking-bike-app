"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Logo from "./logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    open: { opacity: 1, height: "auto", display: "flex" },
    closed: { opacity: 0, height: 0, transitionEnd: { display: "none" } },
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/motorcycles" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Motorcycles
            </Link>
            <Link href="/booking" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Booking
            </Link>
            <Link
              href="/booking"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Rent Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className="md:hidden flex flex-col space-y-4 py-4"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/motorcycles"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Motorcycles
          </Link>
          <Link
            href="/booking"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Booking
          </Link>
          <Link
            href="/booking"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-colors inline-block w-fit"
            onClick={() => setIsOpen(false)}
          >
            Rent Now
          </Link>
        </motion.nav>
      </div>
    </header>
  )
}

