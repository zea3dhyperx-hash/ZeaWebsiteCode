import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturesHeroSection } from "@/components/features-hero-section"
import { FeaturesCardsSection } from "@/components/features-cards-section"
import { FeaturesResultsSection } from "@/components/features-results-section"
import { FeaturesAutomationSection } from "@/components/features-automation-section"
import { FeaturesMobileSection } from "@/components/features-mobile-section"
import { FeaturesScaleSection } from "@/components/features-scale-section"
import { FeaturesIntegrationsSection } from "@/components/features-integrations-section"
import { Features2Grid } from "@/components/features-2-grid"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Features2Grid />
      <FeaturesHeroSection />
      <FeaturesCardsSection />
      <FeaturesResultsSection />
      <FeaturesAutomationSection />
      <FeaturesMobileSection />
      <FeaturesScaleSection />
      <FeaturesIntegrationsSection />
      <Footer />
    </main>
  )
}
