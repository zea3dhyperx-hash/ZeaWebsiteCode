"use client"

import { useState } from "react"
import Image from "next/image"

const segments = [
  {
    id: "hospitals",
    title: "Hospitals",
    icon: (
      <svg className="w-16 h-16 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15h-2v-4H6v-2h4V8h2v4h4v2h-4v4z" />
      </svg>
    ),
    description:
      "Smarter Care, Less Paperwork. Automate bookings, prescriptions, payments, and follow-ups — reducing admin time and improving care quality.Smarter Care, Less Paperwork. Automate bookings, prescriptions, payments, and follow-ups — reducing admin time and improving care quality.",
    image: "/images/untitled-20design-20-283-29.png",
  },
  {
    id: "clinics",
    title: "Clinics",
    icon: (
      <svg className="w-16 h-16 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm3 9h-2v3H8v-2h3v-3h2v3h3v2h-3v-3z" />
      </svg>
    ),
    description:
      "Patient-First Automation. Enable WhatsApp appointment booking, queue management, and digital records for a frictionless experience. Patient-First Automation. Enable WhatsApp appointment booking, queue management, and digital records.",
    image: "/images/clinic-doctor-illustration.png",
  },
  {
    id: "labs",
    title: "Laboratories",
    icon: (
      <svg className="w-16 h-16 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 2v2H6c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-1V2h-2v2H9V2H7zm0 6h10v10H7V8z" />
      </svg>
    ),
    description:
      "Digitally Connected Diagnostics. Automate test booking, report delivery, and billing for faster, more accurate workflows. Digitally Connected Diagnostics. Automate test booking, report delivery, and billing for faster workflows.",
    image: "/images/lab-scientist-microscope.png",
  },
  {
    id: "pharmacies",
    title: "Pharmacies",
    icon: (
      <svg className="w-16 h-16 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z" />
      </svg>
    ),
    description:
      "Connected Pharmacy Operations. Enable digital ordering, e-prescription syncing, and automated refill reminders for repeat sales. Connected Pharmacy Operations. Enable digital ordering and e-prescription syncing for better service.",
    image: "/images/pharmacy-counter-scene.png",
  },
  {
    id: "wellness",
    title: "Wellness & Therapy",
    icon: (
      <svg className="w-16 h-16 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    description:
      "Holistic Patient Care. Streamline therapy scheduling, progress tracking, and wellness program management for better patient outcomes. Holistic Patient Care. Streamline therapy scheduling, progress tracking, and wellness program management.",
    image: "/images/wellness-yoga-group.png", // Updated to new yoga group illustration
  },
  {
    id: "emergency",
    title: "Emergency & Ambulance",
    icon: (
      <svg className="w-16 h-16 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM19.5 9.5h-1V12h3c.65 0 1.22.42 1.42 1.01L23 13v5c0 .55-.45 1-1 1h-1c0-1.66-1.34-3-3-3s-3 1.34-3 3H9c0-1.66-1.34-3-3-3s-3 1.34-3 3H2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h2.5c.83 0 1.5-.67 1.5-1.5S5.33 11 4.5 11H2V8c0-.55.45-1 1-1h2l3-3h7c.55 0 1 .45 1 1v4.5zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S4.5 16.17 4.5 17s.67 1.5 1.5 1.5z" />
      </svg>
    ),
    description:
      "Rapid Response Systems. Optimize dispatch, GPS tracking, and patient handoff coordination for life-saving efficiency. Rapid Response Systems. Optimize dispatch, GPS tracking, and patient handoff coordination for better emergency care.",
    image: "/images/ambulance-emergency-vehicle.png",
  },
]

export function SegmentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="relative">
      {/* Main Carousel Content */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="grid md:grid-cols-2 gap-0 items-center min-h-[500px]">
          {/* Left Side - Text Content */}
          <div className="p-8 md:p-12 space-y-6">
            {/* Title with Orange Underline */}
            <div>
              <div className="w-24 h-1 bg-orange-500 mb-4"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-500">{segments[currentIndex].title}</h2>
            </div>

            {/* Icon and Description */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">{segments[currentIndex].icon}</div>
              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {segments[currentIndex].description.split(".")[0]}.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {segments[currentIndex].description.split(".").slice(1).join(".")}
                </p>
              </div>
            </div>

            {/* Curved Orange Accent */}
            <div className="relative h-24 -mb-8">
              <svg
                className="absolute bottom-0 left-0 w-64 h-24"
                viewBox="0 0 300 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 50 Q 150 0, 300 50 L 300 100 L 0 100 Z" fill="url(#orangeGradient)" opacity="0.3" />
                <defs>
                  <linearGradient id="orangeGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-full min-h-[500px] bg-gray-50">
            <div className="absolute inset-0">
              <Image
                src={segments[currentIndex].image || "/placeholder.svg"}
                alt={segments[currentIndex].title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-8 text-[rgba(223,168,34,1)]">
        {segments.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index ? "w-12 h-3 bg-orange-500" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev === 0 ? segments.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev === segments.length - 1 ? 0 : prev + 1))}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
