'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // Simplified - removed parallax for now to fix scrolling
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end start"]
  // })
  
  // const imageY = useTransform(scrollYProgress, [0, 1], [0, 150])
  // const textY = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Track mouse for interactive glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="text-white"
              >
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
                  COLLISION
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
                  REPAIR
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.85]">
                  PERFECTED
                </span>
              </motion.h1>

              {/* Subtext - Detailed Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.4,
                  ease: "easeOut"
                }}
                className="text-white/90 text-base md:text-lg max-w-2xl font-light leading-relaxed"
              >
                Locally owned and operated collision repair facility that focuses on quality over quantity. Our goal is to bring your vehicle back to pre-accident condition while following OEM repair procedures to ensure your vehicle is as safe as the day it came off the assembly line.
              </motion.p>

              {/* CTAs - Cleaner and Tighter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.5,
                  ease: "easeOut"
                }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <a
                  href="/estimate"
                  className="bg-white text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Free Estimate
                </a>
                
                <a
                  href="tel:2088182259"
                  className="bg-transparent text-white border border-white/50 px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-200"
                >
                  (208) 818-2259
                </a>
              </motion.div>
            </div>

            {/* Right Side Desktop / Top Mobile - CRAZY ILLUMINATED Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.7,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="relative lg:flex-shrink-0"
            >
              {/* The BLACK logo with PERMANENT BRIGHT GLOW - COMPLETELY STATIC */}
              <img
                src="/logos/the-local-body-shop-logo.png"
                alt="The Local Body Shop"
                className="h-64 sm:h-72 md:h-80 lg:h-[340px] xl:h-[425px] 2xl:h-[510px] w-auto relative z-10 mx-auto lg:mx-0"
                style={{
                  filter: 'brightness(0) drop-shadow(0 0 5px rgba(255,255,255,1)) drop-shadow(0 0 20px rgba(255,255,255,1)) drop-shadow(0 0 40px rgba(255,255,255,1)) drop-shadow(0 0 80px rgba(100,200,255,1)) drop-shadow(0 0 120px rgba(0,150,255,0.8))',
                  opacity: 1
                }}
              />
            </motion.div>
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