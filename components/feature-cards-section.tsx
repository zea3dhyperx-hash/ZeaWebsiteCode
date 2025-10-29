"use client"

import { Check } from "lucide-react"

export function FeatureCardsSection() {
  const features = [
    {
      title: "Discover & Manage Leads",
      description: "Unlock the power of intelligent lead discovery and management",
      items: [
        "Create Full Websites, Funnels & Landing Pages",
        "Drop & Drag Services Grid Forms",
        "Unified appointment Scheduling",
      ],
      mockupType: "dashboard",
    },
    {
      title: "Connect and Communicate with Customers",
      description: "Build lasting relationships through seamless communication",
      items: [
        "Create Full Websites, Funnels & Landing Pages",
        "Drop & Drag Services Grid Forms",
        "Unified appointment Scheduling",
      ],
      mockupType: "communication",
    },
  ]

  return (
    <section className="bg-amber-400 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
          >
            {/* Card Content */}
            <div className="flex-1">
              <div className="bg-slate-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm md:text-base mb-6">{feature.description}</p>

                {/* Feature Items */}
                <ul className="space-y-4 mb-6">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href="#"
                  className="inline-block text-amber-400 font-semibold hover:text-amber-300 transition-colors text-sm md:text-base"
                >
                  LEARN MORE HERE →
                </a>
              </div>
            </div>

            {/* Mockup Illustration */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-sm">
                {feature.mockupType === "dashboard" ? (
                  // Dashboard Mockup
                  <div className="space-y-3">
                    <div className="bg-slate-800 rounded-lg p-4 h-32 flex items-center justify-center">
                      <div className="space-y-2 w-full">
                        <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                        <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                        <div className="h-2 bg-slate-700 rounded w-2/3"></div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-slate-800 rounded-lg p-3 flex-1 h-24 flex items-center justify-center">
                        <div className="w-12 h-12 bg-amber-400 rounded-full"></div>
                      </div>
                      <div className="bg-slate-800 rounded-lg p-3 flex-1 h-24 flex items-center justify-center">
                        <div className="w-12 h-12 bg-amber-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Communication Mockup
                  <div className="bg-white rounded-lg p-4 shadow-lg space-y-3">
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-300 rounded w-24"></div>
                        <div className="h-2 bg-gray-200 rounded w-16 mt-1"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                        <div className="bg-gray-100 rounded-lg p-2 flex-1 h-8"></div>
                      </div>
                      <div className="flex gap-2 justify-end">
                        <div className="bg-amber-400 rounded-lg p-2 flex-1 h-8 max-w-xs"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
