import { Header } from "@/components/header"
import { IndustriesPage } from "@/components/industries-page"
import { Footer } from "@/components/footer"
import { Head } from "next/document"
import ChatWidget from "@/components/chatbot";

export const metadata = {
  title: "Other Industries | Zea CRM",
  description:
    "Zea CRM automates workflows across industries like real estate, finance, education, and healthcare — helping teams scale with smart automation.",
};

export default function IndustriesPageRoute() {
  return (
    <>
      <Header />
      <IndustriesPage />
      <Footer />
      <ChatWidget />
    </>
  )
}
