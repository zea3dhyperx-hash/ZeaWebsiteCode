import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground text-balance">
          Ready to Transform Your Sales Process?
        </h2>
        <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-balance">
          Join thousands of teams already using zeaCRM to close more deals and build lasting customer relationships.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary">
            Start Your Free Trial
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            Schedule a Demo
          </Button>
        </div>
        <p className="text-sm text-primary-foreground/80">
          No credit card required. 14-day free trial. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
