export function WhyUs2Benefits() {
  const benefits = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Get results in minutes, not months. Our AI-powered system accelerates your sales cycle.",
    },
    {
      icon: "🎯",
      title: "Precision Targeting",
      description: "Reach the right customers at the right time with intelligent lead scoring and segmentation.",
    },
    {
      icon: "📈",
      title: "Proven ROI",
      description: "Average 3x increase in conversion rates within the first 90 days of implementation.",
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with GDPR, SOC 2, and industry standards.",
    },
    {
      icon: "🤝",
      title: "24/7 Support",
      description: "Dedicated support team available round the clock to help you succeed.",
    },
    {
      icon: "🌍",
      title: "Global Scale",
      description: "Manage customers across 150+ countries with multi-language and multi-currency support.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4 text-balance">
          What Sets Us Apart
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Industry-leading features designed to give you a competitive advantage
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
