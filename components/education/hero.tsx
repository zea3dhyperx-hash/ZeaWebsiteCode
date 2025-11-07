export function EducationHero() {
  return (
    <section
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage:
          "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%20169-L5bNsThbDKzf8hwLaYlbhbHATrb0Fh.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/70 to-slate-950/80"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[600px]">
        {/* Content */}
        <div className="flex flex-col items-center justify-center gap-6 text-center mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Education &amp; Training
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-amber-50 max-w-2xl">
            AI-Powered CRM Solutions for Schools, Colleges, Institutes, and EdTech Platforms
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg">
            Request Demo
          </button>
          <button className="border-2 border-amber-500 hover:bg-amber-500/10 text-white font-bold px-8 py-4 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
