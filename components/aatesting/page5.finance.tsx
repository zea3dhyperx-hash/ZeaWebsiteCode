"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function FinanceInsuranceCRM() {
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
      "https://www.youtube.com/embed/wi0Ip3exvZY?si=CF8jSp1-f48Gwx3y"
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
                  title="ZeaCRM Finance & Insurance Video"
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
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary">AI-Powered CRM for Financial Growth</h1>
            <p className="mt-3 text-muted-foreground text-xl">Automation. Compliance. Trust.</p>
            <p className="mt-3 text-muted-foreground text-xl">ZeaCRM empowers banks, insurance providers, and advisors to manage every client relationship with precision and speed.</p>
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
              <li className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">Secure KYC & e‑sign workflows</li>
              <li className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">Predictive reminders for renewals/EMIs</li>
              <li className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">Unified records across loan/policy/portfolio</li>
              <li className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">Omnichannel WhatsApp/SMS/Email updates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 1 — Smarter Financial Relationship Management */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <div className="md:w-4/5 mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Smarter Financial Relationship Management</h2>
          <p className="mt-4 text-muted-foreground text-lg">In the world of finance and insurance, timing and trust define success.</p>
          <p className="mt-3 text-muted-foreground text-lg">ZeaCRM brings automation and intelligence together—helping institutions deliver faster responses, personalized service, and seamless client journeys from enquiry to renewal.</p>
          <p className="mt-3 text-muted-foreground text-lg">With real-time insights, predictive reminders, and secure data management, your teams can focus on relationships while ZeaCRM handles the repetitive tasks.</p>
        </div>
      </section>

      {/* Section 2 — Who We Empower */}
      <section className="bg-muted/30 border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Who We Empower</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
              title: "Banks & NBFCs",
              bullets: [
                "Track loan enquiries & automate follow-ups",
                "Send EMI reminders via WhatsApp, SMS, or email",
                "Enable digital KYC & e-signatures",
              ],
              result: "Faster approvals and reduced defaults",
            },
            {
              title: "Insurance Providers",
              bullets: [
                "Automate policy renewal alerts",
                "Notify customers on claim status updates",
                "Generate AI-driven cross-sell offers",
              ],
              result: "Higher renewals and stronger retention",
            },
            {
              title: "Wealth & Loan Advisors",
              bullets: [
                "Automate appointment scheduling",
                "Track portfolios & compliance documents",
                "Send instant updates on performance reports",
              ],
              result: "Improved satisfaction and retention",
            },
            {
              title: "FinTech & Investment Firms",
              bullets: [
                "Integrate lead pipelines and customer journeys",
                "Get predictive analytics on investors & opportunities",
                "Automate performance reports & renewal workflows",
              ],
              result: "Smarter decisions, faster growth",
            }].map((card) => (
              <div key={card.title} className="rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {card.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm">📈 Result: {card.result}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Unified Platform */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary">One Unified Platform for Finance & Insurance</h2>
            <p className="mt-4 mb-4 text-muted-foreground text-lg">ZeaCRM combines AI, automation, and compliance in a single secure hub. From client onboarding to repayments and renewals, every action is streamlined, logged, and optimized for accuracy.</p>
            <p>Key Advantages:</p>
            <ul className="mt-3 space-y-3 text-muted-foreground text-lg">
              <li>•	Centralized customer records</li>
              <li>•	Automated follow-ups & renewals</li>
              <li>•	Integrated payment & communication tools</li>
              <li>•	Real-time performance tracking</li>
              <li>•	Full data security and audit compliance</li>
            </ul>
        </div>
          <div className="rounded-xl border border-border p-6 bg-card">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <div className="absolute inset-0 grid grid-cols-3 gap-2 animate-pulse">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="rounded bg-muted/70" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Built for Trust, Speed, and Compliance */}
      <section className="bg-muted/30 border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Built for Trust, Speed, and Compliance</h2>
          <p className="mt-4 text-muted-foreground">Your business handles sensitive data and time-critical operations.
ZeaCRM ensures every transaction, message, and signature happens securely—meeting global financial compliance standards.</p>
          <div className="mt-8 grid sm:grid-cols-1 gap-4 text-left max-w-5xl mx-auto">
            <div className="p-4 hover:bg-primary hover:text-background hover:scale-105 transition transition-all rounded-lg bg-card border border-border">1.	AI-Powered Intelligence – Predictive lead scoring, reminders, and client insights</div>
            <div className="p-4 hover:bg-primary hover:text-background hover:scale-105 transition transition-all rounded-lg bg-card border border-border">2.	Automation-First Design – End-to-end smart workflows without manual intervention</div>
            <div className="p-4 hover:bg-primary hover:text-background hover:scale-105 transition transition-all rounded-lg bg-card border border-border">3.	Security & Compliance – Encrypted data with full access control</div>
            <div className="p-4 hover:bg-primary hover:text-background hover:scale-105 transition transition-all rounded-lg bg-card border border-border">4.	Industry-Ready Modules – Tailored for banks, insurers, and advisors</div>
            <div className="p-4 hover:bg-primary hover:text-background hover:scale-105 transition transition-all rounded-lg bg-card border border-border">5.	Proven Impact – Real growth through intelligent client engagement</div>
          </div>
        </div>
      </section>

      {/* Section 5 — CTA */}
      <section className="bg-primary text-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">Ready to Modernize Your Financial Operations?</h2>
          <p className="mt-4 text-lg">ZeaCRM helps your institution stay compliant, responsive, and growth-focused—without complexity.</p>
          <p className="mt-4 text-lg">Automate what slows you down and focus on what matters most: building lasting client relationships.</p>
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
            <summary className="cursor-pointer font-semibold">1. How does ZeaCRM improve financial service workflows?</summary>
            <p className="mt-2 text-muted-foreground">ZeaCRM automates loan, policy, and investment workflows using AI—reducing manual follow-ups and improving customer turnaround time across all financial processes.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">2. Is ZeaCRM suitable for both banks and insurance providers?</summary>
            <p className="mt-2 text-muted-foreground">Yes. ZeaCRM offers flexible modules built for banking, insurance, and advisory teams to manage leads, renewals, and client records from one secure platform.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">3. Can I integrate ZeaCRM with existing financial systems?</summary>
            <p className="mt-2 text-muted-foreground">Absolutely. ZeaCRM supports API integrations with accounting tools, payment gateways, and communication platforms to keep your data unified.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">4. How does ZeaCRM ensure compliance and data security?</summary>
            <p className="mt-2 text-muted-foreground">All customer information is encrypted, role-restricted, and auditable—ensuring compliance with leading financial data standards.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">5. What results can financial institutions expect with ZeaCRM?</summary>
            <p className="mt-2 text-muted-foreground">Organizations typically see faster loan processing, higher policy renewals, reduced defaults, and improved customer satisfaction through automation and AI-driven engagement.</p>
          </details>
        </div>
      </section>

      <Footer />
    </>
  );
}
