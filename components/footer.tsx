"use client"

import type React from "react"

import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setEmail("")
  }

  return (
    <footer className="bg-slate-950 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="zeaCRM logo"
                width={120}
                height={32}
                priority
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400">
              ZeaCRM is an AI-powered CRM platform built for all industries — from healthcare to real estate, retail,
              and beyond.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">PRODUCT</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-400 hover:text-amber-400 transition-colors">
                  PlayBooks
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">SUPPORT</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/data-security-compliance" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Data Security and Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">FOLLOW US</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://www.facebook.com/people/ZEA-CRM/61580373855637/" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/zea_crm/?next=%2F" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/company/zea-crm" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@ZEACRM" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">Subscribe for product updates and automation tips.</p>
              <form onSubmit={handleSubscribe} className="gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 my-2 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-400 text-slate-950 rounded font-semibold text-sm hover:bg-amber-500 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-gray-500">
          <p>© 2025 ZeaCRM | Powered by ZeaCRM Factory | All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
