"use client"

import { Building2, Shield, TrendingUp } from "lucide-react"
import { useState, useEffect, useRef } from "react"

type Benefit = {
  icon: JSX.Element
  title: string
  description: string
  imageSrc: string
}

const benefits: Benefit[] = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Banks & NBFCs",
    description: "Faster loan approvals & reduced defaults",
    imageSrc: "/images/finance/banks-nbfcs.jpg",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Insurance Providers",
    description: "More renewals & loyal customers",
    imageSrc: "/images/finance/insurance-providers.jpg",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Wealth & Loan Advisors",
    description: "Increased client satisfaction",
    imageSrc: "/images/finance/wealth-loan-advisors.jpg",
  },
]

export function FinanceBenefits() {
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
    <section id="benefits" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center text-white mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Retain customers, boost efficiency, and scale faster 
        </h2>
        <p
          className={`text-center text-gray-300 mb-16 transition-all duration-700 delay-100 text-2xl ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          with smart automation
        </p>

        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(idx + 3) * 100}ms` }}
            >
              {benefit.imageSrc && (
                <div className="mb-6 -mx-8 -mt-8 mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {/* <img
                    src={benefit.imageSrc}
                    alt={benefit.title}
                    className="w-full h-40 object-cover rounded-t-lg border-b border-slate-700"
                    loading="lazy"
                  /> */}
                </div>
              )}
              <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center mb-6 text-black transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/50">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
