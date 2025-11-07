"use client"

import { Play } from "lucide-react"
import { useState } from "react"

export function AutomotiveDemo() {
  const [showVideoModal, setShowVideoModal] = useState(false)

  return (
    <>
      <section id="video" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-4">A purpose-built Management Software</h2>
            <p className="text-2xl text-primary">for your entire customer journey</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Video Container */}
            <div
              className="relative rounded-lg overflow-hidden bg-slate-800 w-full lg:w-[562px] h-64 sm:h-80 lg:h-[390px] cursor-pointer group transition-all duration-300 mx-auto lg:mx-0"
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
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Centralize, engage, and convert customers</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Drive your conversations with the most advanced CRM built specifically for the automotive industry.
                Personalize and nurture every interaction.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Drive your conversations with the most advanced CRM built specifically for the automotive industry.
                Personalize and nurture every interaction.
              </p>
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
