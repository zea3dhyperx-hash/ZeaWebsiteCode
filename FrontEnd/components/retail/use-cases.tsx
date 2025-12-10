"use client"

import { ShoppingCart, Store, MapPin } from "lucide-react"

const useCases = [
  {
    icon: ShoppingCart,
    title: "Online Stores",
    description: "Automate email campaigns, order updates, and customer feedback.",
    gradient: "from-pink-400 to-yellow-400",
  },
  {
    icon: Store,
    title: "Supermarkets & Chains",
    description: "Schedule reorders and notify customers about new arrivals.",
    gradient: "from-pink-400 to-yellow-400",
  },
  {
    icon: MapPin,
    title: "Franchise Outlets",
    description: "Maintain centralized control over customer data and marketing.",
    gradient: "from-pink-400 to-yellow-400",
  },
]

export function RetailUseCases() {
  return (
    <section id="usecases" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-amber-500 mb-6">
          Who We Help
        </h2>
        <p className="text-center text-gray-300 mb-16 text-2xl">
          ZeaCRM empowers every part of the retail and e-commerce ecosystem
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-center space-y-6 hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div
                className={`w-24 h-24 rounded-full bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mx-auto`}
              >
                <useCase.icon className="w-12 h-12 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-400 leading-relaxed text-xl">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
