"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import AniHealthcare from "../animations/ani-health";


export default function HealthcareCRMPage() {
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
      "https://www.youtube.com/embed/kRqQhG4am08?enablejsapi=1&rel=0&modestbranding=1&playsinline=1"
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
            className="w-full py-3 font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
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
                className="absolute top-2 right-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-md bg-black/50 text-white hover:bg-black/70 transition-transform duration-200 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
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
                  title="ZeaCRM Healthcare Video"
                  onLoad={onIframeLoad}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Hero Section */}
        <section className="border-b border-border bg-background py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
                Smarter Healthcare Relationship Management
              </h1>
              <p className="mt-3 text-muted-foreground text-lg">
                Deliver seamless patient care with ZeaCRM — the all-in-one AI platform designed for hospitals, clinics, labs, and wellness professionals.
              </p>
              <div className="mt-8 flex gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="transition-transform duration-200 hover:scale-[1.03] active:scale-95">
                  <Link href="/playbooks/videos">Watch Demo Video</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="transition-transform duration-200 hover:scale-[1.03] active:scale-95">
                  <Link href="/get-started">Start Free Trial</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-xl border border-border p-6 bg-card">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <li className="p-4 hover:scale-105 transition transition-all rounded-lg bg-muted">Smart Scheduling & Automated Reminders</li>
                <li className="p-4 hover:scale-105 transition transition-all rounded-lg bg-muted">Unified Patient Communication via WhatsApp, Email & SMS</li>
                <li className="p-4 hover:scale-105 transition transition-all rounded-lg bg-muted">Intelligent Record Tracking (EMR Integration)</li>
                <li className="p-4 hover:scale-105 transition transition-all rounded-lg bg-muted">Insight-Driven Decisions with AI Analytics</li>
                <li className="p-4 hover:scale-105 transition transition-all rounded-lg bg-muted">Secure, Compliant, and Scalable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 1 – The Future of Healthcare Operations */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="md:w-4/5 mx-auto space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary">AI-Driven Care. Zero Chaos.</h2>
            <p className="text-muted-foreground text-lg">
              In healthcare, every interaction matters — from the first appointment to lifelong patient engagement. ZeaCRM empowers healthcare providers to manage patients with precision, empathy, and speed.
            </p>
            <p className="text-muted-foreground text-lg">
              Built with advanced automation, ZeaCRM eliminates manual work from scheduling, reminders, and communications so your staff can focus on what truly matters: patient care.
            </p>
            <div className="mt-6 text-left justify-center md:w-2/3 mx-auto">
              <p className="font-semibold text-center">Key Highlights:</p>
              <ul className="mt-2 text-center hover:scale-105 transition transition-all space-y-2 p-4 rounded-lg bg-muted">
                <li>• Smart Scheduling & Automated Reminders</li>
                <li>• Unified Patient Communication via WhatsApp, Email & SMS</li>
                <li>• Intelligent Record Tracking (EMR Integration)</li>
                <li>• Insight-Driven Decisions with AI Analytics</li>
                <li>• Secure, Compliant, and Scalable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2 – Powering Every Corner of Healthcare */}
        <section className="bg-muted/30 border-y border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">
              ZeaCRM supports the full healthcare ecosystem — connecting medical, administrative, and patient operations in one place.
            </h2>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { sector: "Hospitals", help: "Coordinate departments, track patient journeys, and automate follow-ups." },
                { sector: "Clinics", help: "Manage appointments, patient histories, and communication seamlessly." },
                { sector: "Labs", help: "Send test reports automatically and track client feedback in real time." },
                { sector: "Pharmacies", help: "Automate prescription refills, digital orders, and customer engagement." },
                { sector: "Nursing Homes", help: "Simplify care plans and automate family updates." },
                { sector: "Wellness Centers", help: "Personalize plans, reminders, and session logs." },
                { sector: "Medical Suppliers", help: "Manage leads, inventory, and client orders in one view." },
                { sector: "Insurance Providers", help: "Streamline claims and policy communication." },
                { sector: "Dental & Home Care", help: "Automate scheduling, recalls, and caregiver coordination." },
                { sector: "Telemedicine", help: "Integrate calls, chats, and consultations into a single system." },
              ].map((item) => (
                <div key={item.sector} className="p-5 hover:scale-105 hover:shadow-lg transition-all duration-300 hover:border-primary rounded-xl border border-border bg-card">
                  <h3 className="text-lg text-center font-semibold">{item.sector}</h3>
                  <p className="text-muted-foreground">{item.help}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 – Key Features by Segment */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Key Features by Segment</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "🏥 Hospitals",
                d: "Smarter Care, Less Paperwork.\nAutomate bookings, prescriptions, payments, and follow-ups — reducing admin time and improving care quality.",
              },
              {
                t: "🩺 Clinics",
                d: "Patient-First Automation.\nEnable WhatsApp appointment booking, queue management, and digital records for a frictionless experience.",
              },
              {
                t: "🧪 Laboratories",
                d: "Digitally Connected Diagnostics.\nAutomate test booking, report delivery, and billing for faster, more accurate workflows.",
              },
              {
                t: "💊 Pharmacies",
                d: "Connected Pharmacy Operations.\nEnable digital ordering, e-prescription syncing, and automated refill reminders for repeat sales.",
              },
              {
                t: "🌿 Wellness & Therapy",
                d: "Personalized Care at Scale.\nProvide digital care plans, automated follow-ups, and motivational nudges to boost engagement.",
              },
              {
                t: "🚑 Emergency & Ambulance",
                d: "Automation When Seconds Matter.\nDispatch tracking, digital reports, and post-care reminders ensure faster recovery and operational accuracy.",
              },
            ].map((card) => (
              <div key={card.t} className="relative hover:scale-105 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary p-6 rounded-xl border border-border bg-card overflow-hidden">
                <div className="absolute inset-0 animate-[pulse_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
                <h3 className="relative text-xl font-semibold">{card.t}</h3>
                <p className="relative text-muted-foreground whitespace-pre-line">{card.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 – Unified Platform for Modern Healthcare Teams */}
        <section className="bg-background border-t border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Unified Platform for Modern Healthcare Teams</h2>
              <p className="mt-4 text-xl font-semibold text-primary">From Front Desk to Follow-Up — All in One System</p>
              <p className="mt-4 text-muted-foreground text-lg">
                ZeaCRM connects every department — medical, administrative, and support — with a single intelligent interface. AI automation ensures no task is missed, no patient forgotten, and no record misplaced.
              </p>
              <div className="mt-4">
                <p className="font-semibold">Capabilities:</p>
                <ul className="mt-2 space-y-2 text-muted-foreground text-lg">
                  <li>• Smart Workflows for Every Role</li>
                  <li>• Centralized Patient Records (EMR)</li>
                  <li>• AI Predictions for Patient Needs</li>
                  <li>• Real-Time Analytics & Dashboards</li>
                  <li>• Integrated UPI / QR Payments</li>
                  <li>• Multi-Channel Messaging (WhatsApp, Email, SMS)</li>
                </ul>
                <p className="mt-3">📈 Outcome:
                  Higher efficiency, better coordination, and improved patient satisfaction.
                </p>
              </div>
            </div>
            <AniHealthcare />
            {/* <div className="">
              <AniHealthcare /> */}
              {/* <div className="relative h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 grid grid-cols-4 gap-2 animate-pulse">
                  <AniHealthcare />
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </section>

        {/* Section 5 – Beyond Management: Growth Automation */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Beyond Management: Growth Automation</h2>
              <p className="mt-4 text-xl font-semibold text-primary">Turn Care into Growth with Intelligent Marketing</p>
              <ul className="mt-6 space-y-3 text-muted-foreground text-lg">
                <li>• Automated Health Campaigns & Checkup Offers</li>
                <li>• AI-Driven Engagement Sequences</li>
                <li>• Review & Feedback Automation</li>
                <li>• Analytics on Booking Trends & Conversions</li>
                <li>• Smart Retargeting for Patient Retention</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                💡 ZeaCRM bridges patient care and marketing — helping healthcare organizations grow sustainably while maintaining trust and compliance.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                <Image
                  src="/health3.jpg"
                  alt="Healthcare growth automation overview"
                  fill
                  // sizes="(min-width: 768px) 600px, 100vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 – Why Choose ZeaCRM */}
        <section className="bg-muted/30 border-y border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Why Choose ZeaCRM</h2>
            <p className="mt-4 text-xl font-semibold text-primary">Designed for Healthcare. Engineered for Impact.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4 text-left max-w-5xl mx-auto">
              {[
                {
                  principle: "AI-Powered",
                  meaning: "Predict, automate, and personalize patient journeys.",
                },
                {
                  principle: "Automation-First",
                  meaning: "Reduce manual work and increase accuracy.",
                },
                {
                  principle: "Secure & Compliant",
                  meaning: "Built with data protection and healthcare compliance standards.",
                },
                {
                  principle: "Industry-Ready",
                  meaning: "Tailored for hospitals, labs, and wellness providers.",
                },
                {
                  principle: "Proven Impact",
                  meaning: "Real operational efficiency and measurable results.",
                },
              ].map((item) => (
                <div key={item.principle} className="p-4 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 bg-card border border-border">
                  {/* <p className="font-semibold text-center">Principle</p> */}
                  <p className="text-center">{item.principle}</p>
                  <p className="text-muted-foreground text-center">{item.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7 – CTA */}
        <section className="bg-primary text-background py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold">Let’s Simplify Healthcare Management</h2>
            <p className="mt-4 text-lg">
              ZeaCRM transforms the way healthcare organizations operate — combining AI automation, secure data, and actionable insights into one powerful CRM platform.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="transition-transform duration-200 hover:scale-[1.03] active:scale-95">
                <Link href="/playbooks/videos">Watch Demo Video</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-background border-background transition-transform duration-200 hover:scale-[1.03] active:scale-95">
                <Link href="/get-started">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 8 – FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center">
            FAQ
          </h2>
          <div className="mt-8 space-y-6">
            <details className="rounded-lg border border-border p-4 bg-card" open>
              <summary className="cursor-pointer font-semibold">What is a Healthcare CRM?</summary>
              <p className="mt-2 text-muted-foreground">
                A Healthcare CRM like ZeaCRM helps medical organizations automate appointments, communication, and patient data management — improving efficiency and patient satisfaction.
              </p>
            </details>
            <details className="rounded-lg border border-border p-4 bg-card">
              <summary className="cursor-pointer font-semibold">How does AI help in healthcare CRM?</summary>
              <p className="mt-2 text-muted-foreground">
                ZeaCRM uses AI to automate scheduling, follow-ups, and record updates, minimizing manual errors and improving patient engagement.
              </p>
            </details>
            <details className="rounded-lg border border-border p-4 bg-card">
              <summary className="cursor-pointer font-semibold">Can ZeaCRM integrate with existing hospital or lab systems?</summary>
              <p className="mt-2 text-muted-foreground">
                Yes. ZeaCRM supports integration with EMR, billing, and communication systems to unify operations.
              </p>
            </details>
            <details className="rounded-lg border border-border p-4 bg-card">
              <summary className="cursor-pointer font-semibold">Is patient data secure in ZeaCRM?</summary>
              <p className="mt-2 text-muted-foreground">
                Absolutely. ZeaCRM follows advanced security and compliance frameworks to ensure confidentiality and data integrity.
              </p>
            </details>
            <details className="rounded-lg border border-border p-4 bg-card">
              <summary className="cursor-pointer font-semibold">How can healthcare organizations grow using ZeaCRM?</summary>
              <p className="mt-2 text-muted-foreground">
                ZeaCRM not only streamlines operations but also automates marketing and follow-ups — increasing patient retention and referrals.
              </p>
            </details>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
