import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const features = [
  {
    title: "Smart Contact & Lead Management",
    description:
      "Never lose a lead again. Zea CRM automatically captures, tracks, and organizes leads from every source - your website, email, social media, and more.",
    benefits: [
      "AI-driven lead scoring to prioritize hot prospects",
      "Auto-tagging AI organization for better targeting",
      "Visual pipelines to manage deals from start to finish",
    ],
    result: "More leads converted, less time wasted.",
  },
  {
    title: "Marketing Automation That Works 24/7",
    description:
      "Turn manual campaigns into automated growth engines. Send emails, SMS, and WhatsApp messages at the perfect time without lifting a finger.",
    benefits: ["Multi-step nurture campaigns", "Multi-step number campaigns", "Ready-to-use templates that save time"],
    result: "A faster, more efficient sales process.",
  },
  {
    title: "Sales Pipeline & Deal Tracking",
    description:
      "Close more deals with less friction. Zea CRM gives you a clear, drag-and-drop pipeline to track opportunities at every stage.",
    benefits: [
      "Automated reminders for follow-ups",
      "Task creation linked to deal progress",
      "Forecasting tools to predict revenue",
    ],
    result: "A faster, more efficient sales process.",
  },
  {
    title: "Appointment & Scheduling System",
    description: "Say goodbye to double bookings and missed meetings. Zea CRM makes scheduling effortless.",
    benefits: [
      "Online booking pages for clients",
      "Auto-reminders via SMS or email",
      "Seamless sync with Google & Outlook calendars",
    ],
    result: "Fewer no-shows, more productive time.",
  },
  {
    title: "AI-Powered Conversations",
    description:
      "Bring all your communication into one place. Zea CRM's unified inbox connects email, SMS, WhatsApp, and social media.",
    benefits: [
      "AI-assisted replies that save time",
      "Automatic follow-up suggestions",
      "Chatbots to capture leads 24/7",
    ],
    result: "Faster response, happier customers.",
  },
  {
    title: "Reputation & Review Management",
    description:
      "Your reputation is your brand. Zea CRM helps you collect and showcase positive reviews automatically.",
    benefits: [
      "Automated review requests after purchases or visits",
      "Centralized review management dashboard",
      "Display positive reviews on your website",
    ],
    result: "More trust, more customers.",
  },
  {
    title: "Payments & Invoicing",
    description: "Make it easy for clients to pay you. Zea CRM simplifies billing and integrated payments.",
    benefits: [
      "Online invoices with one-click payment",
      "Automated reminders for pending dues",
      "Support for Stripe, Razorpay, PayPal & more",
    ],
    result: "Faster payments, smoother cash flow.",
  },
  {
    title: "Analytics & Reporting",
    description: "Turn your data into insights. Zea CRM gives you real-time reports on every metric that matters.",
    benefits: [
      "Visual dashboards for sales & marketing performance",
      "Custom reports tailored to your KPIs",
      "Predictive analytics to plan growth",
    ],
    result: "Clarity on what's working—and what's not.",
  },
  {
    title: "Seamless Integrations",
    description: "Already using tools you love? Zea CRM connects with them all.",
    benefits: [
      "Email marketing platforms, payment gateways, and social channels",
      "Zapier & API support for advanced workflows",
      "Third-party apps for limitless automation",
    ],
    result: "A CRM that grows with your business.",
  },
]

export function FeaturesCardsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 border bg-card/50 hover:bg-card/80 transition-colors border-primary">
            <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>

            <div className="space-y-2 mb-4">
              {feature.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold text-sm">Result:</span>
                <span className="text-sm text-primary font-semibold">{feature.result}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
