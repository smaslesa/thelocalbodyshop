'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Only initialize Lenis on client side and after mount
    lenisRef.current = new Lenis({
      duration: 0.8, // Faster, less floaty
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // Smoother easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // Less aggressive wheel scrolling
      touchMultiplier: 1.5, // Slightly less touch multiplier
      infinite: false,
      autoResize: true,
    })

    // Start Lenis
    lenisRef.current.start()

    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

    return () => {
      lenisRef.current?.stop()
      lenisRef.current?.destroy()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}
