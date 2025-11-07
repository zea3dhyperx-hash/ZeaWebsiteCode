"use client"

import { useState } from "react"
import {
  Building2,
  Home,
  ShoppingCart,
  Briefcase,
  BookOpen,
  Heart,
  Zap,
  MoreHorizontal,
  Search,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const industries = [
  {
    name: "Healthcare",
    icon: Heart,
    link: "/allIndustries/healthcare",
    description:
      "Streamline patient management, appointment scheduling, and healthcare operations with AI-powered CRM solutions designed for medical practices.",
  },
  {
    name: "Real Estate",
    icon: Home,
    link: "/allIndustries/realestate",
    description:
      "Manage property listings, client relationships, and sales pipelines with comprehensive tools built for real estate professionals.",
  },
  {
    name: "Retail & E-Commerce",
    icon: ShoppingCart,
    link: "/allIndustries/retail",
    description:
      "Enhance customer experience, manage inventory, and boost sales with integrated e-commerce and retail management features.",
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    link: "/allIndustries/professional",
    description:
      "Organize client projects, track billable hours, and manage service delivery with tools tailored for consultants and agencies.",
  },
  {
    name: "Education & Training",
    icon: BookOpen,
    link: "/allIndustries/education",
    description:
      "Manage student relationships, course enrollment, and training programs with education-focused CRM capabilities.",
  },
  {
    name: "Finance & Insurance",
    icon: Zap,
    link: "/allIndustries/finance",
    description:
      "Secure client data, manage policies, and streamline financial operations with compliance-ready CRM solutions.",
  },
  {
    name: "Automotive & Manufacturing",
    icon: Building2,
    link: "/allIndustries/automotive",
    description:
      "Optimize supply chain, manage customer orders, and track production with industry-specific CRM tools.",
  },
  {
    name: "Hospitality (Hotels, Restaurants, Travel)",
    icon: MoreHorizontal,
    link: "/demo",
    description:
      "Online booking & reservation reminders, Feedback & review automation, Loyalty & referral programs",
  },
  {
    name: "NGOs & Nonprofits",
    icon: MoreHorizontal,
    link: "/demo",
    description:
      "Donation campaign automation, Donor engagement reminders, Transparent reports for accountability",
  },
  {
    name: "Events & Entertainment",
    icon: MoreHorizontal,
    link: "/demo",
    description:
      "Online registration & e-ticketing, Auto event reminders to attendees, Post-event surveys & engagement campaigns",
  },
]

const whyZeaCRMFeatures = [
  { title: "AI Powered", description: "Leverage artificial intelligence to automate tasks and gain insights" },
  { title: "Automation First", description: "Build workflows that work for you, not against you" },
  { title: "Secure & Compliant", description: "Enterprise-grade security with industry compliance standards" },
  { title: "Industry-Ready", description: "Pre-built solutions tailored to your specific industry needs" },
  { title: "Proven Impact", description: "Trusted by thousands of businesses worldwide" },
]

export function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("Healthcare")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-amber-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">Other Industries</h1>
          <p className="text-xl text-amber-400 mb-6">AI-Powered CRM Solutions for Every Business Sector</p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Smarter Relationship Management Across Every Industry
          </p>

          {/* Search Bar */}
          {/* <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div> */}

          {/* Industry Filter Tabs */}
          {/* <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <button
                key={industry.name}
                onClick={() => setSelectedIndustry(industry.name)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedIndustry === industry.name
                    ? "bg-amber-400 text-black"
                    : "bg-gray-900 text-gray-300 border border-gray-700 hover:border-amber-400"
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div> */}
          <p className="text-lg text-gray-300 max-w-6xl mx-auto mb-8">
            Every business, no matter the sector, depends on strong relationships and efficient communication. ZeaCRM brings automation, intelligence, and organization to industries that thrive on consistency, coordination, and customer satisfaction.
          </p>
          <p className="text-lg text-gray-300 max-w-6xl mx-auto mb-8">
            From logistics to travel, entertainment to non-profits, ZeaCRM adapts to your unique workflows. The platform helps you automate repetitive tasks, track every interaction, and turn data into actionable insights. This is ensuring smarter decisions and faster growth, no matter what business you're in.
          </p>
        </div>
      </section>

      {/* Select an Industry Section */}
      

      {/* Industries Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-amber-400/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black border border-amber-400/30 rounded-lg p-8 hover:border-amber-400 transition-all hover:shadow-lg hover:shadow-amber-400/20"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Icon className="w-10 h-10 text-amber-400 flex-shrink-0" />
                    <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{industry.description}</p>
                  <Button className="mt-6 bg-amber-400 text-black hover:bg-amber-300"><a href={industry.link}>Learn More</a></Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why ZeaCRM Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-amber-400/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Why ZeaCRM?</h2>
            <p className="text-gray-400">Our platform is built on five core principles to guarantee your success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyZeaCRMFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-amber-400/30 rounded-lg p-6 hover:border-amber-400 transition-all text-center"
              >
                <CheckCircle className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Your industry is evolving—your CRM should too.</h2>
          <p className="text-lg text-gray-300 mb-8">
            See how ZeaCRM can deliver care with efficiency, accuracy, and trust for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-amber-400 text-black hover:bg-amber-300 px-8 py-6 text-lg"><a href="/demo">Book a Demo</a></Button>
            <Button
              variant="outline"
              className="border-amber-400 text-amber-400 hover:bg-amber-400 px-8 py-6 text-lg bg-transparent"
            >
              <a href="/get-started">Start Free Trial</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}


