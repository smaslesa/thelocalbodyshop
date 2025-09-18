'use client'

import { useState } from 'react'
import { Quote, Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  
  const testimonials = [
    {
      text: "The Local Body Shop exceeded my expectations. They communicated every step and my car looks better than before the accident. Outstanding service!",
      author: "Sarah M.",
      location: "Coeur d'Alene",
      highlight: "Excellent Communication",
      verified: true
    },
    {
      text: "Professional service from start to finish. They worked directly with my insurance and the quality of work is exceptional. Highly recommended!",
      author: "Mike R.",
      location: "Post Falls",
      highlight: "Insurance Direct",
      verified: true
    },
    {
      text: "The paint matching was perfect and they completed the work faster than promised. The team really lives up to their motto of being of value.",
      author: "Jennifer L.",
      location: "Hayden",
      highlight: "Perfect Paint Match",
      verified: true
    },
    {
      text: "Honest, reliable, and skilled. They didn't recommend unnecessary work and the final result was flawless. True professionals who care about quality.",
      author: "David K.",
      location: "Rathdrum",
      highlight: "Honest Service",
      verified: true
    }
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(59,130,246,.05) 35px, rgba(59,130,246,.05) 70px)`
        }}/>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-blue-900 text-sm font-medium">Real Customer Stories</span>
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Your Neighbors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We strive not to be a success, but rather to be of value.
          </p>
        </div>

        {/* Main Testimonial Showcase - Mobile Carousel / Desktop Grid */}
        <div className="lg:hidden">
          {/* Mobile Carousel */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonials[activeTestimonial].highlight}
                </span>
                {testimonials[activeTestimonial].verified && (
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    Verified Customer
                  </span>
                )}
              </div>
              
              <Quote className="w-10 h-10 text-blue-600 opacity-20 mb-4" />
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                &ldquo;{testimonials[activeTestimonial].text}&rdquo;
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900">{testimonials[activeTestimonial].author}</p>
                  <p className="text-sm text-gray-500">{testimonials[activeTestimonial].location}, ID</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === activeTestimonial ? 'w-8 bg-blue-500' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Featured + Grid */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Featured Large Testimonial */}
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-12 h-12 text-blue-600 opacity-20" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 text-xl mb-8 leading-relaxed">
                &ldquo;The Local Body Shop exceeded my expectations. They communicated every step and my car looks better than before the accident. Outstanding service!&rdquo;
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Sarah M.</p>
                    <p className="text-gray-500">Coeur d&apos;Alene, ID</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600 font-medium">Verified Customer</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Excellent Communication
                </span>
              </div>
            </div>

            {/* Right side - 2 smaller testimonials stacked */}
            <div className="space-y-6">
              {testimonials.slice(1, 3).map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">
                      {testimonial.highlight}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom testimonial - full width */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
            <div className="max-w-4xl mx-auto text-center">
              <Quote className="w-10 h-10 text-white opacity-30 mx-auto mb-4" />
              <p className="text-xl mb-6 leading-relaxed">
                &ldquo;Honest, reliable, and skilled. They didn&apos;t recommend unnecessary work and the final result was flawless. True professionals who care about quality.&rdquo;
              </p>
              <div className="flex items-center justify-center gap-2 text-white/90">
                <span className="font-semibold">— David K., Rathdrum</span>
                <CheckCircle className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 gap-8 mt-12 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">5+</div>
            <div className="text-sm text-gray-600">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">100s</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">
            Experience our commitment to being of value
          </p>
          <a
            href="/estimate"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Repair
          </a>
        </div>
      </div>
    </section>
  )
}
