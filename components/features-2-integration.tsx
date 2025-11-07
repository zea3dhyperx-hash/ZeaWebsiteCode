export function Features2Integration() {
  const integrations = ["Slack","Microsoft Outlook","Gmail","WhatsApp Business","Google Calendar","Zapier","Zoom","HubSpot"]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-4 text-balance">ZeaCRM Plays Well with Everything You Use</h2>
        <p className="text-lg text-foreground mb-12 max-w-2xl mx-auto">
          Connect your workflows seamlessly. No switching tabs or juggling logins. ZeaCRM syncs with leading business apps for effortless collaboration.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg border border-border transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <p className="font-semibold text-foreground">{integration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

