"use client"

import { useEffect, useState } from "react"

export function PrinciplesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="solutions"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-amber-500/20"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-8 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          All-in-One Platform for Smarter Education Management
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p
              className={`text-gray-300 text-base sm:text-lg leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              ZeaCRM integrates all student, staff, and partner interactions into a unified platform. We are reducing
              manual effort and improving engagement. AI-driven automation ensures that every inquiry, application, and
              update is handled promptly and professionally.
            </p>
            <p
              className={`text-gray-300 text-base sm:text-lg leading-relaxed transition-all duration-1000 delay-400 hover:text-gray-100 hover:translate-x-2 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              With built-in analytics, institutions can monitor admissions performance, identify trends, and personalize
              communication. ZeaCRM helps you spend less time managing data and more time shaping learning outcomes.
            </p>
          </div>

          <div
            className={`bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg aspect-square lg:aspect-auto lg:h-96 flex items-center justify-center leading-7 tracking-normal transition-all duration-1000 delay-300 hover:scale-105 hover:shadow-2xl hover:from-blue-500/30 hover:to-purple-500/30 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-gray-400">Image Placeholder</span>
          </div>
        </div>

        <div
          className={`mt-12 bg-amber-500 rounded-lg p-8 text-center transition-all duration-1000 delay-500 hover:bg-amber-600 hover:scale-[1.02] hover:shadow-2xl ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white font-bold text-lg">
              "Experience how ZeaCRM can change your healthcare organization with intelligent automation."
            </p>
            <button className="bg-white text-amber-500 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-all duration-300 whitespace-nowrap hover:scale-105 hover:shadow-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
