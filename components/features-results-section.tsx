export function FeaturesResultsSection() {
  return (
    <div className="bg-primary text-foreground py-20 md:py-12">
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
            <div className="rounded-lg p-8 border-l-4 text-primary bg-background">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-3xl font-bold text-primary">340%</div>
                <span className="text-sm font-semibold text-primary">ROI Increase</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "ZeaCRM helped us automate our entire sales process. We're closing deals 3x faster."
              </p>
              <p className="text-xs font-semibold text-muted-foreground">— Sarah Chen, Sales Director at TechFlow</p>
            </div>

            <div className="rounded-lg p-8 border-l-4 text-primary bg-background">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-3xl font-bold text-primary">45%</div>
                <span className="text-sm font-semibold text-primary">Time Saved</span>
              </div>
              <p className="text-sm mb-4 text-muted-foreground">
                "Our team spends less time on admin and more time selling. Productivity is through the roof."
              </p>
              <p className="text-xs font-semibold text-muted-foreground">— Marcus Johnson, VP Sales at RetailPro</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg p-8 border-l-4 text-primary bg-background">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-3xl font-bold text-primary">$2.5M</div>
                <span className="text-sm font-semibold text-primary">Revenue Generated</span>
              </div>
              <p className="text-sm  mb-4 text-muted-foreground">
                "The AI lead scoring identified high-value prospects we were missing. Game changer."
              </p>
              <p className="text-xs font-semibold text-muted-foreground">— Lisa Rodriguez, CEO at HealthCare Solutions</p>
            </div>

            <div className="rounded-lg p-8 border-l-4 text-primary bg-background">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-3xl font-bold text-primary">92%</div>
                <span className="text-sm font-semibold text-primary">Customer Satisfaction</span>
              </div>
              <p className="text-sm mb-4 text-muted-foreground">
                "Our customers love the automated follow-ups and personalized communication."
              </p>
              <p className="text-xs font-semibold text-muted-foreground">— David Park, Customer Success Manager at GrowthHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
