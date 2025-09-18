import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact The Local Body Shop - Coeur d\'Alene Auto Body Repair | (208) 818-2259',
  description: 'Contact The Local Body Shop in Coeur d\'Alene, ID. Call (208) 818-2259 for auto body repair, collision repair, and paint services. Free estimates available.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with The Local Body Shop for all your auto body repair needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <a href="tel:2088182259" className="text-blue-600 hover:text-blue-700">
                    (208) 818-2259
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a href="mailto:Thelocalbodyshop@gmail.com" className="text-blue-600 hover:text-blue-700">
                    Thelocalbodyshop@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    620 West Dalton Ave.<br />
                    Coeur d&apos;Alene, ID 83854
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Hours</h3>
                  <p className="text-gray-600">
                    Monday – Friday: 9am – 6pm<br />
                    Saturday – Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Map will be integrated here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
