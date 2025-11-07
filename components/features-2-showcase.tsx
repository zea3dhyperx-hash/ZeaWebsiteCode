// "use client";
import { Image } from "lucide-react";
import myImage from "../public/images/pipeline.png";
// import Lottie from "lottie-react";
// var check = "../animations/anim1.json";


export function Features2Showcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Intelligent Pipeline Management</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Visualize your entire sales pipeline with AI-powered insights. Get real-time alerts for at-risk deals and
              opportunities to accelerate closure.
            </p>
            <ul className="space-y-4">
              {["Track and update deal stages in real time", "Get AI recommendations on high-value leads", "Automate stage-based tasks and follow-ups", "Forecast revenue and conversion trends instantly"].map(
                (item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="text-primary text-xl">✓</span>
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="bg-gradient-to-br p-8 h-96 flex items-center justify-center animate-scale-in">

            <div className="text-center w-full h-full flex flex-col scale-110 items-center justify-center">
              <img src="/images/pipeline.png" alt="Custom" />
              {/* <Image>
                  src="/images/pipeline.png"
                  alt="Pipeline Visualization"
              </Image>
              <p className="text-muted-foreground mt-4">Pipeline Visualization</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

