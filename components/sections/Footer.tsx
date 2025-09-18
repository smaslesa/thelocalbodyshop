import { Phone, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white">
      {/* Top Links Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
            <Link href="/services" className="text-sm text-gray-600 hover:text-black transition-colors">
              Services
            </Link>
            <Link href="/gallery" className="text-sm text-gray-600 hover:text-black transition-colors">
              Gallery
            </Link>
            <Link href="/insurance" className="text-sm text-gray-600 hover:text-black transition-colors">
              Insurance
            </Link>
            <Link href="/about" className="text-sm text-gray-600 hover:text-black transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
            <Link href="/estimate" className="text-sm text-gray-600 hover:text-black transition-colors">
              Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Info Row */}
      <div className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <a 
              href="tel:2088182259" 
              className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              (208) 818-2259
            </a>
            
            <a 
              href="https://www.google.com/maps/place/620+W+Dalton+Ave,+Coeur+d'Alene,+ID+83854"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
            >
              <MapPin className="w-4 h-4" strokeWidth={1.5} />
              620 West Dalton Ave, Coeur d&apos;Alene
            </a>
            
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" strokeWidth={1.5} />
              Mon-Fri: 9AM-6PM
            </div>
          </div>
        </div>
      </div>

      {/* MASSIVE Logo Section - Reduced padding */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <img
            src="/logos/the-local-body-shop-logo.png"
            alt="The Local Body Shop"
            className="w-auto mx-auto mb-8"
            style={{
              height: 'clamp(270px, 35vw, 445px)', // 11% smaller than before
              maxWidth: '85%',
              filter: 'brightness(0) saturate(100%)', // Makes it pure black
            }}
          />
          <p className="text-base text-gray-500 font-light italic max-w-lg mx-auto">
            &ldquo;We strive not to be a success, but rather to be of value&rdquo;
          </p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="flex justify-center items-center gap-8">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
            
            <a 
              href="https://google.com/maps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="text-center text-xs text-gray-500 space-y-2">
            <p>© {currentYear} The Local Body Shop. All rights reserved.</p>
            <div className="flex justify-center gap-4">
              <Link href="/privacy" className="hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-black transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}