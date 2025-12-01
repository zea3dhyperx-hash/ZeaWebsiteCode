"use client"

import { useState, useEffect } from "react"

export default function AniRetail1() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    { icon: "👀", label: "Discover", color: "from-blue-500 to-cyan-500" },
    { icon: "💬", label: "Engage", color: "from-purple-500 to-pink-500" },
    { icon: "🛒", label: "Purchase", color: "from-green-500 to-emerald-500" },
    { icon: "📦", label: "Fulfill", color: "from-orange-500 to-amber-500" },
    { icon: "🔄", label: "Retain", color: "from-red-500 to-rose-500" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      {/* Animated circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-32 h-32 rounded-full animate-ping" />
        <div className="absolute w-48 h-48 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>
      <div className="relative flex items-center justify-center w-full">
        <div className="font-bold my-4 w-full">
            <h2 className="text-xl font-bold text-center text-[rgba(223,168,34,1)]">AI powered crm solution</h2>
            <h3 className="text-lg font-semibold text-center leading-7">Customer Journey</h3>

            <div className="flex items-center justify-between gap-2">
              {steps.map((step, idx) => (
                <div key={step.label} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center text-xl
                      transition-all duration-500 transform
                      ${
                        activeStep === idx
                          ? `bg-gradient-to-br ${step.color} scale-110 shadow-lg`
                          : "bg-muted scale-90 opacity-50"
                      }
                    `}
                  >
                    {step.icon}
                  </div>
                  <span
                    className={`font-medium transition-all text-sm ${activeStep === idx ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-2 rounded-lg bg-foreground">
              <div className="text-center space-y-1">
                <div className="text-2xl">{steps[activeStep].icon}</div>
                <h4 className="font-semibold text-sm text-background">{steps[activeStep].label}</h4>
                <p className="text-lg text-background">
                  {activeStep === 0 && "AI identifies intent and segments visitor"}
                  {activeStep === 1 && "Personalized offer via WhatsApp/Email/SMS"}
                  {activeStep === 2 && "Payments + order sync with store"}
                  {activeStep === 3 && "Shipping updates + loyalty rewards"}
                  {activeStep === 4 && "Predictive re-orders and upsells"}
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-2 pt-2">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    activeStep === idx ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}
