"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export function FinanceSolution() {
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
    <section id="solution" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-amber-400 mb-6 transition-all duration-700 text-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          All-in-One Platform for Smarter Financial Operations
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              ZeaCRM centralizes every lead, transaction, and client communication into one secure and compliant dashboard. It integrates seamlessly with your accounting, payment, and communication tools to ensure your business runs smoothly and transparently.
              AI-driven automation ensures that renewals, due dates, and customer interactions happen at the right time. All this without the need for any manual follow-ups. From financial analysis to personalized policy management, ZeaCRM keeps your business efficient, compliant, and client-ready at all times.
            </p>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
              src="allinone.png"
              alt="Healthcare team collaboration"
              className="w-full h-full object-cover"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
