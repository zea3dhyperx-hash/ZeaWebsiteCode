import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background overlay with tech pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1)_0%,transparent_50%)]"></div>
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
