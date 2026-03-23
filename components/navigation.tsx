'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/export-services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/global-markets', label: 'Markets' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image
              src="/ascorab.png"
              alt="Ascora Logo"
              width={200}
              height={200}
             className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
            />
           
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium"
                >
                  <span
                    className={`transition-colors ${
                      isActive
                        ? 'text-black'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t pt-4 pb-4 space-y-2">
            {links.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded text-sm ${
                    isActive
                      ? 'bg-black text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            <Link
              href="/contact"
              className="block mx-4 mt-2 px-4 py-2 bg-black text-white rounded-lg text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
