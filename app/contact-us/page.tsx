"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact Form Submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Email",
                content: [
                  "info@url-factory.com",
                  "support@url-factory.com",
                ],
                type: "email",
              },
              {
                title: "Phone",
                content: [
                  "(+91) 4274526722",
                  "(+91) 8825619910",
                ],
                type: "phone",
              },
              {
                title: "Address",
                content:
                  "16, CPS Tower, Advitha Ashram Rd, FaIands, Salem, Tamilnadu 636016",
                type: "text",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-border rounded-lg bg-primary p-6 text-center bg-card hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-bold mb-2 text-background text-lg">{item.title}</h3>
                <p className="text-background">
                  {Array.isArray(item.content)
                    ? item.content.map((line, i) => {
                        let href = "";
                        if (item.type === "email") href = `mailto:${line}`;
                        if (item.type === "phone") href = `tel:${line.replace(/\s+/g, "")}`;
                        return (
                          <span key={i}>
                            {href ? (
                              <a
                                href={href}
                                className="text-background hover:underline"
                              >
                                {line}
                              </a>
                            ) : (
                              line
                            )}
                            {i < item.content.length - 1 && <br />}
                          </span>
                        );
                      })
                    : item.content}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mb-16 animate-slide-up py-10">
            <div className="border border-border border-primary hover-lift hover:bg-card/70 transition-transform duration-300 rounded-lg p-8 mb-16 bg-card animate-slide-up py-15">
              <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-primary">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-primary">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-primary">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-primary">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={6}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-smooth resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-semibold hover-lift"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mb-16 -mx-8 w-screen bg-primary py-15">
            <h2 className="text-6xl font-bold text-background bg-primary mb-8 text-center animate-fade-in">Get in Touch for any Information!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center text-background bg-primary">
              <div className="animate-slide-up max-w-2xl mx-auto item-center">
                <Image
                  src="/images/design-mode/Welcome.png"
                  alt="4 Steps to success with zeaCRM"
                  width={400}
                  height={400}
                  className="rounded-lg hover-lift"
                />
              </div>
              <div className="space-y-4 max-w-4xl pr-8 mx-auto ">
                {[
                  {
                    title: "Expert Support",
                    desc: "Our dedicated team is ready to help you succeed with zeaCRM every step of the way.",
                  },
                  {
                    title: "Quick Response",
                    desc: "We typically respond to inquiries within 24 hours during business days.",
                  },
                  {
                    title: "Comprehensive Solutions",
                    desc: "From implementation to training, we provide end-to-end support for your CRM needs.",
                  },
                  {
                    title: "24/7 Availability",
                    desc: "Access our knowledge base and community support anytime, anywhere.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-primary pl-4 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h3 className="font-bold text-lg text-background mb-2">{item.title}</h3>
                    <p className="text-background">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center animate-fade-in">Visit Us</h2>
            <div className="border border-border rounded-lg overflow-hidden animate-scale-in">
              <iframe
                src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sM4FR%2B5M+Salem,+Tamil+Nadu!5e0!6i16"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-6 p-6 bg-card border border-border rounded-lg animate-slide-up">
              <h3 className="font-bold text-lg text-primary mb-2">Our Office</h3>
              <p className="text-muted-foreground mb-4">
                Visit our headquarters to meet the team and learn more about zeaCRM in person.
              </p>
              <div className="space-y-2 text-foreground">
                <p>
                  <span className="font-semibold">Address:</span> 16, CPS Tower, Advitha Ashram Rd, FaIands, Salem, Tamilnadu 636016
                </p>
                <p>
                  <span className="font-semibold">Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM EST
                </p>
                <p>
                  <span className="font-semibold">Parking:</span> Free parking available on-site
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
