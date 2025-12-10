"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AniFinance from "../animations/ani-finance";
import { BookDemoButton } from "../book-demo-button";
import {
  ShieldCheck,
  TrendingUp,
  CreditCard,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Lock,
  BarChart4,
} from "lucide-react";



export default function FinanceInsuranceCRM() {
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
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">AI-Powered CRM for Financial Growth</h1>
            <p className="mt-3 text-muted-foreground text-lg">Automation. Compliance. Trust.</p>
            <p className="mt-3 text-muted-foreground text-lg">ZeaCRM empowers banks, insurance providers, and advisors to manage every client relationship with precision and speed.</p>
            <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                { label: "Secure data", Icon: ShieldCheck },
                { label: "Predictive risk", Icon: TrendingUp },
                { label: "Smart reminders", Icon: MessageSquare },
              ].map(({ label, Icon }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm text-foreground/80 shadow-sm">
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              {/* <Button asChild size="lg">
                <Link href="/playbooks/videos">Watch Demo Video</Link>
              </Button> */}
              <BookDemoButton className="inline-flex items-center justify-center rounded-md border border-primary bg-transparent px-6 py-2 text-lg font-semibold text-primary transition hover:bg-primary/10">
                Book a Demo
              </BookDemoButton>
            </div>
          </div>
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
              <source src="https://storage.googleapis.com/msgsndr/bsexF0htDBOfNeCh7844/media/692e783b2b865ef09d47b286.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl border border-border p-8 md:p-12 bg-background shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-6 rounded-lg bg-primary">
              <div className="flex-shrink-0">
                <img
                  src="/images/streamline-ultimate-color-responsive-design-hand.png"
                  alt="Secure KYC workflows"
                  className="w-12 h-12"
                />
              </div>
              <div className="text-left">
                <p className="font-medium text-background">Secure KYC & e-sign workflows</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-lg bg-primary">
              <div className="flex-shrink-0">
                <img src="/images/emojione-v1-reminder-ribbon.png" alt="Predictive reminders" className="w-12 h-12" />
              </div>
              <div className="text-left">
                <p className="font-medium text-background">Predictive reminders for renewals/EMIs</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-lg bg-primary">
              <div className="flex-shrink-0">
                <img
                  src="/images/streamline-sharp-color-move-file-flat.png"
                  alt="Unified records"
                  className="w-12 h-12"
                />
              </div>
              <div className="text-left">
                <p className="font-medium text-background">Unified records across loan/policy/portfolio</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-lg bg-primary">
              <div className="flex-shrink-0">
                <img src="/images/icon-park-update-rotation.png" alt="Omnichannel updates" className="w-12 h-12" />
              </div>
              <div className="text-left">
                <p className="font-medium text-background">Omnichannel WhatsApp/SMS/Email updates</p>
              </div>
            </div>
          </div>
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
              <div key={card.title} className="rounded-xl bg-primary border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
                <h3 className="text-xl font-semibold text-background">{card.title}</h3>
                <ul className="mt-4 space-y-2 text-muted-background">
                  {card.bullets.map((b) => (
                    <li className="text-background" key={b}>{b}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-background">📈 Result: {card.result}.</p>
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
            <p className="text-lg">Key Advantages:</p>
            <ul className="mt-3 space-y-3 text-muted-foreground text-lg">
              <li>•	Centralized customer records</li>
              <li>•	Automated follow-ups & renewals</li>
              <li>•	Integrated payment & communication tools</li>
              <li>•	Real-time performance tracking</li>
              <li>•	Full data security and audit compliance</li>
            </ul>
        </div>
        <AniFinance />
        </div>
      </section>

      {/* Section 4 — Built for Trust, Speed, and Compliance */}
      <section className="bg-muted/30 border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Built for Trust, Speed, and Compliance</h2>
          <p className="mt-4 text-muted-foreground">Your business handles sensitive data and time-critical operations.
ZeaCRM ensures every transaction, message, and signature happens securely—meeting global financial compliance standards.</p>
          <div className="mt-8 grid sm:grid-cols-1 gap-4 text-left max-w-5xl mx-auto">
            <div className="p-4 hover:bg-primary hover:text-background hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-lg bg-card border border-border">1.	AI-Powered Intelligence – Predictive lead scoring, reminders, and client insights</div>
            <div className="p-4 hover:bg-primary hover:text-background hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-lg bg-card border border-border">2.	Automation-First Design – End-to-end smart workflows without manual intervention</div>
            <div className="p-4 hover:bg-primary hover:text-background hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-lg bg-card border border-border">3.	Security & Compliance – Encrypted data with full access control</div>
            <div className="p-4 hover:bg-primary hover:text-background hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-lg bg-card border border-border">4.	Industry-Ready Modules – Tailored for banks, insurers, and advisors</div>
            <div className="p-4 hover:bg-primary hover:text-background hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-lg bg-card border border-border">5.	Proven Impact – Real growth through intelligent client engagement</div>
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
            {/* <Button asChild size="lg" variant="secondary">
              <Link href="/playbooks/videos">Watch Demo Video</Link>
            </Button> */}
            <BookDemoButton className="inline-flex items-center justify-center rounded-md border border-background bg-background px-6 py-2 text-lg font-semibold text-primary transition hover:scale-105">
              Book a Demo
            </BookDemoButton>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center">FAQs</h2>
        <div className="mt-8 space-y-6">
          <details className="rounded-lg border border-border p-4 bg-card" open>
            <summary className="cursor-pointer font-semibold">How does ZeaCRM improve financial service workflows?</summary>
            <p className="mt-2 text-muted-foreground">ZeaCRM automates loan, policy, and investment workflows using AI—reducing manual follow-ups and improving customer turnaround time across all financial processes.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">Is ZeaCRM suitable for both banks and insurance providers?</summary>
            <p className="mt-2 text-muted-foreground">Yes. ZeaCRM offers flexible modules built for banking, insurance, and advisory teams to manage leads, renewals, and client records from one secure platform.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">Can I integrate ZeaCRM with existing financial systems?</summary>
            <p className="mt-2 text-muted-foreground">Absolutely. ZeaCRM supports API integrations with accounting tools, payment gateways, and communication platforms to keep your data unified.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">How does ZeaCRM ensure compliance and data security?</summary>
            <p className="mt-2 text-muted-foreground">All customer information is encrypted, role-restricted, and auditable—ensuring compliance with leading financial data standards.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">What results can financial institutions expect with ZeaCRM?</summary>
            <p className="mt-2 text-muted-foreground">Organizations typically see faster loan processing, higher policy renewals, reduced defaults, and improved customer satisfaction through automation and AI-driven engagement.</p>
          </details>
        </div>
      </section>

      <Footer />
    </>
  );
}
