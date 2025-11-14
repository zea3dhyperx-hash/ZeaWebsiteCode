"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RetailEcomCRM() {
  // Keep video reveal UX consistent with aatesting pages
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
      <section className="bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-600 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onMouseEnter={() => setExpanded(true)}
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
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary">Retail & E-Commerce CRM</h1>
            <p className="mt-3 text-muted-foreground text-xl">Boost Sales. Build Loyalty. Automate Everything.</p>
            <p className="mt-3 text-muted-foreground text-xl">Deliver seamless, personalized shopping experiences with ZeaCRM — the AI-powered platform that connects your stores, customers, and campaigns in one place.</p>
            <p className="mt-3 text-muted-foreground text-xl">Automate marketing, track orders, manage loyalty, and grow globally — all from a single dashboard.</p>
            <p className="mt-3 text-muted-foreground text-xl">🎯 Transform browsing into buying with automation that never sleeps.</p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/demo">Book a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/get-started">Start Free Trial</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-xl border border-border p-6 bg-card">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <li className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">Automation that never sleeps</li>
              <li className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">Unified customer data across channels</li>
              <li className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">Order + loyalty in one view</li>
              <li className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">Predictive offers with AI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions by Business Type */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Solutions by Business Type</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-semibold">Online Stores</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Automated order confirmations & real-time shipping updates via WhatsApp and Email</li>
              <li>AI-driven abandoned cart recovery & personalized promotions</li>
              <li>Seamless digital payments and billing workflows</li>
            </ul>
            <p className="mt-4 text-sm">📈 Result: More conversions and repeat orders</p>
          </div>
          <div className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-semibold">Supermarkets & Retail Chains</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Centralized inventory sync with auto low-stock alerts</li>
              <li>Automated loyalty rewards & personalized customer offers</li>
              <li>Feedback campaigns that boost satisfaction and retention</li>
            </ul>
            <p className="mt-4 text-sm">📈 Result: More repeat buyers and optimized operations</p>
          </div>
          <div className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-semibold">Franchise Outlets</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
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
          <p className="mt-4 text-xl text-muted-foreground">Smarter engagement across every channel</p>
          <p className="mt-3 text-muted-foreground text-lg">ZeaCRM bridges online and offline retail with automation and intelligence.
Manage all customer interactions, marketing campaigns, and order journeys — all in one place.
Our AI predicts buying behavior, suggests next-best offers, and ensures every message hits at the perfect moment.</p>
        </div>
      </section>

      {/* Who We Help */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Who We Help</h2>
        <div className="mt-8 space-y-2 text-center">
          <p className="pb-5">ZeaCRM empowers the full retail ecosystem:</p>
          <ol className="text-left md:w-2/3 mx-auto justify-center bg-card bg-muted rounded-lg px-20 py-10 list-decimal list-inside space-y-2">
            <li>Online Stores – Automate campaigns, order updates & customer feedback.</li>
            <li>Retail Chains – Manage multiple locations with unified customer data.</li>
            <li>Fashion & Apparel Brands – Personalize recommendations & loyalty rewards.</li>
            <li>Grocery & FMCG Stores – Enable automated reorders & product notifications.</li>
            <li>Electronics Retailers – Manage warranties, repairs & service tickets.</li>
            <li>Luxury & Lifestyle Brands – Design VIP programs & exclusive engagement.</li>
            <li>Beauty & Wellness Brands – Automate reminders & after-care follow-ups.</li>
            <li>Home & Interior Stores – Track high-value projects & lead pipelines.</li>
            <li>E-Commerce Marketplaces – Connect chat, feedback, and customer support.</li>
            <li>Subscription Businesses – Automate renewals, upsells, and recurring engagement.</li>
            <li>Franchise Networks – Maintain centralized control over customer experience.</li>
          </ol>
        </div>
      </section>

      {/* All-in-One Platform */}
      <section className="bg-background border-t border-border py-16 md:py-24">
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
          <div className="rounded-xl border border-border p-0 object-contain bg-card overflow-hidden">
            <video
              src="/videos/retailvid.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Animated Timeline (loop) */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Customer Journey Timeline</h2>
        <div className="mt-10 relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-primary/30 rounded" />
          <ul className="space-y-8">
            {[
              { t: "Browse", d: "AI identifies intent and segments visitor" },
              { t: "Engage", d: "Personalized offer via WhatsApp/Email/SMS" },
              { t: "Purchase", d: "Payments + order sync with store" },
              { t: "Delight", d: "Shipping updates + loyalty rewards" },
              { t: "Repeat", d: "Predictive re‑orders and upsells" },
            ].map((s, idx) => (
              <li key={s.t} className="relative pl-14">
                <span className="absolute left-0 top-1.5 inline-block h-8 w-8 rounded-full bg-primary text-background grid place-items-center animate-bounce">{idx + 1}</span>
                <h3 className="text-xl font-semibold">{s.t}</h3>
                <p className="text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      {/* Flowchart (looping shimmer) */}
      {/* <section className="bg-muted/30 border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Automation Flow</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-4">
            {[
              { t: "Segment", d: "AI cohorts" },
              { t: "Trigger", d: "Behavior events" },
              { t: "Message", d: "WhatsApp/Email/SMS" },
              { t: "Measure", d: "A/B + ROI" },
            ].map((n, i) => (
              <div key={n.t} className="relative p-6 rounded-xl border border-border bg-card overflow-hidden">
                <div className="absolute inset-0 animate-[pulse_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
                <h3 className="relative text-xl font-semibold">{n.t}</h3>
                <p className="relative text-muted-foreground">{n.d}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-3xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why ZeaCRM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Why ZeaCRM?</h2>
        <div className="md:w-2/3 mx-auto">
          <p className="text-center py-2 text-muted-foreground">Our platform is built on five foundations that drive retail transformation:</p>
          <ul className="mt-4 space-y-2 justify-center bg-card bg-muted rounded-lg px-20 py-10">
            <li>•	AI-Powered — Predict, personalize, and perform.</li>
            <li>•	Automation-First — Save time, scale faster.</li>
            <li>•	Secure & Compliant — Enterprise-grade protection for customer data.</li>
            <li>•	Industry-Ready — Designed for retail and e-commerce challenges.</li>
            <li>•	Proven Impact — Real-world performance, measurable outcomes.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">Future‑Ready Retail Starts Here</h2>
          <p className="mt-4 text-lg">See how ZeaCRM transforms engagement into growth.</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/demo">Book a Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-background border-background">
              <Link href="/get-started">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center">FAQs</h2>
        <div className="mt-8 space-y-6">
          <details className="rounded-lg border border-border p-4 bg-card" open>
            <summary className="cursor-pointer font-semibold">1. How does AI improve engagement?</summary>
            <p className="mt-2 text-muted-foreground">ZeaCRM predicts behavior and automates follow-ups to drive conversions.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">2. What is AEO and why is it important?</summary>
            <p className="mt-2 text-muted-foreground">AEO makes your brand visible in AI tools like ChatGPT and Gemini.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">3. Is ZeaCRM GEO-neutral?</summary>
            <p className="mt-2 text-muted-foreground">Yes — it supports multiple languages, currencies, and markets.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">4. Can AI predict future purchases?</summary>
            <p className="mt-2 text-muted-foreground">Yes — ZeaCRM analyzes buying patterns to suggest next orders.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">5. How does automation save time?</summary>
            <p className="mt-2 text-muted-foreground">ZeaCRM handles marketing, billing, and customer updates automatically.</p>
          </details>
        </div>
      </section>

      <Footer />
    </>
  );
}
