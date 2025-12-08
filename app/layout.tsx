import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { ScrollToTop } from "@/components/scroll-to-top"
import { GAAnalytics } from "@/components/ga-analytics"
import "./globals.css"
import { GA_MEASUREMENT_ID } from "@/lib/gtag"

const dmSans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "zeaCRM - AI-Powered CRM for the Future of Business",
  description: "Manage customers, automate workflows, and grow your business with zeaCRM",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      // { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    // apple: "/apple-icon.png",
    shortcut: "/favicon.png",
  },
  verification: {
    google: "Nm6TLNg9Xdp0IjphwwMTC-cSHAgSJu63QRzSNed4g9o",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="BxYXZLYni53vNv3vZiVyep3-9ooDd1CDpsyShUYaKcE" />
      </head>
        <body className={`${dmSans.className} font-sans antialiased`}>
          {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = window.gtag || gtag;
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
            <GAAnalytics />
          </>
        )}

        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
