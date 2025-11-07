export function InstitutionsSection() {
  const institutions = [
    {
      title: "Schools &amp; Colleges",
      icon: "🎓",
    },
    {
      title: "Coaching Centers",
      icon: "📚",
    },
    {
      title: "EdTech Platform",
      icon: "💻",
    },
  ]

  return (
    <section id="usecases" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
          ZeaCRM brings automation and clarity to all segments of the education and training sector
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutions.map((inst, idx) => (
            <div
              key={idx}
              className="bg-amber-50 text-slate-900 rounded-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center gap-4"
            >
              <div className="text-5xl">{inst.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold">{inst.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
