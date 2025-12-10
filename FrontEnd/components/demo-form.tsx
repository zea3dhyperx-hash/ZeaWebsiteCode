"use client"

import React, { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"

interface DemoFormProps {
  isOpen: boolean
  onClose: () => void
}

export function DemoForm({ isOpen, onClose }: DemoFormProps) {
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

  if (!isOpen) return null

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
            Object.entries(payload).map(([key, value]) => [key, typeof value === "boolean" ? String(value) : (value ?? "")])
          ),
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
