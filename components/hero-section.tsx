"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { GetStartedModal } from "./get-started-modal"
import { SignInModal } from "./sign-in-modal"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden pt-20 pb-20">
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
                className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-8 py-6 text-base rounded-lg">
                <a href="/get-started">Start Free Trial</a>
              </Button>
              
              <Button
                variant="outline"
                onClick={() => window.location.href = "/demo#bookdemo"}
                className="border-2 border-blue-400 text-blue-400 hover:bg-amber-400 font-semibold px-8 py-6 text-base rounded-lg flex items-center justify-center gap-2 bg-transparent"
              >
                  <Play size={18} />
                  Book a Demo
              </Button>
              
            </div>

            {/* Benefits */}
            {/* <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-sm text-gray-300">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-sm text-gray-300">14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Setup in 5 minutes</span>
              </div>
            </div> */}
          </div>

          {/* Right - 3D Character Illustration */}
          <div className="relative h-96 lg:h-full flex items-center justify-center">
            <img src="images/Hero2.png" alt="A girl handling lot of things easily with zeaCRM" />
            {/* <div className="relative w-full h-full flex items-center justify-center"> */}
              {/* Placeholder for 3D character - using a styled div */}
              {/* <div className="relative w-64 h-80"> */}
                {/* Character body - simplified representation */}
                {/* <div className="absolute inset-0 flex items-center justify-center"> */}
                  {/* <svg viewBox="0 0 200 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet"> */}
                    {/* Head */}
                    {/* <circle cx="100" cy="60" r="35" fill="#f59e0b" /> */}
                    {/* Hair */}
                    {/* <path d="M 65 40 Q 65 20 100 15 Q 135 20 135 40" fill="#f59e0b" /> */}
                    {/* Eyes */}
                    {/* <circle cx="90" cy="55" r="4" fill="#1f2937" />
                    <circle cx="110" cy="55" r="4" fill="#1f2937" /> */}
                    {/* Smile */}
                    {/* <path d="M 90 70 Q 100 75 110 70" stroke="#1f2937" strokeWidth="2" fill="none" /> */}
                    {/* Body - Pink shirt */}
                    {/* <rect x="75" y="100" width="50" height="60" rx="5" fill="#ec4899" /> */}
                    {/* Arms */}
                    {/* <rect x="50" y="110" width="25" height="15" rx="7" fill="#f59e0b" />
                    <rect x="125" y="110" width="25" height="15" rx="7" fill="#f59e0b" /> */}
                    {/* Blue pants */}
                    {/* <rect x="80" y="160" width="40" height="50" rx="3" fill="#3b82f6" /> */}
                    {/* Shoes */}
                    {/* <ellipse cx="90" cy="215" rx="8" ry="6" fill="#1f2937" />
                    <ellipse cx="110" cy="215" rx="8" ry="6" fill="#1f2937" /> */}
                    {/* Briefcase */}
                    {/* <rect x="130" y="140" width="35" height="40" rx="3" fill="#ef4444" />
                    <rect x="135" y="135" width="25" height="8" rx="2" fill="#fbbf24" /> */}
                    {/* Shield on briefcase */}
                    {/* <path d="M 145 150 L 155 150 L 155 165 Q 150 170 145 165 Z" fill="#3b82f6" /> */}
                  {/* </svg> */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
