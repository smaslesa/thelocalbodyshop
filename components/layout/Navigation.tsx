'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showLogo, setShowLogo] = useState(false) // Back to false - hidden on first load
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
      setShowLogo(scrollY > 50) // Same as isScrolled - both happen together at 50px
    }
    
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItemsLeft = [
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Insurance', href: '/insurance' },
    { name: 'Reviews', href: '/reviews' }
  ]

  const navItemsRight = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <>
      {/* Navigation Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className={`px-6 md:px-12 lg:px-20 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-5'  // Adjusted padding to accommodate bigger logo
        }`}>
          <div className="max-w-[1600px] mx-auto">
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between">
              {/* Left Side - Logo Only */}
              <div className="flex items-center">
                <AnimatePresence mode="wait">
                  {showLogo && (
                    <motion.div
                      key="nav-logo"
                      initial={{ 
                        opacity: 0,
                        scale: 0.8,
                        x: -20
                      }}
                      animate={{ 
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        transition: {
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          delay: 0.1 // Small delay for staggered effect
                        }
                      }}
                      exit={{ 
                        opacity: 0,
                        scale: 0.8,
                        x: -20,
                        transition: {
                          duration: 0.3
                        }
                      }}
                    >
                      <Link href="/" className="block">
                        <motion.img
                          src="/logos/the-local-body-shop-logo.png"
                          alt="The Local Body Shop"
                          className={`w-auto object-contain transition-all duration-700 ease-out ${
                            isScrolled ? 'h-[108px]' : 'h-[90px]'  // 13% bigger: ~108px and ~90px
                          }`}
                          style={{
                            filter: 'brightness(0) saturate(100%)', // Solid black
                            transformOrigin: 'center center',
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            filter: 'brightness(0.1) saturate(100%)',
                            transition: { duration: 0.2 }
                          }}
                        />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Side - All Nav Items Together */}
              <div className="flex items-center gap-6">
                {/* Primary Nav */}
                {navItemsLeft.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className={`text-[13px] font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                      pathname === item.href 
                        ? isScrolled ? 'text-black' : 'text-white'
                        : isScrolled ? 'text-gray-600 hover:text-black' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Secondary Nav */}
                {navItemsRight.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className={`text-[13px] font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                      pathname === item.href 
                        ? isScrolled ? 'text-black' : 'text-white'
                        : isScrolled ? 'text-gray-600 hover:text-black' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Separator */}
                <div className={`h-4 w-px transition-colors duration-300 ${
                  isScrolled ? 'bg-gray-300' : 'bg-white/30'
                }`} />
                
                {/* Directions */}
                <a
                  href="https://www.google.com/maps/place/620+W+Dalton+Ave,+Coeur+d'Alene,+ID+83854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-[13px] font-medium transition-all duration-300 ${
                    isScrolled ? 'text-gray-600 hover:text-black' : 'text-white/90 hover:text-white'
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Directions</span>
                </a>
                
                {/* Phone */}
                <a
                  href="tel:2088182259"
                  className={`flex items-center gap-2 text-[13px] font-semibold transition-all duration-300 whitespace-nowrap ${
                    isScrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-white/80'
                  }`}
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (208) 818-2259
                </a>
                
                {/* Free Estimate Button */}
                <Link
                  href="/estimate"
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                    isScrolled 
                      ? 'bg-black text-white hover:bg-gray-800 shadow-md' 
                      : 'bg-white text-black hover:bg-gray-100 shadow-lg'
                  }`}
                >
                  Free Estimate
                </Link>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex lg:hidden items-center justify-between">
              {/* Mobile Logo - No black background */}
              <div className="flex-shrink-0">
                <AnimatePresence mode="wait">
                  {showLogo && (
                    <motion.div
                      key="mobile-nav-logo"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1,
                        x: 0,
                        transition: { 
                          duration: 0.5,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }
                      }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <Link href="/">
                        <img
                          src="/logos/the-local-body-shop-logo.png"
                          alt="The Local Body Shop"
                          className={`w-auto object-contain transition-all duration-700 ${
                            isScrolled ? 'h-[72px]' : 'h-[63px]'  // 13% bigger for mobile too
                          }`}
                          style={{
                            filter: isScrolled ? 'brightness(0)' : 'invert(1)'
                          }}
                        />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
                {!showLogo && <div className="h-[63px] w-32" />}
              </div>

              {/* Mobile Actions */}
              <div className="flex items-center gap-3">
                {/* Phone Icon */}
                <a
                  href="tel:2088182259"
                  className={`p-2 transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-white/70'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>

                {/* Directions Icon - RESTORED */}
                <a
                  href="https://www.google.com/maps/place/620+W+Dalton+Ave,+Coeur+d'Alene,+ID+83854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-white/70'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>

                {/* Menu button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2"
                >
                  <div className="w-6 h-5 flex flex-col justify-between">
                    <motion.span 
                      className={`w-full h-[2px] transition-colors ${isScrolled ? 'bg-black' : 'bg-white'}`}
                      animate={{ 
                        rotate: isOpen ? 45 : 0,
                        y: isOpen ? 8 : 0
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.span 
                      className={`w-full h-[2px] transition-colors ${isScrolled ? 'bg-black' : 'bg-white'}`}
                      animate={{ opacity: isOpen ? 0 : 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.span 
                      className={`w-full h-[2px] transition-colors ${isScrolled ? 'bg-black' : 'bg-white'}`}
                      animate={{ 
                        rotate: isOpen ? -45 : 0,
                        y: isOpen ? -8 : 0
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Subtle Progress Bar with enhanced animation */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{ 
          scaleX: scrollYProgress,
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
        }}
      />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-[55] lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                <img
                  src="/logos/the-local-body-shop-logo.png"
                  alt="The Local Body Shop"
                  className="h-10 w-auto object-contain"
                  style={{ filter: 'brightness(0)' }}
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 px-6 py-8 overflow-y-auto">
                <div className="space-y-1">
                  {[...navItemsLeft, ...navItemsRight].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-base font-medium transition-colors py-3 px-2 rounded ${
                        pathname === item.href
                          ? 'bg-gray-100 text-black'
                          : 'text-gray-700 hover:text-black hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Bottom Actions */}
              <div className="px-6 py-6 space-y-4 border-t border-gray-200">
                <a
                  href="https://www.google.com/maps/place/620+W+Dalton+Ave,+Coeur+d'Alene,+ID+83854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Get Directions</span>
                </a>
                
                <a
                  href="tel:2088182259"
                  className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(208) 818-2259</span>
                </a>
                
                <Link
                  href="/estimate"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-black text-white text-center py-3 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                >
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}