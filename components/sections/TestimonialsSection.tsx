'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -100])

  // Real Google Reviews from The Local Body Shop
  const testimonials = [
    {
      text: "Dan is an awesome guy and does great work. He got me in quickly when other body shops were months out. He was very honest and kept me updated the whole time my car was in the shop. Hands down the best body shop in town.",
      author: "Samuel B.",
      verified: true,
      rating: 5
    },
    {
      text: "The workers are excellent. Body and paint is a 10/10 you can't even tell the door was dented. If you need body work and/or paint work done I recommend taking it here.",
      author: "Kaylyn Carpenter",
      verified: true,
      rating: 5
    },
    {
      text: "Phenomenal job and service! Someone backed into my truck, they took care of it, looks brand new! Their customer service is exceptional, did couple extra things for me without charge.",
      author: "Ivan P",
      verified: true,
      rating: 5
    },
    {
      text: "I have used The local body shop for two of my vehicles now. Both being about a year + now, the body work and paint look amazing and have stood the test of time.",
      author: "Alora MacLeod",
      verified: true,
      rating: 5
    },
    {
      text: "Dan not only slaughtered them on price, he also beat them on service and quality. Dan is incredibly knowledgeable and strives to do right by his customers.",
      author: "H20 Nomad",
      verified: true,
      rating: 5
    },
    {
      text: "If I could give more than a five star I would. These guys have the customers best interest in mind. Met me after hours for pick up and charged my battery too!!!",
      author: "Jenn Keyes",
      verified: true,
      rating: 5
    }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 10px)`,
        }}
      />

      {/* Floating Background Elements - Very Subtle */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Live Google Reviews Badge */}
          <motion.div
            className="inline-flex items-center gap-3 mb-12"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 blur-xl opacity-20 animate-pulse" />
              <div className="relative bg-black text-white px-6 py-3 flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.15em]">Live from Google</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs">4.9</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-black uppercase tracking-[0.02em] mb-6"
            style={{ 
              fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '0.02em'
            }}>
            TRUSTED BY
            <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight italic mt-2 normal-case"
              style={{ 
                fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                letterSpacing: '0.03em'
              }}>
              North Idaho
            </span>
          </h2>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto mb-24">
          <motion.div
            className="relative bg-gray-50 p-12 lg:p-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Large Quote Mark */}
            <div className="absolute -top-6 -left-6 text-[120px] text-black/10 font-serif leading-none select-none">
              &ldquo;
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <motion.p
                key={activeIndex}
                className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{ 
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  lineHeight: '1.3'
                }}
              >
                {testimonials[activeIndex].text}
              </motion.p>

              <motion.div
                key={`author-${activeIndex}`}
                className="flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div>
                  <p className="text-black font-medium text-lg mb-1"
                    style={{ 
                      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                    — {testimonials[activeIndex].author}
                  </p>
                  {testimonials[activeIndex].verified && (
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified Google Review
                    </div>
                  )}
                </div>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1 transition-all duration-300 ${
                    i === activeIndex 
                      ? 'w-8 bg-black' 
                      : 'w-1 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Testimonial Grid - Minimal Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="group relative bg-white border border-gray-200 p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActiveIndex(i)}
              whileHover={{ y: -8 }}
            >
              {/* Hover accent */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <p className="text-black font-medium text-sm">{testimonial.author}</p>
                {testimonial.verified && (
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="border-y border-gray-200 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <motion.div 
                className="text-4xl md:text-5xl font-light text-black mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
                style={{ 
                  fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                500+
              </motion.div>
              <div className="text-gray-500 text-xs uppercase tracking-[0.2em]">Happy Customers</div>
            </div>
            
            <div className="text-center">
              <motion.div 
                className="text-4xl md:text-5xl font-light text-black mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8, delay: 0.5 }}
                style={{ 
                  fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                4.9
              </motion.div>
              <div className="text-gray-500 text-xs uppercase tracking-[0.2em]">Google Rating</div>
            </div>
            
            <div className="text-center">
              <motion.div 
                className="text-4xl md:text-5xl font-light text-black mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8, delay: 0.6 }}
                style={{ 
                  fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                100%
              </motion.div>
              <div className="text-gray-500 text-xs uppercase tracking-[0.2em]">Local Owned</div>
            </div>
            
            <div className="text-center">
              <motion.div 
                className="text-4xl md:text-5xl font-light text-black mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8, delay: 0.7 }}
                style={{ 
                  fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                #1
              </motion.div>
              <div className="text-gray-500 text-xs uppercase tracking-[0.2em]">In North Idaho</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-600 text-lg mb-8 font-light"
            style={{ 
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
            Join hundreds of satisfied customers
          </p>
          
          <motion.a
            href="/estimate"
            className="inline-block bg-black text-white px-12 py-5 text-sm font-bold uppercase tracking-[0.15em] hover:bg-gray-900 transition-all duration-300"
            style={{ 
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Your Free Estimate
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}