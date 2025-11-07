"use client"

export function RealEstateHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%201-Mwk3O234IbUnUXOvBxGZUoA8ba8D1Y.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

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
