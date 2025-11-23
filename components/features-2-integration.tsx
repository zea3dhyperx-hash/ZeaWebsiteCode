export function Features2Integration() {
  const integrations = [
    { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
    { name: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" },
    { name: "Gmail", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" },
    { name: "WhatsApp Business", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" },
    { name: "Google Calendar", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" },
    { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg" },
    { name: "Zoom", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" },
    { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" },
  ]

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
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="h-10 w-auto max-w-[140px] object-contain"
                  loading="lazy"
                />
                <p className="text-sm font-semibold text-foreground">{integration.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

