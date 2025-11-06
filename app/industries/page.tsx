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
      {/* <Head>
        <title>Other Industries | Zea CRM</title>
        <meta
          name="description"
          content="Boost productivity with Zea CRM — the all-in-one automation platform for every industry. From real estate and finance to education, healthcare, and retail, Zea CRM helps streamline workflows, manage leads, and scale operations effortlessly."
        />
      </Head> */}
      <Header />
      <IndustriesPage />
      <Footer />
      <ChatWidget />
    </>
  )
}
