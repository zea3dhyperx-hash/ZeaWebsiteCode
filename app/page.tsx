
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
import FlowerMenu from "@/components/animata/list/flower-menu"
import ChatWidget from "@/components/chatbot"
import { WhyUsTestimonialsSection } from "@/components/why-us-testimonials-section"
import { WhyUsComparisonSection } from "@/components/why-us-comparison-section"
import { FeaturesComparisonTable } from "@/components/features-comparison-table"
import { WhyChooseUsHero } from "@/components/why-choose-us-hero"
import ComparisonTable from "@/components/comparisontable"

export const metadata = {
  title: "Zea CRM - AI-Powered CRM for the Future of Business",
  description:
    "Manage customers, automate workflows, and grow your business with zeaCRM",
};

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
        {/* <FeaturesSlider2 /> */}
        <FeaturesHubSection />
        <AwardSupportSection />
        <IntegrationsSection />
        <WhyChooseUsHero />
        {/* <FeaturesComparisonTable />  */}
        <ComparisonTable />
        <IndustriesSection />
        <WhyUsTestimonialsSection />
        <PricingSection />
        <WhyUsComparisonSection />
        <CTATransformSection />
        <ChatWidget />
        {/* <IntegrationsLogosSection /> */}
      </main>
      <Footer />
    </>
  )
}
