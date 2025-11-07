"use client"

import { Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function RetailVideoSection() {
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
    <section id="video" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center text-amber-500 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Smarter Customer Engagement for Modern Retail
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center group cursor-pointer hover:shadow-2xl hover:shadow-amber-500/20 transition-all">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-white ml-1" fill="white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-xl">
                Customer experience defines brand loyalty. ZeaCRM helps retail and e-commerce businesses deliver seamless, personalized engagement. Right from discovery to delivery. Whether you’re managing a physical store or a global online brand, ZeaCRM brings all your customer interactions, marketing campaigns, and order insights under one intelligent system.
              </p>
              <p className="text-gray-300 leading-relaxed text-xl">
                With built-in automation and AI recommendations, you can manage promotions, track buying behavior, and follow up with customers effortlessly. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
