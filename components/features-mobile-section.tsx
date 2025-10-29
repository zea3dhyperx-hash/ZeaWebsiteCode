import { Smartphone } from "lucide-react"

export function FeaturesMobileSection() {
  return (
    <div className="text-background py-20 md:py-[50px] bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-background/10 rounded-lg p-12 border border-background/20 flex items-center justify-center min-h-96">
              <div className="text-center">
                <Smartphone className="w-24 h-24 mx-auto mb-4 text-primary" />
                <p className="text-background/80">Mobile App Interface</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">
              Access ZeaCRM Anywhere, Anytime
            </h2>
            <p className="text-lg opacity-90 mb-8 text-foreground">
              Manage your business on the go with our fully responsive mobile app and cloud-based platform.
            </p>

            <div className="space-y-4 text-foreground">
              {[
                "Native iOS & Android apps with offline mode",
                "Real-time sync across all devices",
                "Push notifications for important updates",
                "Secure cloud storage with automatic backups",
                "Works seamlessly on tablets and desktops",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-foreground">
                  <Smartphone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
