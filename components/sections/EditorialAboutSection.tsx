'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EditorialAboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Shop images for the slider
  const slides = [
    {
      image: "https://res.cloudinary.com/ddyiobiae/image/upload/v1758179540/The_Local_Body_Shop_Hero_cirfa1.webp",
      caption: "PRECISION CRAFTED"
    },
    {
      image: "https://res.cloudinary.com/ddyiobiae/image/upload/v1758229405/car_mneem6.webp",
      caption: "EVERY DETAIL MATTERS"
    },
    {
      image: "https://res.cloudinary.com/ddyiobiae/image/upload/v1758229406/car_in_paint_pb6u08.jpg",
      caption: "PAINT PERFECTION"
    },
    {
      image: "https://res.cloudinary.com/ddyiobiae/image/upload/v1758229560/paint_-_shop_m8meyg.jpg",
      caption: "STATE OF THE ART"
    },
    {
      image: "https://res.cloudinary.com/ddyiobiae/image/upload/v1758229411/shop_wonxpy.webp",
      caption: "OUR SANCTUARY"
    },
    {
      image: "https://res.cloudinary.com/ddyiobiae/image/upload/v1758229408/truck-in-garage_vlkwds.jpg",
      caption: "BUILT TOUGH"
    }
  ]

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative bg-black">
      {/* Full-width image showcase */}
      <div className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt="The Local Body Shop"
              className="w-full h-full object-cover"
            />
            {/* Darker overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* Quote Overlay - Centered */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center max-w-5xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin text-white leading-tight mb-8"
              style={{ 
                fontFamily: '"Playfair Display", "Times New Roman", serif',
                fontStyle: 'italic',
                letterSpacing: '-0.02em'
              }}>
              &ldquo;We strive not to be a success, but rather to be of value&rdquo;
            </h2>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-white/50"></div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/70 font-bold">
                The Local Body Shop
              </p>
              <div className="w-12 h-[1px] bg-white/50"></div>
            </div>
          </motion.div>
        </div>

        {/* Simple slide indicators at bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}