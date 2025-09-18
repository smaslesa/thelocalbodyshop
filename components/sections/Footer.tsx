import { Phone, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="md:col-span-1">
            <img
              src="/logos/the-local-body-shop-logo.png"
              alt="The Local Body Shop"
              className="h-20 w-auto mb-6"
            />
            <p className="text-sm text-gray-600 font-light italic">
              &ldquo;We strive not to be a success, but rather to be of value&rdquo;
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-black transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Service Areas */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-6">
              Service Areas
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-600">Coeur d&apos;Alene</li>
              <li className="text-sm text-gray-600">Post Falls</li>
              <li className="text-sm text-gray-600">Hayden</li>
              <li className="text-sm text-gray-600">Rathdrum</li>
              <li className="text-sm text-gray-600">Spirit Lake</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <a 
                href="tel:2088182259" 
                className="flex items-start gap-3 text-sm text-gray-600 hover:text-black transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5" strokeWidth={1.5} />
                (208) 818-2259
              </a>
              
              <a 
                href="https://www.google.com/maps/place/620+W+Dalton+Ave,+Coeur+d'Alene,+ID+83854"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-gray-600 hover:text-black transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5" strokeWidth={1.5} />
                <div>
                  620 West Dalton Ave.<br />
                  Coeur d&apos;Alene, ID 83854
                </div>
              </a>
              
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <Clock className="w-4 h-4 mt-0.5" strokeWidth={1.5} />
                <div>
                  Mon-Fri: 9AM-6PM<br />
                  Sat-Sun: Closed
                </div>
              </div>

              <a 
                href="mailto:Thelocalbodyshop@gmail.com" 
                className="flex items-start gap-3 text-sm text-gray-600 hover:text-black transition-colors"
              >
                <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Thelocalbodyshop@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <span>© {currentYear} The Local Body Shop</span>
              <span>•</span>
              <span>All Rights Reserved</span>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-xs text-gray-500 hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-gray-500 hover:text-black transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}