"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"

const useCases = [
  {
    number: "01",
    title: "Banks & NBFCs",
    image:
      "/finance.png",
    imagePosition: "left" as const,
    features: [
      "Loan inquiry tracking & auto follow-ups",
      "KYC reminders via WhatsApp/SMS",
      "Instant approval notifications",
    ],
  },
  {
    number: "02",
    title: "Insurance Providers",
    image:
      "finance2.png",
    imagePosition: "right" as const,
    features: ["Auto policy renewal reminders", "Digital claim status updates", "Cross-sell offers using AI insights"],
  },
  {
    number: "03",
    title: "Wealth & Loan Advisors",
    image:
      "finance3.png",
    imagePosition: "left" as const,
    features: ["Appointment automation", "Portfolio tracking & updates", "Document management & compliance tracking"],
  },
]

export function FinanceUseCases() {
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
    <section id="usecases" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center text-white mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          AI-Powered CRM for
      
          Faster Growth
        </h2>

        <div className="space-y-24">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(idx + 1) * 200}ms` }}
            >
              {/* Image */}
              <div className={useCase.imagePosition === "right" ? "lg:col-start-2 lg:row-start-1" : ""}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={useCase.image || "/placeholder.svg"}
                    alt={useCase.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={useCase.imagePosition === "right" ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="flex items-start gap-6">
                  <span className="text-6xl font-bold text-primary">{useCase.number}</span>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{useCase.title}</h3>
                    <ul className="space-y-3">
                      {useCase.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-3 text-gray-300 text-lg">
                          <span className="text-amber-400 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
