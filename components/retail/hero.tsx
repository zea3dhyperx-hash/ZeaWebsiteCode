"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function RetailHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/design-mode/Rectangle5.png"
          alt="Futuristic automated warehouse with robotic systems"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Retail & E-Commerce
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          AI-Powered CRM Solutions for Stores, Brands, and Online Businesses
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 text-lg">
            Request Demo
          </Button>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 text-lg">
            Learn More 
          </Button>
        </div>
      </div>
    </section>
  )
}
