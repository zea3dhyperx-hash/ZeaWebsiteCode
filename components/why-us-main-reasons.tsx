import { Card } from "@/components/ui/card"
import { Zap, Lightbulb, Puzzle } from "lucide-react"

export function WhyUsMainReasons() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Main Why Choose Section */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Why Choose ZeaCRM Features?</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
          Most CRMs add complexity. ZeaCRM removes it. Our automation-first design means you get:
        </p>
      </div>

      {/* Three Main Reasons */}
      <div className="grid md:grid-cols-3 gap-6">
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
      <div className="text-center mt-16">
        <p className="text-lg text-foreground">
          <span className="text-primary font-bold">
            ✨ With ZeaCRM, you don't just manage customers—you automate your entire business workflow.
          </span>
        </p>
      </div>
    </div>
  )
}

