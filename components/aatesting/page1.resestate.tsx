"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import ChatWidget from "@/components/chatbot";
import FAQ from "@/components/faq";
import Link from "next/link";
import AniHealthcare from "../animations/ani-health";



export default function RealEstateCRM() {
  const [expanded, setExpanded] = useState(false);
  const [lockedOpen, setLockedOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState(0);

  useEffect(() => {
    if (panelRef.current) setPanelHeight(panelRef.current.scrollHeight);
  }, [expanded]);

  useEffect(() => {
    setVideoSrc(
      "https://www.youtube.com/embed/OTr-FSnv_vA?si=WwNuVNslymDjfmZs"
    );
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("youtube.com")) return;
      let data: any = event.data;
      try {
        if (typeof data === "string") data = JSON.parse(data);
      } catch {
        return;
      }
      if (!data?.event) return;
      const state = data.info?.playerState !== undefined ? data.info.playerState : data.data;
      if (state === 1) {
        setLockedOpen(true);
        setExpanded(true);
      } else if (state === 0 || state === 2) {
        setLockedOpen(false);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const onIframeLoad = () => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    try {
      win.postMessage(JSON.stringify({ event: "listening" }), "*");
      win.postMessage(
        JSON.stringify({ event: "command", func: "addEventListener", args: ["onStateChange"] }),
        "*"
      );
    } catch {}
  };

  useEffect(() => {
    if (!expanded && iframeRef.current && videoSrc) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "stopVideo", args: [] }),
        "*"
      );
      iframeRef.current.src = videoSrc;
    }
  }, [expanded, videoSrc]);

  return (
    <>
      <Header />

      {/* Top Video Reveal */}
      <section className="bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-600 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onMouseEnter={() => setExpanded(true)}
            onFocus={() => setExpanded(true)}
            className="w-full py-3 font-semibold tracking-wide flex items-center justify-center gap-2"
            aria-expanded={expanded}
          >
            Watch me
            <span className={`transition-transform ${expanded ? "rotate-180" : "rotate-0"}`}>▼</span>
          </button>
        </div>
        <div
          style={{ maxHeight: expanded ? panelHeight : 0 }}
          className="transition-[max-height] duration-500 ease-out overflow-hidden bg-slate-950 border-t border-black/20"
        >
          <div
            ref={panelRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => !lockedOpen && setExpanded(false)}
          >
            <div className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden border border-slate-800">
              <button
                aria-label="Close video"
                onClick={() => {
                  setExpanded(false);
                  setLockedOpen(false);
                }}
                className="absolute top-2 right-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-md bg-black/50 text-white hover:bg-black/70 transition"
              >
                ✕
              </button>
              {videoSrc && (
                <iframe
                  ref={iframeRef}
                  className="w-full h-full"
                  src={videoSrc}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="ZeaCRM Real Estate Video"
                  onLoad={onIframeLoad}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary">
              Real Estate CRM Powered by AI
            </h1>
            <p className="mt-4 text-muted-foreground text-xl">Smarter Sales, Faster Deals, Happier Clients.</p>
            <p className="mt-3 text-muted-foreground text-xl">
              Manage listings, inquiries, payments, and tenants from one powerful dashboard.
            </p>
            <p className="mt-3 text-muted-foreground text-xl">
              ZeaCRM empowers real estate professionals to automate everything — from lead capture to closing day.
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/get-started">Book a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/sign-in">Start Free Trial</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-xl border border-border p-0 bg-card overflow-hidden">
            <img src="/realestatebg.jpg" alt="Real estate" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Section 1 – The New Era of Real Estate Automation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <div className="md:w-4/5 mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-primary">The New Era of Real Estate Automation</h2>
          <p className="mt-4 text-muted-foreground text-xl">In real estate, speed and relationships drive every deal.</p>
          <p className="mt-3 text-muted-foreground text-xl">
            ZeaCRM helps you work smarter — capturing leads instantly, automating follow-ups, and giving you a complete view of every project and client.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
            <li className="p-4 rounded-lg bg-muted">Centralize all your sales, rentals, and project data.</li>
            <li className="p-4 rounded-lg bg-muted">Automate communication across WhatsApp, email, and SMS.</li>
            <li className="p-4 rounded-lg bg-muted">Predict conversions using AI-powered insights.</li>
            <li className="p-4 rounded-lg bg-muted">Save hours of manual work every week.</li>
          </ul>
        </div>
      </section>

      {/* Section 2 – Tailored Solutions for Every Role */}
      <section className="bg-muted/30 border-y border-border py-16 md:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-extrabold text-primary text-center">Tailored Solutions for Every Role</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6 text-left">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-2xl font-semibold text-primary text-center">Builders & Developers – Automate Sales & Cash Flow</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-center">Capture leads automatically from listings and ads</li>
                <li className="text-center">Send virtual tours and project updates via WhatsApp</li>
                <li className="text-center">Generate and sign digital booking forms</li>
                <li className="text-center">Track payment milestones and due dates</li>
              </ul>
              <p className="mt-4 text-muted-foreground text-center">📈 Result: Faster sales cycles and smoother project cash flow</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-2xl font-semibold text-primary text-center">Property Managers – Simplify Tenant Operations</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-center">Onboard tenants with automated agreements</li>
                <li className="text-center">Send rent reminders through WhatsApp or SMS</li>
                <li className="text-center">Manage maintenance requests and service billing</li>
              </ul>
              <p className="mt-4 text-muted-foreground text-center">📈 Result: Transparent operations and satisfied tenants</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-2xl font-semibold text-primary text-center">Brokers & Agencies – Close Deals Faster</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-center">Import leads from property portals automatically</li>
                <li className="text-center">Match buyers to properties using AI suggestions</li>
                <li className="text-center">Send property details instantly via WhatsApp</li>
              </ul>
              <p className="mt-4 text-muted-foreground text-center">📈 Result: More conversions with less manual work</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-2xl font-semibold text-primary text-center">Consultants & Advisors – Manage Clients Intelligently</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-center">Organize buyer preferences and budgets in one place</li>
                <li className="text-center">Automate follow-ups, calls, and meeting reminders</li>
                <li className="text-center">Assign tasks and track every client conversation</li>
              </ul>
              <p className="mt-4 text-muted-foreground text-center">📈 Result: Stronger relationships and better close rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 – One Platform, Endless Possibilities (Real Estate background) */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 -z-10">
          <img src="/realestatebg.jpg" alt="" className="h-full w-full object-cover opacity-15" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-primary">One Platform, Endless Possibilities</h2>
          <p className="mt-4 text-muted-foreground text-xl">
            ZeaCRM connects your sales, marketing, service, and property management in one place.
            No spreadsheets. No manual updates. No lost leads.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {[
              "Real-time deal and task tracking",
              "WhatsApp & email integrations",
              "Auto-reminder and notification workflows",
              "Digital documentation and e-signatures",
              "Centralized project and payment dashboards",
            ].map((item) => (
              <div key={item} className="p-4 rounded-lg bg-card border border-border text-lg">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animation / Visual section (kept style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-extrabold text-primary">See AI in Action</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Engage prospects, automate tasks, and reduce errors with a friendly AI assistant embedded in your workflows.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <AniHealthcare />
          </div>
        </div>
      </section>

      {/* Section 4 – Why Real Estate Teams Choose ZeaCRM */}
      <section className="bg-muted/30 border-y border-border py-16 md:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-extrabold text-primary text-center">Why Real Estate Teams Choose ZeaCRM</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              ["AI-Powered Insights", "Predict conversion potential and focus on high-value leads."],
              ["Automation-First Workflows", "Eliminate repetitive tasks and save time."],
              ["Data Security & Compliance", "Enterprise-grade encryption and user privacy built-in."],
              ["Industry-Ready Design", "Tailored for property sales, rentals, and management."],
              ["Scalable Growth", "From individual agents to enterprise developers — ZeaCRM scales effortlessly."],
            ].map(([title, desc]) => (
              <div key={title as string} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-2xl font-semibold text-primary text-center">{title as string}</h3>
                <p className="mt-2 text-lg text-muted-foreground">{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 – Ecosystem */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-primary text-center">Designed for the Entire Real Estate Ecosystem</h2>
        <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left text-lg">
          {[
            "Real Estate Agencies",
            "Property Developers",
            "Builders & Contractors",
            "Independent Agents",
            "Brokerage Firms",
            "Rental Managers",
            "Commercial Realtors",
            "Property Consultants",
            "Interior Designers",
            "Real Estate Investors",
            "Housing Societies",
          ].map((item) => (
            <li key={item} className="p-4 rounded-lg bg-muted border border-border">{item}</li>
          ))}
        </ul>
      </section>

      {/* Section 6 – Closing CTA */}
      <section className="bg-muted/30 border-y border-border py-16 md:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-extrabold text-primary text-center">Transform the Way You Manage Real Estate</h2>
          <p className="mt-4 text-muted-foreground text-xl">
            From first inquiry to final handover — ZeaCRM keeps everything connected, automated, and measurable.
            Experience the next generation of real estate management with complete visibility and control.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/get-started">Book a Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/sign-in">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 7 – FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <FAQ
          items={[
            {
              q: "How does ZeaCRM help in real estate lead management?",
              a:
                "ZeaCRM automates lead capture from portals and ads, scores leads using AI, and schedules personalized follow-ups — ensuring you never miss a potential buyer.",
            },
            {
              q: "Can ZeaCRM handle both sales and property management?",
              a:
                "Yes, ZeaCRM manages the full real estate lifecycle — from lead generation and sales tracking to rent reminders, maintenance tickets, and tenant communication.",
            },
            {
              q: "Is ZeaCRM suitable for small and large real estate teams?",
              a:
                "Absolutely. ZeaCRM scales easily — from solo brokers to enterprise developers — offering customizable workflows and role-based access.",
            },
            {
              q: "Does ZeaCRM integrate with WhatsApp and email?",
              a:
                "Yes, ZeaCRM connects with WhatsApp, Gmail, and other messaging tools to automate client communication and reminders.",
            },
            {
              q: "What makes ZeaCRM different from general CRMs?",
              a:
                "Unlike generic CRMs, ZeaCRM is built specifically for real estate — combining AI insights, property workflows, and automation to simplify sales, rentals, and management.",
            },
          ]}
        />
      </section>

      <ChatWidget />
      <Footer />
    </>
  );
}

