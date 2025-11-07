"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const features = [
  {
    icon: "ShoppingCart",
    title: "ONLINE STORES",
    description: "Get +100 icons ready to use form our icon packs",
  },
  {
    icon: "TrendingUp",
    title: "SUPERMARKETS & CHAINS",
    description: "Use the most advanced CRM system ever created.",
  },
  {
    icon: "Package",
    title: "FRANCHISE OUTLETS",
    description: "Automate listing, Streamline workflows.",
  },
]

export function RetailSolution() {
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
    <section id="benefits" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center text-amber-500 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          One Platform to Automate, Engage, and Scale Your Business.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`flex justify-center transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <Image
              src="/images/design-mode/Gemini_Generated_Image.png"
              alt="Retail solutions comparison showing Online Stores, Supermarkets & Chains, and Franchise Outlets with features and results"
              width={800}
              height={600}
              className="rounded-lg hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div
            className={`text-center transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-xl text-gray-300 leading-relaxed text-left">
              ZeaCRM simplifies operations for retail businesses of every size — from online stores to supermarket
              chains and franchise outlets. Automate customer communication, manage inventory, and track payments
              effortlessly through one connected platform. With features like smart cart recovery, loyalty programs, and
              centralized CRM management, ZeaCRM helps brands boost conversions, improve customer retention, and deliver
              a consistent experience across every sales channel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
