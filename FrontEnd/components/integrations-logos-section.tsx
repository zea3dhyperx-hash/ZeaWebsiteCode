"use client"

import { useEffect, useState } from "react"

export function IntegrationsLogosSection() {
  const [randomSizes, setRandomSizes] = useState<number[]>([])

  const integrations = [
    { name: "Zapier", logo: "⚡" },
    { name: "Slack", logo: "💬" },
    { name: "Facebook", logo: "👍" },
    { name: "Clio", logo: "📋" },
    { name: "Shopify", logo: "🛍️" },
    { name: "Stripe", logo: "💳" },
    { name: "LinkedIn", logo: "🔗" },
    { name: "WooCommerce", logo: "🛒" },
    { name: "Skype", logo: "☎️" },
    { name: "Printful", logo: "🖨️" },
    { name: "Wave", logo: "📊" },
    { name: "Shippo", logo: "📦" },
    { name: "WhatsApp", logo: "💬" },
    { name: "Instagram", logo: "📸" },
    { name: "TikTok", logo: "🎵" },
    { name: "QuickBooks", logo: "💰" },
    { name: "Google", logo: "🔍" },
    { name: "Microsoft", logo: "🪟" },
    { name: "Mailchimp", logo: "📧" },
    { name: "HubSpot", logo: "🎯" },
  ]

  useEffect(() => {
    const sizes = integrations.map(() => {
      const minSize = 80
      const maxSize = 140
      return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize
    })
    setRandomSizes(sizes)
  }, [])

  return (
    <section className="bg-amber-400 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Integrates With Your Favorite Tools</h2>
          <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            Connect ZeaCRM with 100+ popular business tools and services to streamline your workflow
          </p>
        </div>

        {/* Integration Logos Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 items-start">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white/80 hover:bg-white rounded-lg p-3 md:p-4 flex items-center justify-center transition-all hover:shadow-lg cursor-pointer flex-shrink-0"
              style={{
                width: randomSizes[index] ? `${randomSizes[index]}px` : "100px",
                height: randomSizes[index] ? `${randomSizes[index]}px` : "100px",
              }}
            >
              <div className="text-center">
                <div className="mb-1" style={{ fontSize: `${(randomSizes[index] || 100) * 0.35}px` }}>
                  {integration.logo}
                </div>
                <p className="text-xs font-semibold text-gray-800 text-center line-clamp-2">{integration.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-black hover:bg-gray-900 text-amber-400 font-semibold px-8 py-3 rounded-lg transition-colors">
            View All Integrations
          </button>
        </div>
      </div>
    </section>
  )
}
