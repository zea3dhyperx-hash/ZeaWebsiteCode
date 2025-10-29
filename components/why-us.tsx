import { Card } from "@/components/ui/card"
import {
  Zap,
  Lightbulb,
  Puzzle,
  TrendingUp,
  Shield,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Award,
  Rocket,
  Users,
} from "lucide-react"
import { WhyChooseUsHero } from "@/components/why-choose-us-hero"
import { FeaturesComparisonTable } from "@/components/features-comparison-table"

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-16">
      <WhyChooseUsHero />
      <FeaturesComparisonTable />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Why Choose Section */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Why Choose ZeaCRM Features?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Most CRMs add complexity. ZeaCRM removes it. Our automation-first design means you get:
          </p>
        </div>

        {/* Three Main Reasons */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-8 border border-primary/30 bg-card/50">
            <div className="flex items-start gap-3 mb-4">
              <Zap className="w-6 h-6 text-primary flex-shrink-0" />
              <h3 className="text-lg font-bold text-foreground">Simple setup that your team can use from day one</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              No complex configurations. No steep learning curve. Start managing customers in minutes.
            </p>
          </Card>

          <Card className="p-8 border border-primary/30 bg-card/50">
            <div className="flex items-start gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
              <h3 className="text-lg font-bold text-foreground">AI intelligence built into every feature</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From lead scoring to predictive analytics, AI works behind the scenes to make you smarter.
            </p>
          </Card>

          <Card className="p-8 border border-primary/30 bg-card/50">
            <div className="flex items-start gap-3 mb-4">
              <Puzzle className="w-6 h-6 text-primary flex-shrink-0" />
              <h3 className="text-lg font-bold text-foreground">
                Flexibility to adapt to healthcare, retail, real estate, and more
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Whether you're a startup or enterprise, ZeaCRM scales with your business needs.
            </p>
          </Card>
        </div>

        {/* Bottom Statement */}
        <div className="text-center mb-16">
          <p className="text-lg text-foreground">
            <span className="text-primary font-bold">
              ✨ With ZeaCRM, you don't just manage customers—you automate your entire business workflow.
            </span>
          </p>
        </div>

        {/* Industry Spotlight */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">Industry Spotlight: Healthcare CRM</h3>
          <p className="text-center text-muted-foreground mb-8">
            Trusted CRM for Hospitals, Clinics, Pharma & Insurance
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-l-4 border-l-primary bg-card/50">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">🏥</span>
                <div>
                  <h4 className="font-bold text-foreground">Hospitals & Clinics</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Manage patient records, schedule appointments, and send automated reminders
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary bg-card/50">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">💊</span>
                <div>
                  <h4 className="font-bold text-foreground">Pharma Sales Teams</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Track doctor interactions, manage prescriptions, and monitor sales performance
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary bg-card/50">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">🛡️</span>
                <div>
                  <h4 className="font-bold text-foreground">Insurance Providers</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Simplify claims, track customer communications, and improve retention
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary bg-card/50">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">👨‍⚕️</span>
                <div>
                  <h4 className="font-bold text-foreground">Healthcare Admin</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Manage staff schedules, patient data, and billing all in one place
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-primary font-semibold">
              🏆 ZeaCRM powers better patient care, higher sales, and clear reporting—all through AI-driven automation.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#d4af37] text-foreground py-20 md:py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance text-black">Built for Every Industry</h2>
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

      <div className="bg-background py-20 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">ZeaCRM vs Traditional CRMs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">See why leading companies choose ZeaCRM</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 bg-card/50 rounded-lg border border-border text-center">
              <div className="text-5xl font-bold text-primary mb-3">10x</div>
              <h3 className="font-bold text-foreground mb-2">Faster Setup</h3>
              <p className="text-sm text-muted-foreground">Minutes instead of weeks to get started</p>
            </div>
            <div className="p-8 bg-card/50 rounded-lg border border-border text-center">
              <div className="text-5xl font-bold text-primary mb-3">500+</div>
              <h3 className="font-bold text-foreground mb-2">Integrations</h3>
              <p className="text-sm text-muted-foreground">Connect with all your favorite tools</p>
            </div>
            <div className="p-8 bg-card/50 rounded-lg border border-border text-center">
              <div className="text-5xl font-bold text-primary mb-3">50%</div>
              <h3 className="font-bold text-foreground mb-2">Cost Savings</h3>
              <p className="text-sm text-muted-foreground">Compared to traditional enterprise CRMs</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-bold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">ZeaCRM</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Traditional CRM</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50 hover:bg-card/50 transition-colors">
                  <td className="py-4 px-4 text-foreground">AI-Powered Lead Scoring</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-primary font-bold">✓</span>
                  </td>
                  <td className="text-center py-4 px-4 text-muted-foreground">Manual</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-card/50 transition-colors">
                  <td className="py-4 px-4 text-foreground">24/7 Automation</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-primary font-bold">✓</span>
                  </td>
                  <td className="text-center py-4 px-4 text-muted-foreground">Limited</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-card/50 transition-colors">
                  <td className="py-4 px-4 text-foreground">Setup Time</td>
                  <td className="text-center py-4 px-4 text-primary font-bold">Minutes</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">Weeks</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-card/50 transition-colors">
                  <td className="py-4 px-4 text-foreground">Learning Curve</td>
                  <td className="text-center py-4 px-4 text-primary font-bold">Easy</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">Steep</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-card/50 transition-colors">
                  <td className="py-4 px-4 text-foreground">Integrations</td>
                  <td className="text-center py-4 px-4 text-primary font-bold">500+</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">100+</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-card/50 transition-colors">
                  <td className="py-4 px-4 text-foreground">Pricing Model</td>
                  <td className="text-center py-4 px-4 text-primary font-bold">Transparent</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">Hidden Fees</td>
                </tr>
                <tr className="hover:bg-card/50 transition-colors">
                  <td className="py-4 px-4 text-foreground">Customer Support</td>
                  <td className="text-center py-4 px-4 text-primary font-bold">24/7</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">Business Hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      

      

      

      

      

      <div className="bg-[#d4af37] text-foreground py-20 md:py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance text-background">What Our Customers Say</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto text-background">Real feedback from real businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Emily Watson",
                role: "CEO, Digital Marketing Agency",
                quote: "ZeaCRM transformed how we manage client relationships. Our team is 40% more productive.",
                rating: 5,
              },
              {
                name: "James Mitchell",
                role: "Sales Manager, B2B SaaS",
                quote: "The AI lead scoring alone has increased our conversion rate by 35%. Incredible value.",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                role: "Operations Director, Healthcare",
                quote: "Easy to implement, easy to use, and the support team is fantastic. Highly recommended.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="rounded-lg p-8 border border-background/30 bg-background">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-sm opacity-90 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-xs opacity-75">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  )
}
