"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AniRetail from "../animations/ani-retail";
import AniRetail1 from "../animations/ani-retail1";
import {
  ShoppingBag,
  Store,
  Package,
  Sparkles,
  ShieldCheck,
  Workflow,
  TrendingUp,
  Users2,
  Bot,
  Wrench,
  CreditCard,
  Globe2,
  CheckCircle2,
  Gift,
  Truck,
  Tag,
  Megaphone,
  ClipboardCheck,
  RefreshCw,
} from "lucide-react";

export default function RetailEcomCRM() {
  // Keep video reveal UX consistent with aatesting pages
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
      "https://www.youtube.com/embed/F67s8-t_Xls?si=CkvsMfGrcXkt3SDh"
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

      {/* Keep video + effects at top */}
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
            <span className={`transition-transform ${expanded ? "rotate-180" : "rotate-0"}`}>⏷</span>
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
                  title="ZeaCRM Retail & E‑Commerce Video"
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
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">Retail & E-Commerce CRM</h1>
            <p className="mt-3 text-muted-foreground text-lg">Boost Sales. Build Loyalty. Automate Everything.</p>
            <p className="mt-3 text-muted-foreground text-lg">Deliver seamless, personalized shopping experiences with ZeaCRM — the AI-powered platform that connects your stores, customers, and campaigns in one place.</p>
            <p className="mt-3 text-muted-foreground text-lg">Automate marketing, track orders, manage loyalty, and grow globally — all from a single dashboard.</p>
            <p className="mt-3 text-muted-foreground text-lg">🎯 Transform browsing into buying with automation that never sleeps.</p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/playbooks/videos">Watch Demo Video</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/get-started">Book a Demo</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-xl border border-border p-0 object-contain bg-card overflow-hidden">
            <video
              src="https://storage.googleapis.com/msgsndr/bsexF0htDBOfNeCh7844/media/692e783b2b865e22f247b285.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Solutions by Business Type */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Solutions by Business Type</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
            <h3 className="text-xl font-background font-semibold">Online Stores</h3>
            <ul className="mt-4 space-y-2 text-muted-background">
              <li>Automated order confirmations & real-time shipping updates via WhatsApp and Email</li>
              <li>AI-driven abandoned cart recovery & personalized promotions</li>
              <li>Seamless digital payments and billing workflows</li>
            </ul>
            <p className="mt-4 text-sm">📈 Result: More conversions and repeat orders</p>
          </div>
          <div className="group rounded-xl border border-border scale-105 bg-primary bg-card p-6 transition-all duration-300 hover:shadow-lg hover:scale-108">
            <h3 className="text-xl text-background font-semibold">Supermarkets & Retail Chains</h3>
            <ul className="mt-4 space-y-2 text-background">
              <li>Centralized inventory sync with auto low-stock alerts</li>
              <li>Automated loyalty rewards & personalized customer offers</li>
              <li>Feedback campaigns that boost satisfaction and retention</li>
            </ul>
            <p className="mt-4 text-background text-sm">📈 Result: More repeat buyers and optimized operations</p>
          </div>
          <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
            <h3 className="text-xl font-background font-semibold">Franchise Outlets</h3>
            <ul className="mt-4 space-y-2 text-muted-background">
              <li>Unified CRM and marketing dashboards across all branches</li>
              <li>Royalty tracking and performance analytics</li>
              <li>Consistent customer engagement & brand experience</li>
            </ul>
            <p className="mt-4 text-sm">📈 Result: Stronger brand presence and predictable growth</p>
          </div>
        </div>
      </section>

      {/* AI-Powered CRM */}
      <section className="bg-muted/30 border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">AI‑Powered CRM for Modern Commerce</h2>
          <p className="mt-4 text-lg text-muted-foreground">Smarter engagement across every channel</p>
          <p className="mt-3 text-muted-foreground text-lg">ZeaCRM bridges online and offline retail with automation and intelligence.
Manage all customer interactions, marketing campaigns, and order journeys — all in one place.
Our AI predicts buying behavior, suggests next-best offers, and ensures every message hits at the perfect moment.</p>
        </div>
      </section>

      {/* Who We Help */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-balance text-[rgba(223,168,34,1)]">Who We Help</h2>
        <div className="mt-8 space-y-2 text-center">
          <p className="pb-5 leading-9">ZeaCRM empowers the full retail ecosystem:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left leading-8">
            {[
              { title: "Online Stores", desc: "Automate campaigns, order updates & customer feedback.", Icon: ShoppingBag },
              { title: "Retail Chains", desc: "Manage multiple locations with unified customer data.", Icon: Store },
              { title: "Fashion & Apparel Brands", desc: "Personalize recommendations & loyalty rewards.", Icon: Tag },
              { title: "Grocery & FMCG Stores", desc: "Enable automated reorders & product notifications.", Icon: Package },
              { title: "Electronics Retailers", desc: "Manage warranties, repairs & service tickets.", Icon: Wrench },
              { title: "Luxury & Lifestyle Brands", desc: "Design VIP programs & exclusive engagement.", Icon: Gift },
              { title: "Beauty & Wellness Brands", desc: "Automate reminders & after-care follow-ups.", Icon: Sparkles },
              { title: "Home & Interior Stores", desc: "Track high-value projects & lead pipelines.", Icon: ClipboardCheck },
              { title: "E-Commerce Marketplaces", desc: "Connect chat, feedback, and customer support.", Icon: Megaphone },
              { title: "Subscription Businesses", desc: "Automate renewals, upsells, and recurring engagement.", Icon: RefreshCw },
              { title: "Franchise Networks", desc: "Maintain centralized control over customer experience.", Icon: Users2 },
            ].map(({ title, desc, Icon }, idx) => (
              <div key={title} className="flex gap-4 items-start animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${100 + idx * 100}ms` }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 border border-primary/30 text-primary flex-shrink-0">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>        </div>
      </section>

      {/* All-in-One Platform */}
      <section className="bg-background py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary">All‑in‑One Platform for Retail Growth</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground text-lg">
              <li>🧭 Real-time analytics & reporting</li>
              <li>🤖 Smart automation for every workflow</li>
              <li>💬 Integrated WhatsApp, Email & SMS engagement</li>
              <li>💳 Payment gateway and order sync integration</li>
              <li>🛒 Shopify, WooCommerce, and ERP compatibility</li>
            </ul>
            <p className="mt-4 text-sm">📈 Result: Connected teams, loyal customers, and accelerated revenue growth.</p>
          </div>
          {/* <div className="rounded-xl border border-border p-0 object-contain bg-card overflow-hidden"> */}
            <AniRetail />
          {/* </div> */}
        </div>
      </section>
      
      <section className="bg-background py-10 md:py-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Why ZeaCRM?</h2>
          <p className="text-center py-2 text-muted-foreground text-lg">Our platform is built on five foundations that drive retail transformation:</p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <ul className="mt-2 space-y-2 justify-center bg-card bg-muted rounded-lg px-10 py-6">
              <li>•	AI-Powered — Predict, personalize, and perform.</li>
              <li>•	Automation-First — Save time, scale faster.</li>
              <li>•	Secure & Compliant — Enterprise-grade protection for customer data.</li>
              <li>•	Industry-Ready — Designed for retail and e-commerce challenges.</li>
              <li>•	Proven Impact — Real-world performance, measurable outcomes.</li>
            </ul>
            <AniRetail1 />
        </div>
      </section>

      

      

      {/* Why ZeaCRM */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="md:w-2/3 mx-auto">
          <AniRetail1 />
          
        </div>
        
      </section> */}

      {/* CTA */}
      <section className="bg-primary text-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">Future‑Ready Retail Starts Here</h2>
          <p className="mt-4 text-lg">See how ZeaCRM transforms engagement into growth.</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/playbooks/videos">Watch Demo Video</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-background border-background">
              <Link href="/get-started">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center">FAQs</h2>
        <div className="mt-8 space-y-6">
          <details className="rounded-lg border border-border p-4 bg-card" open>
            <summary className="cursor-pointer font-semibold">How does AI improve engagement?</summary>
            <p className="mt-2 text-muted-foreground">ZeaCRM predicts behavior and automates follow-ups to drive conversions.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">What is AEO and why is it important?</summary>
            <p className="mt-2 text-muted-foreground">AEO makes your brand visible in AI tools like ChatGPT and Gemini.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">Is ZeaCRM GEO-neutral?</summary>
            <p className="mt-2 text-muted-foreground">Yes — it supports multiple languages, currencies, and markets.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">Can AI predict future purchases?</summary>
            <p className="mt-2 text-muted-foreground">Yes — ZeaCRM analyzes buying patterns to suggest next orders.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">How does automation save time?</summary>
            <p className="mt-2 text-muted-foreground">ZeaCRM handles marketing, billing, and customer updates automatically.</p>
          </details>
        </div>
      </section>

      <Footer />
    </>
  );
}
