"use client"
import { useRouter } from "next/navigation";
import { useState } from "react"

export function AutomotiveHero() {
  const router = useRouter();
  const [showVideoModal, setShowVideoModal] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%201-Mwk3O234IbUnUXOvBxGZUoA8ba8D1Y.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Automotive & Manufacturing
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">AI-Powered CRM Solutions for Dealers, Distributors, and Manufacturers</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                onClick={() => router.push("/demo")}
                className="px-8 py-3 bg-primary hover:scale-110 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Request Demo
              </button>
              <button onClick={() => router.push("/")} className="px-8 py-3 bg-primary hover:scale-110 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="bg-slate-900 rounded-lg overflow-hidden max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-slate-800 flex items-center justify-center relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
