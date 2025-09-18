'use client'

import { Phone, Clock, MapPin } from 'lucide-react'

export default function CTASection() {
  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday - Sunday', hours: 'Closed' }
  ]

  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-4">
            Get Started
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Ready to Restore Your Vehicle?
          </h3>
          <div className="w-16 h-[1px] bg-gray-300 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Free estimates. Insurance approved. Walk-ins welcome.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="text-center">
            <Phone className="w-12 h-12 mx-auto mb-4 text-gray-500" strokeWidth={1} />
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-3">
              Call Us
            </h4>
            <a
              href="tel:2088182259"
              className="text-2xl font-light hover:text-gray-600 transition-colors"
            >
              (208) 818-2259
            </a>
          </div>

          {/* Location */}
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-500" strokeWidth={1} />
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-3">
              Visit Us
            </h4>
            <a 
              href="https://www.google.com/maps/place/620+W+Dalton+Ave,+Coeur+d'Alene,+ID+83854"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-light hover:text-gray-600 transition-colors"
            >
              620 West Dalton Ave.<br />
              Coeur d&apos;Alene, ID 83854
            </a>
          </div>

          {/* Hours */}
          <div className="text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-gray-500" strokeWidth={1} />
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-3">
              Business Hours
            </h4>
            <div className="space-y-1">
              {businessHours.map((schedule, index) => (
                <div key={index} className="text-lg font-light">
                  <span className="text-gray-600 text-sm">{schedule.day}</span><br />
                  <span>{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/estimate"
            className="bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-gray-900 transition-all duration-300"
          >
            Get Free Estimate
          </a>
          <a
            href="/contact"
            className="border-2 border-black text-black px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-600 font-light">
            Trusted by Coeur d&apos;Alene drivers since 2021
          </p>
        </div>
      </div>
    </section>
  )
}