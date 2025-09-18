import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/sections/Footer'
import FloatingContactButton from '@/components/ui/FloatingContactButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Local Body Shop - #1 Auto Body Shop Coeur d\'Alene, ID | (208) 818-2259',
  description: 'Coeur d\'Alene\'s premier auto body shop. Expert collision repair, paint services & insurance claims. We strive not to be a success, but rather to be of value. Free estimates!',
  keywords: 'auto body shop Coeur d\'Alene, collision repair Coeur d\'Alene ID, car paint Coeur d\'Alene, auto body repair Idaho, collision repair North Idaho, auto body shop Post Falls, car repair Hayden, insurance claims auto body, PPG paint center, I-CAR certified',
  authors: [{ name: 'The Local Body Shop' }],
  creator: 'The Local Body Shop',
  publisher: 'The Local Body Shop',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.thelocalbodyshop.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'The Local Body Shop - Coeur d\'Alene #1 Auto Body Shop',
    description: 'We strive not to be a success, but rather to be of value. Expert auto body work, paint services & insurance claims in Coeur d\'Alene, ID. Quality warranty.',
    url: 'https://www.thelocalbodyshop.com',
    siteName: 'The Local Body Shop',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logos/the-local-body-shop-logo.png',
        width: 1200,
        height: 630,
        alt: 'The Local Body Shop - Coeur d\'Alene Auto Body Shop',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Local Body Shop - Coeur d\'Alene #1 Auto Body Shop',
    description: 'Expert collision repair & paint services in Coeur d\'Alene, ID. We strive not to be a success, but rather to be of value. Quality warranty.',
    images: ['/logos/the-local-body-shop-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "name": "The Local Body Shop",
    "description": "Professional auto body repair, collision repair, and paint services in Coeur d'Alene, ID. We strive not to be a success, but rather to be of value",
    "url": "https://www.thelocalbodyshop.com",
    "telephone": "(208) 818-2259",
    "email": "Thelocalbodyshop@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "620 West Dalton Ave.",
      "addressLocality": "Coeur d'Alene",
      "addressRegion": "ID",
      "postalCode": "83854",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.6777",
      "longitude": "-116.7804"
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
    "currenciesAccepted": "USD",
    "areaServed": [
      {
        "@type": "City",
        "name": "Coeur d'Alene",
        "containedInPlace": {
          "@type": "State",
          "name": "Idaho"
        }
      },
      {
        "@type": "City",
        "name": "Post Falls"
      },
      {
        "@type": "City", 
        "name": "Hayden"
      },
      {
        "@type": "City",
        "name": "Rathdrum"
      },
      {
        "@type": "City",
        "name": "Spokane"
      },
      {
        "@type": "City",
        "name": "Spirit Lake"
      }
    ],
    "serviceType": [
      "Collision Repair",
      "Auto Body Repair", 
      "Paint Services",
      "Dent Repair",
      "Insurance Claims",
      "Frame Repair"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "I-CAR Gold Class Certification"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "credentialCategory": "PPG Certified Paint Center"
      }
    ],
    "foundingDate": "2020",
    "slogan": "We strive not to be a success, but rather to be of value",
    "logo": "https://www.thelocalbodyshop.com/logos/the-local-body-shop-logo.png",
    "image": [
      "https://www.thelocalbodyshop.com/logos/the-local-body-shop-logo.png"
    ],
    "sameAs": [
      "https://www.yelp.com/biz/the-local-body-shop-coeur-dalene"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  )
}