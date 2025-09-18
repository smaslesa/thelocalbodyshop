'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Premium Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://res.cloudinary.com/ddyiobiae/image/upload/v1758179540/The_Local_Body_Shop_Hero_cirfa1.webp"
          alt="The Local Body Shop - Professional Auto Body Repair"
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.9) contrast(1.1)',
          }}
        />
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-[1600px] mx-auto w-full">
          {/* Hero Content - Split Layout */}
          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:gap-20 xl:gap-32">
            {/* Left Side - Minimal Text Content */}
            <div className="space-y-8 lg:max-w-2xl mt-8 lg:mt-0">
              {/* Main headline - Clean and Simple */}
              <div>
                <h1 className="text-white leading-[0.95]">
                  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-light uppercase"
                    style={{ 
                      fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      letterSpacing: '0.02em',
                      textShadow: '0 2px 20px rgba(0,0,0,0.5)'
                    }}>
                    COLLISION REPAIR
                  </span>
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extralight italic mt-2"
                    style={{ 
                      fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      letterSpacing: '0.03em',
                      opacity: 0.95,
                      textShadow: '0 2px 15px rgba(0,0,0,0.4)'
                    }}>
                    Perfected
                  </span>
                </h1>
              </div>

              {/* Single line description */}
              <p className="text-white/85 text-base md:text-lg lg:text-xl font-light"
                style={{ 
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  textShadow: '0 1px 8px rgba(0,0,0,0.6)'
                }}>
                Locally owned. OEM repair procedures. Quality over quantity.
              </p>

              {/* CTAs - Clean and Simple */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/estimate"
                  className="bg-white text-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-gray-100 transition-all duration-300 text-center shadow-xl hover:shadow-2xl"
                  style={{ 
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Free Estimate
                </motion.a>
                
                <motion.a
                  href="tel:2088182259"
                  className="bg-transparent text-white border-2 border-white/80 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-white hover:text-black transition-all duration-300 text-center shadow-xl hover:shadow-2xl backdrop-blur-sm"
                  style={{ 
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  (208) 818-2259
                </motion.a>
              </div>
            </div>

            {/* Right Side - Logo */}
            <div className="relative lg:flex-shrink-0 mb-8 lg:mb-0 flex justify-center lg:justify-start">
              <motion.img
                src="/logos/the-local-body-shop-logo.png"
                alt="The Local Body Shop"
                loading="eager"
                decoding="sync"
                className="h-56 sm:h-64 md:h-72 lg:h-[340px] xl:h-[425px] 2xl:h-[510px] w-auto relative z-10"
                style={{
                  filter: 'invert(1) brightness(0.95) drop-shadow(0 4px 20px rgba(0,0,0,0.5))',
                  WebkitFilter: 'invert(1) brightness(0.95) drop-shadow(0 4px 20px rgba(0,0,0,0.5))',
                  maxWidth: '90vw',
                  minHeight: '200px'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                onError={(e) => {
                  console.error('Logo failed to load, trying alternative path');
                  (e.target as HTMLImageElement).src = '/images/logo/the-local-body-shop-logo.png';
                }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-2xl font-thin"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}