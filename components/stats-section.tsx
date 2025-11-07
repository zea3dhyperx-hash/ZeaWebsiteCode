export function StatsSection() {
  const stats = [
    {
      number: "75%",
      label: "Reduction in Manual Work",
    },
    {
      number: "90%",
      label: "Customer Satisfaction Rate",
    },
    {
      number: "1000+",
      label: "Businesses Growing with ZeaCRM",
    },
    {
      number: "99.9%",
      label: "Data Security & Uptime Reliability",
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-slate-900 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            What Is ZeaCRM?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ZeaCRM is a next-generation Customer Relationship Management solution built to empower teams that want to work smarter, not harder. Developed by URL Factory, it’s designed for businesses that value speed, automation, and insight.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From capturing leads to nurturing relationships and analyzing performance, ZeaCRM helps you stay in control. The intelligent AI tool helps you monitor and manage your tasks every step of the way.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border border-primary/30 rounded-lg p-8 bg-slate-900/50 backdrop-blur-sm hover:border-primary/60 transition-colors"
            >
              <div className="text-4xl font-bold text-primary mb-3">{stat.number}</div>
              <div className="text-gray-300 text-sm leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
