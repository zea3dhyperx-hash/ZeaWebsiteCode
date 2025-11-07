import ChatWidget from "@/components/chatbot";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import { RetailAISection } from "@/components/retail/ai-section";
import { RetailFooterCTA } from "@/components/retail/footer-cta";
import { RetailHero } from "@/components/retail/hero";
import { RetailNavTabs } from "@/components/retail/nav-tabs";
import { RetailSolution } from "@/components/retail/solution";
import { RetailUseCases } from "@/components/retail/use-cases";
import { RetailVideoSection } from "@/components/retail/video-section";


export const metadata = {
  title: " ",
  description:
    "",
};

export default function Retail() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <RetailHero />
        <RetailNavTabs />
        <RetailVideoSection />
        <RetailUseCases />
        <RetailSolution />
        <RetailAISection />
        <RetailFooterCTA />
        <ChatWidget />
      </main>
      <Footer />
    </>
  )
}
