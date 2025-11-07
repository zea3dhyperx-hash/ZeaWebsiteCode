export function AllInOne() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950" id="solutions">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          All-in-One Platform for Modern Healthcare Teams
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              ZeoCRM connects every team, department, and stakeholder using a single integrated platform. From patient
              management to billing to staff coordination, all your healthcare operations live in one place.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              From automated scheduling and smart notifications to integrated patient portals, ZeoCRM delivers
              consistency in care quality every day. Better data means better decisions, smarter personalized care, and
              improved patient engagement. All the data you need is just a click away.
            </p>
          </div>

          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-600 to-slate-800">
            <img
              src="/healthcare-team-working-together.jpg"
              alt="Healthcare team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
