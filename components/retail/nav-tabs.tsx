"use client"

import { useState } from "react"

const tabs = ["Video", "UseCases", "Benefits", "Solution"]

export function RetailNavTabs() {
  const [activeTab, setActiveTab] = useState("Video")

  const scrollToSection = (tab: string) => {
    setActiveTab(tab)
    const sectionId = tab.toLowerCase()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-0 z-40 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-8 py-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => scrollToSection(tab)}
              className={`font-semibold transition-colors text-2xl ${
                activeTab === tab ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
