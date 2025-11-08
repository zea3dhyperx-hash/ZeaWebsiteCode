"use client"

import { Play } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function FinanceVideoSection() {
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
    <section id="video" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center text-white mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Smarter Relationship Management for Financial Growth
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-amber-400 text-2xl font-medium my-0 leading-7 tracking-normal text-left">
              Finance & Insurance that works for everyone
            </h3>
            <p className="text-gray-300 leading-relaxed text-xl leading-7 mx-0 my-2.5">
              {"In finance and insurance, trust and timing drive every relationship. ZeaCRM helps financial institutions, insurance providers, and advisors manage leads, automate communication, and deliver personalized service with ease.\n\n"}
            </p>
            <p className="text-gray-300 leading-relaxed text-xl">
              From client onboarding to policy renewals and loan tracking, ZeaCRM gives you a complete 360° view of every customer interaction. With AI-powered insights, it helps you prioritize high-value clients, follow up automatically, and make smarter business decisions faster and more securely.
            </p>
          </div>

          {/* Video Placeholder */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-500" onClick={() => window.open('https://www.youtube.com/embed/BVZpMDhZNlg?si=ejUKwhpGBY2CPjxv','_blank')}>
              <img src="https://img.youtube.com/vi/BVZpMDhZNlg/hqdefault.jpg" alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 text-slate-700 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}
