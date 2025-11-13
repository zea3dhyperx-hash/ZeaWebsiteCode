"use client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ChatWidget from "@/components/chatbot";
import Link from "next/link";



export default function OtherIndustriesCRMPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="border-b border-border bg-background py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary text-center">
              AI-Powered CRM Solutions for Every Business
            </h1>
            <h2 className="mt-3 text-xl md:text-2xl font-semibold text-center">
              Smarter Relationship Management for Every Sector
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground text-center md:w-3/4 mx-auto">
              Every business thrives on relationships. ZeaCRM simplifies how you manage them ,automating communication, tracking performance, and personalizing engagement across industries. From travel to logistics, non-profits to entertainment, ZeaCRM adapts to your unique workflows, ensuring operational efficiency and consistent growth.
            </p>
          </div>
        </section>

        {/* Industries We Empower */}
        <section className="bg-muted/30 border-y border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-extrabold text-primary text-center">Industries We Empower</h3>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {/* 1. Hospitality & Travel */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="text-xl font-semibold">1. Hospitality & Travel</h4>
                <p className="mt-1">Deliver seamless guest experiences and manage reservations effortlessly.</p>
                <ul className="mt-3 list-disc list-inside text-muted-foreground">
                  <li>Online booking & reservation automation</li>
                  <li>Guest feedback & review management</li>
                  <li>Loyalty and referral campaign automation</li>
                </ul>
                <p className="mt-3 text-sm font-medium">?? Result: More bookings and repeat guests</p>
              </div>

              {/* 2. Logistics & Supply Chain */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="text-xl font-semibold">2. Logistics & Supply Chain</h4>
                <p className="mt-1">Boost coordination across operations and vendors.</p>
                <ul className="mt-3 list-disc list-inside text-muted-foreground">
                  <li>Real-time shipment tracking & updates</li>
                  <li>Order and delivery automation</li>
                  <li>Vendor communication dashboards</li>
                </ul>
                <p className="mt-3 text-sm font-medium">?? Result: Faster deliveries & reduced manual errors</p>
              </div>

              {/* 3. Non-Profit Organizations */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="text-xl font-semibold">3. Non-Profit Organizations</h4>
                <p className="mt-1">Build lasting donor relationships and maximize campaign impact.</p>
                <ul className="mt-3 list-disc list-inside text-muted-foreground">
                  <li>Donation & fundraiser automation</li>
                  <li>Donor reminders and engagement tracking</li>
                  <li>Transparent reporting dashboards</li>
                </ul>
                <p className="mt-3 text-sm font-medium">?? Result: More contributions & higher donor retention</p>
              </div>

              {/* 4. Events & Entertainment */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="text-xl font-semibold">4. Events & Entertainment</h4>
                <p className="mt-1">Streamline event planning and maximize audience engagement.</p>
                <ul className="mt-3 list-disc list-inside text-muted-foreground">
                  <li>Online registration & e-ticket automation</li>
                  <li>Event reminders & notifications</li>
                  <li>Post-event surveys & engagement insights</li>
                </ul>
                <p className="mt-3 text-sm font-medium">?? Result: Increased turnout & loyal audiences</p>
              </div>

              {/* 5. Energy & Utilities */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="text-xl font-semibold">5. Energy & Utilities</h4>
                <p className="mt-1">Manage services, billing, and customer communication with precision.</p>
                <ul className="mt-3 list-disc list-inside text-muted-foreground">
                  <li>Auto service request updates</li>
                  <li>Digital billing & payment tracking</li>
                  <li>Customer feedback automation</li>
                </ul>
                <p className="mt-3 text-sm font-medium">?? Result: Better response times & satisfied customers</p>
              </div>

              {/* 6. Construction & Real Estate Services */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="text-xl font-semibold">6. Construction & Real Estate Services</h4>
                <p className="mt-1">Stay on top of projects and client relationships.</p>
                <ul className="mt-3 list-disc list-inside text-muted-foreground">
                  <li>Lead capture & contract automation</li>
                  <li>Payment and milestone reminders</li>
                  <li>Project timeline tracking</li>
                </ul>
                <p className="mt-3 text-sm font-medium">?? Result: Faster deals & smoother project delivery</p>
              </div>

              {/* 7. Agriculture & Agri-Tech */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="text-xl font-semibold">7. Agriculture & Agri-Tech</h4>
                <p className="mt-1">Support farmers, distributors, and partners with smart data tools.</p>
                <ul className="mt-3 list-disc list-inside text-muted-foreground">
                  <li>Seasonal demand forecasting</li>
                  <li>Distributor communication automation</li>
                  <li>Supply tracking dashboards</li>
                </ul>
                <p className="mt-3 text-sm font-medium">?? Result: Improved distribution & better crop planning</p>
              </div>

              {/* 8. Government & Public Services */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="text-xl font-semibold">8. Government & Public Services</h4>
                <p className="mt-1">Improve efficiency and transparency in citizen engagement.</p>
                <ul className="mt-3 list-disc list-inside text-muted-foreground">
                  <li>Complaint tracking & feedback automation</li>
                  <li>Service communication channels</li>
                  <li>Data-driven performance insights</li>
                </ul>
                <p className="mt-3 text-sm font-medium">?? Result: More transparency & higher satisfaction</p>
              </div>

              {/* 9. Telecommunications */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="text-xl font-semibold">9. Telecommunications</h4>
                <p className="mt-1">Maintain customer connections with proactive automation.</p>
                <ul className="mt-3 list-disc list-inside text-muted-foreground">
                  <li>Renewal & upgrade reminders</li>
                  <li>Service request workflows</li>
                  <li>AI-driven support automation</li>
                </ul>
                <p className="mt-3 text-sm font-medium">?? Result: Reduced churn & stronger customer loyalty</p>
              </div>

              {/* 10. Recruitment & Staffing */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="text-xl font-semibold">10. Recruitment & Staffing</h4>
                <p className="mt-1">Streamline hiring workflows and candidate engagement.</p>
                <ul className="mt-3 list-disc list-inside text-muted-foreground">
                  <li>Candidate pipeline automation</li>
                  <li>Interview scheduling & follow-ups</li>
                  <li>Employer-candidate CRM dashboards</li>
                </ul>
                <p className="mt-3 text-sm font-medium">?? Result: Faster placements & better candidate experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why ZeaCRM Works Across Every Industry */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary text-center">Why ZeaCRM Works Across Every Industry</h3>
          <div className="mt-6 text-muted-foreground md:w-4/5 mx-auto space-y-4 text-lg">
            <p>
              ZeaCRM 's architecture is designed for scalability, adaptability, and automation. Whether your model is B2B, B2C, or hybrid, the platform integrates your workflows, automates repetitive tasks, and surfaces insights that drive results.
            </p>
            <p>
              With real-time dashboards, unified communication, and AI-driven analytics, ZeaCRM enables every team to work smarter, stay connected, and grow faster ,without complexity.
            </p>
          </div>
        </section>

        {/* Core Advantages */}
        <section className="bg-background border-t border-border py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-extrabold text-primary text-center">Core Advantages</h3>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-left text-lg">
              <li className="p-4 rounded-lg bg-card border border-border">? AI-Powered Intelligence  - Predict behavior and automate next actions</li>
              <li className="p-4 rounded-lg bg-card border border-border">? Automation-First Design  - Eliminate repetitive manual tasks</li>
              <li className="p-4 rounded-lg bg-card border border-border">? Secure & Compliant  - Built for privacy, safety, and control</li>
              <li className="p-4 rounded-lg bg-card border border-border">? Industry-Ready Templates  - Pre-built flows for rapid setup</li>
              <li className="p-4 rounded-lg bg-card border border-border">? Proven Growth Impact  - Drive measurable ROI across teams</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-background py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold">Your Business, Simplified with ZeaCRM</h3>
            <p className="mt-4 text-lg">ZeaCRM adapts to your industry so you can focus on growth, not guesswork. Start automating your workflows, personalizing engagement, and making smarter decisions ,today.</p>
            <div className="mt-8 flex gap-4 justify-center">
              <Link href="/demo" className="inline-flex items-center rounded-md bg-background text-primary px-5 py-2.5 font-semibold transition-transform hover:scale-[1.03] active:scale-95">Book a Demo</Link>
              <Link href="/get-started" className="inline-flex items-center rounded-md border border-background/80 px-5 py-2.5 font-semibold bg-transparent text-background transition-transform hover:scale-[1.03] active:scale-95">Start Free Trial</Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary text-center">FAQs</h3>
          <div className="mt-8 space-y-6">
            <details className="rounded-lg border border-border p-4 bg-card" open>
              <summary className="cursor-pointer font-semibold">Q1. How does ZeaCRM customize automation for different industries?</summary>
              <p className="mt-2 text-muted-foreground">ZeaCRM adapts through modular workflows and AI-driven logic, aligning with specific industry operations like hospitality bookings, logistics tracking, or donation campaigns -ensuring every business gains a personalized automation layer.</p>
            </details>
            <details className="rounded-lg border border-border p-4 bg-card">
              <summary className="cursor-pointer font-semibold">Q2. Can ZeaCRM support both B2B and B2C businesses?</summary>
              <p className="mt-2 text-muted-foreground">Yes. ZeaCRM is built for hybrid business models. Whether managing vendors, customers, or internal teams, it unifies all interactions for better coordination and engagement.</p>
            </details>
            <details className="rounded-lg border border-border p-4 bg-card">
              <summary className="cursor-pointer font-semibold">Q3. How does ZeaCRM improve global reach and customer experience?</summary>
              <p className="mt-2 text-muted-foreground">By combining multilingual support, AI analytics, and integrated communication tools, ZeaCRM enhances customer relationships and helps brands expand globally with consistent experience.</p>
            </details>
            <details className="rounded-lg border border-border p-4 bg-card">
              <summary className="cursor-pointer font-semibold">Q4. Is ZeaCRM suitable for non-profits and public sector organizations?</summary>
              <p className="mt-2 text-muted-foreground">Absolutely. ZeaCRM simplifies donor, citizen, and volunteer management while ensuring transparent data reporting and accountability -making it ideal for mission-driven organizations.</p>
            </details>
            <details className="rounded-lg border border-border p-4 bg-card">
              <summary className="cursor-pointer font-semibold">Q5. What makes ZeaCRM stand out for automation-driven industries?</summary>
              <p className="mt-2 text-muted-foreground">Unlike traditional CRMs, ZeaCRM blends automation, analytics, and communication in one platform -helping industries automate 80% of manual tasks and focus on growth.</p>
            </details>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
    </>
  );
}