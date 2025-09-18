'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function GallerySection() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [activeRepair, setActiveRepair] = useState(0)

  // Featured repairs for main slider - updated for The Local Body Shop
  const featuredRepairs = [
    {
      title: "Ford F-250 Front End Repair",
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757410981/Truck_1_sbvosw.webp",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757410978/Truck_2_x11esn.webp"
    },
    {
      title: "Honda Odyssey Complete Restoration",
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757410976/Black_Van_1_sefdvp.webp",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757410975/Black_Van_2_pft6hi.webp"
    },
    {
      title: "Honda CRV Body Repair",
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757410975/honda_van_uzuvw0.jpg",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757410993/honda_van_2_vmugwj.jpg"
    },
    {
      title: "Toyota Sienna Collision Repair",
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757410984/Grey_Van_1_w2vswf.jpg",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757410982/Grey_Van_2_fa5ejh.jpg"
    },
    {
      title: "Professional Vehicle Restoration",
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757713251/DSC07712_qrwa7n.jpg",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757713251/77672216434__7896903F-8947-4EC7-BD3A-20F66AC3F907_1_hhkhpb.jpg"
    },
    {
      title: "Expert Body Work",
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757713250/DSC05538_1_yqhxtg.jpg",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757713250/156_1206_n8s0pu.jpg"
    },
    {
      title: "Professional Paint Restoration",
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757713250/DSC08920_q5745j.jpg",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757713250/image1_3_gb0ljp.jpg"
    },
    {
      title: "Collision Repair Excellence",
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757713249/156_2574_vyebsp.jpg",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757713249/IMG_6289_mopz0a.jpg"
    },
    {
      title: "Quality Restoration Work",
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757713248/DSC07992_upnive.jpg",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757713248/DSC08357_crkxlh.jpg"
    }
  ]

  // Grid items - showing featured vehicles
  const gridRepairs = [
    { 
      // Ford F-250
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757410981/Truck_1_sbvosw.webp",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757410978/Truck_2_x11esn.webp"
    },
    { 
      // Honda Odyssey
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757410976/Black_Van_1_sefdvp.webp",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757410975/Black_Van_2_pft6hi.webp"
    },
    { 
      // Professional Vehicle
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757713251/DSC07712_qrwa7n.jpg",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757713251/77672216434__7896903F-8947-4EC7-BD3A-20F66AC3F907_1_hhkhpb.jpg"
    },
    {
      // Expert Body Work
      before: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757713250/DSC08920_q5745j.jpg",
      after: "https://res.cloudinary.com/ddyiobiae/image/upload/v1757713250/image1_3_gb0ljp.jpg"
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
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            See the Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From collision to completion. Real repairs from our shop.
          </p>
        </div>

        {/* Main Before/After Slider */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              {featuredRepairs[activeRepair].title}
            </h3>
          </div>
          
          <div 
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden cursor-ew-resize select-none"
            onMouseMove={handleSliderMove}
            onTouchMove={handleTouch}
          >
            {/* After Image (bottom layer) */}
            <img 
              src={featuredRepairs[activeRepair].after}
              alt="After repair"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Before Image (top layer with clip) */}
            <div 
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={featuredRepairs[activeRepair].before}
                alt="Before repair"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>
            
            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-semibold">
              BEFORE
            </div>
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-semibold">
              AFTER
            </div>
          </div>

          {/* Slider Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setActiveRepair(prev => (prev - 1 + featuredRepairs.length) % featuredRepairs.length)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex gap-2">
              {featuredRepairs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveRepair(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === activeRepair ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setActiveRepair(prev => (prev + 1) % featuredRepairs.length)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Grid of Additional Before/After - Stacked for mobile */}
        <div className="grid md:grid-cols-2 gap-6">
          {gridRepairs.map((repair, i) => (
            <div key={i} className="bg-gray-50 rounded-lg overflow-hidden">
              {/* Stack before/after vertically on mobile, side-by-side on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs font-semibold z-10">
                    BEFORE
                  </div>
                  <img 
                    src={repair.before}
                    alt="Before repair"
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs font-semibold z-10">
                    AFTER
                  </div>
                  <img 
                    src={repair.after}
                    alt="After repair"
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Every repair backed by our warranty • I-CAR Gold Class certified work
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            View More Repairs
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
