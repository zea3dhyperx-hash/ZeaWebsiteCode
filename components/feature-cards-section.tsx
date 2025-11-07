"use client"

import Image from "next/image"
import { Check } from "lucide-react"

export function FeatureCardsSection() {
  const features = [
    {
      title: "Capture: Smart Lead Collection",
      description: "Bring leads from every channel into one place.",
      items: [
        "Auto-import from website, social, and campaigns",
        "Quick, conversion-ready forms and chat",
        "Track every source (UTM & channel) in one view",
      ],
      image: "/images/capture.png",
    },
    {
      title: "Nurture: Automated Relationship Building",
      description: "Follow up automatically—personal and on time.",
      items: [
        "Email/SMS sequences with scheduled reminders",
        "Smart follow-ups that keep conversations moving",
        "Personalization at scale with dynamic fields",
      ],
      image: "/images/Nurture.png",
    },
    {
      title: "Convert: Insight-Driven Sales Acceleration",
      description: "Close deals faster with live data and AI guidance.",
      items: [
        "Real-time pipeline visibility across stages",
        "Spot what converts and fix what doesn’t",
        "Next-best-action tips to win more deals",
      ],
      image: "/images/convert.png",
    },
  ]

  return (
    <section className="bg-primary py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-10 items-center`}
          >
            {/* Text Card */}
            <div className="flex-1">
              <div className="bg-slate-900 rounded-2xl p-8 text-white hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm md:text-base mb-6">{feature.description}</p>

                {/* Bullet Points */}
                <ul className="space-y-4 mb-6">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/demo"
                  className="inline-block text-primary font-semibold hover:text-primary transition-colors text-sm md:text-base"
                >
                  WANT TO KNOW MORE BOOK A DEMO HERE →
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-sm hover:scale-105 transition-transform duration-500 ease-out">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={400}
                  className="rounded-2xl object-cover w-full h-auto"
                  // className="rounded-2xl shadow-lg object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
