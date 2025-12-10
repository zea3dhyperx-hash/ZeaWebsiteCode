"use client"

export function PersonasSection() {
  const personas = [
    {
      icon: "👨‍💻",
      title: "Builders & Developers",
      description: "Deliver a seamless home-buying experience with smart automation and real-time insights.",
    },
    {
      icon: "👤",
      title: "Property Managers",
      description: "Monitor projects, coordinate teams, and manage investor relations.",
    },
    {
      icon: "🏢",
      title: "Brokers & Agencies",
      description: "Automate client onboarding and documentation.",
    },
  ]

  return (
    <section id="usecases" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-amber-400 mb-16">
          Your All-in-One AI-Powered CRM & Automation Platform
        </h2>

        <div className="grid grid-cols-1 gap-12 text-center">
          {personas.map((persona, idx) => (
            <div key={idx} className="flex gap-6 items-start text-left">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-5xl flex-shrink-0 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/50 cursor-pointer">
                {persona.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-400 mb-3 text-2xl">{persona.title}</h3>
                <p className="text-gray-300 leading-relaxed text-xl">{persona.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
