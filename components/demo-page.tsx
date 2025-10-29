"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function DemoPage() {
  const [selectedVideo, setSelectedVideo] = useState(0)
  const [bookDemoForm, setBookDemoForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const videos = [
    {
      id: 1,
      title: "Getting Started with ZeaCRM",
      description: "Learn the basics of ZeaCRM in this comprehensive introduction",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "12:45",
    },
    {
      id: 2,
      title: "Lead Management Workflow",
      description: "Master the lead management features and automation",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "18:30",
    },
    {
      id: 3,
      title: "Advanced Analytics Dashboard",
      description: "Dive deep into analytics and reporting capabilities",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "15:20",
    },
    {
      id: 4,
      title: "Team Collaboration Features",
      description: "Explore how to collaborate effectively with your team",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "10:15",
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
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">ZeaCRM Interactive Demo</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the power of AI-driven CRM with our interactive walkthrough
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
              Start Demo
            </button>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">Video Tutorials</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Video Player */}
              <div className="lg:col-span-2">
                <div className="bg-black rounded-lg overflow-hidden aspect-video mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src={videos[selectedVideo].url}
                    title={videos[selectedVideo].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{videos[selectedVideo].title}</h3>
                  <p className="text-muted-foreground">{videos[selectedVideo].description}</p>
                </div>
              </div>

              {/* Video Playlist */}
              
            </div>
          </div>
        </section>

        {/* Feature Showcase */}
        

        {/* Interactive Walkthrough */}
        

        {/* Customer Success Stories */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">Customer Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { company: "TechCorp", result: "300% increase in sales", metric: "Revenue Growth" },
                { company: "RetailPro", result: "50% reduction in lead time", metric: "Efficiency" },
                { company: "ServiceMax", result: "85% customer satisfaction", metric: "Satisfaction" },
              ].map((story, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-8 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-2">{story.company}</h3>
                  <p className="text-3xl font-bold text-primary mb-2">{story.result}</p>
                  <p className="text-sm text-muted-foreground">{story.metric}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        

        {/* Book a Demo Form Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-primary/5">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Book a Demo</h2>
            <p className="text-muted-foreground text-center mb-8">
              Schedule a personalized demo with our team to see ZeaCRM in action
            </p>
            <form onSubmit={handleBookDemoSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={bookDemoForm.name}
                    onChange={handleBookDemoChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
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
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
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
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
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
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
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
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Schedule Demo
              </button>
            </form>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-8">
              Start your free trial today and experience the ZeaCRM difference
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
