'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  const phoneNumber = '2088182259'
  const textNumber = '2088182259'
  const formattedPhone = '(208) 818-2259'
  const formattedTextNumber = '(208) 818-2259'

  return (
    <>
      {/* Floating Button - Premium Design */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence mode="wait">
          {!isOpen ? (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="bg-black hover:bg-gray-900 text-white rounded-full p-5 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group relative overflow-hidden"
            aria-label="Contact us"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
            
            {/* Phone Icon */}
            <svg className="h-6 w-6 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            
            {/* Pulse indicator */}
            <span className="absolute top-0 right-0 h-3 w-3 bg-blue-500 rounded-full">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
          </motion.button>
        ) : (
          <motion.div 
            className="bg-white rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.15)] p-5 min-w-[320px]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-bold text-black">Get in Touch</h3>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-black transition-colors p-1"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* Contact Options */}
            <div className="space-y-3">
              {/* Call Option */}
              <motion.a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-4 p-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-center gap-4 w-full">
                  <div className="bg-white/10 backdrop-blur p-3 rounded-full group-hover:scale-110 transition-transform">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Call Now</div>
                    <div className="text-sm text-white/80">{formattedPhone}</div>
                  </div>
                  <svg className="h-5 w-5 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>

              {/* Text Option */}
              <motion.a
                href={`sms:${textNumber}`}
                className="flex items-center gap-4 p-4 border-2 border-black text-black rounded-xl hover:bg-black hover:text-white transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-black/10 group-hover:bg-white/10 backdrop-blur p-3 rounded-full group-hover:scale-110 transition-all">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Text Us</div>
                  <div className="text-sm opacity-80">{formattedTextNumber}</div>
                </div>
                <svg className="h-5 w-5 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>

            {/* Business Hours */}
            <div className="mt-5 p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 text-center font-medium">
                MON-FRI: 9AM-6PM • CLOSED WEEKENDS
              </p>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>

      {/* Backdrop when menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
