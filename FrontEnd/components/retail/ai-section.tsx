"use client"

import Image from "next/image"
import AniRetail from "../animations/ani-retail"

export function RetailAISection() {
  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-amber-500 mb-16">
          All-in-One Platform for Retail Success
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-white text-xl leading-relaxed">
              ZeaCRM brings your marketing, sales, and support teams together on a single platform that scales with your
              business. AI-driven segmentation and predictive analytics help you understand buying patterns, personalize
              campaigns, and boost repeat purchases.
            </p>
            <p className="text-white text-xl leading-relaxed">
              Integrate ZeaCRM with your existing e-commerce tools like Shopify, WooCommerce, or payment gateways, and
              see every customer interaction in one view. From cart recovery to post-purchase engagement, ZeaCRM keeps
              your brand connected, responsive, and ready to grow.
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
            {/* <Image
              src="/images/design-mode/Gemini_Generated_Image_a4h3z2a4h3z2a4h3.png"
              alt="Business professionals with digital technology overlay"
              fill
              className="object-cover"
            /> */}
            <AniRetail />
          </div>
        </div>
      </div>
    </section>
  )
}
