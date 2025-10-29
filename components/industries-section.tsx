"use client"

import { Building2, Home, ShoppingCart, Briefcase, BookOpen, Heart, Zap, MoreHorizontal } from "lucide-react"

const industries = [
  { name: "Healthcare", icon: Heart },
  { name: "Real Estate", icon: Home },
  { name: "Retail & E-Commerce", icon: ShoppingCart },
  { name: "Professional Services", icon: Briefcase },
  { name: "Education & Training", icon: BookOpen },
  { name: "Finance & Insurance", icon: Zap },
  { name: "Automotive & Manufacturing", icon: Building2 },
  { name: "Other Industries", icon: MoreHorizontal },
]

export function IndustriesSection() {
  return (
    <section className="bg-amber-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">INDUSTRIES</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover how ZeaCRM is powered by designers to streamline your business across all industries and transform
            your operations.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="bg-black rounded-lg p-6 flex items-center gap-4 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <Icon className="w-8 h-8 text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white font-semibold text-lg">{industry.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
