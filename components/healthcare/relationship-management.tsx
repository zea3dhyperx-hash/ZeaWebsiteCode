"use client"

import { useState } from "react"
import { VideoModal } from "./video-modal"

export function RelationshipManagement() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950" id="video">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-400">
            Smarter Healthcare Relationship Management
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                In healthcare, every interaction counts. Right from the first appointment looking to long-term patient
                engagement, ZeoCRM helps hospitals, clinics, labs, and pharmacies nurture relationships with precision,
                empathy, and speed.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Built with AI automation, ZeoCRM simplifies operations that often overwhelm healthcare teams. From
                scheduling and reminders to patient communication and record tracking, every process becomes smarter.
                Healthcare teams no longer need to choose between efficiency and care—our staff can focus on care, not
                coordination.
              </p>
            </div>

            <div
              onClick={() => setIsVideoOpen(true)}
              className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-slate-800 flex items-center justify-center border border-slate-700 cursor-pointer hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800 opacity-30"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full bg-slate-600 flex items-center justify-center mx-auto mb-4 hover:bg-amber-400 hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-10 h-10 text-amber-400 hover:text-slate-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                  </svg>
                </div>
                <p className="text-slate-400">Video Demo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </>
  )
}
