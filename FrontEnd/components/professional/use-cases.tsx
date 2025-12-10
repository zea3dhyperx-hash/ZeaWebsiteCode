"use client"

import Image from "next/image"

type UseCase = {
  title: string
  description: string
  details: string[]
  features: string[]
  imagePosition: "left" | "right"
  imageSrc: string
}

const useCases: UseCase[] = [
  {
    title: "Consultants & Agencies",
    description: "Nurture every lead with smart, timely follow-ups",
    details: [
      "ZeaCRM helps consultants and agencies automate proposals, invoices, and client scheduling with ease. Handle appointments, reminders, and follow-ups without manual effort. Focus on delivering results while ZeaCRM takes care of your client management.",
    ],
    features: ["Demo booking", "Billing Reminders", "Support ticket tracking"],
    imagePosition: "left" as const,
    imageSrc: "/block1.png",
  },
  {
    title: "IT & SaaS Providers",
    description: "Nurture every lead with smart, timely follow-ups",
    details: [
      "ZeaCRM helps IT and SaaS companies automate trial signups, renewals, and client support in one place. Track every demo, subscription, and ticket from a single dashboard. Deliver faster responses, smoother renewals, and stronger customer retention.",
    ],
    features: ["Demo booking", "Billing Reminders", "Support ticket tracking"],
    imagePosition: "right" as const,
    imageSrc: "/block2.png",
  },
  {
    title: "Legal & Accounting Firms",
    description: "Nurture every lead with smart, timely follow-ups",
    details: [
      "ZeaCRM streamlines case management, client communication, and compliance tracking for legal and accounting teams. Automate deadlines, approvals, and document workflows securely. Deliver faster results while keeping every file, reminder, and signature in one place.",
    ],
    features: ["Cases booking", "Deadline reminders", "Document storage", "E-signing"],
    imagePosition: "left" as const,
    imageSrc: "/block3.png",
  },
]

export function UseCasesSection() {
  return (
    <section id="usecases" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Who We Serve</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tailored solutions for professionals across industries
          </p>
        </div>

        {useCases.map((useCase, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${useCase.imagePosition === "right" ? "lg:grid-flow-dense" : ""}`}
          >
            {/* Image */}
            <div className={useCase.imagePosition === "right" ? "lg:col-start-2" : ""}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 cursor-pointer">
                <Image
                  src={useCase.imageSrc}
                  alt={useCase.title}
                  fill
                  className="object-cover"
                />
                {/* Feature Labels */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-3">
                  {useCase.features.map((feature, featureIdx) => null)}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={useCase.imagePosition === "right" ? "lg:col-start-1 lg:row-start-1" : ""}>
              <h3 className="text-3xl font-bold text-white mb-4">{useCase.title}</h3>
              <p className="text-xl font-semibold text-amber-500 mb-6">{useCase.description}</p>
              <div className="space-y-4 text-gray-300">
                {useCase.details.map((detail, detailIdx) => (
                  <p key={detailIdx} className="leading-relaxed text-xl">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
