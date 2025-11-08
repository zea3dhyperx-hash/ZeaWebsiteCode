import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollRestoration } from "@/components/scroll-restoration"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "zeaCRM - AI-Powered CRM for the Future of Business",
//   description: "Manage customers, automate workflows, and grow your business with zeaCRM",
//   generator: "v0.app",
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} font-sans antialiased`}>
        <ScrollRestoration />
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
