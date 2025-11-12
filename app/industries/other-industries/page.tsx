import { Header } from "@/components/header"
import { IndustriesPage } from "@/components/industries-page"
import { Footer } from "@/components/footer"
import { Head } from "next/document"
import ChatWidget from "@/components/chatbot";

export const metadata = {
  title: "Other Industries | Zea CRM",
  description:
    "Explore all the other Industries our products is use in",
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
