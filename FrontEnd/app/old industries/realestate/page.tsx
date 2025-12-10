import ChatWidget from "@/components/chatbot";
import { RealEstateDemo } from "@/components/realestate/demo";
import { RealEstateHero } from "@/components/realestate/hero";
import { LeadCaptureSection } from "@/components/realestate/lead-capture";
import { MobileAISection } from "@/components/realestate/mobile-ai";
import { RealEstateNav } from "@/components/realestate/nav";
import { PersonasSection } from "@/components/realestate/personas";
import { PrinciplesCTA } from "@/components/realestate/principles-cta";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";

export default function RealEstate() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <RealEstateHero />
        <RealEstateNav />
        <RealEstateDemo />
        <PersonasSection />
        <MobileAISection />
        <LeadCaptureSection />
        <PrinciplesCTA />
        <ChatWidget />
      </main>
      <Footer />
    </>
  )
}
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Real Estate",
  description: "Real estate CRM for agents and teams: lead capture, follow-ups, and pipeline automation.",
}
