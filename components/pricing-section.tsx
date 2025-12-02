"use client"

import { Check } from "lucide-react"
import { useState } from "react"

type Currency = "USD" | "INR"

const pricingPlans = [
  {
    name: "Standard",
    priceINR: "5,499",
    priceUSD: "69",
    period: "/ Month",
    description: "Essential tools for small teams",
    features: [
      // "Features Included",
      "Contacts and Pipeline Management",
      "Invoicing Management",
      "Reputation Management",
      "Marketing Automation",
      "Dashboard",
      "2 Workflow Automation",
      "Reporting",
      "Up to 5 Users",
    ],
    buttonText: "Book a Demo",
    buttonStyle: "bg-primary text-black hover:bg-primary",
    highlighted: false,
  },
  {
    name: "Pro",
    priceINR: "10,999",
    priceUSD: "129",
    period: "/ Month",
    description: "Advanced automation for growing businesses",
    features: [
      // "Features Included",
      "Contacts and Pipeline Management",
      "Invoicing Management",
      "Reputation Management",
      "Dashboard",
      "AI Agents",
      "Membership Module",
      "5 Workflow Automation",
      "Marketing Automation (Using LLM)",
      "Reporting",
      "WhatsApp Integration",
      "Up to 10 Users",
    ],
    buttonText: "Get Started",
    buttonStyle: "bg-primary text-black hover:bg-primary",
    highlighted: true,
  },
  {
    name: "Enterprise",
    priceINR: "19,999",
    priceUSD: "249",
    period: "/ Month",
    description: "All modules and premium support",
    features: [
      // "Features Included",
      "All Modules with Unlimited Access",
      "Additional Storage Facility",
      "Dedicated Account Manager",
      "Up to 25 Users",
    ],
    buttonText: "Talk to Sales",
    buttonStyle: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black",
    highlighted: false,
  },
]

export function PricingSection() {
  const [currency, setCurrency] = useState<Currency>("USD")
  const currencySymbol = currency === "INR" ? "₹" : "$"

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

        {/* Currency Toggle */}
        <div className="flex justify-end mb-6 -mt-2 pr-2">
          <div className="inline-flex rounded-lg border border-primary overflow-hidden shadow-sm">
            <button
              className={`px-4 py-2 text-sm font-semibold ${currency === "USD" ? "bg-primary text-black" : "text-white hover:bg-gray-800"}`}
              onClick={() => setCurrency("USD")}
            >
              USD
            </button>
            <button
              className={`px-4 py-2 text-sm font-semibold border-l border-gray-700 ${currency === "INR" ? "bg-primary text-black" : "text-white hover:bg-gray-800"}`}
              onClick={() => setCurrency("INR")}
            >
              INR
            </button>
          </div>
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
                  <span className="text-4xl font-bold text-white">
                    <span className="currency">{currencySymbol}</span> {currency === "INR" ? plan.priceINR : plan.priceUSD}
                  </span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => {
                  const isStandard = plan.name === "Standard";
                  const isLast = featureIndex === plan.features.length - 1;
                  const showAsUnavailable = isStandard && isLast && feature.toLowerCase().includes("whatsapp integration");
                  return (
                    <li key={featureIndex} className="flex items-start gap-3">
                      {showAsUnavailable ? (
                        <span className="w-5 h-5 mt-0.5 flex items-center justify-center text-red-500">✕</span>
                      ) : (
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      )}
                      <span className={showAsUnavailable ? "text-gray-400" : "text-gray-300"}>{feature}</span>
                    </li>
                  );
                })}
              </ul>

              {/* Button */}
              <div className="flex justify-center">
                <button className={`px-6 py-3 rounded-lg font-semibold transition-all text-center ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
