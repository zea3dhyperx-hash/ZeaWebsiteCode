import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden section-gradient py-20 md:py-40">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30 hover-lift">
                <span className="text-sm font-medium text-primary">✨ The Future of CRM</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight text-balance">
                Manage Your Customers Like Never Before
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                zeaCRM empowers teams to build stronger customer relationships with intelligent automation, real-time
                insights, and seamless collaboration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover-lift"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 hover-lift bg-transparent"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="group">
                <p className="text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors">10K+</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="w-px h-12 bg-border/50" />
              <div className="group">
                <p className="text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
              <div className="w-px h-12 bg-border/50" />
              <div className="group">
                <p className="text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative card-gradient rounded-3xl p-8 shadow-2xl glow-effect hover-lift">
              <div className="space-y-4">
                <div className="h-3 bg-gradient-to-r from-primary/40 to-primary/10 rounded-full w-3/4" />
                <div className="h-3 bg-gradient-to-r from-accent/40 to-accent/10 rounded-full w-1/2" />
                <div className="space-y-3 pt-4">
                  <div className="flex gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg" />
                    <div className="flex-1 space-y-2">
                      <div className="h-2 bg-muted rounded w-3/4" />
                      <div className="h-2 bg-muted rounded w-1/2" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg" />
                    <div className="flex-1 space-y-2">
                      <div className="h-2 bg-muted rounded w-3/4" />
                      <div className="h-2 bg-muted rounded w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
