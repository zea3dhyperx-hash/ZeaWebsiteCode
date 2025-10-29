import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Features2Hero } from "@/components/features-2-hero"
import { Features2Grid } from "@/components/features-2-grid"
import { Features2Showcase } from "@/components/features-2-showcase"
import { Features2Integration } from "@/components/features-2-integration"
import { Features2CTA } from "@/components/features-2-cta"

export default function Features2Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Features2Hero />
        <Features2Grid />
        <Features2Showcase />
        <Features2Integration />
        <Features2CTA />
      </main>
      <Footer />
    </>
  )
}
