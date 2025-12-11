"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import React, { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"

interface DemoFormProps {
  isOpen?: boolean
  onClose?: () => void
}

import { Bot, Globe, MessageSquare, Shield, Users, Zap } from "lucide-react"

function useDemoFormLogic() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    communicationConsent: false,
    agreement: false,
    subscribe: "tac agreed",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      const { name, checked } = target
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
        ...(name === "communicationConsent" ? { subscribe: checked ? "subscriber" : "tac agreed" } : {}),
      }))
      return
    }
    const { name, value } = target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setSubmitError(false)
      const payload = {
        ...formData,
        subscribe: formData.communicationConsent ? "subscriber" : "tac agreed",
      }
      await fetch("https://n8n.urlfactory.website/webhook/Zeacrm-Demo", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          Object.fromEntries(
            Object.entries(payload).map(([key, value]) => [
              key,
              typeof value === "boolean" ? String(value) : (value ?? "")
            ])
          )
        ),
      })
    } catch (err) {
      console.error("Demo webhook failed", err)
      setSubmitError(true)
    } finally {
      setSubmitted(true)
    }
  }

  const autofillReset: React.CSSProperties = {
    WebkitBoxShadow: "0 0 0 1000px #0f172a inset",
    boxShadow: "0 0 0 1000px #0f172a inset",
    WebkitTextFillColor: "#fff",
  }

  return { formData, submitted, submitError, handleChange, handleSubmit, autofillReset, setSubmitted }
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black z-0" />
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-20section1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />

        <div className="relative z-10 max-w-7xl w-full">
          <div className="mb-8"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-left">
            Revolutionizing
            <br />
            <span className="text-yellow-400">Customer</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl text-left">
            Experience the future of customer engagement with AI-powered automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-900 bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* AI Bots Section */}
      <section className="px-4 py-14">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12 relative inline-block"></div>
          <p className="max-w-3xl text-primary mx-auto leading-relaxed text-card text-2xl">
            Drive, Woo Or &amp; It Magically Happens. Automate In And Sit All Autopilot. Those Integrated Real-Time Bot
            Are Your Virtual Assistants That Can Help Answer Questions, Book Appointments, And All Bots Prepare For The
            Future. Making Your Feel Like Easy.
          </p>
        </div>
      </section>

      {/* Three Robots Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => {
                const container = document.getElementById("robot-carousel")
                if (container) container.scrollLeft -= 370
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full shadow-lg transition-all hidden md:block"
              aria-label="Previous robot"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button
              onClick={() => {
                const container = document.getElementById("robot-carousel")
                if (container) container.scrollLeft += 370
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full shadow-lg transition-all hidden md:block"
              aria-label="Next robot"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div
              id="robot-carousel"
              className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth px-12 md:px-16"
            >
              {[
                {
                  name: "ZEA IVR",
                  video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grok-video-255eff58-8e1b-4c8c-a5b3-d77433b3e788-uZhcmx7ZVoPz8LJaO88oxGacxTAT64.mp4",
                  description:
                    "Sales Manager. Milli uses your business insights to craft compelling cold call scripts, design persuasive cold emails, and build pitches that help you close deals with confidence. Milli is also capable of adapting sales strategies to different audiences and markets.",
                },
                {
                  name: "ZEA CRM",
                  video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grok-video-255eff58-8e1b-4c8c-a5b3-d77433b3e788-uZhcmx7ZVoPz8LJaO88oxGacxTAT64.mp4",
                  description:
                    "Business Development Manager. Your go-to AI for business development, crafting growth strategies, delivering business insights, and excelling in AI for marketing to ensure success in product launches, audience analysis, and more. Buddy has helped companies of all sizes achieve their business development goals.",
                },
                {
                  name: "ZEA PLAY",
                  video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grok-video-255eff58-8e1b-4c8c-a5b3-d77433b3e788-uZhcmx7ZVoPz8LJaO88oxGacxTAT64.mp4",
                  description:
                    "Customer Support Specialist. As a smart and charming AI for customer support, Cassie crafts expertly tailored responses to customer queries while maintaining your brand's unique voice. Cassie works alongside your human employees, supporting them to deliver exceptional customer support.",
                },
                {
                  name: "ZEA WIT",
                  video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grok-video-255eff58-8e1b-4c8c-a5b3-d77433b3e788-uZhcmx7ZVoPz8LJaO88oxGacxTAT64.mp4",
                  description:
                    "Creative Content Strategist. Wit brings innovation to your content creation with AI-powered copywriting, social media strategies, and brand messaging. Wit analyzes trends and audience preferences to craft compelling narratives that resonate with your target market and drive engagement.",
                },
                {
                  name: "ZEA SAFE",
                  video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grok-video-255eff58-8e1b-4c8c-a5b3-d77433b3e788-uZhcmx7ZVoPz8LJaO88oxGacxTAT64.mp4",
                  description:
                    "Security & Compliance Officer. Safe ensures your business operations meet industry standards and regulatory requirements. With advanced monitoring capabilities, Safe detects potential security threats, manages data privacy protocols, and maintains audit trails for complete peace of mind.",
                },
              ].map((robot) => (
                <div key={robot.name} className="flex-none w-[350px] snap-center">
                  <div className="space-y-4">
                    <video
                      src={robot.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-[400px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-3">{robot.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{robot.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {[0, 1, 2, 3, 4].map((idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const container = document.getElementById("robot-carousel")
                    if (container) container.scrollLeft = idx * 370
                  }}
                  className="w-2 h-2 rounded-full bg-gray-600 hover:bg-yellow-500 transition-colors"
                  aria-label={`Go to robot ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Automates Work Section */}
      <section className="py-0 px-4 relative min-h-[900px] flex items-end justify-center">
        <img
          src="/images/section1.png"
          alt="Three ZEA robots working together"
          className="absolute inset-0 w-full object-contain object-center-top h-full py-0"
        />
        <div className="relative z-10 w-full max-w-7xl text-center pb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Automates work.
            <br />
            <span className="text-yellow-400">Even while you sleep.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Our AI bots work 24/7 to handle customer inquiries, process orders, and manage tasks automatically.
          </p>
        </div>
      </section>

      {/* Click Your Business Type */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Positioned robot absolutely at top-right, partially outside section */}
        <img
          src="/images/zea-20crm-20img1.png"
          alt="Standing AI robot mascot"
          className="absolute -top-20 -right-32 h-[500px] w-auto object-contain drop-shadow-2xl z-0"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Centered heading and description */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Click your <span className="text-yellow-400">business</span> Type
            </h2>
            <p className="text-gray-400 text-lg">
              Product design is a multidisciplinary field that aims to satisfy user needs and provide excellent user
              experience.
            </p>
          </div>

          {/* Centered grid of business buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            {[
              { name: <a href="/industries/healthcare-crm">"Healthcare"</a>, icon: "🏥" },
              { name: <a href="/industries/real-estate-crm">"Real Estate"</a>, icon: "🏢" },
              { name: <a href="/industries/professional-services-crm">"Professional Services"</a>, icon: "💼" },
              { name: <a href="/industries/education-training-crm">"Education & Training"</a>, icon: "📚" },
              { name: <a href="/industries/finance-insurance-crm">"Finance and Insurance"</a>, icon: "💰" },
              { name: <a href="/industries/automotive-manufacturing-crm">"Automotive & Manufacturing"</a>, icon: "🚗" },
            ].map((business) => (
              <button
                key={business.name}
                className="p-4 bg-black border border-gray-700 hover:border-yellow-500 hover:bg-gray-900 transition-all rounded-2xl text-center group"
              >
                <span className="text-2xl mb-2 block">{business.icon}</span>
                <h3 className="text-base font-semibold group-hover:text-yellow-400 transition-colors">
                  {business.name}
                </h3>
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full text-lg">
              <a href="/industries/other-industries">Know More <span className="ml-2">→</span></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-balance leading-tight">
                Multiple workspaces. One AI Team with different AI employees.
              </h2>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Up to 5 profiles</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Create up to 5 business profiles, each customized to your unique business needs and specific goals,
                  powered by AI employees ready to deliver results.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/untitled-20design-20-2835-29.jpg"
                alt="ZEA CRM Dashboard on desktop monitor with plants"
                className="max-w-3xl h-auto w-auto border-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CRM Dashboard Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center md:justify-start">
              <img
                src="/images/frame.png"
                alt="ZEA CRM Dashboard on mobile phone with glowing effect"
                className="w-full max-w-md h-auto"
              />
            </div>
            <div className="text-white">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-balance leading-tight">
                A co-worker who's always on the clock.
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                AI tools are always on and available around the clock to support your business. The only helpers who
                love overtime. Always ready to save your most valuable asset—your time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl space-y-8 mx-12">
          {/* Purple Card with Phone Mockup - Full Width Horizontal */}
          <Card className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 border-none p-12 md:p-16 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center gap-8">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-6 text-balance leading-tight md:text-4xl">
                  Multiple workspaces. One AI Team with different AI employees.
                </h2>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  Create up to 5 business profiles, each customized to your unique business needs and specific goals,
                  powered by AI employees ready to deliver results.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <img
                  src="/images/untitled-20-28997-20x-20512-20px-29-20-283-29-201.png"
                  alt="Phone showing key features interface"
                  className="h-[450px] md:h-[500px] w-auto object-contain"
                />
              </div>
            </div>
          </Card>

          {/* Two Cyan Cards in Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Cyan Card with Feature Pills */}
            <Card className="bg-gradient-to-br from-cyan-600 to-cyan-500 border-none p-12 rounded-3xl">
              <div className="text-white space-y-8">
                <h2 className="text-4xl font-bold text-balance leading-tight">
                  Multiple workspaces. One AI Team with different AI employees.
                </h2>
                <div className="space-y-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
                    <img src="/cute-robot-avatar-icon.jpg" alt="Robot avatar" className="h-12 w-12 rounded-full" />
                    <span className="text-lg font-semibold text-white">Human-like conversations</span>
                  </div>
                  <div className="bg-white text-black rounded-2xl p-4 text-center font-semibold">
                    24/7 and fluent in regional languages
                  </div>
                  <div className="bg-white text-black rounded-2xl p-4 text-center font-semibold">
                    Smart Lead Handling
                  </div>
                </div>
              </div>
            </Card>

            {/* Right Cyan Card with Phone Mockup */}
            <Card className="bg-gradient-to-br from-cyan-600 to-cyan-500 border-none p-12 rounded-3xl">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white text-balance leading-tight">
                  Multiple workspaces. One AI Team with different AI employees.
                </h2>
                <p className="text-white/90 leading-relaxed">
                  Create up to 5 business profiles, each customized to your unique business needs and specific goals,
                  powered by AI employees ready to deliver results.
                </p>
                <div className="flex justify-center">
                  <img
                    src="/images/zea-20wit-20phone-20interface.png"
                    alt="Zea Wit phone interface"
                    className="h-[400px] w-auto object-contain"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* They Learn Your Business Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-white leading-tight">
              They learn your business.
              <br />
              Just like real helpers.
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Answer questions about your brand, add files, instructions, and your website for more unique results. The
              more information they have, the better the outcome. AI employees are designed to complement and enhance
              your human capabilities by handling routine tasks, allowing you to focus on higher-level and creative
              work.
            </p>
          </div>

          <div className="relative h-[600px] flex items-center justify-center">
            <img
              src="/images/background2.png"
              alt="Golden ZEA robot with integration cards showing business connections"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Integrates with your favorite tools Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-balance leading-tight">
                Integrates with your
                <br />
                favorite tools.
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Automate tasks with business automation tools—create social media posts, respond to comments, and
                more—freeing your team from repetitive tasks so they can focus on more strategic work.
              </p>
            </div>
            <div className="flex justify-center items-center relative h-[400px]">
              {/* Floating Icons Grid */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Facebook - Top Left */}
                <div className="absolute animate-bounce" style={{ top: "20px", left: "30px", animationDelay: "0s" }}>
                  <img src="/images/logos-facebook.png" alt="Facebook" className="w-16 h-16 object-contain" />
                </div>

                {/* Gmail - Top Center */}
                <div
                  className="absolute animate-bounce"
                  style={{ top: "10px", left: "50%", transform: "translateX(-50%)", animationDelay: "0.1s" }}
                >
                  <img src="/images/skill-icons-gmail-light.png" alt="Gmail" className="w-16 h-16 object-contain" />
                </div>

                {/* Google Calendar - Top Right */}
                <div className="absolute animate-bounce" style={{ top: "30px", right: "20px", animationDelay: "0.2s" }}>
                  <img
                    src="/images/logos-google-calendar.png"
                    alt="Google Calendar"
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Instagram - Left Middle */}
                <div
                  className="absolute animate-bounce"
                  style={{ left: "15px", top: "50%", transform: "translateY(-50%)", animationDelay: "0.15s" }}
                >
                  <img src="/images/skill-icons-instagram.png" alt="Instagram" className="w-16 h-16 object-contain" />
                </div>

                {/* Mailchimp - Bottom Left */}
                <div
                  className="absolute animate-bounce"
                  style={{ bottom: "20px", left: "20px", animationDelay: "0.25s" }}
                >
                  <img src="/images/skill-icons-notion-dark.png" alt="Mailchimp" className="w-16 h-16 object-contain" />
                </div>

                {/* Outlook - Right Middle */}
                <div
                  className="absolute animate-bounce"
                  style={{ right: "15px", top: "50%", transform: "translateY(-50%)", animationDelay: "0.2s" }}
                >
                  <img
                    src="/images/vscode-icons-file-type-outlook.png"
                    alt="Outlook"
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Google Drive - Bottom Right */}
                <div
                  className="absolute animate-bounce"
                  style={{ bottom: "20px", right: "25px", animationDelay: "0.3s" }}
                >
                  <img src="/images/logos-google-drive.png" alt="Google Drive" className="w-16 h-16 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="text-yellow-400">Choose Us?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the advantages that set our platform apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Unified Platform",
                description: "Manage all your bots and channels from one centralized dashboard for maximum efficiency.",
              },
              {
                icon: Zap,
                title: "Scalable Infrastructure",
                description:
                  "Our cloud-based solution grows with your business, handling millions of conversations seamlessly.",
              },
              {
                icon: Shield,
                title: "Priority Support",
                description: "24/7 dedicated support team ready to assist you with any questions or technical issues.",
              },
              {
                icon: Users,
                title: "Community Driven",
                description: "Join thousands of businesses leveraging AI to transform their customer experience.",
              },
              {
                icon: MessageSquare,
                title: "Omni-Channel Messaging",
                description:
                  "Connect with customers on their preferred platforms - web, mobile, social media, and more.",
              },
              {
                icon: Bot,
                title: "Advanced AI",
                description: "Powered by cutting-edge machine learning that continuously improves response quality.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="bg-black border-gray-800 p-8 hover:border-yellow-500/50 transition-all group">
                <item.icon className="h-12 w-12 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-primary mb-3 text-card">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Your new team with infinite knowledge */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center md:justify-start">
              <img
                src="/images/gemini-generated-image-yyywbxyyywbxyyyw1.png"
                alt="Golden robot working at desk with computer"
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>

            <div className="text-white flex flex-col justify-center">
              <h2 className="text-5xl font-bold mb-8 text-balance leading-tight md:text-4xl">
                Your new team with infinite knowledge.
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                AI for business has never been this personal—meet your new team, working hard so you don't have to.
              </p>
              <div>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-full text-lg">
                  <a href="/contact-us">Schedule a call</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Demo */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-2xl mx-auto">
          {/* <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Book a <span className="text-yellow-400">Demo</span>
            </h2>
            <p className="text-gray-400">
              See how our AI bots can transform your business. Schedule a personalized demo today.
            </p>
          </div> */}

          {/* <Card className="bg-black border-gray-800 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">First Name</label>
                  <Input placeholder="John" className="bg-gray-900 border-gray-800 focus:border-yellow-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Last Name</label>
                  <Input placeholder="Doe" className="bg-gray-900 border-gray-800 focus:border-yellow-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-gray-900 border-gray-800 focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Company</label>
                <Input placeholder="Your Company" className="bg-gray-900 border-gray-800 focus:border-yellow-500" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="bg-gray-900 border-gray-800 focus:border-yellow-500"
                />
              </div>

              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg py-6">
                Schedule Demo
              </Button>
            </form>
          </Card> */}

          {/* <div className="mt-8 text-center text-sm text-gray-500">
            By submitting this form, you agree to our Terms of Service and Privacy Policy
          </div> */}
          <DemoFormSection />
        </div>
      </section>

      {/* Join Our Community */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="text-yellow-400">Community</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Connect with thousands of businesses using AI to revolutionize customer engagement. Share insights, get
            support, and stay updated on the latest features.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Join on WhatsApp
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Join on Telegram
            </Button>
          </div>

          {/* <div className="border-t border-gray-800 pt-12">
            <p className="text-gray-500 text-sm">© 2025 AI Robots. All rights reserved. | Terms | Privacy | Contact</p>
          </div> */}
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-gray-500">
          <p>
            Ac 2025 ZeaCRM | Powered by{" "}
            <a href="https://url-factory.com/" className="text-gray-300 hover:text-amber-400 transition-colors">
              URL-Factory
            </a>{" "}
            | All rights reserved
          </p>
        </div>
        </div>
      </section>
    </div>
    
  )
}

export function DemoForm({ isOpen = false, onClose = () => {} }: DemoFormProps) {
  const { formData, submitted, submitError, handleChange, handleSubmit, autofillReset } = useDemoFormLogic()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4">
      <div className="relative w-full max-w-3xl rounded-2xl border border-amber-300 bg-gray-950 p-6 shadow-2xl">
        <button
          aria-label="Close"
          className="absolute right-4 top-4 text-amber-300 hover:text-white"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center text-center space-y-4 py-6">
            <Image src="/form-image.jpg" alt="Thank you" width={420} height={320} className="rounded-lg" />
            <h3 className="text-xl font-semibold text-white">Thank you!</h3>
            <p className="text-sm text-gray-300 max-w-md">
              We&apos;ve booked your demo request. Our team will reach out shortly to confirm the details.
            </p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1 text-center">
              <h3 className="text-2xl font-bold text-white">Book a Demo</h3>
              <p className="text-sm text-gray-400">Tell us about your team so we can tailor your walkthrough.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 text-white">Full Name*</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  style={autofillReset}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-white">Business Email*</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  style={autofillReset}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-white">Company*</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  style={autofillReset}
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-white">Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  style={autofillReset}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-1 text-white">What would you like to see in this demo?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-400 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-amber-300"
                  style={autofillReset}
                  placeholder="CRM features, automation, integrations, pricing, etc."
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="flex items-start gap-2 text-sm text-gray-300">
                <input
                  type="checkbox"
                  name="communicationConsent"
                  checked={formData.communicationConsent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border border-gray-700 bg-gray-900 text-amber-400 focus:ring-amber-400"
                />
                <span>I agree to receive communications about ZeaCRM updates and offers.</span>
              </label>
              <label className="flex items-start gap-2 text-sm text-gray-300">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 rounded border border-gray-700 bg-gray-900 text-amber-400 focus:ring-amber-400"
                />
                <span>
                  I agree to the <a href="/terms-of-service" className="text-amber-300 underline">Terms &amp; Conditions</a>.
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-amber-300 px-4 py-3 font-semibold text-black hover:bg-amber-400 transition-colors shadow-lg shadow-amber-300/30"
            >
              Book Demo
            </button>
            {submitError && (
              <p className="text-sm text-red-400 text-center">
                We couldn&apos;t reach the server right now, but your request was captured.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
// --------------------------------------------------------
// INLINE FORM (ABOVE FOOTER)
// --------------------------------------------------------

export function DemoFormSection() {
  const { formData, submitted, submitError, handleChange, handleSubmit, autofillReset } = useDemoFormLogic()

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book a <span className="text-yellow-400">Demo</span>
          </h2>
          <p className="text-gray-400">
            See how our AI bots can transform your business. Schedule a personalized demo today.
          </p>
        </div>

        <div className="bg-black border border-gray-800 p-8 rounded-2xl">
          {submitted ? (
            <div className="flex flex-col items-center text-center space-y-4 py-6">
              <Image src="/form-image.jpg" alt="Thank you" width={420} height={320} className="rounded-lg" />
              <h3 className="text-xl font-semibold text-white">Thank you!</h3>
              <p className="text-sm text-gray-300 max-w-md">
                We&apos;ve booked your demo request. Our team will reach out shortly to confirm the details.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                    style={autofillReset}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Business Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                    style={autofillReset}
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Company</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  style={autofillReset}
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  style={autofillReset}
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">What would you like to see?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-400 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-amber-300"
                  style={autofillReset}
                  placeholder="CRM features, automation, integrations, pricing, etc."
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-start gap-2 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    name="communicationConsent"
                    checked={formData.communicationConsent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border border-gray-700 bg-gray-900 text-amber-400 focus:ring-amber-400"
                  />
                  <span>I agree to receive communications about ZeaCRM updates and offers.</span>
                </label>
                <label className="flex items-start gap-2 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    name="agreement"
                    checked={formData.agreement}
                    onChange={handleChange}
                    required
                    className="mt-1 h-4 w-4 rounded border border-gray-700 bg-gray-900 text-amber-400 focus:ring-amber-400"
                  />
                  <span>
                    I agree to the <a href="/terms-of-service" className="text-amber-300 underline">Terms &amp; Conditions</a>.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg py-4"
              >
                Schedule Demo
              </button>

              {submitError && (
                <p className="text-sm text-red-400 text-center">
                  We couldn&apos;t reach the server right now, but your request was captured.
                </p>
              )}
            </form>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          By submitting this form, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </section>
  )
}


