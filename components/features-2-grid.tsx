export function Features2Grid() {
  const features = [
    {
      icon: "📈",
      title: "CRM & Pipeline Management ",
      description: "Visualize every lead, deal, and opportunity in one clean dashboard.",
    },
    {
      icon: "📧",
      title: "Email & Campaign Automation ",
      description: "Automate follow-ups and personalized sequences that convert.",
    },
    {
      icon: "🤖",
      title: "AI-Powered Recommendations ",
      description: "Get instant insights on who’s most likely to close next.",
    },
    {
      icon: "🔄",
      title: "Workflow Automations ",
      description: "Save time with trigger-based tasks and reminders.",
    },
    {
      icon: "📊",
      title: "Analytics Dashboard ",
      description: "Track performance, conversion trends, and sales health in real time.",
    },
    {
      icon: "📱",
      title: "Mobile CRM ",
      description: "Access your data, deals, and updates on the go anytime, anywhere.",
    },
    {
      icon: "👥",
      title: "Lead Management",
      description: "Your business can easily capture and qualify leads automatically from forms, chats, or calls.",
    },
    {
      icon: "🔗",
      title: "Integration Hub",
      description: "You can connect with Gmail, WhatsApp, Slack, or your favorite business apps in one place.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-background mb-4 text-balance">Core Features That Drive Growth</h2>
        <p className="text-center text-background text-lg mb-16 max-w-2xl mx-auto">Here are some features that help your business thrive:</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 flex justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold flex justify-center text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foregroundflex justify-center ">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
