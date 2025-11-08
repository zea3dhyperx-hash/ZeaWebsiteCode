"use client"
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button"

export function ProfessionalHero() {
  const router = useRouter();
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/professional-hero-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
          Professional Services
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          AI-Powered CRM Solutions for Consultants, Agencies, and Service Firms.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button 
            onClick={() => router.push("/demo")}
            size="lg" className="bg-primary hover:scale-110 text-black font-semibold px-8">
            Request Demo
          </Button>
          <Button
            onClick={() => router.push("/")}
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:scale-110 font-semibold px-8 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
