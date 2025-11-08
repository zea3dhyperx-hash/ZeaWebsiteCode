"use client"

import { Check } from "lucide-react"
import Image from "next/image"

interface Feature {
  name: string
  replaces: string[]
  price: string
}

const features: Feature[] = [
  { name: "CRM & PIPELINE MANAGEMENT", replaces: ["HubSpot", "Pipedrive"], price: "$99/MONTHLY" },
  { name: "UNLIMITED SALES FUNNELS", replaces: ["Funnelytics", "Kartra"], price: "$297/MONTHLY" },
  { name: "WEBSITE BUILDER", replaces: ["WordPress", "Wix", "Webflow"], price: "$29/MONTHLY" },
  { name: "SURVEYS & FORMS", replaces: ["Typeform", "Jotform", "Wufoo", "Coda"], price: "$49/MONTHLY" },
  { name: "EMAIL MARKETING", replaces: ["Klaviyo", "Mailchimp", "Hubspot", "Omnisend"], price: "$99/MONTHLY" },
  { name: "2-WAY SMS MARKETING", replaces: ["Twilio", "Klaviyo", "Gupshup"], price: "$99/MONTHLY" },
  { name: "BOOKING & APPOINTMENTS", replaces: ["Calendly", "Acuity", "Setter"], price: "$29/MONTHLY" },
  { name: "WORKFLOW AUTOMATIONS", replaces: ["Zapier", "Make", "Integromat"], price: "$169/MONTHLY" },
  { name: "COURSES/PRODUCTS", replaces: ["Kajabi", "Teachable"], price: "$99/MONTHLY" },
  { name: "CALL TRACKING", replaces: ["CallRail", "CallScribe"], price: "$49/MONTHLY" },
  { name: "REPUTATION MANAGEMENT", replaces: ["Birdeye", "Podium", "ReviewTank"], price: "$159/MONTHLY" },
  { name: "TRACKING & ANALYTICS", replaces: ["Mixpanel"], price: "$299/MONTHLY" },
  { name: "COMMUNITIES", replaces: ["Skool", "Discord", "Circle"], price: "$89/MONTHLY" },
  { name: "DOCUMENT SIGNING", replaces: ["PandaDoc", "GetAccept"], price: "$47/MONTHLY" },
  { name: "GRAY-LABELED MOBILE APP", replaces: ["Mobile"], price: "UNIQUE TO HIGHLEVEL" },
]

export default function ComparisonTable() {
  return (
    <main className="min-h-screen bg-primary px-4 pb-12">
      <div className="max-w-7xl mx-auto sm:px-6 md:px-[80px] lg:px-[150px]">
        {/* Header */}
        {/* <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Feature Comparison</h1>
          <p className="text-lg text-gray-300">See what HighLevel replaces for your business</p>
        </div> */}

        {/* Table Container */}
        <div className="rounded-lg overflow-hidden shadow-2xl bg-background border border-background">
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-background border-b border-background">
            <div className="px-4 pt-4 font-bold text-primary text-lg">FEATURES</div>
            <div className="px-4 pt-4 font-bold text-primary text-lg">REPLACES</div>
            <div className="px-4 py-4 font-bold text-primary text-lg">OTHER TOOLS</div>
            <div className="px-4 py-4 font-bold text-primary text-lg flex items-center justify-center">
              <span>ZEA CRM</span>
              {/* <Check className="w-6 h-6 text-gray-950" /> */}
            </div>
          </div>

          {/* Table Rows */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 border-b border-gray-800 last:border-b-0 ${
                index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
              }`}
            >
              {/* Feature Name */}
              <div className="px-4 py-4 font-semibold text-white text-sm">{feature.name}</div>

              <div className="px-4 py-4 flex items-center gap-2 flex-wrap">
                {feature.replaces.length > 0 ? (
                  feature.replaces.map((tool, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-primary text-black px-3 py-1 rounded-lg text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500 text-xs italic">—</span>
                )}
              </div>

              {/* Price Column */}
              <div className="px-4 py-4 justify-center font-semibold text-white text-sm">{feature.price}</div>

              {/* Check Column */}
              <div className="px-4 py-4 flex items-center justify-center">
                <Check className="w-6 h-6 text-primary font-bold" />
              </div>
            </div>
          ))}

          {/* Footer Summary */}
          <div className="grid grid-cols-4 bg-background border-t-2 border-background">
            <div className="px-6 py-6 font-bold text-primary">OVERALL PRICE</div>
            <div className="px-6 py-6"></div>
            <div className="px-6 py-6 font-bold text-primary">$1,612 PER MONTH</div>
            <div className="px-6 py-6 font-bold text-primary text-center">$97 PER MONTH</div>
          </div>
        </div>
      </div>
    </main>
  )
}
