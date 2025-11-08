"use client"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function FinanceHero() {
  const router = useRouter();
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/design-mode/img3.jpg"
          alt="Finance technology dashboard"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Finance & Insurance
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          AI-Powered CRM Solutions for Banks, Advisors, and Insurance Providers
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          <Button size="lg" onClick={() => router.push("/demo")} className="bg-primary hover:scale-110 text-black font-semibold px-8 text-lg">
            Request Demo
          </Button>
          <Button size="lg" onClick={() => router.push("/")} className="bg-primary hover:scale-110 text-black font-semibold px-8 text-lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
