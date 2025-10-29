export function FourStepsSection() {
  return (
    <section className="relative py-20 px-4 rounded-3xl mx-4 md:mx-8 lg:mx-16 my-16 bg-amber-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              {/* Simplified illustration of 4 people */}
              <svg viewBox="0 0 300 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Person 1 - Left */}
                <circle cx="60" cy="80" r="15" fill="#8b6f47" />
                <rect x="45" y="100" width="30" height="40" fill="#d4af37" rx="2" />
                <rect x="40" y="140" width="40" height="35" fill="#6b5d47" rx="2" />

                {/* Person 2 - Center-left */}
                <circle cx="130" cy="70" r="18" fill="#a0826d" />
                <rect x="112" y="95" width="36" height="45" fill="#d4af37" rx="2" />
                <rect x="105" y="145" width="50" height="40" fill="#6b5d47" rx="2" />

                {/* Person 3 - Center-right */}
                <circle cx="200" cy="75" r="16" fill="#8b6f47" />
                <rect x="185" y="98" width="30" height="42" fill="#d4af37" rx="2" />
                <rect x="178" y="142" width="44" height="38" fill="#6b5d47" rx="2" />

                {/* Person 4 - Right */}
                <circle cx="260" cy="85" r="14" fill="#a0826d" />
                <rect x="248" y="105" width="24" height="38" fill="#d4af37" rx="2" />
                <rect x="242" y="145" width="36" height="35" fill="#6b5d47" rx="2" />
              </svg>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="mb-8">
              
              
              <h3 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
                Building The Digital Marketing Engine
              </h3>
              <p className="text-primary-foreground/80 mb-8">
                Transform your business with our proven 4-step methodology designed to maximize growth and customer
                engagement.
              </p>
            </div>

            {/* Steps list */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-foreground text-primary font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-foreground mb-1">Discover & Manage</h4>
                  <p className="text-primary-foreground/80">
                    Identify your target audience and organize customer data for actionable insights.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-foreground text-primary font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-foreground mb-1">Connect & Communicate</h4>
                  <p className="text-primary-foreground/80">
                    Engage customers across multiple channels with personalized messaging.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-foreground text-primary font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-foreground mb-1">Automate & Optimize</h4>
                  <p className="text-primary-foreground/80">
                    Streamline workflows and continuously improve performance with AI-driven insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
