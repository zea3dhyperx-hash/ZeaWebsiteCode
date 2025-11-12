"use client"

import { useState } from "react"

export function RealEstateDemo() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section id="video" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-400 mb-4 sm:text-3xl">Smarter Sales and Relationship Management for Real Estate</h2>
            
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-slate-800">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/OTr-FSnv_vA?si=WwNuVNslymDjfmZs"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Video Demo */}
            {/* <div className="flex justify-center">
              <div
                className="relative w-[562px] h-[390px] bg-gradient-to-br from-blue-400 to-blue-300 rounded-lg shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow flex items-center justify-center group overflow-hidden"
                onClick={() => setShowModal(true)}
              >
                <img src="https://img.youtube.com/vi/BVZpMDhZNlg/hqdefault.jpg" alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 rounded-lg transition-all" />
                <button className="relative z-10 w-20 h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all group-hover:scale-110">
                  <svg className="w-8 h-8 text-blue-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div> */}

            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Build Stronger Client Relationships and Close Deals Faster with ZeaCRM
              </h3>
              <p className="text-gray-300 leading-relaxed text-xl">
                In real estate, timing and relationships drive every deal. ZeaCRM helps real estate professionals manage clients, properties, and transactions with complete visibility and automation. You could be handling multiple listings, tracking buyer interest, or nurturing long-term investor relationships. Everything happens seamlessly from one intelligent platform
              </p>
              <p className="text-gray-300 leading-relaxed text-xl">
                From initial inquiry to closing day, you’ll always know exactly where every deal stands, saving time and maximizing every opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div className="relative w-full max-w-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video bg-slate-800">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/OTr-FSnv_vA?si=WwNuVNslymDjfmZs"
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
