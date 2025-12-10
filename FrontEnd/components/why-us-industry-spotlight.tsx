import { Card } from "@/components/ui/card"

export function WhyUsIndustrySpotlight() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h3 className="text-3xl font-bold text-foreground text-center mb-8">Industry Spotlight: Healthcare</h3>
      <p className="text-center text-muted-foreground mb-8">ZeaCRM empowers hospitals, clinics, and healthcare professionals to deliver better patient experiences while improving efficiency and compliance.</p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="p-6 border-l-4 border-l-primary bg-card/50">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl">🏥</span>
            <div>
              <h4 className="font-bold text-foreground">Hospitals & Clinics</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Manage patient records, schedule appointments, and send automated reminders.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-primary bg-card/50">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl">💊</span>
            <div>
              <h4 className="font-bold text-foreground">Pharma Sales Teams</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Track doctor interactions, manage prescriptions, and monitor sales performance.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-primary bg-card/50">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl">🛡️</span>
            <div>
              <h4 className="font-bold text-foreground">Insurance Providers</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Simplify claims, track customer communications, and improve retention.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-primary bg-card/50">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl">👨‍⚕️</span>
            <div>
              <h4 className="font-bold text-foreground">Healthcare Admin</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Manage staff schedules, patient data, and billing all in one place.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="text-center">        <p className="text-primary font-semibold">ZeaCRM powers better patient care, higher sales, and clear reporting. The best part is this is all through AI-driven automation.</p>      </div>
    </div>
  )
}

