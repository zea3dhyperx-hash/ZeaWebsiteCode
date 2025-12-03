"use client"

import React, { useState } from "react"
import { Check, ChevronDown, BadgeCheck, Scale, TrendingUp, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface PricingPageClientProps {
  initialCountry?: string
}

type Currency = "USD" | "INR"

export function PricingPageClient({ initialCountry }: PricingPageClientProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [currency, setCurrency] = useState<Currency>(initialCountry?.toUpperCase() === "IN" ? "INR" : "USD")
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

  const pricingPlans = [
    {
      name: "Standard",
      priceINR: "5,499",
      priceUSD: "69",
      period: "/ Month",
      description: "Essential tools for small teams",
      features: [
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
      buttonStyle: "bg-amber-400 text-black hover:bg-amber-500",
      highlighted: false,
    },
    {
      name: "Pro",
      priceINR: "10,999",
      priceUSD: "129",
      period: "/ Month",
      description: "Advanced automation for growing businesses",
      features: [
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
      buttonStyle: "bg-amber-400 text-black hover:bg-amber-500",
      highlighted: true,
    },
    {
      name: "Enterprise",
      priceINR: "19,999",
      priceUSD: "249",
      period: "/ Month",
      description: "All modules and premium support",
      features: [
        "All Modules with Unlimited Access",
        "Additional Storage Facility",
        "Dedicated Account Manager",
        "Up to 25 Users",
      ],
      buttonText: "Talk to Sales",
      buttonStyle: "bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black",
      highlighted: false,
      href: "/contact-us",
    },
  ]

  const faqItems = [
    {
      question: "Can I try ZeaCRM for free before choosing a plan?",
      answer:
        "Yes, you can explore ZeaCRM with a free trial with no credit card required. Test the features, automation tools, and dashboard to see how it fits your workflow before making a commitment.",
    },
    {
      question: "Can I upgrade or downgrade anytime?",
      answer:
        "Yes, ZeaCRM is built with flexibility in mind. You can upgrade, downgrade, or cancel anytime directly from your dashboard without losing your data or settings.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Your security is our top priority. ZeaCRM uses advanced encryption, secure cloud hosting, and multi-layer authentication to protect your business and customer data at every step. We comply with global privacy standards to ensure complete peace of mind.",
    },
    {
      question: "Does ZeaCRM offer support or onboarding help?",
      answer:
        "Yes, our onboarding team helps you get started, migrate data, and set up automations at no extra cost. You can reach out to our team for help 24/7 before, during, and after your onboarding process.",
    },
    {
      question: "Can multiple users access the same account?",
      answer:
        "Yes, ZeaCRM supports multiple team members. Your entire team can collaborate across sales, marketing, and operations seamlessly at the same time.",
    },
  ]

  const currencySymbol = currency === "INR" ? "₹" : "$"

  return (
    <>
    <div className="bg-black">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 pt-24 pb-0 animate-slide-up">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">Pricing</h1>
          <p className="text-xl text-amber-400 mb-8 animate-slide-up">One Powerful Platform. Simple Pricing</p>
          <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
            No hidden costs, no complex tiers. Just transparent plans that give you everything you need to grow, automate, and connect with your customers.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-0 md:py-0 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-16 -mt-2 pr-2">
            <div className="inline-flex rounded-lg border border-primary overflow-hidden shadow-sm">
              <button
                className={`px-4 py-2 text-sm font-semibold ${currency === "USD" ? "bg-amber-400 text-black" : "text-white hover:bg-gray-800"}`}
                onClick={() => setCurrency("USD")}
              >
                USD
              </button>
              <button
                className={`px-4 py-2 text-sm font-semibold border-l border-gray-700 ${currency === "INR" ? "bg-amber-400 text-black" : "text-white hover:bg-gray-800"}`}
                onClick={() => setCurrency("INR")}
              >
                INR
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 border-2 hover:scale-105 transition-transform transition-all ${
                  plan.highlighted
                    ? "border-amber-400 hover:scale-110 transition-transform bg-gray-900 shadow-2xl shadow-amber-400/20 md:scale-105"
                    : "border-gray-700 bg-gray-950 hover:border-amber-400"
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      <span className="currency">{currencySymbol}</span>{" "}
                      {currency === "INR" ? plan.priceINR : plan.priceUSD}
                    </span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => {
                    const isStandard = plan.name === "Standard"
                    const isLast = featureIndex === plan.features.length - 1
                    const showAsUnavailable = isStandard && isLast && feature.toLowerCase().includes("whatsapp integration")
                    return (
                      <li key={featureIndex} className="flex items-start gap-3">
                        {showAsUnavailable ? (
                          <span className="w-5 h-5 mt-0.5 flex items-center justify-center text-red-500">x</span>
                        ) : (
                          <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={showAsUnavailable ? "text-gray-400 line-through" : "text-gray-300"}>{feature}</span>
                      </li>
                    )
                  })}
                </ul>

                {plan.href ? (
                  <Link
                    href={plan.href}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all block text-center ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </Link>
                ) : (
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${plan.buttonStyle}`}
                    onClick={() => handleOpenForm(plan.name === "Pro" ? "Pro" : "Standard")}
                  >
                    {plan.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ZeaCRM Pricing */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose ZeaCRM Pricing?</h2>
            <p className="text-gray-400">
              Unlike traditional CRMs, ZeaCRM doesn't charge for complexity you'll never use. Instead, our
              automation-first, AI-powered pricing model ensures you only pay for what helps your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 hover:scale-105 transition-transform">
            {[
              { title: "Transparent monthly billing", icon: BadgeCheck },
              { title: "No hidden costs", icon: Scale },
              { title: "Scales with your business needs", icon: TrendingUp },
            ].map((item, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-gray-700 text-center">
                <div className="flex justify-center mb-3 text-amber-400">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 ind bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-primary rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-7 flex items-center justify-between bg-background hover:bg-primary/10 transition-colors"
                >
                  <span className="text-white hover:text-background font-semibold text-left">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-black border-t border-gray-700">
                    <p className="text-gray-400">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Automate. Grow. Succeed.</h2>
          <p className="text-gray-400 mb-8">
            Choose the plan that fits your business today—and scale efficiently with ZeaCRM tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors">
              <a href="/contact-us">Contact Sales</a>
            </button>
            <button className="border-2 border-amber-400 text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 hover:text-black transition-colors">
              <a href="/playbooks/videos">Watch Demo Video</a>
            </button>
          </div>
        </div>
      </section>
    </div>

    {/* Pricing Form Modal */}
    {showForm && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
        <div className="relative w-full max-w-3xl rounded-2xl border border-amber-400 bg-gray-950 p-6 shadow-2xl">
          <button
            aria-label="Close"
            className="absolute right-4 top-4 text-amber-400 hover:text-amber-200"
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
                  Choose your plan — Standard or Pro — and get a tailored quote instantly.
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
                    className="w-full rounded-lg border border-border bg-gray-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-foreground">Plan Interested In*</label>
                  <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleFormChange}
                    className="w-full rounded-lg border border-border bg-gray-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                    className="w-full rounded-lg border border-border bg-gray-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-foreground">Message / Requirements (optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full rounded-lg border border-border bg-gray-900 px-3 py-2 text-white min-h-[90px] focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Tell us if you have specific requirements"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-foreground">Company Name (optional)</label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    className="w-full rounded-lg border border-border bg-gray-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Your Company"
                  />
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                  <input
                    name="subscriber"
                    type="checkbox"
                    checked={formData.subscriber}
                    onChange={handleFormChange}
                    className="h-4 w-4 rounded border border-border bg-gray-900 text-amber-400 focus:ring-amber-400"
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
                    className="h-4 w-4 rounded border border-border bg-gray-900 text-amber-400 focus:ring-amber-400"
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
                className="w-full rounded-lg bg-amber-400 px-4 py-3 font-semibold text-black hover:bg-amber-500 transition-colors"
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
