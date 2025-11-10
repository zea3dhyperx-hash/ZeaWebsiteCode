import AniAuto from "../animations/ani-auto";

export function AllInOne() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950" id="solutions">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          All-in-One Platform for Automotive & Industrial Excellence
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              ZeaCRM unites your sales, operations, and service teams in one intelligent platform. It eliminates silos by integrating customer data, orders, and performance metrics in real time. This allows your team to make faster decisions and stronger collaboration.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              With AI-powered analytics, you can forecast demand, monitor performance trends, and automate customer outreach. From factory floors to showrooms, ZeaCRM helps you stay efficient, connected, and future-ready.
            </p>
          </div>

          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-600 to-slate-800">
            {/* <img
              src="allinone.png"
              alt="Healthcare team collaboration"
              className="w-full h-full object-cover"
            /> */}
            <AniAuto />
          </div>
        </div>
      </div>
    </section>
  )
}
