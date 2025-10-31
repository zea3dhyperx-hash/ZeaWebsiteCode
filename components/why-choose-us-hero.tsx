import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function WhyChooseUsHero() {
  return (
    <section className="bg-amber-400 text-black py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              
              <h2 className="text-5xl md:text-6xl font-bold text-black">WHY CHOOSE US</h2>
            </div>

            <p className="text-sm text-black/80 max-w-md">
              Why you should consider ZeaCRM for your business needs and growth objectives
            </p>

            {/* Bullet Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black">Big Marketers, Big Dreamers</h3>
                  <p className="text-sm text-black/75 mt-1">
                    Built for ambitious teams who want to scale their marketing efforts
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black">Community-Driven Development</h3>
                  <p className="text-sm text-black/75 mt-1">
                    Your feedback shapes our roadmap. We build what our users need
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black">Honestly Wins Other Successful Marketers</h3>
                  <p className="text-sm text-black/75 mt-1">
                    Transparent pricing, honest support, and real results from day one
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-black text-amber-400 hover:bg-black/90 font-semibold px-8 py-6 text-base">
              TRY OUR FREE TRIAL
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="flex items-center justify-center">
            <img src="/images/WhyUs.png" alt="" />
            {/* <div className="relative w-full h-96 bg-white/10 rounded-lg flex items-center justify-center border-2 border-black/20">
              <div className="text-center">
                <p className="text-black/50 font-semibold">Team Illustration</p>
                <p className="text-sm text-black/40">4 Diverse Business Professionals</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
