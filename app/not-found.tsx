import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-light text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link
          href="/"
          className="bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-wider hover:bg-gray-900 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
