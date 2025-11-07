import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhyChooseUsHero } from "@/components/why-choose-us-hero"
import { FeaturesComparisonTable } from "@/components/features-comparison-table"
import { WhyUsMainReasons } from "@/components/why-us-main-reasons"
import { WhyUsIndustrySpotlight } from "@/components/why-us-industry-spotlight"
import { WhyUsIndustriesSection } from "@/components/why-us-industries-section"
import { WhyUsComparisonSection } from "@/components/why-us-comparison-section"
import { WhyUsTestimonialsSection } from "@/components/why-us-testimonials-section"
import { WhyUs2Hero } from "@/components/why-us-2-hero"
import CaseStudyCard from "@/components/animata/card/case-study-card"
import ChatWidget from "@/components/chatbot"

export const metadata = {
  title: "Why Choose Zea CRM | Benefits & Features",
  description:
    "Discover why Zea CRM is the preferred choice for businesses worldwide. Explore our key benefits, features, and success stories that set us apart in the CRM landscape.",
};

export default function WhyUsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="space-y-0">
        <WhyUs2Hero />
        <WhyChooseUsHero />
        {/* <FeaturesComparisonTable /> */}
        <WhyUsMainReasons />
        <WhyUsIndustrySpotlight />
        <WhyUsComparisonSection />
        <WhyUsIndustriesSection />
        <WhyUsTestimonialsSection />
      </div>
      <Footer />
      <ChatWidget />
    </main>
  )
}
