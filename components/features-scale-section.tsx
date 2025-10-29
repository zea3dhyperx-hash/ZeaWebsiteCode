import { Users, Workflow, Globe, Cpu } from "lucide-react"

export function FeaturesScaleSection() {
  return (
    <div className="bg-primary text-foreground py-20 md:py-12">
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
  )
}
