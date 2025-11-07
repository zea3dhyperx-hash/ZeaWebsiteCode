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
              ZeaCRM connects every team, department, and workflow under one powerful AI-driven system. It ensures seamless collaboration across medical, administrative, and support units. All this so that nothing slips through the cracks.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              From automated scheduling and smart notifications to AI insights that predict patient needs, ZeaCRM gives healthcare providers the clarity and control they need to deliver exceptional service every day. The result? Higher efficiency, happier patients, and smoother operations.
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
