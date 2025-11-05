"use client"

import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Standard",
    price: "4,999",
    period: "/month",
    description: "For individuals and small teams",
    features: [
      "3 Users",
      "Contacts up to 5,000",
      "2 Workflows",
      "Basic Reporting",
      "WhatsApp Support",
      "WhatsApp Integration",
    ],
    buttonText: "Start Free Trial",
    buttonStyle: "bg-primary text-black hover:bg-primary",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "9,999",
    period: "/month",
    description: "For growing businesses that need more power",
    features: [
      "5 Users",
      "Contacts up to 10,000",
      "Up to 5 Workflows Automation",
      "Standard Reporting with Analytics",
      "WhatsApp Integration",
      "Standard Support",
    ],
    buttonText: "Get Started",
    buttonStyle: "bg-primary text-black hover:bg-primary",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Pricing",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited Users",
      "25,000 Contacts",
      "Up to 10 Workflows Automation",
      "Custom Dashboard with Reports",
      "WhatsApp Integration",
      "Priority Support",
    ],
    buttonText: "Talk to Sales",
    buttonStyle: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-2">PRICING</h2>
          <p className="text-2xl text-primary mb-4">Transparent Pricing for Ambitious Teams</p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 border-2 transition-all ${
                plan.highlighted
                  ? "border-primary bg-gray-900 shadow-2xl shadow-primary/20 scale-105"
                  : "border-gray-700 bg-gray-950 hover:border-primary"
              }`}
            >
              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white"><span className="currency">₹</span> {plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}