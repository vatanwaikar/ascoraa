import Link from 'next/link'
import { Facebook, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-primary text-sm font-bold">
                A
              </div>
              <span>Ascora</span>
            </div>
            <p className="text-sm opacity-90 mb-6">
              Connecting global businesses through reliable import and export solutions since 2015.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products#export" className="opacity-90 hover:opacity-100 transition">
                  Export Solutions
                </Link>
              </li>
              <li>
                <Link href="/products#import" className="opacity-90 hover:opacity-100 transition">
                  Import Services
                </Link>
              </li>
              <li>
                <Link href="/products#logistics" className="opacity-90 hover:opacity-100 transition">
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="/products#compliance" className="opacity-90 hover:opacity-100 transition">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="opacity-90 hover:opacity-100 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/global-markets" className="opacity-90 hover:opacity-100 transition">
                  Global Markets
                </Link>
              </li>
              <li>
                <Link href="/industries" className="opacity-90 hover:opacity-100 transition">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-90 hover:opacity-100 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-90 mb-4 md:mb-0">
            © {currentYear} Ascora. All rights reserved.
          </p>
          <p className="text-sm opacity-90">
            Trusted by over 10,000 businesses worldwide | Global Trade Leaders
          </p>
        </div>
      </div>
    </footer>
  )
}
