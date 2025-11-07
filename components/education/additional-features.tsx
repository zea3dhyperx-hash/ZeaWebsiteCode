export function AdditionalFeaturesSection() {
  const features = [
    {
      title: "Smart Signups",
      description: "Auto demo & trial signups.",
    },
    {
      title: "Billing automation",
      description: "Subscription billing automation.",
    },
    {
      title: "Auto Reminders",
      description: "AI-driven learning reminders & progress tracking.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-4">EdTech Platforms</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Empower your online learning platform with advanced CRM capabilities. Build stronger connections with
              students and instructors while automating routine tasks. ZeaCRM helps you scale your EdTech business
              efficiently with powerful automation and engagement tools.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition-all hover:scale-105 hover:-translate-y-1 duration-300"
              >
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🚀</span>
                </div>
                <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
