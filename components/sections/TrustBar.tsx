'use client'

import { motion } from 'framer-motion'
import { ClipboardCheck, Phone, Wrench, Car } from 'lucide-react'

export default function CommitmentAndProcess() {
  const processSteps = [
    {
      icon: Phone,
      number: "01",
      title: "Free Estimate",
      description: "Call or stop by anytime. No appointment needed for estimates."
    },
    {
      icon: ClipboardCheck,
      number: "02", 
      title: "Insurance Handled",
      description: "As a preferred repair facility, we work directly with all insurance companies."
    },
    {
      icon: Wrench,
      number: "03",
      title: "Expert Repair",
      description: "Factory-certified repairs by expert technicians. Quality guaranteed."
    },
    {
      icon: Car,
      number: "04",
      title: "Ready to Go",
      description: "Final inspection, detailed, and cleaned. Drive away with confidence."
    }
  ]

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Commitment Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-8"
              style={{ 
                fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                letterSpacing: '-0.02em'
              }}>
              Our Commitment to Excellence
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              style={{ 
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
              Locally owned and operated collision repair facility that focuses on quality over quantity. 
              Our goal is to bring your vehicle back to pre-accident condition while following OEM repair 
              procedures to ensure your vehicle is as safe as the day it came off the assembly line.
            </p>
          </motion.div>
        </div>

        {/* Simple divider line */}
        <motion.div 
          className="w-24 h-px bg-gray-300 mx-auto mb-20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Process Section */}
        <div>
          {/* Process Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                The Process
              </h3>
              <p className="text-3xl md:text-4xl font-light text-black"
                style={{ 
                  fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: '-0.01em'
                }}>
                Simple. Transparent. Professional.
              </p>
            </motion.div>
          </div>

          {/* Process Steps - Horizontal Layout */}
          <div className="grid md:grid-cols-4 gap-12 md:gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                className="relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-gray-300 to-transparent" />
                )}
                
                <div className="text-center">
                  {/* Step Number */}
                  <div className="text-6xl font-extralight text-gray-300 mb-4"
                    style={{ 
                      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <step.icon className="w-16 h-16 text-gray-700" strokeWidth={1} />
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-black mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 max-w-[200px] mx-auto leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs uppercase tracking-[0.15em] text-gray-500 font-semibold">
              <span>Free Estimates</span>
              <span className="text-gray-300">•</span>
              <span>Lifetime Warranty</span>
              <span className="text-gray-300">•</span>
              <span>All Insurance</span>
            </div>
            
            <a
              href="/estimate"
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-[0.1em] hover:bg-gray-900 transition-all duration-300"
              style={{ 
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              Start Your Repair
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}