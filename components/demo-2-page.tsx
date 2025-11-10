"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type React from "react"
import Link from "next/link"
import ChatWidget from "./chatbot"

export function Demo2Page() {
  const [selectedFeature, setSelectedFeature] = useState(0)
  const [bookDemoForm, setBookDemoForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const features = [
    {
      id: 1,
      title: "Intelligent Lead Scoring",
      description: "AI-powered lead scoring that identifies your best prospects automatically",
      icon: "🎯",
    },
    {
      id: 2,
      title: "Automated Workflows",
      description: "Create complex workflows without coding to automate your entire sales process",
      icon: "⚙️",
    },
    {
      id: 3,
      title: "Real-time Analytics",
      description: "Get instant insights into your sales performance with interactive dashboards",
      icon: "📊",
    },
    {
      id: 4,
      title: "Team Collaboration",
      description: "Keep your entire team aligned with built-in communication and task management",
      icon: "👥",
    },
  ]

  const handleBookDemoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBookDemoForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleBookDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Book Demo Form Submitted:", bookDemoForm)
    setBookDemoForm({ name: "", email: "", company: "", phone: "", message: "" })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-0 md:py-24 px-4 md:px-8">
          {/* Background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/herobg3.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          {/* Dark overlay to improve text contrast */}
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* <div className="flex justify-center mb-6 animate-fade-in">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/68c6c410024cf8ec47d6e3a7%281%29-zH93U9LGERy9pNBqMr2KDpBbblZtgX.png"
                alt="ZeaCRM Logo"
                className="h-12 w-auto"
              />
            </div> */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">Demo</h1>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
              Experience the power of AI-driven CRM with our interactive demonstration
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover-lift animate-slide-up">
              <a href = "https://api.leadconnectorhq.com/widget/bookings/zeacrm-demo-booking-calender">Book a Demo </a>

            </button>
          </div>
        </section>

        {/* Features Showcase
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 animate-slide-up">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <div
                  key={feature.id}
                  onClick={() => setSelectedFeature(i)}
                  className={`p-8 rounded-lg border-2 transition-all duration-300 cursor-pointer hover-lift animate-fade-in ${
                    selectedFeature === i
                      ? "bg-primary/10 border-primary"
                      : "bg-card border-border hover:border-primary"
                  }`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        {/* Book a Demo Form Section */}
        {/* <section className="py-5 md:py-10 px-4 md:px-8">
          <div className="max-w-2xl mx-auto ">
            <h2 id="bookdemo" className="text-3xl font-bold text-foreground mb-4 text-center animate-slide-up">Schedule Your Demo</h2>
            <p className="text-muted-foreground text-center mb-8 animate-slide-up ">
              Get a personalized walkthrough of ZeaCRM tailored to your business needs apple
            </p> */}
            {/* <form
              onSubmit={handleBookDemoSubmit}
               className="bg-card border border-border border-primary rounded-lg p-8 space-y-6 animate-slide-up"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={bookDemoForm.name}
                    onChange={handleBookDemoChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={bookDemoForm.email}
                    onChange={handleBookDemoChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={bookDemoForm.company}
                    onChange={handleBookDemoChange}
                    placeholder="Your company"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookDemoForm.phone}
                    onChange={handleBookDemoChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                <textarea
                  name="message"
                  value={bookDemoForm.message}
                  onChange={handleBookDemoChange}
                  placeholder="Tell us about your needs..."
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover-lift"
              >
                Schedule Demo
              </button>
            </form> */}
            {/* <div className="height-flex justify-height" style={{ height: '100vh', overflow: 'hidden' }}>
              <iframe src="https://api.leadconnectorhq.com/widget/booking/509krt70rKL44ta393ra" style={{width: "100%", height: "100%", border:"none", overflow: "show"}} scrolling="no" id="3Ki9YVu9scOarxIVpapL_1762323045358"></iframe><script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script> */}
            {/* <iframe
              src="https://api.leadconnectorhq.com/widget/form/hNogUrE1ba9iIfvhYVxf"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '20px' }}
              id="inline-hNogUrE1ba9iIfvhYVxf"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Demo Form"
              data-height="824"
              data-layout-iframe-id="inline-hNogUrE1ba9iIfvhYVxf"
              data-form-id="hNogUrE1ba9iIfvhYVxf"
              title="Demo Form"
            /> */}
            {/* </div> */}
            {/* External script for LeadConnector embed */}
            {/* Consider using Next.js Script component in a page context */}
            {/* <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" /> */}
          {/* </div>
        </section> */}

        {/* Success Metrics */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-primary/5">
          <div className="max-w-6xl mx-auto ">
            <h2 className="text-3xl font-bold text-foreground mb-12 animate-slide-up">Results Our Customers Achieve</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { metric: "250%", label: "Avg Revenue Growth" },
                { metric: "60%", label: "Time Saved" },
                { metric: "95%", label: "Customer Satisfaction" },
                { metric: "3x", label: "Faster Deals" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-card border border-border hover:border-primary rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover-lift animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
                  <p className="text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-primary/10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-slide-up">Ready to Transform Your Sales?</h2>
            <p className="text-muted-foreground mb-8 animate-slide-up">
              Join hundreds of companies already using ZeaCRM to close more deals
            </p>
            <div className="flex gap-4 justify-center animate-slide-up">
              {/* <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover-lift">
                Start Free Trial
              </button> */}
              <Link
                href="/contact-us"
                className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-semibold hover-lift inline-block"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
