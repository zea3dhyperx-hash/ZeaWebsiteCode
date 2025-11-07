"use client"

export function RealEstateHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      {/* Background Image */}
      <div className="absolute inset-0 object-cover opacity-60 flex">
        <img src="realestatebg.png" alt="healthcare background image" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">Real Estate</h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">AI-Powered CRM Solutions for Builders, Agents, and Property Consultants</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            Request Demo
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
