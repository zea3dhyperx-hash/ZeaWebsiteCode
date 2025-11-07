"use client"

import { Building2, Home, ShoppingCart, Briefcase, BookOpen, Heart, Zap, MoreHorizontal } from "lucide-react"

const industries = [
  { name: "Healthcare", icon: Heart, href: "/healthcare" },
  { name: "Real Estate", icon: Home, href: "/realestate" },
  { name: "Retail & E-Commerce", icon: ShoppingCart, href: "/retail" },
  { name: "Professional Services", icon: Briefcase, href: "/professional" },
  { name: "Education & Training", icon: BookOpen, href: "/education" },
  { name: "Finance & Insurance", icon: Zap, href: "/finance" },
  { name: "Automotive & Manufacturing", icon: Building2, href: "/automotive" },
  { name: "Other Industries", icon: MoreHorizontal, href: "/industries" },
]

export function IndustriesSection() {
  return (
    <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
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
              <a
                key={index}
                href={industry.href}
                className="bg-black rounded-lg p-6 flex items-center gap-4 hover:shadow-lg transition-shadow group"
              >
                <Icon className="w-8 h-8 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white font-semibold text-lg">{industry.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
