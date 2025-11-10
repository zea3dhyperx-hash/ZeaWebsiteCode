"use client"

import AniRealEstate from "../animations/ani-realestate"

export function LeadCaptureSection() {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 px-0.5 py-0 mx-2">All-in-One Platform for Real Estate Success</h2>
            <p className="text-gray-300 leading-relaxed text-xl border-0 text-left">
              ZeaCRM connects your sales, marketing, and customer support teams on a single, powerful dashboard. Every lead, listing, and communication is tracked automatically, giving you full transparency into your pipeline.
              


            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center leading-3 tracking-normal text-left items-start gap-3.5">
            <div className="relative w-full max-w-md h-72 rounded-lg overflow-hidden shadow-2xl">
              {/* <img
              src="allinone.png"
              alt="Healthcare team collaboration"
              className="w-full h-full object-cover"
            /> */}
              <AniRealEstate />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
