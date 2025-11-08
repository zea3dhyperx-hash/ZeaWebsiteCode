"use client"
import { useRouter } from "next/navigation";

export function PrinciplesCTA() {
  const router = useRouter();
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r bg-primary relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full -mr-48 -mt-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl">
            Experience how ZeaCRM can change your real estate business with intelligent automation
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <button 
              onClick={() => router.push("/get-started")}
              className="bg-background hover:scale-110 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              Get Started
            </button>
            <button 
              onClick={() => router.push("/demo")}
              className="bg-background hover:scale-110 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
