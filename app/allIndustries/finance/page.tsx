"use client";
import React from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function WhyUsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <iframe
        src="/industries/Finance/index.html"
        title="Finance & Insurance"
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
