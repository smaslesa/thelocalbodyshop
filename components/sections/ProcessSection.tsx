'use client'

import { ClipboardCheck, Phone, Wrench, Car } from 'lucide-react'

export default function ProcessSection() {
  const steps = [
    {
      icon: Phone,
      number: "1",
      title: "Free Estimate",
      description: "Call or stop by anytime. No appointment needed for estimates."
    },
    {
      icon: ClipboardCheck,
      number: "2", 
      title: "Insurance Handled",
      description: "As a preferred repair facility, we work directly with all insurance companies. Hassle-free claims."
    },
    {
      icon: Wrench,
      number: "3",
      title: "Expert Repair",
      description: "Factory-certified repairs by expert technicians. Quality guaranteed."
    },
    {
      icon: Car,
      number: "4",
      title: "Ready to Go",
      description: "Final inspection, detailed, and cleaned. Drive away with confidence."
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
            Our Process
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Simple. Transparent. Professional.
          </h3>
          <div className="w-16 h-[1px] bg-gray-300 mx-auto" />
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-gray-200" />
              )}
              
              {/* Step */}
              <div className="relative">
                {/* Step Number - Large and minimal */}
                <div className="text-5xl font-light text-gray-300 mb-6">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6">
                  <step.icon className="w-full h-full text-gray-700" strokeWidth={1} />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 max-w-[220px] mx-auto font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <span className="text-sm uppercase tracking-wider text-gray-500">Free Estimates</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm uppercase tracking-wider text-gray-500">Lifetime Warranty</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm uppercase tracking-wider text-gray-500">All Insurance</span>
          </div>
          <a
            href="/estimate"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-gray-900 transition-all duration-300"
          >
            Start Your Repair
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
