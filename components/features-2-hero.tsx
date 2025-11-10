export function Features2Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background/60 via-background/60 to-card/30 py-20"
      style={{
        backgroundImage: "url('images/featuresbg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity:'1',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">Work Smarter, Sell Faster, Grow Bigger</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-5xl mx-auto">ZeaCRM gives you everything you need to automate workflows, manage relationships, and close deals. All in one intelligent, easy-to-use platform. Whether you’re a solopreneur or a growing enterprise, you’ll experience business agility powered by AI.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-lift hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
            <a href="#slider">Explore All Features</a>
          </button>
          <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300">
            <a href="demo">Request Demo</a>
          </button>
        </div>
      </div>
    </section>
  )
}
