interface ServiceCard {
  icon: string
  title: string
  description: string
}

const services: ServiceCard[] = [
  // Row 1: 4 cards
  {
    icon: "🏥",
    title: "Hospitals",
    description: "Streamline patient management, improve care coordination",
  },
  {
    icon: "🏪",
    title: "Clinics",
    description: "Manage patient histories, and communications",
  },
  {
    icon: "🧪",
    title: "Medical Laboratories",
    description: "Send lab results automatically and streamline operations",
  },
  {
    icon: "💊",
    title: "Pharmacies & Pharma Suppliers",
    description: "Track prescriptions, manage orders, improve customer relations",
  },
  // Row 2: 4 cards
  {
    icon: "🛏️",
    title: "Medical Equipment Suppliers",
    description: "Manage leads, track installations, and inventory updates",
  },
  {
    icon: "💆",
    title: "Wellness Centers & Therapy Clinics",
    description: "Personalize client plans and improve retention",
  },
  {
    icon: "🚑",
    title: "Ambulance Services",
    description: "Manage dispatches, track fleet, and patient tracking",
  },
  {
    icon: "♻️",
    title: "Waste Management in Healthcare",
    description: "Track compliance and improve operational efficiency",
  },
  // Row 3: 3 cards
  {
    icon: "👥",
    title: "Staff Onboarding & Training",
    description: "Manage recruitment processes and training schedules",
  },
  {
    icon: "📋",
    title: "Medical Records Maintenance",
    description: "Organize and maintain patient records efficiently",
  },
  {
    icon: "📱",
    title: "Digital Marketing for Healthcare",
    description: "Reach patients and build your healthcare brand",
  },
]

export function WhoWeHelp() {
  return (
    <section id="usecases" className="py-20 px-4 sm:px-6 lg:px-8 bg-red-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-amber-500">Who We Help</h2>

        <div className="grid grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-amber-50 text-slate-900 rounded-lg p-8 hover:shadow-2xl hover:scale-105 hover:bg-amber-100 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-slate-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
