import { Header } from "@/components/header"
import { PricingPageClient } from "@/components/pricing-page-client"
import { Footer } from "@/components/footer"
import ChatWidget from "@/components/chatbot";
import { headers } from "next/headers"

export const metadata = {
  title: "Zea CRM Pricing",
  description:
    "Discover Zea CRM's flexible pricing plans designed to fit businesses of all sizes. Explore our features and choose the perfect plan to streamline your customer relationship management and drive growth.",
};

export default async function Pricing() {
  const headersList = headers()
  const country =
    headersList.get("x-vercel-ip-country") ||
    headersList.get("cf-ipcountry") ||
    headersList.get("x-user-country") ||
    "US"

  return (
    <main className="min-h-screen">
      <Header />
      <PricingPageClient initialCountry={country} />
      <Footer />
      <ChatWidget />
    </main>
  )
}
