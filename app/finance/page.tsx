import ChatWidget from "@/components/chatbot";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import { FinanceBenefits } from "@/components/finance/benefits";
import { FinanceFooterCTA } from "@/components/finance/footer-cta";
import { FinanceHero } from "@/components/finance/hero";
import { FinanceNavTabs } from "@/components/finance/nav-tabs";
import { FinanceSolution } from "@/components/finance/solution";
import { FinanceUseCases } from "@/components/finance/use-cases";
import { FinanceVideoSection } from "@/components/finance/video-section";


export default function Finance() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <FinanceHero />
        <FinanceNavTabs />
        <FinanceVideoSection />
        <FinanceUseCases />
        <FinanceBenefits />
        <FinanceSolution />
        <FinanceFooterCTA />
        <ChatWidget />
      </main>
      <Footer />
    </>
  )
}

import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Finance & Insurance",
  description: "Financial services and insurance solutions with automation, client engagement, and compliance-ready workflows.",
}