"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"

export function FinanceFooterCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-amber-500 overflow-hidden"
    >
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-700/10 rounded-full -ml-32 -mb-32" />

      <div
        className={`relative max-w-4xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
          Find out how ZeaCRM can transform your finance or insurance operations with automation
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Button size="lg" className="bg-black hover:bg-gray-900 text-white font-semibold px-8">
            Get Started Today
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold px-8 bg-transparent"
          >
            Book Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
