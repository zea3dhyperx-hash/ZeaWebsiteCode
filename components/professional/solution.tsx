"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function SolutionSection() {
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
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-500">
              All-in-One Platform for Client-Focused Success
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              ZeaCRM helps professional service providers bring structure to complex workflows and client communication.
              From proposal to project completion, every interaction is tracked, analyzed, and optimized through
              AI-powered automation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Collaborate with your team, automate reminders, and access all client information in one secure dashboard.
              ZeaCRM gives you the clarity and control to deliver consistent, high-quality service. All while spending
              less time on administration and more time on impact
            </p>
          </div>

          {/* Image */}
          <div
            className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"}`}
          >
            <img
              src="allinone.png"
              alt="Healthcare team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
