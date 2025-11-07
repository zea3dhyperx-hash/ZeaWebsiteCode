import ChatWidget from "@/components/chatbot";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import { BenefitsSection } from "@/components/professional/benefits";
import { FooterCTA } from "@/components/professional/footer-cta";
import { ProfessionalHero } from "@/components/professional/hero";
import { ProfessionalNavTabs } from "@/components/professional/nav-tabs";
import { SolutionSection } from "@/components/professional/solution";
import { UseCasesSection } from "@/components/professional/use-cases";
import { VideoSection } from "@/components/professional/video-section";


export const metadata = {
  title: " ",
  description:
    "",
};

export default function ProfessionalServices() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ProfessionalHero />
        <ProfessionalNavTabs />
        <VideoSection />
        <UseCasesSection />
        <BenefitsSection />
        <SolutionSection />
        <FooterCTA />
        <ChatWidget />
      </main>
      <Footer />
    </>
  )
}
