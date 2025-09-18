import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import GallerySection from '@/components/sections/GallerySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import EditorialAboutSection from '@/components/sections/EditorialAboutSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'The Local Body Shop - Coeur d\'Alene #1 Auto Body Shop | Serving Post Falls, Hayden ID',
  description: 'Coeur d\'Alene\'s premier auto body shop. Expert collision repair, auto paint services, dent repair & insurance claims. Serving Post Falls, Hayden, Rathdrum. We strive not to be a success, but rather to be of value. Call (208) 818-2259 for free estimates!',
  keywords: 'auto body shop Coeur d\'Alene, collision repair Coeur d\'Alene ID, auto body repair near me, car paint shop Coeur d\'Alene, dent repair Post Falls, auto body shop Hayden, collision repair Rathdrum, insurance claims auto body, I-CAR certified shop, PPG paint center',
  openGraph: {
    title: 'The Local Body Shop - Coeur d\'Alene #1 Auto Body Shop',
    description: 'Expert collision repair & auto body services in Coeur d\'Alene, ID. We strive not to be a success, but rather to be of value. Quality warranty on all repairs.',
    url: 'https://www.thelocalbodyshop.com',
    images: [
      {
        url: '/logos/the-local-body-shop-logo.png',
        width: 1200,
        height: 630,
        alt: 'The Local Body Shop - Coeur d\'Alene Auto Body Shop',
      }
    ],
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <GallerySection />
      <TestimonialsSection />
      <EditorialAboutSection />
      <CTASection />
    </>
  )
}