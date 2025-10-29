import { Card } from "@/components/ui/card"
import {
  CheckCircle2,
  Users,
  Workflow,
  Smartphone,
  Globe,
  Cpu,
  Zap,
  TrendingUp,
  Lock,
  Code,
  Layers,
} from "lucide-react"

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

export function Features() {
  return (
    <section id="features" className="py-20 md:py-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">ZeaCRM Features</h2>
        </div>

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

      <div className="bg-[#d4af37] text-foreground py-20 md:py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance text-background">
              Real Results from Real Customers
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto text-background">
              See how businesses transformed with ZeaCRM
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="rounded-lg p-8 border-l-4 border-l-foreground text-primary bg-background">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-3xl font-bold text-popover-foreground">340%</div>
                  <span className="text-sm font-semibold">ROI Increase</span>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  "ZeaCRM helped us automate our entire sales process. We're closing deals 3x faster."
                </p>
                <p className="text-xs font-semibold">— Sarah Chen, Sales Director at TechFlow</p>
              </div>

              <div className="rounded-lg p-8 border-l-4 border-l-foreground text-primary bg-background">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-3xl font-bold text-foreground">45%</div>
                  <span className="text-sm font-semibold">Time Saved</span>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  "Our team spends less time on admin and more time selling. Productivity is through the roof."
                </p>
                <p className="text-xs font-semibold">— Marcus Johnson, VP Sales at RetailPro</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg p-8 border-l-4 border-l-foreground text-primary bg-background">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-3xl font-bold text-foreground">$2.5M</div>
                  <span className="text-sm font-semibold">Revenue Generated</span>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  "The AI lead scoring identified high-value prospects we were missing. Game changer."
                </p>
                <p className="text-xs font-semibold">— Lisa Rodriguez, CEO at HealthCare Solutions</p>
              </div>

              <div className="rounded-lg p-8 border-l-4 border-l-foreground text-primary bg-background">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-3xl font-bold text-foreground">92%</div>
                  <span className="text-sm font-semibold">Customer Satisfaction</span>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  "Our customers love the automated follow-ups and personalized communication."
                </p>
                <p className="text-xs font-semibold">— David Park, Customer Success Manager at GrowthHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-foreground text-background py-20 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Advanced Automation Workflows</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Build complex automations without writing a single line of code
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Trigger-Based Actions",
                desc: "Set up workflows that automatically execute when specific events occur",
              },
              {
                icon: Workflow,
                title: "Multi-Step Sequences",
                desc: "Create complex automation chains with conditional logic and delays",
              },
              {
                icon: TrendingUp,
                title: "Performance Tracking",
                desc: "Monitor automation effectiveness with detailed analytics and reports",
              },
              {
                icon: Lock,
                title: "Smart Conditions",
                desc: "Use AI-powered conditions to make intelligent routing decisions",
              },
              {
                icon: Code,
                title: "Custom Scripts",
                desc: "Advanced users can write custom JavaScript for unlimited flexibility",
              },
              {
                icon: Layers,
                title: "Workflow Templates",
                desc: "Start with pre-built templates for common business processes",
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="bg-background/10 rounded-lg p-6 border border-background/20 hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-background mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 rounded-lg p-8 border border-background/20 bg-black">
            <h3 className="text-2xl font-bold mb-8 text-primary">Workflow Example: Lead Qualification</h3>
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-primary text-background rounded-lg p-4 font-semibold text-center">
                  Lead fills out form
                </div>
                <div className="text-primary text-7xl">→</div>
                <div className="flex-1 bg-primary text-background rounded-lg p-4 font-semibold text-center">
                  Automatically added to CRM
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-primary text-background rounded-lg p-4 font-semibold text-center">
                  AI scores lead
                </div>
                <div className="text-primary text-7xl">→</div>
                <div className="flex-1 bg-primary text-background rounded-lg p-4 font-semibold text-center">
                  Assigned priority level
                </div>
              </div>

              {/* Step 3 - Branching */}
              

              <div className="grid md:grid-cols-3 gap-4">
                {/* High Priority Branch */}
                <div className="space-y-3">
                  <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-4 font-semibold text-center text-primary">
                    🔴 High Priority
                  </div>
                  <div className="text-center text-primary text-4xl">↓</div>
                  <div className="rounded-lg p-4 text-sm text-center text-primary bg-secondary">
                    Immediately notify sales team via SMS
                  </div>
                </div>

                {/* Medium Priority Branch */}
                <div className="space-y-3">
                  <div className="bg-yellow-500/20 border-2 border-yellow-500 rounded-lg p-4 font-semibold text-center text-primary">
                    🟡 Medium Priority
                  </div>
                  <div className="text-center text-primary text-4xl">↓</div>
                  <div className="rounded-lg p-4 text-sm text-center bg-secondary text-primary">
                    Add to nurture sequence
                  </div>
                </div>

                {/* Low Priority Branch */}
                <div className="space-y-3">
                  <div className="bg-green-500/20 border-2 border-green-500 rounded-lg p-4 font-semibold text-center text-primary">
                    🟢 Low Priority
                  </div>
                  <div className="text-center text-primary text-4xl">↓</div>
                  <div className="rounded-lg p-4 text-sm text-center text-primary bg-secondary">
                    Add to long-term follow-up
                  </div>
                </div>
              </div>

              {/* Final Step */}
              
              <div className="bg-primary text-background rounded-lg p-4 font-semibold text-center">
                Track all interactions & Update lead score in real-time
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-background py-20 md:py-[50px] bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-background/10 rounded-lg p-12 border border-background/20 flex items-center justify-center min-h-96">
                <div className="text-center">
                  <Smartphone className="w-24 h-24 mx-auto mb-4 text-primary" />
                  <p className="text-background/80">Mobile App Interface</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">
                Access ZeaCRM Anywhere, Anytime
              </h2>
              <p className="text-lg opacity-90 mb-8 text-foreground">
                Manage your business on the go with our fully responsive mobile app and cloud-based platform.
              </p>

              <div className="space-y-4 text-foreground">
                {[
                  "Native iOS & Android apps with offline mode",
                  "Real-time sync across all devices",
                  "Push notifications for important updates",
                  "Secure cloud storage with automatic backups",
                  "Works seamlessly on tablets and desktops",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-foreground">
                    <Smartphone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#d4af37] text-foreground py-20 md:py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance text-background">
              Built to Scale with Your Business
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto text-background">
              From startups to enterprises, ZeaCRM grows with you
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Contacts", value: "Unlimited", icon: Users },
              { label: "Automation Rules", value: "Unlimited", icon: Workflow },
              { label: "API Calls/Month", value: "10M+", icon: Globe },
              { label: "Storage", value: "Unlimited", icon: Cpu },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="rounded-lg p-8 text-center border border-background/30 bg-background text-foreground"
                >
                  <Icon className="w-10 h-10 mx-auto mb-4 bg-background text-primary" />
                  <p className="text-sm opacity-90 mb-2">{item.label}</p>
                  <p className="text-3xl font-bold text-foreground">{item.value}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="bg-background py-20 md:py-[50px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">500+ Integrations Ready</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Connect with your favorite tools instantly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: "Communication",
                tools: ["Gmail", "Outlook", "Slack", "Microsoft Teams"],
                icon: "💬",
              },
              {
                category: "Payment & Billing",
                tools: ["Stripe", "PayPal", "Razorpay", "Square"],
                icon: "💳",
              },
              {
                category: "Marketing",
                tools: ["Mailchimp", "HubSpot", "Klaviyo", "ActiveCampaign"],
                icon: "📊",
              },
              {
                category: "Productivity",
                tools: ["Google Workspace", "Microsoft 365", "Asana", "Monday.com"],
                icon: "⚙️",
              },
              {
                category: "Analytics",
                tools: ["Google Analytics", "Mixpanel", "Amplitude", "Segment"],
                icon: "📈",
              },
              {
                category: "E-commerce",
                tools: ["Shopify", "WooCommerce", "BigCommerce", "Magento"],
                icon: "🛒",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg p-6 border border-border hover:border-primary/50 transition-colors bg-primary"
              >
                <h3 className="font-bold mb-4 text-background">{item.category}</h3>
                <div className="space-y-2 text-primary-foreground">
                  {item.tools.map((tool, i) => (
                    <div key={i} className="flex gap-2 text-sm text-card font-semibold text-center items-end">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Don't see your tool? Build custom integrations with our API</p>
            <button className="px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              Explore API Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
