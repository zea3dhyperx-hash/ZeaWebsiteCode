"use client"

import { useState } from "react"

const tabs = ["Video", "UseCases", "Benefits", "Solution"]

export function ProfessionalNavTabs() {
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
        <div className="flex justify-center gap-8 py-4 tracking-normal text-2xl">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => scrollToSection(tab)}
              className={`transition-colors text-2xl font-semibold ${
                activeTab === tab ? "text-amber-500 border-b-2 border-amber-500 pb-1" : "text-gray-400 hover:text-white"
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
