"use client"

import { Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="video" className="py-20 px-4 sm:px-6 lg:px-8 bg-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center text-amber-500 mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Smarter Client Management for Service Professionals
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Placeholder */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="aspect-video bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                <Play className="w-10 h-10 text-white ml-1" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Smarter Client Management Starts Here</h3>

            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed text-lg">
                When it comes to professional services, your relationships are your most valuable asset. ZeaCRM helps consultants, agencies, and service-based firms build stronger client relationships, manage projects efficiently, and automate repetitive communication - all in one intuitive platform.
              </p>
              <p className="leading-relaxed text-lg">
                With AI-driven insights, you can track leads, forecast revenue, and manage ongoing contracts seamlessly. Whether you&#39;re a legal advisor, digital agency, financial consultant, or training provider, ZeaCRM keeps your client data organized, communication consistent, and delivery on track.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
