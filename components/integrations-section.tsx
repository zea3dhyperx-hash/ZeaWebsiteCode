"use client"

export function IntegrationsSection() {
  const integrations = [
    "Salesforce",
    "HubSpot",
    "Zoho CRM",
    "Pipedrive",
    "Freshsales",
    "Zapier",
    "n8n",
    "Make",
    "Slack",
    "Microsoft Teams",
    "Google Workspace",
    "Office 365",
    "Outlook",
    "Gmail",
    "Mailchimp",
    "ActiveCampaign",
    "SendGrid",
    "Twilio",
    "Whatsapp",
    "Facebook",
    "Instagram",
    "LinkedIn",
    "Google Ads",
    "Stripe",
    "PayPal",
    "Razorpay",
    "Square",
    "QuickBooks",
    "Xero",
    "Zoho Books",
    "Shopify",
    "WooCommerce",
    "Magento",
    "Wix",
    "WordPress",
    "Zoom",
    "Google Meet",
    "Microsoft Teams Meetings",
    "Calendly",
    "Typeform",
    "JotForm",
    "Gravity Forms",
    "Trello",
    "Asana",
    "Monday.com",
    "Notion",
    "Airtable",
    "Dropbox",
    "Google Drive",
    "OneDrive",
  ]

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
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
              className="bg-primary text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/60 transition-colors cursor-pointer"
            >
              {integration}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors">
            <a href="demo">BOOK A DEMO & EXPLORE ALL INTEGRATIONS</a>
            
          </button>
        </div>
      </div>
    </section>
  )
}
