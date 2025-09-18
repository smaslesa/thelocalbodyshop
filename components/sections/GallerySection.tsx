'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function GallerySection() {
  const [activeVehicle, setActiveVehicle] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const vehicles = [
    {
      title: "White SUV",
      subtitle: "Left Fender Repair",
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1758224168/Left_Fender_tda5i8.jpg",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1758224170/IMG_7534_jlxc56.jpg"
    },
    {
      title: "Red Mazda",
      subtitle: "Right Side Collision",
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1758224168/Right_Side_hqi6oz.jpg",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1758224169/IMG_7187_l0iuif.jpg"
    },
    {
      title: "White Subaru",
      subtitle: "Right Front Restoration",
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1758224168/Right_Front_f3ifmt.jpg",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1758224168/Photo_52_abymkh.jpg"
    },
    {
      title: "Red Subaru",
      subtitle: "Complete Body Work",
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1758224699/Screenshot_2025-09-18_at_12.44.44_PM_jqglc7.png",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1758224699/Screenshot_2025-09-18_at_12.44.16_PM_mfy0ht.png"
    }
  ]



  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const touch = e.touches[0]
    const x = touch.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4"
              style={{ 
                fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                letterSpacing: '-0.02em'
              }}>
              Our Recent Work
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light"
              style={{ 
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
              From collision to completion. See the quality of our repairs.
            </p>
          </motion.div>
        </div>

        {/* Main Before/After Slider */}
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Vehicle Title */}
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-light text-black mb-2"
              style={{ 
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
              {vehicles[activeVehicle].title}
            </h3>
            <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
              {vehicles[activeVehicle].subtitle}
            </p>
          </div>
          
          {/* Slider Container */}
          <div 
            className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-white overflow-hidden cursor-ew-resize select-none shadow-xl"
            onMouseMove={handleSliderMove}
            onTouchMove={handleTouch}
          >
            {/* After Image (bottom layer) */}
            <img 
              src={vehicles[activeVehicle].after}
              alt="After repair"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Before Image (top layer with clip) */}
            <div 
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={vehicles[activeVehicle].before}
                alt="Before repair"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Slider Line */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-white shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>
            
            {/* Labels */}
            <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em]">
              Before
            </div>
            <div className="absolute top-6 right-6 bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-[0.15em]">
              After
            </div>
          </div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setActiveVehicle(prev => (prev - 1 + vehicles.length) % vehicles.length)}
            className="p-2 rounded-full bg-white hover:bg-gray-50 transition-colors shadow-lg"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex gap-2">
            {vehicles.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveVehicle(i)
                  setSliderPosition(50)
                }}
                className={`h-2 rounded-full transition-all ${
                  i === activeVehicle ? 'w-8 bg-black' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setActiveVehicle(prev => (prev + 1) % vehicles.length)}
            className="p-2 rounded-full bg-white hover:bg-gray-50 transition-colors shadow-lg"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Complete Repairs Grid */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {vehicles.map((vehicle, i) => (
              <motion.div 
                key={i} 
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] z-10">
                      Before
                    </div>
                    <img 
                      src={vehicle.before}
                      alt="Before repair"
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] z-10">
                      After
                    </div>
                    <img 
                      src={vehicle.after}
                      alt="After repair"
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="w-24 h-px bg-gray-300 mx-auto mb-8" />
          
          <a
            href="/gallery"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-[0.1em] hover:bg-gray-900 transition-all duration-300"
            style={{ 
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}