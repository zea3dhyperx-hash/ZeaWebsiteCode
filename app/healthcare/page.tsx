import ChatWidget from "@/components/chatbot";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AllInOne } from "@/components/healthcare/all-in-one";
import { Hero } from "@/components/healthcare/hero";
import { HeroFeatures } from "@/components/healthcare/hero-features";
import { RelationshipManagement } from "@/components/healthcare/relationship-management";
import { Solutions } from "@/components/healthcare/solutions";
import { WhoWeHelp } from "@/components/healthcare/who-we-help";



export const metadata = {
  title: " ",
  description:
    "",
};

export default function Healthcare() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <HeroFeatures />
        <RelationshipManagement />
        <WhoWeHelp />
        <Solutions />
        <AllInOne />
        <CTA />
        <ChatWidget />
      </main>
      <Footer />
    </>
  )
}
