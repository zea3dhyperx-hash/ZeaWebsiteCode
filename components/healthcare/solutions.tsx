interface Solution {
  icon: string
  title: string
  description: string
}

const solutions: Solution[] = [
  {
    icon: "🏥",
    title: "Hospitals",
    description: "Smoother OP/IP flow, higher patient satisfaction, and better care continuity.",
  },
  {
    icon: "⚠️",
    title: "Clinics",
    description: "Reduced no-shows, deep doctor engagement, faster service.",
  },
  {
    icon: "🧬",
    title: "Medical Laboratories",
    description: "Faster diagnosis, improved patient loyalty, and efficient lab management.",
  },
  {
    icon: "💊",
    title: "Pharmacies",
    description: "Higher patient adherence, repeat sales, and long-term loyalty.",
  },
  {
    icon: "🏥",
    title: "Medical Equipment Suppliers",
    description: "Transparent supply chain, faster payments, and repeat contracts.",
  },
  {
    icon: "🧘",
    title: "Wellness Centers & Clinics",
    description: "Consistent patient engagement, higher retention, and transparent billing.",
  },
  {
    icon: "🚑",
    title: "Ambulance Services",
    description: "Faster emergency response, smoother billing, and better recovery rates.",
  },
  {
    icon: "♻️",
    title: "Waste Management in Healthcare",
    description: "ransparent disposal, no disputes, and trust in waste contractors.",
  },
]

export function Solutions() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900" id="benefit">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Creative and Unique Solutions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, idx) => (
            <div key={idx} className="border border-slate-700 rounded-xl p-6 hover:border-amber-400 transition">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{solution.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{solution.title}</h3>
                  <p className="text-slate-400">{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
