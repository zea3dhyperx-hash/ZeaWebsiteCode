
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
import { Features2Hero } from "@/components/features-2-hero"
import { Features2CTA } from "@/components/features-2-cta"
import { Features2Integration } from "@/components/features-2-integration"
import { Features2Showcase } from "@/components/features-2-showcase"
import { FeaturesSlider } from "@/components/features-slider"


export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Features2Hero />
      
      <Features2Grid />
      <FeaturesSlider />
      {/* <FeaturesHeroSection /> */}
      {/* <FeaturesCardsSection /> */}
      <FeaturesResultsSection />
      {/* <FeaturesAutomationSection /> */}
      <FeaturesMobileSection />
      <Features2Showcase />
      <Features2Integration />
      <Features2CTA />
      <FeaturesScaleSection />
      <FeaturesIntegrationsSection />
      <Footer />
    </main>
  )
}
