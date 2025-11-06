import { Header } from "@/components/header"
import { PricingPage } from "@/components/pricing-page"
import { Footer } from "@/components/footer"
import ChatWidget from "@/components/chatbot";

export const metadata = {
  title: "Zea CRM Pricing",
  description:
    "Discover Zea CRM's flexible pricing plans designed to fit businesses of all sizes. Explore our features and choose the perfect plan to streamline your customer relationship management and drive growth.",
};

export default function Pricing() {
  return (
    <main className="min-h-screen">
      <Header />
      <PricingPage />
      <Footer />
      <ChatWidget />
    </main>
  )
}
