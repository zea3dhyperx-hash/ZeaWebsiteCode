"use client"

import Image from "next/image"

export function MobileAISection() {
  const features = ["Faster bookings", "Customer Transparency", "More closures in less time"]

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-amber-400 mb-16">One CRM for Every Corner of Real Estate</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <div className="flex justify-center">
            <Image
              src="/images/design-mode/Add%20a%20subheading%20%282%29.png"
              alt="AI-powered CRM mobile app showing faster bookings, customer transparency, and more closures"
              width={600}
              height={600}
              className="w-full max-w-md transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(251,191,36,0.3)] cursor-pointer"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-400">
              Complete Real Estate Automation — Built for Builders, Brokers, and Property Managers
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-bold mb-2 text-2xl">Faster Sales Cycles</h4>
                <p className="text-gray-300 text-xl border-0">
                  Automate lead capture, client communication, and deal tracking across every segment — from builders to
                  brokers. Manage bookings, rent agreements, and maintenance requests from one connected platform. With
                  AI-powered insights and instant digital workflows, you’ll close deals faster and keep every client
                  experience seamless.
                </p>
              </div>
              {features.map((feature, idx) => null)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
