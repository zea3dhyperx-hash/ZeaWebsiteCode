"use client"

export function HowItWorks() {
  const segments = [
    {
      title: "Dealers & Showrooms",
      features: ["Test drive booking via WhatsApp", "Auto service/warranty reminders", "Digital payments & invoices"],
      image: "/automotive-dealership-showroom-with-luxury-car.jpg",
    },
    {
      title: "Spare Parts Retailers",
      features: [
        "Auto inventory alerts",
        "Digital billing & repeat order reminders",
        "Loyalty campaigns for mechanics/customers",
      ],
      image: "/spare-parts-retail-warehouse-shop.jpg",
    },
    {
      title: "Equipment Manufacturers",
      features: ["Dealer-OEM order workflows", "Maintenance alerts for equipment", "Sales analytics dashboards"],
      image: "/manufacturing-equipment-factory-floor.jpg",
    },
  ]

  return (
    <section id="usecases" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-16 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            AI-Powered CRM for Faster Growth
          </h2>
        </div>

        <div className="space-y-20">
          {segments.map((segment, idx) => {
            const isReversed = idx % 2 === 1
            const animationDelay = `${0.2 + idx * 0.2}s`

            return (
              <div
                key={idx}
                className="relative w-full opacity-0 animate-fade-in-up"
                style={{ animationDelay, animationFillMode: "forwards" }}
              >
                <div
                  className={`flex items-center justify-center gap-0 ${isReversed ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Image Container - fixed size */}
                  <div className="relative w-full lg:w-[450px] h-[280px] lg:h-[350px] rounded-xl overflow-hidden shadow-2xl flex-shrink-0 group">
                    <img
                      src={segment.image || "/placeholder.svg"}
                      alt={segment.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Cyan accent line overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent pointer-events-none"></div>
                  </div>

                  {/* Text Card - overlapping the image by ~40% */}
                  <div className={`relative w-[70%] lg:w-[45%] -mx-[10%] lg:-mx-[5%] z-10 flex-shrink-0`}>
                    <div className="rounded-xl p-6 lg:p-8 shadow-2xl transition-all duration-300 bg-white hover:shadow-3xl hover:scale-105 hover:-translate-y-2 hover:bg-pink-50">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-4">{segment.title}</h3>
                      <ul className="space-y-3">
                        {segment.features.map((feature, fidx) => (
                          <li
                            key={fidx}
                            className="text-slate-800 flex items-start gap-3 text-sm sm:text-base transition-colors duration-300 hover:text-amber-600"
                          >
                            <span className="text-amber-600 font-bold text-lg flex-shrink-0">↳</span>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
