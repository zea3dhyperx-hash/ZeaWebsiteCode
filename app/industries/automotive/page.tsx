import ChatWidget from "@/components/chatbot";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import { Automations } from "@/components/automotive/automations";
import { AutomotiveDemo } from "@/components/automotive/demo";
import { AutomotiveHero } from "@/components/automotive/hero";
import { HowItWorks } from "@/components/automotive/how-it-works";
import { AutomotiveNav } from "@/components/automotive/nav";
import { AllInOne } from "@/components/automotive/all-in-one";
import { PrinciplesCTA } from "@/components/automotive/principles-cta";


// export const metadata = {
//   title: " ",
//   description:
//     "",
// };

export default function Education() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AutomotiveHero />
        <AutomotiveNav />
        <AutomotiveDemo />
        <HowItWorks />
        <Automations />
        <AllInOne />
        <PrinciplesCTA />
        <ChatWidget />
      </main>
      <Footer />
    </>
  )
}
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Automotive & Manufacturing | ZeaCRM",
  description: "Automotive industry solutions, features, and benefits powered by ZeaCRM.",
}
