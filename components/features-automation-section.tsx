import { Zap, Workflow, TrendingUp, Lock, Code, Layers } from "lucide-react"

export function FeaturesAutomationSection() {
  return (
    <div className="bg-foreground text-background py-20 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Advanced Automation Workflows</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Build complex automations without writing a single line of code
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
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
  )
}
