export function WhyUs2Comparison() {
  const comparison = [
    { feature: "AI-Powered Insights", zeaCRM: true, competitors: false },
    { feature: "Real-time Analytics", zeaCRM: true, competitors: true },
    { feature: "Unlimited Users", zeaCRM: true, competitors: false },
    { feature: "Custom Workflows", zeaCRM: true, competitors: true },
    { feature: "API Access", zeaCRM: true, competitors: true },
    { feature: "24/7 Support", zeaCRM: true, competitors: false },
    { feature: "Mobile App", zeaCRM: true, competitors: true },
    { feature: "White Label", zeaCRM: true, competitors: false },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 text-balance">
          How We Compare
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-6 text-foreground font-semibold">Feature</th>
                <th className="text-center py-4 px-6 text-primary font-semibold">zeaCRM</th>
                <th className="text-center py-4 px-6 text-muted-foreground font-semibold">Competitors</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((item, index) => (
                <tr key={index} className="border-b border-border hover:bg-background/50 transition-colors">
                  <td className="py-4 px-6 text-foreground">{item.feature}</td>
                  <td className="text-center py-4 px-6">
                    {item.zeaCRM ? (
                      <span className="text-2xl text-primary">✓</span>
                    ) : (
                      <span className="text-2xl text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="text-center py-4 px-6">
                    {item.competitors ? (
                      <span className="text-2xl text-muted-foreground">✓</span>
                    ) : (
                      <span className="text-2xl text-muted-foreground">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
