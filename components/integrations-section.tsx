"use client"

export function IntegrationsSection() {
  const integrations = [
    "Slack",
    "Microsoft Teams",
    "Google Workspace",
    "Zapier",
    "HubSpot",
    "Salesforce",
    "Mailchimp",
    "Stripe",
    "PayPal",
    "Square",
    "Twilio",
    "SendGrid",
    "Shopify",
    "WooCommerce",
    "BigCommerce",
    "Magento",
    "QuickBooks",
    "Xero",
    "Asana",
    "Monday.com",
    "Trello",
    "Jira",
    "Confluence",
    "Notion",
    "Google Analytics",
    "Mixpanel",
    "Amplitude",
    "Segment",
    "Intercom",
    "Zendesk",
    "Calendly",
    "Zoom",
    "Google Meet",
    "Microsoft Teams",
    "Loom",
    "Typeform",
    "Airtable",
    "Smartsheet",
    "Monday Sales CRM",
    "Pipedrive",
    "Copper",
    "Close",
  ]

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-3">
            Integrate With The Tools You Already Use
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect ZeaCRM with your favorite tools and platforms to streamline your workflow and maximize productivity.
          </p>
        </div>

        {/* Integration Badges - Honeycomb Pattern */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-amber-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-500 transition-colors cursor-pointer"
            >
              {integration}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors">
            EXPLORE ALL INTEGRATIONS
          </button>
        </div>
      </div>
    </section>
  )
}
