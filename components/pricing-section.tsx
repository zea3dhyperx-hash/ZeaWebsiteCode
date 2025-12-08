"use client"

import React, { useState } from "react"
import { Check, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Currency = "USD" | "INR"
type PlanName = "ZEA Starter" | "ZEA Growth" | "ZEA Scale" | "ZEA Enterprise"

const pricingPlans = [
  {
    name: "ZEA Starter",
    priceINR: "5,500",
    priceUSD: "97",
    period: "/ month",
    description: "ZEA CRM -",
    features: [
      "Users: up to 5",
      "Core: Workflows, Automations, Pipelines, Contacts, Conversations, Calendars, Reporting (All)",
      "Limits: Sites optional (disabled by default), Memberships/Marketing/AI restricted",
      "Support: 2 onboarding calls, WhatsApp support (business hours)",
      "Add-ons: WhatsApp automation ?600/mo (client pays message wallet), LLM API billed to client",
    ],
    buttonText: "Get Started",
    buttonStyle: "bg-primary text-black hover:bg-primary",
    highlighted: false,
  },
  {
    name: "ZEA Growth",
    priceINR: "9,999",
    priceUSD: "197",
    period: "/ month",
    description: "ZEA CRM -",
    features: [
      "Users: up to 10",
      "Everything in Starter, plus: Payment Integrations (Pro), Marketing (Pro), Memberships (Pro), API Integrations (Pro), Reputation (Pro)",
      "Support: 4 onboarding sessions, monthly optimization review",
    ],
    buttonText: "Get Started",
    buttonStyle: "bg-primary text-black hover:bg-primary",
    highlighted: true,
  },
  {
    name: "ZEA Scale",
    priceINR: "14,999",
    priceUSD: "297",
    period: "/ month",
    description: "ZEA CRM -",
    features: [
      "Users: up to 25",
      "Everything in Growth, plus: AI Agents (Pro), Branded dashboards, Expanded media storage, Priority support, Weekly training clinic, 1 custom snapshot/setup per quarter",
    ],
    buttonText: "Get Started",
    buttonStyle: "bg-primary text-black hover:bg-primary",
    highlighted: false,
  },
  {
    name: "ZEA Enterprise",
    priceINR: "24,999+",
    priceUSD: "397",
    period: "/ month",
    description: "ZEA CRM -",
    features: [
      "Users: 50+ or custom",
      "White-label dashboards, SLA, dedicated account manager, 20?7 option, custom automation builds, API engineering, multi-location rollout (5), on-site/bootcamp training (optional)",
    ],
    buttonText: "Talk to Sales",
    buttonStyle: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black",
    highlighted: false,
  },
]
export function PricingSection() {
  const [currency, setCurrency] = useState<Currency>("INR")
  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [showEnterpriseForm, setShowEnterpriseForm] = useState(false)
  const [enterpriseSubmitted, setEnterpriseSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    plan: "ZEA Starter",
    message: "",
    subscriber: false,
    subscribed: "tac agreed" as string,
    terms: false,
  })
  const [enterpriseFormData, setEnterpriseFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    teamSize: "",
    message: "",
    subscriber: false,
    subscribed: "tac agreed" as string,
    terms: false,
  })
  const autofillReset: React.CSSProperties = {
    WebkitBoxShadow: "0 0 0 1000px #0f172a inset",
    boxShadow: "0 0 0 1000px #0f172a inset",
    WebkitTextFillColor: "#fff",
  }

  const handleOpenForm = (plan: PlanName) => {
    setFormData((prev) => ({ ...prev, plan }))
    setSubmitted(false)
    setShowForm(true)
  }

  const handleOpenEnterpriseForm = () => {
    setEnterpriseFormData((prev) => ({ ...prev }))
    setEnterpriseSubmitted(false)
    setShowEnterpriseForm(true)
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

  const handleEnterpriseFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target

    if (target instanceof HTMLInputElement) {
      if (target.type === "checkbox") {
        const { name, checked } = target
        setEnterpriseFormData((prev) => ({
          ...prev,
          [name]: checked,
          ...(name === "subscriber" ? { subscribed: checked ? "subscriber" : "tac agreed" } : {}),
        }))
        return
      }

      const { name, value } = target
      setEnterpriseFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
      return
    }

    const { name, value } = target as HTMLTextAreaElement | HTMLSelectElement
    setEnterpriseFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = {
      ...formData,
      subscribed: formData.subscriber ? "subscriber" : "tac agreed",
    }
    const body = new URLSearchParams()
    Object.entries(payload).forEach(([key, value]) => body.append(key, value == null ? "" : String(value)))
    try {
      setSubmitError(false)
      await fetch("https://n8n.urlfactory.website/webhook/Zeacrm-1pricing", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      })
    } catch (err) {
      console.error("Pricing webhook failed", err)
      setSubmitError(true)
    } finally {
      setSubmitted(true)
    }
  }

  const handleEnterpriseFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = {
      ...enterpriseFormData,
      plan: "ZEA Enterprise",
      subscribed: enterpriseFormData.subscriber ? "subscriber" : "tac agreed",
    }
    const body = new URLSearchParams()
    Object.entries(payload).forEach(([key, value]) => body.append(key, value == null ? "" : String(value)))
    try {
      setSubmitError(false)
      await fetch("https://n8n.urlfactory.website/webhook/Zeacrm-2pricing", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      })
    } catch (err) {
      console.error("Pricing webhook failed", err)
      setSubmitError(true)
    } finally {
      setEnterpriseSubmitted(true)
    }
  }
  const currencySymbol = currency === "INR" ? "₹" : "$"

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 border-2 transition-all flex flex-col h-full ${
                plan.highlighted
                  ? "border-primary bg-gray-900 shadow-2xl shadow-primary/20"
                  : "border-gray-700 bg-gray-950 hover:border-primary"
              }`}
            >
              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6 min-h-[56px]">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-4xl font-bold text-white">
                    <span className="currency">{currencySymbol}</span> {currency === "INR" ? plan.priceINR : plan.priceUSD}
                  </span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="flex justify-center">
                <button
                  className={`px-6 py-3 rounded-lg font-semibold transition-all text-center ${plan.buttonStyle}`}
                  onClick={() =>
                    plan.name === "ZEA Enterprise" ? handleOpenEnterpriseForm() : handleOpenForm(plan.name as PlanName)
                  }
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
                    style={autofillReset}
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
                    style={autofillReset}
                  >
                    <option value="ZEA Starter">ZEA Starter</option>
                    <option value="ZEA Growth">ZEA Growth</option>
                    <option value="ZEA Scale">ZEA Scale</option>
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
                    style={autofillReset}
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
                    style={autofillReset}
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
                    style={autofillReset}
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
              {submitError && (
                <p className="text-sm text-red-400 text-center">
                  We couldn&apos;t reach the server right now, but your request was captured.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    )}

      {/* Enterprise Form Modal */}
      {showEnterpriseForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="relative w-full max-w-3xl rounded-2xl border border-amber-300 bg-gray-900 p-6 shadow-2xl">
            <button
              aria-label="Close"
              className="absolute right-4 top-4 text-amber-300 hover:text-white"
              onClick={() => setShowEnterpriseForm(false)}
            >
              <X className="h-6 w-6" />
            </button>
            {enterpriseSubmitted ? (
              <div className="flex flex-col items-center text-center space-y-4 py-6">
                <Image src="/form-image.jpg" alt="Thank you" width={420} height={320} className="rounded-lg" />
                <h3 className="text-xl font-semibold text-foreground">Thank you!</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  We&apos;ve received your Enterprise request. Our sales team will reach out with tailored options shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleEnterpriseFormSubmit}>
                <div className="space-y-1 text-center">
                  <h3 className="text-2xl font-bold text-white">Talk to Sales - Enterprise</h3>
                  <p className="text-sm text-muted-foreground">
                    Tell us about your organization so we can craft the right Enterprise plan for you.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1 text-foreground">Full Name*</label>
                    <input
                      name="fullName"
                      value={enterpriseFormData.fullName}
                      onChange={handleEnterpriseFormChange}
                      required
                      className="w-full rounded-lg border border-border bg-gray-950 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                      style={autofillReset}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-foreground">Business Email*</label>
                    <input
                      name="email"
                      type="email"
                      value={enterpriseFormData.email}
                      onChange={handleEnterpriseFormChange}
                      required
                      className="w-full rounded-lg border border-border bg-gray-950 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                      style={autofillReset}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-foreground">Company Name*</label>
                    <input
                      name="company"
                      value={enterpriseFormData.company}
                      onChange={handleEnterpriseFormChange}
                      required
                      className="w-full rounded-lg border border-border bg-gray-950 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                      style={autofillReset}
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-foreground">Phone</label>
                    <input
                      name="phone"
                      value={enterpriseFormData.phone}
                      onChange={handleEnterpriseFormChange}
                      className="w-full rounded-lg border border-border bg-gray-950 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                      style={autofillReset}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-foreground">Team Size</label>
                    <input
                      name="teamSize"
                      value={enterpriseFormData.teamSize}
                      onChange={handleEnterpriseFormChange}
                      className="w-full rounded-lg border border-border bg-gray-950 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                      style={autofillReset}
                      placeholder="e.g., 50-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-foreground">Plan</label>
                    <input
                      value="ZEA Enterprise"
                      disabled
                      className="w-full rounded-lg border border-border bg-gray-950 px-3 py-2 text-white opacity-80"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm mb-1 text-foreground">Message / Requirements</label>
                    <textarea
                      name="message"
                      value={enterpriseFormData.message}
                      onChange={handleEnterpriseFormChange}
                      className="w-full rounded-lg border border-border bg-gray-950 px-3 py-2 text-white min-h-[100px] focus:outline-none focus:ring-2 focus:ring-amber-300"
                      style={autofillReset}
                      placeholder="Tell us about your goals, timelines, or special requirements"
                    />
                  </div>
                  <div className="flex items-center gap-2 md:col-span-2">
                    <input
                      name="subscriber"
                      type="checkbox"
                      checked={enterpriseFormData.subscriber}
                      onChange={handleEnterpriseFormChange}
                      className="h-4 w-4 rounded border border-border bg-gray-950 text-amber-300 focus:ring-amber-300"
                    />
                    <span className="text-sm text-muted-foreground">
                      I agree to receive communications from{" "}
                      <Link href="/" target="_blank" rel="noreferrer" className="text-amber-300 underline">
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
                      onChange={handleEnterpriseFormChange}
                      className="h-4 w-4 rounded border border-border bg-gray-950 text-amber-300 focus:ring-amber-300"
                    />
                    <span className="text-sm text-muted-foreground">
                      I agree to the{" "}
                      <Link href="/terms-of-service" target="_blank" rel="noreferrer" className="text-amber-300 underline">
                        Terms &amp; Conditions
                      </Link>
                      .
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-amber-300 px-4 py-3 font-semibold text-black hover:bg-amber-400 transition-colors shadow-lg shadow-amber-300/30"
                >
                  Request Enterprise Pricing
                </button>
                {submitError && (
                  <p className="text-sm text-red-400 text-center">
                    We couldn&apos;t reach the server right now, but your request was captured.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
