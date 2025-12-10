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
    description: "Coordinate departments, manage patient journeys, and streamline follow-ups",
  },
  {
    icon: "🏪",
    title: "Clinics",
    description: "Automate appointment reminders, patient histories, and communication.",
  },
  {
    icon: "🧪",
    title: "Medical Laboratories",
    description: "Send test results automatically and manage client feedback.",
  },
  {
    icon: "💊",
    title: "Pharmacies & Pharma Suppliers",
    description: "Track prescriptions, refill reminders, and customer interactions.",
  },
  // Row 2: 4 cards
  {
    icon: "🛏️",
    title: "Medical Equipment Suppliers",
    description: "Manage leads, inventory updates, and client orders.",
  },
  {
    icon: "💆",
    title: "Wellness Centers & Therapy Clinics",
    description: "Personalize client plans and maintain session logs.",
  },
  {
    icon: "🚑",
    title: "Ambulance Services",
    description: "Every Second Counts—Automation Saves Lives.",
  },
  {
    icon: "♻️",
    title: "Waste Management in Healthcare",
    description: "Smart, Compliant Biomedical Waste Tracking.",
  },
  // Row 3: 3 cards
  {
    icon: "👥",
    title: "Staff Onboarding & Training",
    description: "Automation for Hospital HR & Compliance.",
  },
  {
    icon: "📋",
    title: "Medical Records Maintenance",
    description: "Faster diagnosis, zero lost files, and smooth compliance checks.",
  },
  {
    icon: "📱",
    title: "Digital Marketing for Healthcare",
    description: "Higher patient bookings, stronger brand recall, and growth with zero manual effort.",
  },
]

export function WhoWeHelp() {
  return (
    <section id="usecases" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-amber-500">Who We Help</h2>

        <div className="grid grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-primary text-slate-900 rounded-lg p-8 hover:shadow-2xl hover:scale-105 hover:bg-primary transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
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
