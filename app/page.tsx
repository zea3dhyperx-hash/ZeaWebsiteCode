import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { AIToolsSection } from "@/components/ai-tools-section"
import { FourStepsSection } from "@/components/four-steps-section"
import { FeatureCardsSection } from "@/components/feature-cards-section"
import { FeaturesSlider } from "@/components/features-slider"
import { FeaturesHubSection } from "@/components/features-hub-section"
import { AwardSupportSection } from "@/components/award-support-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { IndustriesSection } from "@/components/industries-section"
import { PricingSection } from "@/components/pricing-section"
import { CTATransformSection } from "@/components/cta-transform-section"
import { IntegrationsLogosSection } from "@/components/integrations-logos-section"
import { FeaturesSlider2 } from "@/components/features-slider2"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <StatsSection />
        <AIToolsSection />
        <FourStepsSection />
        <FeatureCardsSection />
        <FeaturesSlider2 />
        <FeaturesHubSection />
        <AwardSupportSection />
        <IntegrationsSection />
        <IndustriesSection />
        <PricingSection />
        <CTATransformSection />
        <IntegrationsLogosSection />
      </main>
      <Footer />
    </>
  )
}
