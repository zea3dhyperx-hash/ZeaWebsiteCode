"use client";
import React from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";


export default function RealEstateContent() {
  return (
    <main className="min-h-screen">
      <Header />
      <iframe
        src="/Industries2/realestate/index.html"
        title="Real Estate"
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
