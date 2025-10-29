"use client"

import { CheckCircle2 } from "lucide-react"
import { useEffect, useRef } from "react"

export function CTATransformSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.opacity = "0"
      containerRef.current.style.animation = "fadeIn 0.6s ease-out forwards"
    }
  }, [])

  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to Transform Your Healthcare Practice?
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Join 5,000+ healthcare providers who have revolutionized their practice with ZeaCRM's AI-powered
              solutions. Streamline operations, improve patient satisfaction, and grow your business.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold px-8 py-3 rounded-lg transition-colors">
                Schedule a Demo
              </button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">No credit card required</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">14-day free trial</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Setup in 5 minutes</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Dedicated support</span>
              </div>
            </div>
          </div>

          {/* Right Side - Animated Illustration */}
          <div ref={containerRef} className="hidden md:flex items-center justify-center">
            <div className="w-full h-80 bg-gradient-to-br from-amber-400/10 to-amber-400/5 rounded-lg flex items-center justify-center border border-amber-400/20 relative overflow-hidden">
              <svg
                className="w-48 h-48 animate-pulse"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="80" r="30" stroke="#fbbf24" strokeWidth="2" />
                <path d="M 70 120 Q 100 140 130 120" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                <circle cx="85" cy="75" r="4" fill="#fbbf24" />
                <circle cx="115" cy="75" r="4" fill="#fbbf24" />
                <path
                  d="M 60 160 L 70 140 M 140 160 L 130 140"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path d="M 70 140 L 130 140" stroke="#fbbf24" strokeWidth="2" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-amber-400/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
