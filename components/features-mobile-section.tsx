import { Smartphone } from "lucide-react"


export function FeaturesMobileSection() {
  return (
    <div className="text-background py-20 md:py-[50px] bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img src="/images/devices.png" alt="Responsive Design" />
            {/* <div className="bg-background/10 rounded-lg p-12 border border-background/20 flex items-center justify-center min-h-96">
              <div className="text-center">
                <Smartphone className="w-24 h-24 mx-auto mb-4 text-primary" />
                <p className="text-background/80">Mobile App Interface</p>
              </div>
            </div> */}
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">Stay Connected, Wherever Business Takes You</h2>
            <p className="text-lg opacity-90 mb-8 text-foreground">Your sales never sleep and neither does ZeaCRM. Manage your customers, monitor performance, and collaborate with your team from any device.</p>

            <div className="space-y-4 text-foreground">
              {[
                "100% cloud-based platform for secure remote access",
                "Works on desktop, tablet, and mobile",
                "Real-time notifications and updates",
                "Offline mode for essential functions",
                "Data auto-sync across all devices",
                "Role-based permissions for team control",
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
