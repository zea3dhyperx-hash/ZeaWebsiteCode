"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation";

export function RetailFooterCTA() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r bg-primary relative overflow-hidden"
    >
      <div
        className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
          Experience how ZeaCRM can power your retail and e-commerce business with automation, insights, and effortless communication
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            onClick={() => router.push("/get-started")}
            size="lg" className="bg-black hover:bg-gray-900 text-white font-semibold px-8">
            Get Started Today
          </Button>
          <Button
            onClick={() => router.push("/demo")}
            size="lg"
            variant="outline"
            className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold px-8 bg-transparent transition-all"
          >
            Book Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
