"use client"

import { Check, ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Anim3 from "./animations/anim3"


export function PricingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

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
      buttonStyle: "bg-amber-400 text-black hover:bg-amber-500",
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
      buttonStyle: "bg-amber-400 text-black hover:bg-amber-500",
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
      buttonStyle: "bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black",
      highlighted: false,
      href: "/contact-us",
    },
  ]

    const faqItems = [
    {
      question: "Can I try ZeaCRM for free before choosing a plan?",
      answer: "Yes, you can explore ZeaCRM with a free trial with no credit card required. Test the features, automation tools, and dashboard to see how it fits your workflow before making a commitment.",
    },
    {
      question: "Can I upgrade or downgrade anytime?",
      answer: "Yes, ZeaCRM is built with flexibility in mind. You can upgrade, downgrade, or cancel anytime directly from your dashboard without losing your data or settings.",
    },
    {
      question: "Is my data safe?",
      answer: "Your security is our top priority. ZeaCRM uses advanced encryption, secure cloud hosting, and multi-layer authentication to protect your business and customer data at every step. We comply with global privacy standards to ensure complete peace of mind.",
    },
    {
      question: "Does ZeaCRM offer support or onboarding help?",
      answer: "Yes, our onboarding team helps you get started, migrate data, and set up automations at no extra cost. You can reach out to our team for help 24/7 before, during, and after your onboarding process.",
    },
    {
      question: "Can multiple users access the same account?",
      answer: "Yes, ZeaCRM supports multiple team members. Your entire team can collaborate across sales, marketing, and operations seamlessly at the same time.",
    },
  ]

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 pt-24 pb-0 animate-slide-up">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">Pricing</h1>
          <p className="text-xl text-amber-400 mb-8 animate-slide-up">One Powerful Platform. Simple Pricing</p>
          <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
              No hidden costs, no complex tiers. Just transparent plans that give you everything you need to grow, automate, and connect with your customers.
          </p>
          {/* <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pricing</h1> */}
          {/* <p className="text-gray-400 text-lg">
            No hidden costs, no complex tiers. Just transparent plans that give you everything you need to grow, automate, and connect with your customers.
          </p> */}
        </div>
      </section>

      {/* Pricing Cards */}<section className="py-0 md:py-0 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
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
                    <span className="text-4xl font-bold text-white"><span className="currency">₹</span> {plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

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
                          <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={showAsUnavailable ? "text-gray-400 line-through" : "text-gray-300"}>{feature}</span>
                      </li>
                    );
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
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${plan.buttonStyle}`}>
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
              { title: "Transparent monthly billing", icon: "✓" },
              { title: "No hidden costs", icon: "✓" },
              { title: "Scales with your business needs", icon: "✓" },
            ].map((item, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-gray-700 text-center">
                <div className="text-3xl text-amber-400 mb-3">{item.icon}</div>
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
                  // className="w-full px-6 py-7 flex items-center justify-between bg-gray-950 hover:bg-gray-900 transition-colors"
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
              <a href="/demo">Book a Demo</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}




