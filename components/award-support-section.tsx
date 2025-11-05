"use client"

import { CheckCircle2 } from "lucide-react"

export function AwardSupportSection() {
  return (
    <section className="bg-primary py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration */}
          <div className="flex justify-center">
            <img
                  src="/images/support.png"
                  alt="Award Winning Support Illustration"
                  className="w-full h-auto rounded-lg"
                />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">Award-Winning Support</h2>
            <p className="text-black text-sm mb-6">
              Experience world-class customer support that goes beyond expectations. Our dedicated team is here to
              ensure your success.
            </p>

            {/* Support Features */}
            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-black mb-1">24/7 Dedicated Support Team</h3>
                  <p className="text-sm text-black">
                    Round-the-clock assistance from our expert support specialists ready to help you succeed.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-black mb-1">Seamless Integration Support</h3>
                  <p className="text-sm text-black">
                    Expert guidance to integrate ZeaCRM with your existing tools and workflows effortlessly.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-black mb-1">Priority Response Times</h3>
                  <p className="text-sm text-black">
                    Get quick resolutions with our priority support queue ensuring minimal downtime.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/contact-us"
              className="inline-block bg-black text-primary px-6 py-2 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              CONTACT US TODAY
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
