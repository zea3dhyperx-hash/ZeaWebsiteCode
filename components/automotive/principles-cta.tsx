"use client"
import { useRouter } from "next/navigation";

export function PrinciplesCTA() {
  const router = useRouter();
  return (
    <section id="solution" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-primary overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r bg-primay opacity-90 z-0" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
          Experience how ZeaCRM can change your Automotive organization with intelligent automation.
        </h2>

        <button onClick={() => router.push("/get-started")} className="px-8 py-3 bg-background text-white font-bold rounded-full hover:scale-110 transition-all duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  )
}
