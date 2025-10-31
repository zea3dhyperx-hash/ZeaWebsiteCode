// "use client";
import { Video } from "lucide-react";
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
              {["Drag-and-drop pipeline", "Predictive analytics", "Deal scoring", "Automated follow-ups"].map(
                (item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="text-primary text-xl">✓</span>
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-8 h-96 flex items-center justify-center border border-primary/20 animate-scale-in">
            
            <div className="text-center w-full h-full flex flex-col items-center justify-center">
              {/* <video className="w-full h-full object-contain rounded-md" src="/WebM/robot.webm" autoPlay loop muted playsInline /> */}
              {/* <Lottie animationData={check} loop></Lottie> */}
              {/* console.log("Animation data:", animationData); */}
              {/* <svg>className="w-full h-full object-contain rounded-md" src="/WebM/1.svg" autoPlay loop muted playsInline</svg> */}
              <p className="text-muted-foreground mt-4">Pipeline Visualization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
