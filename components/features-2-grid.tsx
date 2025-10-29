export function Features2Grid() {
  const features = [
    {
      icon: "🤖",
      title: "AI Assistant",
      description: "Intelligent automation that learns from your sales patterns and suggests next best actions",
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Deep insights into pipeline health, forecasting, and performance metrics in real-time",
    },
    {
      icon: "🔄",
      title: "Workflow Automation",
      description: "Create complex workflows without coding to automate repetitive tasks and save hours",
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Manage your entire CRM from anywhere with our powerful native mobile applications",
    },
    {
      icon: "🔗",
      title: "Seamless Integrations",
      description: "Connect with 500+ apps including email, calendar, accounting, and communication tools",
    },
    {
      icon: "🛡️",
      title: "Enterprise Security",
      description: "Military-grade encryption, SSO, and compliance with all major security standards",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4 text-balance">Core Features</h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Everything you need to run a world-class sales organization
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
