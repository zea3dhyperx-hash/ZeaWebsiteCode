
import React from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata = {
  title: " Automotive & Manufacturing | Zea CRM",
  description:
    " Zea CRM streamlines automotive and manufacturing operations with AI-powered automation. Manage leads, track inventory, and optimize workflows to drive efficiency and growth in your business.",
};

export default function WhyUsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <iframe
        src="/Industries2/automotive/index.html"
        title="Automotive & Manufacturing"
        style={{
          width: "100%",
          height: "calc(100vh - 0px)", // adjust for header/footer height
          border: "none",
        }}
      />
      <Footer />
    </main>
  );
}
