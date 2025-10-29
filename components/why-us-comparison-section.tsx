export function WhyUsComparisonSection() {
  return (
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
  )
}
