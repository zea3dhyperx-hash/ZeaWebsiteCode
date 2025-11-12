"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Target, BarChart3, Users, MessageCircle, LinkIcon, Mail, Phone, MapPin } from "lucide-react"

import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ChatWidget from "./chatbot"

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
      <main className="min-h-screen bg-background px-4">
        <div className="mx-auto">
          <section className="py-10 lg:py-16 w-screen relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
            <div className="container mx-auto px-4 relative">
              <div className="text-center mb-16">
                <div className="flex justify-center mb-6">
                  <MessageCircle className="w-16 h-16 text-yellow-500" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Let's Talk. We're Here to Help.</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
                  Have questions about ZeaCRM, need support, or just want to explore how automation can transform your
                  business? Our team is only a message away.
                </p>
                <Button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg">
                  Send a Message
                </Button>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                          <Mail className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-yellow-500">Email Us</h3>
                          <p className="text-lg text-gray-300 mb-1">For general inquiries, partnerships, and support:</p>
                          <p className="text-lg text-white font-medium">support@zeacrm.com</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                          <Phone className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-yellow-500">Call Us</h3>
                          <p className="text-lg text-gray-300 mb-1">Sales & Support Team</p>
                          <p className="text-lg text-white font-medium">+91 94884 48291</p>
                          <p className="text-sm text-gray-500">(Mon-Fri, 10am-6pm IST)</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-yellow-500">Office Address</h3>
                          <p className="text-lg text-gray-300">ZeaCRM HQ</p>
                          <p className="text-lg text-white">16, CPS Tower, Advaitha Ashram Rd, Fairlands,</p>
                          <p className="text-lg text-white">Salem, Tamil Nadu 636004</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-6 border border-amber-400 hover:scale-101">
                    <h3 className="text-lg font-semibold mb-4 text-yellow-500">Why Reach Out?</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <p className="text-base text-gray-300">Learn how ZeaCRM fits your business</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <p className="text-base text-gray-300">Request a partnership or collaboration</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <p className="text-base text-gray-300">Get help from our support experts</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <p className="text-base text-gray-300">Book a free consultation or demo</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="p-8 bg-gray-900/50 border-amber-400 hover:scale-101 transition-smooth">
                  <div className="flex items-center space-x-3 mb-6">
                    <MessageCircle className="w-6 h-6 text-amber-400" />
                    <h2 className="text-2xl font-bold">Get in Touch Instantly</h2>
                  </div>
                  <form className="space-y-6" id="contact-form">
                    <div>
                      <label className="block text-base font-medium mb-2">Full Name*</label>
                      <Input className="bg-gray-800 border-gray-700 text-white" placeholder="Your full name" required />
                    </div>
                    <div>
                      <label className="block text-base font-medium mb-2">Email Address*</label>
                      <Input
                        type="email"
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="your@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-base font-medium mb-2">Phone Number</label>
                      <Input type="tel" className="bg-gray-800 border-gray-700 text-white" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-base font-medium mb-2">Company Name</label>
                      <Input className="bg-gray-800 border-gray-700 text-white" placeholder="Your company's name" />
                    </div>
                    <div>
                      <label className="block text-base font-medium mb-2">Message*</label>
                      <Textarea
                        className="bg-gray-800 border-gray-700 text-white min-h-32"
                        placeholder="How can we help you today?"
                        required
                      />
                    </div>
                    <Button className="w-full bg-amber-400 text-black font-semibold text-lg">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </section>
          {/* <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
          </div> */}

          <div className="mb-16 -mx-8 w-screen bg-primary py-15">
            <h2 className="text-6xl font-bold text-background bg-primary mb-8 text-center animate-fade-in">Get in Touch for any Information!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center text-background bg-primary">
              <div className="animate-slide-up max-w-2xl mx-auto item-center justify-center scale-130">
                <Image
                  src="/images/contact.png"
                  alt="Contact Us"
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
                  <span className="font-semibold">Address:</span> 16, CPS Tower, Advaitha Ashram Rd, Fairlands,Salem, Tamil Nadu 636004
                </p>
                <p>
                  <span className="font-semibold">Hours:</span> Monday - Friday, 10:00 AM - 6:00 PM IST
                </p>
                {/* <p>
                  <span className="font-semibold">Parking:</span> Free parking available on-site
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
