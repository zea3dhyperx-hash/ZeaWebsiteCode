export function AllInOne() {
  return (
    <section id="solutions" className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400">
            Apply agentic process automation across the spectrum of health
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Your All-in-One AI-Powered</h2>
            <p className="text-gray-300 text-lg">
              From healthcare and real estate to retail and finance, ZeaCRM adapts to your unique challenges with
              automation-first solutions. Discover how we help businesses streamline operations, enhance customer
              relationships, and drive growth.
            </p>
            <p className="text-gray-300 text-lg">
              From automated scheduling and smart notifications to AI-generated recommendations, every feature is built
              to give your team the control they need to deliver exceptional service every day. The result? Higher
              efficiency, happier customers, and sustainable growth.
            </p>
          </div>

          {/* Image */}
          <div
            className="rounded-lg overflow-hidden h-80 lg:h-96"
            style={{
              backgroundImage:
                "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%20169-L5bNsThbDKzf8hwLaYlbhbHATrb0Fh.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </section>
  )
}
