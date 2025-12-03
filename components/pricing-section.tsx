"use client"

import React, { useState } from "react"
import { Check, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
    buttonText: "Get Started",
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
  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    plan: "Standard",
    message: "",
    subscriber: false,
    subscribed: "tac agreed" as string,
    terms: false,
  })

  const handleOpenForm = (plan: "Standard" | "Pro") => {
    setFormData((prev) => ({ ...prev, plan }))
    setSubmitted(false)
    setShowForm(true)
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target

    if (target instanceof HTMLInputElement) {
      if (target.type === "checkbox") {
        const { name, checked } = target
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
          ...(name === "subscriber" ? { subscribed: checked ? "subscriber" : "tac agreed" } : {}),
        }))
        return
      }

      const { name, value } = target
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
      return
    }

    const { name, value } = target as HTMLTextAreaElement | HTMLSelectElement
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch("https://n8n.urlfactory.website/webhook-test/Zeacrm-1pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
    } catch (err) {
      console.error("Pricing webhook failed", err)
    } finally {
      setSubmitted(true)
    }
  }
  const currencySymbol = currency === "INR" ? "INR" : "$"

  return (
    <>
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
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
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
                <button
                  className={`px-6 py-3 rounded-lg font-semibold transition-all text-center ${plan.buttonStyle}`}
                  onClick={() => handleOpenForm(plan.name === "Pro" ? "Pro" : "Standard")}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Pricing Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-3xl rounded-2xl border border-primary bg-gray-950 p-6 shadow-2xl">
          <button
            aria-label="Close"
            className="absolute right-4 top-4 text-primary hover:text-amber-200"
            onClick={() => setShowForm(false)}
          >
            <X className="h-6 w-6" />
          </button>
          {submitted ? (
            <div className="flex flex-col items-center text-center space-y-4 py-6">
              <Image src="/form-image.jpg" alt="Thank you" width={420} height={320} className="rounded-lg" />
              <h3 className="text-xl font-semibold text-foreground">Thank you!</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                We&apos;ve received your request for {formData.plan} pricing. Our team will reach out with tailored details shortly.
              </p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div className="space-y-1 text-center">
                <h3 className="text-2xl font-bold text-white">Get Your ZeaCRM Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Choose your plan - Standard or Pro - and get a tailored quote instantly.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1 text-foreground">Full Name*</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    required
                    className="w-full rounded-lg border border-border bg-gray-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-foreground">Plan Interested In*</label>
                  <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleFormChange}
                    className="w-full rounded-lg border border-border bg-gray-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Standard">Standard</option>
                    <option value="Pro">Pro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1 text-foreground">Business Email*</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full rounded-lg border border-border bg-gray-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-foreground">Message / Requirements (optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full rounded-lg border border-border bg-gray-900 px-3 py-2 text-white min-h-[90px] focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us if you have specific requirements"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-foreground">Company Name (optional)</label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    className="w-full rounded-lg border border-border bg-gray-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Company"
                  />
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                  <input
                    name="subscriber"
                    type="checkbox"
                    checked={formData.subscriber}
                    onChange={handleFormChange}
                    className="h-4 w-4 rounded border border-border bg-gray-900 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-muted-foreground">
                    I agree to receive communications from{" "}
                    <Link href="/" target="_blank" rel="noreferrer" className="text-amber-400 underline">
                      ZeaCRM
                    </Link>
                    .
                  </span>
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                  <input
                    name="terms"
                    type="checkbox"
                    required
                    onChange={handleFormChange}
                    className="h-4 w-4 rounded border border-border bg-gray-900 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <Link href="/terms-of-service" target="_blank" rel="noreferrer" className="text-amber-400 underline">
                      Terms &amp; Conditions
                    </Link>
                    .
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-black hover:bg-amber-500 transition-colors"
              >
                Get Pricing
              </button>
            </form>
          )}
        </div>
      </div>
      )}
    </>
  )
}
