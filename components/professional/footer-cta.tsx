"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation";

export function FooterCTA() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r bg-primary relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
        <Image src="/abstract-geometric-pattern.png" alt="" fill className="object-contain" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-black mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Our platform is built on five core principles to guarantee your success
        </h2>
        <div
          className={`flex justify-center gap-4 flex-wrap transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <Button size="lg" onClick={() => router.push("/get-started")} className="bg-black hover:bg-gray-900 text-white font-semibold px-8">
            Get Started Today
          </Button>
          <Button
            size="lg"
            onClick={() => router.push("/demo")}
            variant="outline"
            className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold px-8 bg-transparent"
          >
            Book Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
