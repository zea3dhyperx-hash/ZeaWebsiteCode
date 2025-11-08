"use client"
import { Button } from "@/components/ui/button"
// import { useNavigate } from "react-router-dom";

export function Hero() {
  // const navigate = useNavigate();
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 object-cover opacity-60 flex">
        <img src="healthbg.png" alt="healthcare background image" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">Healthcare</h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 text-balance">
          Your All-in-One AI-Powered CRM for Healthcare Professionals
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-semibold px-8 py-3 text-lg rounded-lg">
            Request Demo
          </Button>
          <Button
            variant="outline"
            className="border-slate-600 text-white hover:bg-slate-800 font-semibold px-8 py-3 text-lg rounded-lg bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
