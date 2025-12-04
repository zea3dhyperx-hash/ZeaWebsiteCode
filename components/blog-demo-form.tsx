"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

interface BlogDemoFormProps {
  blogLink?: string
  blogTitle?: string
}

export function BlogDemoForm({ blogLink, blogTitle }: BlogDemoFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const pathname = usePathname()
  const resolvedLink = blogLink ?? pathname ?? ""
  const resolvedTitle = blogTitle ?? ""

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    website: "",
    industry: "",
    otherIndustry: "",
    communicationConsent: false,
    agreement: false,
    subscribe: "tac agreed",
    blogLink: resolvedLink,
    blogTitle: resolvedTitle,
  })

  useEffect(() => {
    if (!blogLink && typeof window !== "undefined") {
      setFormData((prev) => ({ ...prev, blogLink: window.location.href }))
    }
  }, [blogLink])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      const { name, checked } = target
      setFormData((prev) => ({ ...prev, [name]: checked }))
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
        communicationConsent: formData.communicationConsent ? "true" : "false",
        agreement: formData.agreement ? "true" : "false",
        subscribe: formData.communicationConsent ? "subscriber" : "tac agreed",
        blogLink: formData.blogLink || resolvedLink,
        blogTitle: formData.blogTitle || resolvedTitle,
      }
      await fetch("https://n8n.urlfactory.website/webhook/Zeacrm-blog", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload as Record<string, string>),
      })
    } catch (err) {
      console.error("Blog demo webhook failed", err)
      setSubmitError(true)
    } finally {
      setSubmitted(true)
    }
  }

  return (
    <div className="w-full max-w-80 mx-auto rounded-2xl border border-amber-500/70 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 p-5 md:p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]">
      <div className="mb-4 text-center">
        <h3 className="text-2xl font-bold text-slate-900">Get in touch</h3>
      </div>

      {submitted ? (
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <Image src="/form-image.jpg" alt="Thank you" width={320} height={220} className="rounded-xl shadow-lg" />
          </div>
          <h4 className="text-lg font-semibold text-amber-900">Thanks for reaching out!</h4>
          <p className="text-sm text-amber-900">
            We&apos;ve received your details. A member of our team will contact you soon with the next steps.
          </p>
        </div>
      ) : (
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Full name"
            className="w-full rounded-md border border-amber-600 bg-white px-3 py-2 text-slate-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Work email"
            className="w-full rounded-md border border-amber-600 bg-white px-3 py-2 text-slate-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full rounded-md border border-amber-600 bg-white px-3 py-2 text-slate-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <input
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website"
            className="w-full rounded-md border border-amber-600 bg-white px-3 py-2 text-slate-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <div className="space-y-2">
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-amber-600 bg-white px-3 py-2 text-slate-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
            <option value="">Industry category</option>
            <option value="Healthcare & Wellness">Healthcare & Wellness</option>
            <option value="Hospitals & Clinics">Hospitals & Clinics</option>
            <option value="Pharmaceuticals & Biotech">Pharmaceuticals & Biotech</option>
            <option value="Medical Devices">Medical Devices</option>
            <option value="Mental Health & Therapy">Mental Health & Therapy</option>
            <option value="Real Estate & Construction">Real Estate & Construction</option>
            <option value="Property Management">Property Management</option>
            <option value="Architecture & Engineering">Architecture & Engineering</option>
            <option value="Retail & Ecommerce">Retail & Ecommerce</option>
            <option value="Fashion & Apparel">Fashion & Apparel</option>
            <option value="Grocery & FMCG">Grocery & FMCG</option>
            <option value="Electronics & Appliances">Electronics & Appliances</option>
            <option value="Finance & Insurance">Finance & Insurance</option>
            <option value="Banking & Lending">Banking & Lending</option>
            <option value="Wealth Management">Wealth Management</option>
            <option value="Technology & SaaS">Technology & SaaS</option>
            <option value="IT Services & Consulting">IT Services & Consulting</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Cloud & Infrastructure">Cloud & Infrastructure</option>
            <option value="Professional Services">Professional Services</option>
            <option value="Legal Services">Legal Services</option>
            <option value="Accounting & Tax">Accounting & Tax</option>
            <option value="Consulting">Consulting</option>
            <option value="Education & Training">Education & Training</option>
            <option value="EdTech">EdTech</option>
            <option value="Coaching & Mentorship">Coaching & Mentorship</option>
            <option value="Manufacturing & Automotive">Manufacturing & Automotive</option>
            <option value="Industrial Equipment">Industrial Equipment</option>
            <option value="Aerospace & Defense">Aerospace & Defense</option>
            <option value="Transportation & Logistics">Transportation & Logistics</option>
            <option value="Supply Chain & Warehousing">Supply Chain & Warehousing</option>
            <option value="Travel & Hospitality">Travel & Hospitality</option>
            <option value="Hotels & Resorts">Hotels & Resorts</option>
            <option value="Restaurants & Food Services">Restaurants & Food Services</option>
            <option value="Media & Entertainment">Media & Entertainment</option>
            <option value="Advertising & Marketing">Advertising & Marketing</option>
            <option value="Events & Experiences">Events & Experiences</option>
            <option value="Non-Profit & NGOs">Non-Profit & NGOs</option>
            <option value="Government & Public Sector">Government & Public Sector</option>
            <option value="Energy & Utilities">Energy & Utilities</option>
            <option value="Renewables & Clean Tech">Renewables & Clean Tech</option>
            <option value="Oil & Gas">Oil & Gas</option>
            <option value="Telecommunications">Telecommunications</option>
            <option value="Sports & Recreation">Sports & Recreation</option>
            <option value="Beauty & Wellness">Beauty & Wellness</option>
            <option value="Fitness & Gyms">Fitness & Gyms</option>
            <option value="Home Services">Home Services</option>
            <option value="Cleaning & Maintenance">Cleaning & Maintenance</option>
            <option value="Landscaping & Gardening">Landscaping & Gardening</option>
            <option value="Agriculture & Farming">Agriculture & Farming</option>
            <option value="Food & Beverage Production">Food & Beverage Production</option>
            <option value="Printing & Packaging">Printing & Packaging</option>
            <option value="Human Resources & Staffing">Human Resources & Staffing</option>
            <option value="Recruiting & Talent Acquisition">Recruiting & Talent Acquisition</option>
            <option value="Real Estate Investment">Real Estate Investment</option>
            <option value="Art & Design">Art & Design</option>
            <option value="Museums & Cultural">Museums & Cultural</option>
            <option value="Other">Other</option>
          </select>
            {formData.industry === "Other" && (
              <input
                name="otherIndustry"
                value={formData.otherIndustry}
                onChange={handleChange}
                placeholder="Tell us your industry"
                className="w-full rounded-md border border-amber-600 bg-white px-3 py-2 text-slate-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            )}
          </div>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full rounded-md border border-amber-600 bg-white px-3 py-2 text-slate-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What would you like to cover?"
            className="w-full rounded-md border border-amber-600 bg-white px-3 py-2 text-slate-900 placeholder:text-gray-500 min-h-[90px] focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <label className="flex items-start gap-2 text-sm text-amber-900">
            <input
              type="checkbox"
              name="communicationConsent"
              checked={formData.communicationConsent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border border-amber-600 bg-white text-amber-600 focus:ring-amber-600"
            />
            <span>I agree to receive communications about ZeaCRM updates and offers.</span>
          </label>
          <label className="flex items-start gap-2 text-sm text-amber-900">
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              required
              className="mt-1 h-4 w-4 rounded border border-amber-600 bg-white text-amber-600 focus:ring-amber-600"
            />
            <span>
              I agree to terms &amp; conditions provided by the company. By providing my phone number, I agree to receive text
              messages from the business.
            </span>
          </label>
          {submitError && (
            <p className="text-sm text-red-700">We couldn&apos;t reach the server right now, but your request was captured.</p>
          )}
          <button
            type="submit"
            className="w-full rounded-md bg-slate-900 px-4 py-2 font-semibold text-amber-200 hover:bg-slate-800 transition-colors"
          >
            Send
          </button>
          <p className="text-xs text-amber-900 text-center">
            <a href="/terms-of-service" className="text-amber-800 hover:underline">
              Terms &amp; Conditions
            </a>{" "}
            |{" "}
            <a href="/privacy-policy" className="text-amber-800 hover:underline">
              Privacy Policy
            </a>
          </p>
        </form>
      )}
    </div>
  )
}
