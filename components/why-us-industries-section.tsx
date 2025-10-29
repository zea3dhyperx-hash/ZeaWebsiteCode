import { CheckCircle2 } from "lucide-react"

export function WhyUsIndustriesSection() {
  return (
    <div className="bg-primary text-foreground py-20 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-background">Built for Every Industry</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto text-background">
            Proven success across diverse business sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              industry: "Real Estate",
              icon: "🏠",
              benefits: ["Property pipeline management", "Automated follow-ups", "Document management"],
            },
            {
              industry: "E-commerce",
              icon: "🛍️",
              benefits: ["Customer lifecycle tracking", "Abandoned cart recovery", "Loyalty programs"],
            },
            {
              industry: "Financial Services",
              icon: "💰",
              benefits: ["Compliance tracking", "Client portfolio management", "Regulatory reporting"],
            },
            {
              industry: "Education",
              icon: "🎓",
              benefits: ["Student enrollment tracking", "Course management", "Alumni engagement"],
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg p-8 border border-background/30 hover:border-foreground/50 transition-colors bg-background"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{item.industry}</h3>
              <ul className="space-y-2">
                {item.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm opacity-90">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
