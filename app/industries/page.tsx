import { Header } from "@/components/header"
import { IndustriesPage } from "@/components/industries-page"
import { Footer } from "@/components/footer"
import { Head } from "next/document"

// export const metadata = {
//   title: "Industries | Zea CRM",
//   description: "Explore how Zea CRM fits your industry. Tailored solutions for automotive, education, real estate, healthcare, and more to capture leads, streamline workflows, and close deals faster.",
//   openGraph: {
//     title: "Industries | Zea CRM",
//     description: "Zea CRM solutions tailored for automotive, education, real estate, healthcare, and more.",
//     type: "website"
// },

{/* <meta name="Other Industries page" content="Zea CRM delivers powerful automation for all industries — real estate, finance, healthcare, education, and more. Simplify operations, track leads, and accelerate business growth with an industry-ready CRM platform."></meta> */}

export default function IndustriesPageRoute() {
  return (
    <>
      <Head>
        <title>Other Industries | Zea CRM</title>
        <meta
          name="description"
          content="Boost productivity with Zea CRM — the all-in-one automation platform for every industry. From real estate and finance to education, healthcare, and retail, Zea CRM helps streamline workflows, manage leads, and scale operations effortlessly."
        />
      </Head>
      <Header />
      <IndustriesPage />
      <Footer />
    </>
  )
}
