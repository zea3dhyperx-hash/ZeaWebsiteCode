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

const countries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan",
  "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi",
  "Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Costa Rica","Côte d’Ivoire","Croatia","Cuba","Cyprus","Czechia",
  "Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic",
  "Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia",
  "Fiji","Finland","France",
  "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana",
  "Haiti","Honduras","Hungary",
  "Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
  "Jamaica","Japan","Jordan",
  "Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan",
  "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
  "Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar",
  "Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway",
  "Oman",
  "Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
  "Qatar",
  "Republic of the Congo","Romania","Russia","Rwanda",
  "Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria",
  "Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu",
  "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan",
  "Vanuatu","Vatican City","Venezuela","Vietnam",
  "Yemen",
  "Zambia","Zimbabwe",
]

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    workEmail: "",
    company: "",
    employees: "",
    phone: "",
    country: "",
    productInterest: "",
    comments: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setSubmitted(false)
    try {
      await fetch("https://n8n.urlfactory.website/webhook/Zeacrm-contacts", {
      // await fetch("https://n8n.urlfactory.website/webhook-test/Zeacrm-contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      setSubmitted(true)
    } catch (err) {
      console.error("Webhook submission failed", err)
    } finally {
      setSubmitting(false)
    }
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
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-6 h-6 text-amber-400" />
                  <h2 className="text-2xl font-bold">Get in Touch Instantly</h2>
                </div>
                  {!submitted && (
                    <div className="mb-6 space-y-1">
                      <h3 className="text-xl font-semibold">Request a call.</h3>
                      <p className="text-sm text-gray-400">Give us some info so the right person can get back to you.</p>
                    </div>
                  )}
                  {submitted ? (
                    <div className="flex flex-col items-center text-center space-y-4">
                      <Image src="/form-image.jpg" alt="Thank you image" width={480} height={360} className="rounded-lg" />
                      <h3 className="text-xl font-semibold text-foreground">Thank you!</h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        We&apos;ve received your details. Our team will reach out soon with the right next steps.
                      </p>
                    </div>
                  ) : (
                    <form className="space-y-5" id="contact-form" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-base font-medium mb-2">First name*</label>
                          <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-700 text-white"
                            placeholder="First name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium mb-2">Last name*</label>
                          <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-700 text-white"
                            placeholder="Last name"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-base font-medium mb-2">Job Title</label>
                          <select
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-700 bg-gray-800 text-white px-3 py-2"
                          >
                            <option value="">Select</option>
                            <option>Founder / CXO</option>
                            <option>Operations</option>
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>IT / Systems</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-base font-medium mb-2">Work Email*</label>
                          <Input
                            name="workEmail"
                            value={formData.workEmail}
                            onChange={handleChange}
                            type="email"
                            className="bg-gray-800 border-gray-700 text-white"
                            placeholder="name@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-base font-medium mb-2">Company</label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-700 text-white"
                            placeholder="Company"
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium mb-2">Employees</label>
                          <select
                            name="employees"
                            value={formData.employees}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-700 bg-gray-800 text-white px-3 py-2"
                          >
                            <option value="">Select</option>
                            <option>1-10</option>
                            <option>11-50</option>
                            <option>51-200</option>
                            <option>201-500</option>
                            <option>501-1000</option>
                            <option>1000+</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-base font-medium mb-2">Phone</label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            className="bg-gray-800 border-gray-700 text-white"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium mb-2">Country/Region</label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-700 bg-gray-800 text-white px-3 py-2"
                          >
                            <option value="">Select</option>
                            {countries.map((c) => (
                              <option key={c}>{c}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-base font-medium mb-2">Product Interest</label>
                          <select
                            name="productInterest"
                            value={formData.productInterest}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-700 bg-gray-800 text-white px-3 py-2"
                          >
                            <option value="">Select</option>
                            <option>ZeaCRM Core</option>
                            <option>Voice / WhatsApp Automation</option>
                            <option>Education CRM</option>
                            <option>Healthcare CRM</option>
                            <option>Custom Solutions</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-base font-medium mb-2">Questions/Comments</label>
                          <Textarea
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-700 text-white min-h-28"
                            placeholder="Tell us more about your needs"
                          />
                        </div>
                      </div>

                      <p className="text-xs text-gray-400">
                        We value your privacy. To learn more, visit our <a href="/privacy-policy" className="underline text-amber-400">Privacy Statement</a>.
                      </p>

                      <Button className="w-full bg-amber-400 text-black font-semibold text-lg" disabled={submitting}>
                        {submitting ? "Submitting..." : "Contact Me"}
                      </Button>
                    </form>
                  )}
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
                Visit our headquarters to meet the team and learn more about Zea CRM in person.
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
      <style jsx global>{`
        input, select, textarea {
          background-color: #1f2937 !important;
          color: #fff !important;
          caret-color: #fff;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px #1f2937 inset;
          -webkit-text-fill-color: #fff;
          caret-color: #fff;
        }
      `}</style>
    </>
  )
}
