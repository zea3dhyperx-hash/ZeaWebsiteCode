"use client"

import { Play } from "lucide-react"
import { useState } from "react"

export function AutomotiveDemo() {
  const [showVideoModal, setShowVideoModal] = useState(false)

  return (
    <>
      <section id="video" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-4">
              Smarter Operations and Customer Management for Industrial Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Video Container */}
            <div
              className="relative rounded-lg overflow-hidden bg-slate-800 aspect-square cursor-pointer group transition-all duration-300 opacity-0 animate-slide-in-left"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
              onClick={() => setShowVideoModal(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent" />
              <button className="absolute inset-0 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/50 transition-all">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </button>
            </div>

            {/* Text Content */}
            <div
              className="space-y-6 opacity-0 animate-slide-in-right"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Connect, automate, and grow your customer base
              </h3>
              <p className="text-gray-300 text-base leading-relaxed sm:text-xl">
                In the automotive and manufacturing sectors, efficiency is everything. It matters a lot right from lead
                generation to after-sales service. With this in mind, ZeaCRM helps manufacturers, suppliers, and
                dealerships automate processes, track performance, and maintain strong relationships across their entire
                value chain.
              </p>
              <p className="text-gray-300 text-base leading-relaxed sm:text-xl">
                Whether you're managing B2B contracts, dealer networks, or end-customer engagement, ZeaCRM gives you
                full visibility and control. With AI automation, you can streamline sales cycles, improve production
                coordination, and build lasting business relationships that drive growth and loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="bg-slate-900 rounded-lg overflow-hidden max-w-2xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-slate-800">
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
