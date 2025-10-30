"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type React from "react"
import Link from "next/link"

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
        <section className="bg-gradient-to-b from-primary/10 to-background py-0 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
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
              <a href = "#bookdemo">Book a Demo </a>

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
        <section id="bookdemo" className="py-16 md:py-0 px-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center animate-slide-up">Schedule Your Demo</h2>
            <p className="text-muted-foreground text-center mb-8 animate-slide-up">
              Get a personalized walkthrough of ZeaCRM tailored to your business needs
            </p>
            <form
              onSubmit={handleBookDemoSubmit}
              className="bg-card border border-border rounded-lg p-8 space-y-6 animate-fade-in"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
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
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
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
                  <label className="block text-sm font-semibold text-foreground mb-2">Company</label>
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
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
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
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
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
            </form>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-primary/5">
          <div className="max-w-6xl mx-auto">
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
                  className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover-lift animate-fade-in"
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
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover-lift">
                Start Free Trial
              </button>
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
    </>
  )
}
