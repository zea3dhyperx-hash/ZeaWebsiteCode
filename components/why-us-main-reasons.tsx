import { Card } from "@/components/ui/card"
import { Zap, Lightbulb, Puzzle } from "lucide-react"

export function WhyUsMainReasons() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Main Why Choose Section */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Powerful Features That Drive Performance</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
          ZeaCRM combines smart automation, real-time analytics, and intuitive design to help you win faster.
        </p>
      </div>

      {/* Three Main Reasons */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-8 border border-primary/30 bg-card/50">
          <div className="flex items-start gap-3 mb-4">
            <Zap className="w-6 h-6 text-primary flex-shrink-0" />
            <h3 className="text-lg font-bold text-foreground">Smart Workflows</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Automate follow-ups, reminders, and tasks to save hours every week.
          </p>
        </Card>

        <Card className="p-8 border border-primary/30 bg-card/50">
          <div className="flex items-start gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
            <h3 className="text-lg font-bold text-foreground">Unified Dashboard</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Monitor leads, emails, calls, and deals in one easy view.
          </p>
        </Card>

        <Card className="p-8 border border-primary/30 bg-card/50">
          <div className="flex items-start gap-3 mb-4">
            <Puzzle className="w-6 h-6 text-primary flex-shrink-0" />
            <h3 className="text-lg font-bold text-foreground">
              Insight-Driven AI
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Get recommendations on the next best action for every customer or lead.
          </p>
        </Card>
      </div>

      {/* Bottom Statement */}
      <div className="text-center mt-16">
        <p className="text-lg text-foreground">
          All your team has to do is simplify, automate, and accelerate their growth by focusing on the tasks that matter.</p>
      </div>
    </div>
  )
}


