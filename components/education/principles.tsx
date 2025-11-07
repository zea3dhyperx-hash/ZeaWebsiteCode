export function PrinciplesSection() {
  return (
    <section
      id="solutions"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-amber-500/20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-8 text-center">Heading 5</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Your All-in-One AI-Powered Platform</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              From healthcare and real estate to retail and finance, ZeaCRM adapts to your unique challenges with
              automation-first solutions. Discover how we help businesses streamline operations, enhance customer
              relationships, and drive growth.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              From healthcare and real estate to retail and finance, ZeaCRM adapts to your unique challenges with
              automation-first solutions.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg aspect-square lg:aspect-auto lg:h-96 flex items-center justify-center leading-7 tracking-normal">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-amber-500 rounded-lg p-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white font-bold text-lg">
              "Experience how ZeaCRM can change your healthcare organization with intelligent automation."
            </p>
            <button className="bg-white text-amber-500 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-colors whitespace-nowrap">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
