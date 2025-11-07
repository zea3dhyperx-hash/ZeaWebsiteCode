export function PrinciplesCTA() {
  return (
    <section id="solution" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 opacity-90 z-0" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 z-0 animate-spin-slow" />

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto text-center opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Experience how ZeaCRM can change your healthcare organization with intelligent automation.
        </h2>

        <button className="px-8 py-3 bg-white text-amber-600 font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl">
          Get Started
        </button>
      </div>
    </section>
  )
}
