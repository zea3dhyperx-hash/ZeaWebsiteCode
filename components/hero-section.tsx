"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import AniHero from "./animations/ani-hero"
import { useEffect } from "react";
import { GetStartedModal } from "./get-started-modal"
import { SignInModal } from "./sign-in-modal"

export function HeroSection() {
  useEffect(() => {
    const key = "scroll-healthcare";

    // restore scroll when coming back
    const saved = sessionStorage.getItem(key);
    if (saved) window.scrollTo(0, parseInt(saved));

    // save scroll on unload or navigation away
    const handleScroll = () => {
      sessionStorage.setItem(key, window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <section className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden pt-20 pb-20">
    <section className="relative min-h-screen overflow-hidden pt-20 pb-20">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
          style={{ top: "10%", left: "10%" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
          style={{ top: "20%", left: "80%", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-white rounded-full opacity-25 animate-pulse"
          style={{ top: "60%", left: "15%", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
          style={{ top: "70%", left: "85%", animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
          style={{ top: "40%", left: "50%", animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Tech visualization background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M 100 300 Q 300 200 500 250 T 900 300" stroke="url(#techGradient)" strokeWidth="2" fill="none" />
          <circle cx="500" cy="250" r="3" fill="#3b82f6" opacity="0.6" />
          <circle cx="300" cy="200" r="2" fill="#3b82f6" opacity="0.4" />
          <circle cx="700" cy="280" r="2" fill="#3b82f6" opacity="0.4" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                ZeaCRM: Smarter Relationships, Stronger Results
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Manage leads, automate sales, and turn conversations into conversions all from one intelligent platform. ZeaCRM helps growing businesses simplify customer management, automate routine tasks, and close deals faster with the power of AI.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary hover:bg-primary text-black font-semibold px-8 py-6 text-base rounded-lg">
                <a href="/get-started">Start Free Trial</a>
              </Button>
              
              <Button
                variant="outline"
                onClick={() => window.location.href = "/demo"}
                className="border-2 border-blue-400 text-blue-400 hover:bg-primary font-semibold px-8 py-6 text-base rounded-lg flex items-center justify-center gap-2 bg-transparent"
              >
                  <Play size={18} />
                  Book a Demo
              </Button>
            </div>
            
          </div>
          {/* Right Visual: Bot SVG */}
          <div className="scale-120 relative h-96 lg:h-full flex items-center justify-center">
            <div className="rounded-xl p-0 scale-70 object-contain bg-card overflow-hidden">
                <video
                  src="/videos/hero1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                />
              </div>
            {/* <img
              src="/bot/bot3.gif"
              alt="Animated assistant bot"
              className="w-full h-auto max-h-[520px] object-contain"
            /> */}
            {/* <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/hero13.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />*/}
          </div> 
          {/* <AniHero /> */}
          

          {/* Right - 3D Character Illustration */}
          <div className="relative h-96 lg:h-full flex items-center justify-center">
            
          </div>
        </div>
      </div>
    </section>
  )
}


