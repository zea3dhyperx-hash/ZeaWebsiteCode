"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import ChatWidget from "@/components/chatbot";
import FAQ from "@/components/faq";
import Link from "next/link";
import { BookDemoButton } from "../book-demo-button";
import AniHealthcare from "../animations/ani-health";
import AniRealEstate from "../animations/ani-realestate";
import {
  Home,
  MapPin,
  Sparkles,
  Building2,
  Wrench,
  Workflow,
  ShieldCheck,
  Users2,
  Bot,
  TrendingUp,
  KeyRound,
  PhoneCall,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";



export default function RealEstateCRM() {
  const [expanded, setExpanded] = useState(false);
  const [lockedOpen, setLockedOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (panelRef.current) setPanelHeight(panelRef.current.scrollHeight);
  }, [expanded]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setVideoSrc(
      "https://www.youtube.com/embed/OTr-FSnv_vA?autoplay=0&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1&disablekb=1"
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

      {/* Top Video Reveal - structure copied from page2.retailcrm.tsx */}
      <section 
        className="bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-600 text-slate-900"
        onMouseEnter={() => {
          // Clear any existing timeout
          if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
          }
          // Set timeout to open after 1 second
          hoverTimeoutRef.current = setTimeout(() => {
            setExpanded(true);
          }, 0);
        }}
        onMouseLeave={(e) => {
          if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
          }

          if (lockedOpen) return;

          const relatedTarget = e.relatedTarget as EventTarget | null;

          // Bail if the browser gives us something unexpected
          if (!relatedTarget || !(relatedTarget instanceof Node)) {
            return;
          }

          // Prevent collapse when entering iframe
          if (
            (iframeRef.current && iframeRef.current.contains(relatedTarget))
          ) {
            return;
          }

          // Close only when moving to header
          if (relatedTarget instanceof Element && typeof relatedTarget.closest === "function") {
            if (relatedTarget.closest("header")) {
              setExpanded(false);
              return;
            }
          }
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
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
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
              Real Estate CRM Powered by AI
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">Smarter Sales, Faster Deals, Happier Clients.</p>
            <p className="mt-3 text-muted-foreground text-lg">
              Manage listings, inquiries, payments, and tenants from one powerful dashboard.
            </p>
            <p className="mt-3 text-muted-foreground text-lg">
              ZeaCRM empowers real estate professionals to automate everything - from lead capture to closing day.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                { label: "AI follow-ups", Icon: Bot },
                { label: "Deal desk", Icon: ClipboardCheck },
                { label: "Secure docs", Icon: ShieldCheck },
              ].map(({ label, Icon }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm text-foreground/80 shadow-sm">
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/playbooks/videos">Watch Demo Video</Link>
              </Button>
              <BookDemoButton className="inline-flex items-center justify-center rounded-md border border-primary bg-transparent px-6 py-3 text-lg font-semibold text-primary transition hover:bg-primary/10">
                Book a Demo
              </BookDemoButton>
            </div>
          </div>
          <div className="rounded-xl border border-border p-0 object-contain bg-card overflow-hidden">
            <video
              src="/videos/realvid.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Section 1 – The New Era of Real Estate Automation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <div className="md:w-4/5 mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">The New Era of Real Estate Automation</h2>
          <p className="mt-4 text-muted-foreground text-lg">In real estate, speed and relationships drive every deal.</p>
          <p className="mt-3 text-muted-foreground text-lg">
            ZeaCRM helps you work smarter - capturing leads instantly, automating follow-ups, and giving you a complete view of every project and client.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
            {[
              { text: "Centralize all your sales, rentals, and project data.", Icon: Home },
              { text: "Automate communication across WhatsApp, email, and SMS.", Icon: PhoneCall },
              { text: "Predict conversions using AI-powered insights.", Icon: TrendingUp },
              { text: "Save hours of manual work every week.", Icon: Sparkles },
            ].map(({ text, Icon }) => (
              <li key={text} className="p-4 rounded-lg bg-muted border border-border hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 border border-primary/30 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 2 – Tailored Solutions for Every Role */}
      <section className="bg-muted/30 border-y border-border py-16 md:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Tailored Solutions for Every Role</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6 text-left">
            {[
              {
                title: "Builders & Developers - Automate Sales & Cash Flow",
                bullets: [
                  "Capture leads automatically from listings and ads",
                  "Send virtual tours and project updates via WhatsApp",
                  "Generate and sign digital booking forms",
                  "Track payment milestones and due dates",
                ],
                result: "Result: Faster sales cycles and smoother project cash flow",
                Icon: Building2,
              },
              {
                title: "Property Managers - Simplify Tenant Operations",
                bullets: [
                  "Onboard tenants with automated agreements",
                  "Send rent reminders through WhatsApp or SMS",
                  "Manage maintenance requests and service billing",
                ],
                result: "Result: Transparent operations and satisfied tenants",
                Icon: KeyRound,
              },
              {
                title: "Brokers & Agencies - Close Deals Faster",
                bullets: [
                  "Import leads from property portals automatically",
                  "Match buyers to properties using AI suggestions",
                  "Send property details instantly via WhatsApp",
                ],
                result: "Result: More conversions with less manual work",
                Icon: MapPin,
              },
              {
                title: "Consultants & Advisors - Manage Clients Intelligently",
                bullets: [
                  "Organize buyer preferences and budgets in one place",
                  "Automate follow-ups, calls, and meeting reminders",
                  "Assign tasks and track every client conversation",
                ],
                result: "Result: Stronger relationships and better close rates",
                Icon: Users2,
              },
            ].map(({ title, bullets, result, Icon }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-5 hover:scale-105 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center gap-2">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-primary text-center">{title}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-center">{result}</p>
              </div>
            ))}
          </div>        </div>
      </section>

      {/* Section 3 – One Platform, Endless Possibilities (Real Estate background) */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 -z-10">
          <img src="/realestatebg.jpg" alt="real estate image" className="h-full w-full object-cover opacity-15" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">One Platform, Endless Possibilities</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            ZeaCRM connects your sales, marketing, service, and property management in one place.
            No spreadsheets. No manual updates. No lost leads.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {[
              { text: "Real-time deal and task tracking", Icon: ClipboardCheck },
              { text: "WhatsApp & email integrations", Icon: PhoneCall },
              { text: "Auto-reminder and notification workflows", Icon: Sparkles },
              { text: "Digital documentation and e-signatures", Icon: KeyRound },
              { text: "Centralized project and payment dashboards", Icon: TrendingUp },
            ].map(({ text, Icon }) => (
              <div key={text} className="p-4 rounded-lg bg-card border border-border text-lg hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 border border-primary/30 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animation / Visual section (kept style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-1 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl text-center font-extrabold text-primary">See AI in Action</h2>
            <p className="mt-4 text-lg text-center text-muted-foreground">
              Engage prospects, automate tasks, and reduce errors with a friendly AI assistant embedded in your workflows.
            </p>
          </div>
          {/* <AniRealEstate /> */}
          {/* <div className="rounded-xl border border-border bg-card p-4">
            <AniRealEstate />
          </div> */}
        </div>
        <AniRealEstate />
      </section>

      {/* Section 4 – Why Real Estate Teams Choose ZeaCRM */}
      <section className="bg-muted/30 border-y border-border py-16 md:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Why Real Estate Teams Choose ZeaCRM</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: "AI-Powered Insights", desc: "Predict conversion potential and focus on high-value leads.", Icon: Bot },
              { title: "Automation-First Workflows", desc: "Eliminate repetitive tasks and save time.", Icon: Workflow },
              { title: "Data Security & Compliance", desc: "Enterprise-grade encryption and user privacy built-in.", Icon: ShieldCheck },
              { title: "Industry-Ready Design", desc: "Tailored for property sales, rentals, and management.", Icon: Building2 },
              { title: "Scalable Growth", desc: "From individual agents to enterprise developers - ZeaCRM scales effortlessly.", Icon: TrendingUp },
            ].map(({ title, desc, Icon }) => (
              <div key={title as string} className="rounded-xl border border-border bg-card p-5 hover:scale-105 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center gap-2">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-primary text-center">{title as string}</h3>
                </div>
                <p className="mt-2 text-lg text-muted-foreground">{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 – Ecosystem */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Designed for the Entire Real Estate Ecosystem</h2>
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
            <li key={item} className="p-4 rounded-lg bg-muted border border-border hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 border border-primary/30 text-primary">
                <Home className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 6 – Closing CTA */}
      <section className="bg-muted/30 border-y border-border py-16 md:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Transform the Way You Manage Real Estate</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From first inquiry to final handover — ZeaCRM keeps everything connected, automated, and measurable.
            Experience the next generation of real estate management with complete visibility and control.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/playbooks/videos">Watch Demo Video</Link>
            </Button>
            <BookDemoButton className="inline-flex items-center justify-center rounded-md border border-primary bg-transparent px-6 py-3 text-lg font-semibold text-primary transition hover:bg-primary/10">
              Book a Demo
            </BookDemoButton>
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
