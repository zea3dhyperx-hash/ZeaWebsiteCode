"use client"

import { Play } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function RelationshipSection() {
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
    <section id="video" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-4 text-amber-400 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Smarter Relationship Management for Learning Institutions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Centralize, engage, and convert students with our end-to-end Education CRM
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Education is built on meaningful connections between institutions, students, and faculty. ZeaCRM helps
              educational organizations and training providers streamline admissions, automate communication, and track
              engagement through one intelligent platform.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              From inquiry to enrollment, ZeaCRM gives you complete visibility into every student interaction. Whether
              it's managing thousands of leads for a university or handling class schedules for a training institute,
              ZeaCRM ensures no opportunity is missed.
            </p>
          </div>

          {/* Video Placeholder */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
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
