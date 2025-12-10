export function StudentEngagementSection() {
  const features = [
    {
      title: "Smart Enquiries",
      description:
        "Admission enquiry automation.",
    },
    {
      title: "Time scheduling",
      description:
        "Fee reminders with digital payments",
    },
    {
      title: "Payments",
      description:
        "Parent-teacher meeting scheduling",
    },
  ]

  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-0 shadow-md">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-4">
          Student Engagement Simplified
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Centralize, engage, and convert students with our end-to-end Education CRM
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Empower your institute with automated admissions, digital fee reminders, and effortless parent
              communication. ZeaCRM helps schools and colleges manage every touchpoint — from the first enquiry to
              ongoing engagement — all in one simple platform.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition-colors">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">⚙️</span>
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
