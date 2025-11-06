export function WhyUs2Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card/30 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-2 text-balance">
          Why Choose <span className="text-primary">ZeaCRM</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 text-balance max-w-2xl mx-auto">
          Smarter. Faster. Proven.
        </p>
        <p className="text-base md:text-lg text-foreground mb-8 max-w-3xl mx-auto">
          Join 2,000+ businesses that automate their sales, marketing, and customer management with ZeaCRM. They are achieving up to 3x faster growth and 40% higher lead conversions through AI-driven automation. Are you ready?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-lift hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
            <a href="/get-started"> Start Free Trial</a>
          </button>
          <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300">
            <a href="/demo"> Book a Demo</a>
          </button>
        </div>
      </div>
    </section>
  )
}
