"use client"

import { useState } from "react"

const tabs = ["Video", "UseCases", "Benefits", "Solution"]

export function FinanceNavTabs() {
  const [activeTab, setActiveTab] = useState("Video")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setActiveTab(sectionId)
  }

  return (
    <nav className="sticky top-0 z-40 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8 py-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => scrollToSection(tab)}
              className={`font-medium transition-colors duration-200 hover:text-amber-400 text-2xl ${
                activeTab === tab ? "text-amber-400 border-b-2 border-amber-400 pb-1" : "text-white"
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
