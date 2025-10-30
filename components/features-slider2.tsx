"use client"

//For HomePage

import { useState } from "react"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import Image from "next/image"

const featuresData = [
  {
    id: 1,
    title: "Smart Contact & Lead Management",
    description:
      "Streamline your customer interactions and lead tracking with our intelligent contact management system.",
    features: ["Additional Revenue Streams", "Built-in AI-lead Score Alerts", "Shift to Your Customers"],
    testimonial: {
      name: "Sarah Johnson",
      role: "Sales Manager",
      text: "This platform has transformed how we manage leads. The AI scoring is incredibly accurate and saves us hours every week.",
      image: "/professional-woman-diverse.png",
    },
    diagram: "/contact-management-flowchart-diagram.jpg",
  },
  {
    id: 2,
    title: "Marketing Automation That Works 24/7",
    description: "Automate your marketing workflows and nurture leads around the clock with intelligent automation.",
    features: ["Automated Email Sequences", "Lead Scoring & Qualification", "Multi-channel Campaign Management"],
    testimonial: {
      name: "Michael Chen",
      role: "Marketing Director",
      text: "The automation capabilities have increased our conversion rates by 40%. It's like having a dedicated marketing team working 24/7.",
      image: "/professional-man.jpg",
    },
    diagram: "/marketing-automation-workflow-diagram.jpg",
  },
  {
    id: 3,
    title: "Customer Relationship Excellence",
    description: "Build stronger customer relationships with comprehensive CRM tools and insights.",
    features: ["Customer 360 View", "Interaction History Tracking", "Predictive Analytics"],
    testimonial: {
      name: "Emily Rodriguez",
      role: "Customer Success Lead",
      text: "Our customer satisfaction scores have improved significantly since implementing this system.",
      image: "/professional-woman-smiling.png",
    },
    diagram: "/customer-relationship-management-diagram.jpg",
  },
  {
    id: 4,
    title: "Sales Pipeline Optimization",
    description: "Visualize and optimize your sales pipeline for maximum efficiency and revenue growth.",
    features: ["Real-time Pipeline Visibility", "Deal Forecasting", "Sales Performance Analytics"],
    testimonial: {
      name: "David Thompson",
      role: "VP of Sales",
      text: "Pipeline management has never been easier. We've increased our close rates by 35%.",
      image: "/professional-man-suit.png",
    },
    diagram: "/sales-pipeline-optimization-diagram.jpg",
  },
  {
    id: 5,
    title: "Team Collaboration Hub",
    description: "Enable seamless collaboration across your entire organization with integrated communication tools.",
    features: ["Real-time Team Chat", "Task Management", "Document Collaboration"],
    testimonial: {
      name: "Lisa Anderson",
      role: "Operations Manager",
      text: "Team productivity has skyrocketed with better collaboration tools built right into our CRM.",
      image: "/professional-woman-glasses.png",
    },
    diagram: "/team-collaboration-platform-diagram.jpg",
  },
  {
    id: 6,
    title: "Advanced Reporting & Analytics",
    description: "Get actionable insights with comprehensive reporting and advanced analytics dashboards.",
    features: ["Custom Report Builder", "Real-time Dashboards", "Predictive Insights"],
    testimonial: {
      name: "James Wilson",
      role: "Business Analyst",
      text: "The analytics capabilities give us the insights we need to make data-driven decisions quickly.",
      image: "/professional-bearded-man.png",
    },
    diagram: "/analytics-dashboard-diagram.jpg",
  },
  {
    id: 7,
    title: "Integration Ecosystem",
    description: "Connect with your favorite tools and platforms for a unified business solution.",
    features: ["500+ Pre-built Integrations", "Custom API Access", "Webhook Support"],
    testimonial: {
      name: "Rachel Green",
      role: "Tech Lead",
      text: "The integration capabilities are outstanding. We connected all our tools in minutes.",
      image: "/professional-woman-tech.jpg",
    },
    diagram: "/integration-ecosystem-diagram.jpg",
  },
  {
    id: 8,
    title: "Security & Compliance",
    description: "Enterprise-grade security and compliance features to protect your business data.",
    features: ["HIPAA & GDPR Compliant", "End-to-end Encryption", "Advanced Access Controls"],
    testimonial: {
      name: "Robert Martinez",
      role: "Security Officer",
      text: "The security features give us complete peace of mind. All compliance requirements are met.",
      image: "/professional-man-security.jpg",
    },
    diagram: "/security-compliance-diagram.png",
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
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
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
