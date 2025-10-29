import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhyUs2Hero } from "@/components/why-us-2-hero"
import { WhyUs2Benefits } from "@/components/why-us-2-benefits"
import { WhyUs2Comparison } from "@/components/why-us-2-comparison"
import { WhyUs2Testimonials } from "@/components/why-us-2-testimonials"
import { WhyUs2CTA } from "@/components/why-us-2-cta"

export default function WhyUs2Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <WhyUs2Hero />
        <WhyUs2Benefits />
        <WhyUs2Comparison />
        <WhyUs2Testimonials />
        <WhyUs2CTA />
      </main>
      <Footer />
    </>
  )
}
