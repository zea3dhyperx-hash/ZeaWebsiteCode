"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function EducationTrainingCRM() {
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
      "https://www.youtube.com/embed/I5oIo_TC9rk?si=eCdooqqxCJqd8OQM"
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
                  title="ZeaCRM Education & Training Video"
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
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary">Education & Training CRM</h1>
            <p className="mt-3 text-muted-foreground text-xl">Transform Learning Management with AI‑Powered Automation</p>
            <p className="mt-3 text-muted-foreground text-xl">Admissions · Engagement · Retention — all in one intelligent platform</p>
            <p className="mt-3 text-muted-foreground text-xl">ZeaCRM helps educational institutions build smarter relationships with students and parents through automation, analytics, and AI.</p>
            <p className="mt-3 text-muted-foreground text-xl">From the first inquiry to alumni engagement, every interaction is organized, tracked, and optimized — so your team focuses on learning, not logistics.</p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg" variant="outline">
                <Link href="/get-started">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg">
                <Link href="/demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-xl border border-border p-6 bg-card">
            <div className="grid grid-cols-2 gap-4">
              {[
                "Automated admissions",
                "Smart fee reminders",
                "Parent‑teacher scheduling",
                "Attendance analytics",
              ].map((t) => (
                <div key={t} className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smarter Solutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Smarter Solutions for Every Learning Environment</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-semibold">Schools & Colleges</h3>
            <p className="mt-2 text-muted-foreground">Digitize the entire admissions journey — from inquiry to enrollment.</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Automated lead capture and follow‑ups</li>
              <li>Smart fee reminders with payment links</li>
              <li>Parent‑teacher meeting scheduling</li>
            </ul>
            <p className="mt-4 text-sm">Result: Faster admissions and transparent communication</p>
          </div>
          <div className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-semibold">Coaching & Training Institutes</h3>
            <p className="mt-2 text-muted-foreground">Simplify daily operations and improve student engagement.</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Batch scheduling and attendance tracking</li>
              <li>Exam reminders and performance reports</li>
              <li>Instant e‑certificate generation</li>
            </ul>
            <p className="mt-4 text-sm">Result: Streamlined management and consistent progress</p>
          </div>
          <div className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-semibold">EdTech & Online Platforms</h3>
            <p className="mt-2 text-muted-foreground">Scale learning and retention with AI‑driven insights.</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Automated demo sign‑ups and trial follow‑ups</li>
              <li>Smart subscription billing and renewals</li>
              <li>Personalized learning reminders and progress tracking</li>
            </ul>
            <p className="mt-4 text-sm">Result: More paid users and long‑term engagement</p>
          </div>
        </div>
              <p className="mt-6 text-center text-muted-foreground ">Built for Schools · Colleges · Training Institutes · EdTech Platforms</p>
              <p className="mt-3 text-center text-muted-foreground ">Result: More Enrollments · Faster Collections · Higher Retention</p>
      </section>

      {/* Unified CRM */}
      <section className="bg-muted/30 border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Unified CRM for the Entire Education Lifecycle</h2>
          <p className="mt-6 text-muted-foreground">ZeaCRM brings students, staff, and partners onto a single automated workspace.</p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4 text-left max-w-5xl mx-auto">
            {[
              "Lead Management: Capture every inquiry from forms, email, and chatbots.",
              "Workflow Automation: Assign counselors and trigger follow‑ups instantly.",
              "Engagement Analytics: Monitor attendance, feedback, and conversion rates.",
              "Reporting & Insights: Track ROI across admissions and marketing.",
            ].map((txt) => (
              <li key={txt} className="p-4 rounded-lg bg-card border border-border">{txt}</li>
            ))}
          </ul>
          <p className="mt-6 text-muted-foreground">Built for humans, powered by AI.</p>
        </div>
      </section>

      {/* Who Uses ZeaCRM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Who Uses ZeaCRM</h2>
        <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Schools and Colleges",
            "Universities & Educational Consultants",
            "Coaching & Tutoring Centers",
            "EdTech and Online Learning Platforms",
            "Skill Development & Vocational Centers",
            "Corporate Training Providers",
            "Language Academies and Institutes",
          ].map((item) => (
            <li key={item} className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background transition-transform hover:scale-[1.02]">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Why ZeaCRM */}
      <section className="bg-background border-t border-border py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Why ZeaCRM</h2>
          <div className="mt-10 grid md:grid-cols-5 gap-4">
            {[
              "AI‑Driven Precision – Predict trends and optimize student journeys.",
              "Automation‑First Design – Replace manual tasks with smart workflows.",
              "Secure & Compliant – Enterprise‑grade data protection for education.",
              "Built for Education – Purpose‑built modules, not generic add‑ons.",
              "Proven Impact – Growth in enrollments and retention.",
            ].map((n, i) => (
              <div key={n} className="relative p-6 rounded-xl border border-border bg-card overflow-hidden">
                <div className="absolute inset-0 animate-[pulse_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
                <p className="relative text-sm">{n}</p>
                {i < 4 && (
                  <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-3xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-muted-foreground">Your institution is evolving — your CRM should too.</p>
      </section>

      {/* Operations CTA */}
      <section className="bg-primary text-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">Transform Your Operations</h2>
          <p className="mt-4 text-lg">Whether you manage a local academy or a global e-learning platform, ZeaCRM unifies admissions, communication, and analytics into one system.
Spend less time on manual coordination and more time shaping learning outcomes.
</p>
        <p className="mt-6 text-center text-background">Smarter Workflows | Happier Students | Proven Results</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-background text-primary hover:scale-105 hover:bg-background transition transition-all">
              <Link href="/demo">Book a Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-background border-background hover:scale-105 transition transition-all">
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
            <summary className="cursor-pointer font-semibold">How does ZeaCRM automate student admissions?</summary>
            <p className="mt-2 text-muted-foreground">It captures inquiries, assigns counselors, and sends personalized follow‑ups until enrollment.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">Can ZeaCRM integrate with existing LMS or payments?</summary>
            <p className="mt-2 text-muted-foreground">Yes — it connects with popular learning and payment platforms to sync data and fees.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">How does ZeaCRM enhance student engagement?</summary>
            <p className="mt-2 text-muted-foreground">Through personalized WhatsApp, SMS, and email plus analytics to track progress.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">Is ZeaCRM suitable for physical and online institutions?</summary>
            <p className="mt-2 text-muted-foreground">Absolutely — it supports hybrid and fully digital models.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">What sets ZeaCRM apart from generic CRMs?</summary>
            <p className="mt-2 text-muted-foreground">Purpose‑built for education — automating admissions, communications, and analytics.</p>
          </details>
        </div>
      </section>

      <Footer />
    </>
  );
}
