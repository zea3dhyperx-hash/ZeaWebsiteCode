"use client"

import { Users, Clock, Package, DollarSign } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Momentum",
    description: "Higher client satisfaction and less time spent on manual admin",
  },
  {
    icon: Clock,
    title: "Efficiency",
    description: "Automated renewals, happier customers, and smoother post-sales operations.",
  },
  {
    icon: Package,
    title: "Productivity",
    description: "Reduce manual mistakes and maximize every hour of your teams effort.",
  },
  {
    icon: DollarSign,
    title: "Onboarding",
    description: "Deliver smoother onboarding experiences that keep customers coming back",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-black animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Retain Customers, Boost Productivity, and Scale
        </h2>
        <p className="text-center text-gray-300 mb-16 text-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          with Smart Automation{" "}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-700 hover:scale-105 transition-transform"
              style={{ animationDelay: `${300 + idx * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center mx-auto transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50">
                <benefit.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
