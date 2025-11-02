"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import Image from "next/image"

const featuresData = [
  {
    id: 1,
    title: "Smart Contact & Lead Management",
    description:
      "Never lose a lead again. ZeaCRM automatically captures, tracks, and organizes leads from every source—your website, social media, ads, or referrals.",
    features: ["AI-driven lead scoring to prioritize hot prospects", "Auto-tagging & segmentation for better targeting", "Visual pipelines to manage deals from start to finish"],
    testimonial: {
      name: "Sarah Johnson",
      role: "Sales Manager",
      text: "This platform has transformed how we manage leads. The AI scoring is incredibly accurate and saves us hours every week.",
      image: "/professional-woman-diverse.png",
    },
    diagram: "/images/1lead.png",
  },
  {
    id: 2,
    title: "Marketing Automation That Works 24/7",
    description: "Turn manual campaigns into automated growth engines. Whether it’s email, SMS, or WhatsApp, ZeaCRM keeps your audience engaged without extra effort.",
    features: ["Multi-step nurture campaigns", "Personalized AI follow-ups", "Ready-to-use templates that save time"],
    testimonial: {
      name: "Michael Chen",
      role: "Marketing Director",
      text: "The automation capabilities have increased our conversion rates by 40%. It's like having a dedicated marketing team working 24/7.",
      image: "/professional-man.jpg",
    },
    diagram: "/images/2a47.png",
  },
  {
    id: 3,
    title: "Sales Pipeline & Deal Tracking",
    description: "Close more deals with less stress. ZeaCRM gives you a clear, drag-and-drop pipeline to track opportunities at every stage.",
    features: ["Automated reminders so nothing slips through", "Task creation linked to deal progress", "Forecasting tools to predict revenue"],
    testimonial: {
      name: "Emily Rodriguez",
      role: "Customer Success Lead",
      text: "Our customer satisfaction scores have improved significantly since implementing this system.",
      image: "/professional-woman-smiling.png",
    },
    diagram: "/images/3Sales Pipeline.png",
  },
  {
    id: 4,
    title: "Appointment & Scheduling System",
    description: "Say goodbye to double bookings and missed meetings. ZeaCRM makes scheduling effortless.",
    features: ["Online booking pages for clients", "Auto-reminders via SMS, WhatsApp, or email", "Seamless sync with Google & Outlook calendars"],
    testimonial: {
      name: "David Thompson",
      role: "VP of Sales",
      text: "Pipeline management has never been easier. We've increased our close rates by 35%.",
      image: "/professional-man-suit.png",
    },
    diagram: "/images/4appointment.png",
  },
  {
    id: 5,
    title: "AI-Powered Conversations",
    description: "Bring all your conversations into one place. ZeaCRM’s unified inbox connects email, SMS, WhatsApp, and social media.",
    features: ["AI-assisted replies that save time", "Sentiment detection to identify urgent messages", "Chatbots to capture leads 24/7"],
    testimonial: {
      name: "Lisa Anderson",
      role: "Operations Manager",
      text: "Team productivity has skyrocketed with better collaboration tools built right into our CRM.",
      image: "/professional-woman-glasses.png",
    },
    diagram: "/images/5AI.png",
  },
  {
    id: 6,
    title: "Reputation & Review Management",
    description: "Your reputation is your brand. ZeaCRM helps you collect and showcase reviews automatically.",
    features: ["Automated review requests after purchases or visits", "Reputation monitoring to track feedback", "Display positive reviews on your website"],
    testimonial: {
      name: "James Wilson",
      role: "Business Analyst",
      text: "The analytics capabilities give us the insights we need to make data-driven decisions quickly.",
      image: "/professional-bearded-man.png",
    },
    diagram: "/images/6repu.png",
  },
  {
    id: 7,
    title: "Payments & Invoicing",
    description: "Make it easy for clients to pay you. ZeaCRM simplifies billing with integrated payments.",
    features: ["Online invoices with one-click payment", "Automated reminders for pending dues", "Support for Stripe, Razorpay, PayPal & more"],
    testimonial: {
      name: "Rachel Green",
      role: "Tech Lead",
      text: "The integration capabilities are outstanding. We connected all our tools in minutes.",
      image: "/professional-woman-tech.jpg",
    },
    diagram: "/images/7payment.png",
  },
  {
    id: 8,
    title: "Analytics & Reporting",
    description: "Turn your data into decisions. ZeaCRM gives you real-time insights at your fingertips.",
    features: ["Visual dashboards for sales & marketing performance", "Custom reports tailored to your KPIs", "Predictive analytics to plan growth"],
    testimonial: {
      name: "Robert Martinez",
      role: "Security Officer",
      text: "The security features give us complete peace of mind. All compliance requirements are met.",
      image: "/professional-man-security.jpg",
    },
    diagram: "/images/8analytics.png",
  },
  {
    id: 9,
    title: "Seamless Integrations",
    description: "Already using tools you love? ZeaCRM connects with them easily.",
    features: ["Email marketing platforms, payment gateways, and social channels", "Zapier & API support for advanced workflows", "Third-party apps for limitless automation"],
    testimonial: {
      name: "Robert Martinez",
      role: "Security Officer",
      text: "The security features give us complete peace of mind. All compliance requirements are met.",
      image: "/professional-man-security.jpg",
    },
    diagram: "/images/9last.png",
  },
]

export function FeaturesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuresData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuresData.length) % featuresData.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const feature = featuresData[currentSlide]

  return (
    <section id="slider" className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-amber-400 mb-16">FEATURES</h2>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-16 z-10 text-amber-400 hover:text-amber-300 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 sm:translate-x-16 z-10 text-amber-400 hover:text-amber-300 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={40} />
          </button>

          {/* Slide Content with Transition */}
          <div className="transition-all duration-500 ease-in-out">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-4">{feature.title}</h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{feature.description}</p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {feature.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="text-amber-400 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300 text-sm sm:text-base">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Testimonial Card */}
                <div className="bg-amber-400 rounded-lg p-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src={feature.testimonial.image || "/placeholder.svg"}
                        alt={feature.testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-black text-sm sm:text-base font-medium mb-2">{feature.testimonial.text}</p>
                      <p className="text-black font-semibold text-sm">{feature.testimonial.name}</p>
                      <p className="text-black text-xs opacity-75">{feature.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Diagram */}
              <div className="flex justify-center items-center">
                <div className="relative w-full aspect-square max-w-md">
                  <Image
                    src={feature.diagram || "/placeholder.svg"}
                    alt={`${feature.title} diagram`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-col items-center gap-6 mt-12">
            {/* Pagination Dots */}
            <div className="flex justify-center gap-2">
              {featuresData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentSlide ? "bg-amber-400 w-8" : "bg-amber-400 opacity-40 hover:opacity-60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Previous and Next Buttons */}
            <div className="flex justify-center gap-4">
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
