export default function TrustBar() {
  return (
    <section className="bg-gray-50 py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
            Certifications
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Certified Excellence
          </h3>
          <div className="w-16 h-[1px] bg-gray-300 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Gold Class facility. Platinum technicians. The highest standards in collision repair.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
          {/* I-CAR Gold Class */}
          <div className="flex flex-col items-center">
            <img 
              src="https://res.cloudinary.com/ddyiobiae/image/upload/v1757407339/gold-class-logo_tqq8kd.png" 
              alt="I-CAR Gold Class Facility" 
              className="h-28 md:h-36 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <p className="mt-4 text-xs uppercase tracking-wider text-gray-500 font-bold">
              Gold Class Facility
            </p>
          </div>
          
          {/* I-CAR Platinum */}
          <div className="flex flex-col items-center">
            <img 
              src="https://res.cloudinary.com/ddyiobiae/image/upload/v1757407339/platinum-logo_cut86i.png" 
              alt="I-CAR Platinum Technicians" 
              className="h-28 md:h-36 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <p className="mt-4 text-xs uppercase tracking-wider text-gray-500 font-bold">
              Platinum Technicians
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
