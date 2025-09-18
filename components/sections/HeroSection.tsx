'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Premium Background Image - No Parallax for smooth scrolling */}
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

      {/* Premium Content - No Parallax */}
      <div 
        className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32"
      >
        <div className="max-w-[1600px] mx-auto w-full">
          {/* Hero Content - Split Layout with Logo on Right (Desktop) / Top (Mobile) */}
          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:gap-20 xl:gap-32">
            {/* Left Side Desktop / Bottom Mobile - Text Content */}
            <div className="space-y-8 lg:max-w-2xl mt-8 lg:mt-0">
              {/* Main headline - Collision Repair Focused */}
              <h1 className="text-white">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
                  COLLISION
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
                  REPAIR
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.85]">
                  PERFECTED
                </span>
              </h1>

              {/* Subtext - Mobile Optimized */}
              <p className="text-white/90 text-sm md:text-base lg:text-lg max-w-xl lg:max-w-2xl font-light leading-relaxed">
                <span className="block md:hidden">
                  Locally owned collision repair. Quality over quantity. OEM procedures for your safety.
                </span>
                <span className="hidden md:block">
                  Locally owned and operated collision repair facility that focuses on quality over quantity. Our goal is to bring your vehicle back to pre-accident condition while following OEM repair procedures to ensure your vehicle is as safe as the day it came off the assembly line.
                </span>
              </p>

              {/* CTAs - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 pb-6">
                <a
                  href="/estimate"
                  className="bg-white text-black px-6 py-3 md:px-8 md:py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  Free Estimate
                </a>
                
                <a
                  href="tel:2088182259"
                  className="bg-transparent text-white border-2 border-white/70 px-6 py-3 md:px-8 md:py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-200 text-center"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Side Desktop / Top Mobile - Logo */}
            <div className="relative lg:flex-shrink-0 mb-8 lg:mb-0 flex justify-center lg:justify-start">
              {/* The ACTUAL LOGO IMAGE - Works on ALL devices */}
              <img
                src="/logos/the-local-body-shop-logo.png"
                alt="The Local Body Shop"
                loading="eager"
                decoding="sync"
                className="h-56 sm:h-64 md:h-72 lg:h-[340px] xl:h-[425px] 2xl:h-[510px] w-auto relative z-10"
                style={{
                  filter: 'brightness(0) drop-shadow(0 0 8px rgba(255,255,255,1)) drop-shadow(0 0 25px rgba(255,255,255,1)) drop-shadow(0 0 50px rgba(255,255,255,1)) drop-shadow(0 0 100px rgba(100,200,255,1)) drop-shadow(0 0 150px rgba(0,150,255,0.8))',
                  opacity: 1,
                  maxWidth: '90vw',
                  minHeight: '200px'
                }}
                onLoad={() => console.log('✅ Logo loaded successfully!')}
                onError={(e) => {
                  console.error('❌ Logo failed to load');
                  // Try alternative source
                  (e.target as HTMLImageElement).src = '/images/logo/the-local-body-shop-logo.png';
                }}
              />
            </div>
          </div>

          {/* Bottom accent - Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-12 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 text-white/40 text-xs uppercase tracking-[0.2em]">
              <div className="flex items-center gap-6">
                <span>Est. 2021</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">I-CAR Gold Class</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden md:inline text-white/20">Scroll to explore</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg className="w-4 h-4 text-white/40" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}