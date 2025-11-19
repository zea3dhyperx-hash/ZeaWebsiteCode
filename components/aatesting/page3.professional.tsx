"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AniProf from "../animations/ani-prof";



export default function ProfessionalServicesCRM() {
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
      "https://www.youtube.com/embed/IGLw-PVrPUg?si=f0UWGOOpXwgjankN"
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

      {/* Video section retained at top */}
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

          const relatedTarget = e.relatedTarget as HTMLElement | null;

          // Prevent collapse when entering iframe
          if (
            relatedTarget === null ||
            (iframeRef.current && iframeRef.current.contains(relatedTarget))
          ) {
            return;
          }

          // Close only when moving to header
          if (relatedTarget && typeof relatedTarget.closest === "function") {
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
                  title="ZeaCRM Professional Services Video"
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
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">Professional Services Automation</h1>
            <p className="mt-3 text-muted-foreground text-lg">Smarter Client, Project, and Workflow Management – Powered by AI</p>
            <p className="mt-3 text-muted-foreground text-lg">ZeaCRM helps consultants, agencies, and professional service firms automate every client interaction — from proposal to payment. Manage deals, projects, and communication effortlessly while your AI assistant keeps operations running smoothly.</p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/playbooks/videos">Watch Demo Video</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/get-started">Start Free Trial</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-xl border border-border p-6 bg-card">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <li className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">AI proposal & invoice automation</li>
              <li className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">Appointment scheduling with reminders</li>
              <li className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">Smart follow‑ups that nurture clients</li>
              <li className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">Centralized project & client data</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Smart Solutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Smart Solutions for Every Service Professional</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
            <h3 className="text-xl font-semibold">Consultants & Agencies</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Automated proposal & invoice generation</li>
              <li>Appointment scheduling with reminders</li>
              <li>AI follow-ups that nurture clients automatically</li>
            </ul>
            <p className="mt-4 text-sm">📈 Result: Faster deals & stronger relationships</p>
          </div>
          <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
            <h3 className="text-xl font-semibold">IT & SaaS Providers</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Auto demo/trial scheduling & follow-up</li>
              <li>Subscription renewals & billing reminders</li>
              <li>CRM-integrated support ticket tracking</li>
            </ul>
            <p className="mt-4 text-sm">📈 Result: Improved customer retention & smoother onboarding</p>
          </div>
          <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
            <h3 className="text-xl font-semibold">Legal & Accounting Firms</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Workflow automation for cases & projects</li>
              <li>Compliance alerts & filing deadline reminders</li>
              <li>Secure document management with e-signing</li>
            </ul>
            <p className="mt-4 text-sm">📈 Result: Fewer errors, more billable hours</p>
          </div>
        </div>
      </section>

      {/* Why ZeaCRM */}
      <section className="bg-muted/30 border-y border-border py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Why ZeaCRM?</h2>
          <p className="mt-4 text-muted-foreground text-lg">ZeaCRM is built on five core pillars to transform your professional service operations:</p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
            <li className="p-4 rounded-lg bg-card border border-border hover:scale-105 hover:shadow-lg transition-all duration-300">1.	AI-Powered Intelligence – Predictive insights, lead scoring & automation triggers.</li>
            <li className="p-4 rounded-lg bg-card border border-border hover:scale-105 hover:shadow-lg transition-all duration-300">2.	Automation-First Design – Reduce manual tasks and human follow-ups.</li>
            <li className="p-4 rounded-lg bg-card border border-border hover:scale-105 hover:shadow-lg transition-all duration-300">3.	Secure & Compliant – Enterprise-grade data encryption & privacy.</li>
            <li className="p-4 rounded-lg bg-card border border-border hover:scale-105 hover:shadow-lg transition-all duration-300">4.	Industry-Ready – Pre-built modules for every service vertical.</li>
            <li className="p-4 rounded-lg bg-card border border-border hover:scale-105 hover:shadow-lg transition-all duration-300">5.	Proven Impact – Faster deals, stronger relationships, higher ROI.</li>
          </ul>
          <p className="mt-6 text-muted-foreground">Your industry is evolving — your CRM should evolve with it.
ZeaCRM brings precision, automation, and intelligence into every client interaction.</p>
        </div>
      </section>

      {/* Who We Help */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Who We Help</h2>
        <div className="mt-8 text-center md:w-2/3 mb-4 mx-auto">
          <p>ZeaCRM adapts seamlessly across the professional services spectrum:</p>
          <ol className="list-decimal justify-center bg-card bg-muted rounded-lg px-20 py-10 list-inside space-y-2">
            <li>Consulting Firms – Manage clients, proposals, and follow-ups efficiently.</li>
            <li>Marketing & Creative Agencies – Automate reporting, campaigns, and approvals.</li>
            <li>Legal Practices – Streamline case management and client communication.</li>
            <li>Financial & Accounting Firms – Automate billing, renewals, and reminders.</li>
            <li>IT & Software Providers – Manage tickets, client onboarding, and renewals.</li>
            <li>Architects & Designers – Track leads, consultations, and project milestones.</li>
            <li>Recruitment & HR Agencies – Simplify candidate and client tracking.</li>
            <li>Trainers & Coaches – Manage sessions, enrollments, and results.</li>
            <li>Event & PR Agencies – Coordinate vendors, client briefs, and outcomes.</li>
          </ol>
        </div>
      </section>

      {/* All-in-One Platform */}
      <section className="bg-background border-t border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary">All-in-One Platform for Client-Focused Success</h2>
            <p className="mt-4 text-muted-foreground text-lg">ZeaCRM brings structure, clarity, and automation to your entire client lifecycle.
Every proposal, project, and conversation is connected through AI — ensuring smooth workflows, faster decisions, and measurable growth.</p>
            <div className="mt-4">
              <p>Empower your team to:</p>
              <ul className="mt-3 space-y-2 text-muted-foreground text-lg">
                <li>✅ Collaborate in real time</li>
                <li>✅ Automate repetitive reminders</li>
                <li>✅ Centralize all client data securely</li>
                <li>✅ Track progress with AI insights</li>
              </ul>
              <p className="mt-3">Deliver high-quality service while saving time, reducing errors, and increasing profit margins.</p>
            </div>
          </div>
          {/* <div className="rounded-xl border border-border p-0 object-contain bg-card overflow-hidden"> */}
          <div className="rounded-xl p-0 overflow-hidden">
            {/* <video
              src="/videos/realvid.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
            */}
            <AniProf />
          </div>
        </div>
      </section>

      {/* Animated Timeline */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Client Lifecycle Timeline</h2>
        <div className="mt-10 relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-primary/30 rounded" />
          <ul className="space-y-8">
            {[
              { t: "Lead", d: "Capture from web/forms/ads with AI scoring" },
              { t: "Proposal", d: "Auto‑generated docs and e‑signing" },
              { t: "Project", d: "Tasks, milestones, and collaboration" },
              { t: "Billing", d: "Invoices, subscriptions, and reminders" },
              { t: "Retention", d: "Nurture with automated check‑ins" },
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

      {/* Automation Flow */}
      <section className="bg-muted/30 border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Automation Flow</h2>
          <div className="mt-10 grid md:grid-cols-5 gap-4">
            {[
              { t: "Capture", d: "Forms/Integrations" },
              { t: "Score", d: "AI Priority" },
              { t: "Assign", d: "Auto Routing" },
              { t: "Act", d: "Sequences" },
              { t: "Measure", d: "Dashboards" },
            ].map((n, i) => (
              <div key={n.t} className="relative p-6 rounded-xl border border-border bg-card overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 animate-[pulse_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
                <h3 className="relative text-xl font-semibold">{n.t}</h3>
                <p className="relative text-muted-foreground">{n.d}</p>
                {i < 4 && (
                  <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-3xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">Let’s Simplify Your Client Management</h2>
          <p className="mt-4 text-lg">Experience the next generation of CRM automation built specifically for service-driven businesses.
Let ZeaCRM handle the busywork — so you can focus on building relationships that last.</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/playbooks/videos">Watch Demo Video</Link>
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
            <summary className="cursor-pointer font-semibold">1. How does AI automation help consultants and agencies?</summary>
            <p className="mt-2 text-muted-foreground">AI automation in ZeaCRM streamlines repetitive tasks like follow-ups, reminders, and reporting — allowing consultants and agencies to focus on strategy and client growth.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">2. Can ZeaCRM integrate with other tools used by professional service firms?</summary>
            <p className="mt-2 text-muted-foreground">Yes. ZeaCRM connects with your existing tools, ensuring a unified workflow across billing, scheduling, and communication without switching platforms.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">3. Is ZeaCRM suitable for both small agencies and large consulting firms?</summary>
            <p className="mt-2 text-muted-foreground">Absolutely. ZeaCRM scales effortlessly — whether you’re a solo consultant or a multi-branch agency managing hundreds of clients.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">4. How does ZeaCRM improve client relationship management?</summary>
            <p className="mt-2 text-muted-foreground">By centralizing all communication, proposals, and project updates in one dashboard, ZeaCRM helps maintain consistent, transparent, and personalized client relationships.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">5. What makes ZeaCRM different for professional service automation?</summary>
            <p className="mt-2 text-muted-foreground">Unlike generic CRMs, ZeaCRM is purpose-built for service industries — combining AI insights, automation, and secure collaboration to maximize client satisfaction and retention.</p>
          </details>
        </div>
      </section>

      <Footer />
    </>
  );
}
