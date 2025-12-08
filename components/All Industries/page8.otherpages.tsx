"use client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ChatWidget from "@/components/chatbot";
import Link from "next/link";
import { BookDemoButton } from "../book-demo-button";
import {
  Plane,
  Package,
  HeartHandshake,
  Clapperboard,
  Zap,
  Building2,
  Sprout,
  ShieldCheck,
  PhoneCall,
  UserSearch,
  Sparkles,
  Gauge,
  Shield,
  TrendingUp,
} from "lucide-react";



export default function OtherIndustriesCRMPage() {
  const industries = [
    {
      title: "1. Hospitality & Travel",
      desc: "Deliver seamless guest experiences and manage reservations effortlessly.",
      bullets: [
        "Online booking & reservation automation",
        "Guest feedback & review management",
        "Loyalty and referral campaign automation",
      ],
      result: "Result: More bookings and repeat guests",
      image: "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=1400&q=80",
      Icon: Plane,
    },
    {
      title: "2. Logistics & Supply Chain",
      desc: "Boost coordination across operations and vendors.",
      bullets: [
        "Real-time shipment tracking & updates",
        "Order and delivery automation",
        "Vendor communication dashboards",
      ],
      result: "Result: Faster deliveries & reduced manual errors",
      image: "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1400&q=80",
      Icon: Package,
    },
    {
      title: "3. Non-Profit Organizations",
      desc: "Build lasting donor relationships and maximize campaign impact.",
      bullets: ["Donation & fundraiser automation", "Donor reminders and engagement tracking", "Transparent reporting dashboards"],
      result: "Result: More contributions & higher donor retention",
      image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?auto=format&fit=crop&w=1400&q=80",
      Icon: HeartHandshake,
    },
    {
      title: "4. Events & Entertainment",
      desc: "Streamline event planning and maximize audience engagement.",
      bullets: ["Online registration & e-ticket automation", "Event reminders & notifications", "Post-event surveys & engagement insights"],
      result: "Result: Increased turnout & loyal audiences",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80",
      Icon: Clapperboard,
    },
    {
      title: "5. Energy & Utilities",
      desc: "Manage services, billing, and customer communication with precision.",
      bullets: ["Auto service request updates", "Digital billing & payment tracking", "Customer feedback automation"],
      result: "Result: Better response times & satisfied customers",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
      Icon: Zap,
    },
    {
      title: "6. Construction & Real Estate Services",
      desc: "Stay on top of projects and client relationships.",
      bullets: ["Lead capture & contract automation", "Payment and milestone reminders", "Project timeline tracking"],
      result: "Result: Faster deals & smoother project delivery",
      image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
      Icon: Building2,
    },
    {
      title: "7. Agriculture & Agri-Tech",
      desc: "Support farmers, distributors, and partners with smart data tools.",
      bullets: ["Seasonal demand forecasting", "Distributor communication automation", "Supply tracking dashboards"],
      result: "Result: Improved distribution & better crop planning",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
      Icon: Sprout,
    },
    {
      title: "8. Government & Public Services",
      desc: "Improve efficiency and transparency in citizen engagement.",
      bullets: ["Complaint tracking & feedback automation", "Service communication channels", "Data-driven performance insights"],
      result: "Result: More transparency & higher satisfaction",
      image: "https://images.unsplash.com/photo-1529429617124-aee1f1650a5c?auto=format&fit=crop&w=1400&q=80",
      Icon: ShieldCheck,
    },
    {
      title: "9. Telecommunications",
      desc: "Maintain customer connections with proactive automation.",
      bullets: ["Renewal & upgrade reminders", "Service request workflows", "AI-driven support automation"],
      result: "Result: Reduced churn & stronger customer loyalty",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
      Icon: PhoneCall,
    },
    {
      title: "10. Recruitment & Staffing",
      desc: "Streamline hiring workflows and candidate engagement.",
      bullets: ["Candidate pipeline automation", "Interview scheduling & follow-ups", "Employer-candidate CRM dashboards"],
      result: "Result: Faster placements & better candidate experience",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80",
      Icon: UserSearch,
    },
  ];

  const advantages = [
    { text: "AI-Powered Intelligence  - Predict behavior and automate next actions", Icon: Sparkles },
    { text: "Automation-First Design  - Eliminate repetitive manual tasks", Icon: Gauge },
    { text: "Secure & Compliant  - Built for privacy, safety, and control", Icon: Shield },
    { text: "Industry-Ready Templates  - Pre-built flows for rapid setup", Icon: Building2 },
    { text: "Proven Growth Impact  - Drive measurable ROI across teams", Icon: TrendingUp },
  ];

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative border-b border-border bg-background py-16 md:py-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(223,168,34,0.15), rgba(13,148,136,0.2)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
                  AI-Powered CRM Solutions for Every Business
                </h1>
                <h2 className="text-lg md:text-xl font-semibold text-foreground/90">
                  Smarter Relationship Management for Every Sector
                </h2>
                <p className="text-lg text-muted-foreground">
                  Every business thrives on relationships. ZeaCRM simplifies how you manage them ,automating communication, tracking performance, and personalizing engagement across industries. From travel to logistics, non-profits to entertainment, ZeaCRM adapts to your unique workflows, ensuring operational efficiency and consistent growth.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    <Sparkles className="h-4 w-4" />
                    Automation-first
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    <Shield className="h-4 w-4" />
                    Secure by design
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-emerald-500/10 to-background blur-3xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                    alt="Team collaborating with dashboards"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Empower */}
        <section className="bg-muted/30 border-y border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-extrabold text-primary text-center">Industries We Empower</h3>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {industries.map((industry) => {
                const Icon = industry.Icon;
                return (
                  <div
                    key={industry.title}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div
                      className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-35"
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgba(223,168,34,0.3), rgba(13,148,136,0.35)), url('${industry.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/40 to-transparent" aria-hidden="true" />
                    <div className="relative flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 border border-primary/30 text-primary shadow-inner">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold">{industry.title}</h4>
                        <p>{industry.desc}</p>
                        <ul className="space-y-1 text-muted-foreground text-sm">
                          {industry.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <span className="mt-[6px] h-2 w-2 rounded-full bg-primary/70" aria-hidden="true" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm font-medium text-primary">{industry.result}</p>
                      </div>
                    </div>
                    <div className="absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:-right-6 group-hover:-bottom-6" aria-hidden="true" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why ZeaCRM Works Across Every Industry */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/20 via-emerald-500/10 to-background blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                  alt="Multiscreen analytics"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-extrabold text-primary">Why ZeaCRM Works Across Every Industry</h3>
              <p className="text-muted-foreground text-lg">
                ZeaCRM 's architecture is designed for scalability, adaptability, and automation. Whether your model is B2B, B2C, or hybrid, the platform integrates your workflows, automates repetitive tasks, and surfaces insights that drive results.
              </p>
              <p className="text-muted-foreground text-lg">
                With real-time dashboards, unified communication, and AI-driven analytics, ZeaCRM enables every team to work smarter, stay connected, and grow faster ,without complexity.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Unified messaging & automation",
                  "Role-based access & compliance",
                  "Live reporting for every team",
                  "Industry-tailored playbooks",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground/90">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 border border-primary/30 text-primary">
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Advantages */}
        <section className="bg-background border-t border-border py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-extrabold text-primary text-center">Core Advantages</h3>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-left text-lg">
              {advantages.map(({ text, Icon }) => (
                <li
                  key={text}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 border border-primary/30 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-background py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold">Your Business, Simplified with ZeaCRM</h3>
            <p className="mt-4 text-lg">ZeaCRM adapts to your industry so you can focus on growth, not guesswork. Start automating your workflows, personalizing engagement, and making smarter decisions ,today.</p>
            <div className="mt-8 flex gap-4 justify-center">
              {/* <Link href="/playbooks/videos" className="inline-flex items-center rounded-md bg-background text-primary px-5 py-2.5 font-semibold transition-transform hover:scale-[1.03] active:scale-95">Watch Demo Video</Link> */}
              <BookDemoButton className="inline-flex items-center rounded-md border border-background/80 px-5 py-2.5 font-semibold bg-background text-primary transition-transform hover:scale-[1.03] active:scale-95">
                Book a Demo
              </BookDemoButton>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary text-center">FAQs</h3>
          <div className="mt-8 space-y-6">
            <details className="rounded-lg border border-border p-4 bg-card" open>
              <summary className="cursor-pointer font-semibold">How does ZeaCRM customize automation for different industries?</summary>
              <p className="mt-2 text-muted-foreground">ZeaCRM adapts through modular workflows and AI-driven logic, aligning with specific industry operations like hospitality bookings, logistics tracking, or donation campaigns -ensuring every business gains a personalized automation layer.</p>
            </details>
            <details className="rounded-lg border border-border p-4 bg-card">
              <summary className="cursor-pointer font-semibold">Can ZeaCRM support both B2B and B2C businesses?</summary>
              <p className="mt-2 text-muted-foreground">Yes. ZeaCRM is built for hybrid business models. Whether managing vendors, customers, or internal teams, it unifies all interactions for better coordination and engagement.</p>
            </details>
            <details className="rounded-lg border border-border p-4 bg-card">
              <summary className="cursor-pointer font-semibold">How does ZeaCRM improve global reach and customer experience?</summary>
              <p className="mt-2 text-muted-foreground">By combining multilingual support, AI analytics, and integrated communication tools, ZeaCRM enhances customer relationships and helps brands expand globally with consistent experience.</p>
            </details>
            <details className="rounded-lg border border-border p-4 bg-card">
              <summary className="cursor-pointer font-semibold">Is ZeaCRM suitable for non-profits and public sector organizations?</summary>
              <p className="mt-2 text-muted-foreground">Absolutely. ZeaCRM simplifies donor, citizen, and volunteer management while ensuring transparent data reporting and accountability -making it ideal for mission-driven organizations.</p>
            </details>
            <details className="rounded-lg border border-border p-4 bg-card">
              <summary className="cursor-pointer font-semibold">What makes ZeaCRM stand out for automation-driven industries?</summary>
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
