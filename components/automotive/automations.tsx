import { Building2, Wrench, Package } from "lucide-react"

export function Automations() {
  const automations = [
    {
      title: "Dealers & Showrooms",
      description: "Drive more customer engagement and sales with AI-powered workflows and automations.",
      icon: Building2,
    },
    {
      title: "Spare Parts Retailers",
      description: "Enhance your retail operations and customer relationships with automation.",
      icon: Package,
    },
    {
      title: "Equipment Manufacturers",
      description: "Streamline your equipment sales and service operations efficiently.",
      icon: Wrench,
    },
  ]

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
           Retain customers, boost efficiency, and scale faster
          </h2>
          <p className="text-white text-2xl font-semibold">with smart automation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {automations.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg p-6 space-y-4 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-amber-100">{item.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center"></div>
      </div>
    </section>
  )
}
