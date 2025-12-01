"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AniEdu from "../animations/ani-edu";



export default function EducationTrainingCRM() {
  const [expanded, setExpanded] = useState(false);
  const [lockedOpen, setLockedOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [whoUsesPage, setWhoUsesPage] = useState(0)

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
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">Education & Training CRM</h1>
            <p className="mt-3 text-muted-foreground text-lg">Transform Learning Management with AI‑Powered Automation</p>
            <p className="mt-3 text-muted-foreground text-lg">Admissions · Engagement · Retention — all in one intelligent platform</p>
            <p className="mt-3 text-muted-foreground text-lg">ZeaCRM helps educational institutions build smarter relationships with students and parents through automation, analytics, and AI.</p>
            <p className="mt-3 text-muted-foreground text-lg">From the first inquiry to alumni engagement, every interaction is organized, tracked, and optimized — so your team focuses on learning, not logistics.</p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg" variant="outline">
                <Link href="/get-started">Book a Demo</Link>
              </Button>
              <Button asChild size="lg">
                <Link href="/playbooks/videos">Watch Demo Video</Link>
              </Button>
            </div>
          </div>
          {/* <div className="rounded-xl border border-border p-6 bg-card">
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
          </div> */}
          <AniEdu />
        </div>
      </section>

      {/* Smarter Solutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Smarter Solutions for Every Learning Environment</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="group rounded-xl border border-border border-primary bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
            <h3 className="text-xl font-semibold">Schools & Colleges</h3>
            <p className="mt-2 text-muted-foreground">Digitize the entire admissions journey — from inquiry to enrollment.</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Automated lead capture and follow‑ups</li>
              <li>Smart fee reminders with payment links</li>
              <li>Parent‑teacher meeting scheduling</li>
            </ul>
            <p className="mt-4 text-sm">Result: Faster admissions and transparent communication</p>
          </div>
          <div className="group rounded-xl border border-border border-primary bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
            <h3 className="text-xl font-semibold">Coaching & Training Institutes</h3>
            <p className="mt-2 text-muted-foreground">Simplify daily operations and improve student engagement.</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Batch scheduling and attendance tracking</li>
              <li>Exam reminders and performance reports</li>
              <li>Instant e‑certificate generation</li>
            </ul>
            <p className="mt-4 text-sm">Result: Streamlined management and consistent progress</p>
          </div>
          <div className="group rounded-xl border border-border border-primary bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
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
      {/* <section className="bg-muted/30 border-y border-border py-16 md:py-24">
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
              <li key={txt} className="p-4 rounded-lg bg-card border border-border hover:scale-105 hover:shadow-lg transition-all duration-300">{txt}</li>
            ))}
          </ul>
          <p className="mt-6 text-muted-foreground">Built for humans, powered by AI.</p>
        </div>
      </section> */}
      <section className="border-y py-16 md:py-24 border-foreground bg-[rgba(223,168,34,1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
            Unified CRM for the Entire Education Lifecycle
          </h2>
          <p className="mt-6 text-background">
            ZeaCRM brings students, staff, and partners onto a single automated workspace.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-6 items-start text-left p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 bg-background">
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-[#FF5733]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  <path d="M12 14c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v3c0 1.1-.9 2-2 2z" opacity="0.3" />
                  <circle cx="7" cy="8" r="1.5" />
                  <circle cx="17" cy="8" r="1.5" />
                  <path d="M12 16c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z" opacity="0.3" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Lead Management</h3>
                <p className="mt-2 text-muted-foreground">Capture every inquiry from forms, email, and chatbots.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start text-left p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 bg-background">
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-[#FF5733]" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="9" y="2" width="6" height="4" rx="1" />
                  <rect x="5" y="9" width="6" height="4" rx="1" />
                  <rect x="13" y="9" width="6" height="4" rx="1" />
                  <rect x="2" y="16" width="6" height="4" rx="1" />
                  <rect x="16" y="16" width="6" height="4" rx="1" />
                  <line x1="12" y1="6" x2="12" y2="9" stroke="currentColor" strokeWidth="2" />
                  <line x1="8" y1="13" x2="8" y2="16" stroke="currentColor" strokeWidth="2" />
                  <line x1="16" y1="13" x2="16" y2="16" stroke="currentColor" strokeWidth="2" />
                  <line x1="8" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Workflow Automation</h3>
                <p className="mt-2 text-muted-foreground">Assign counselors and trigger follow-ups instantly.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start text-left p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 bg-background">
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-[#FF5733]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 17l3-3 4 4 5-7 6 6v3H3z" opacity="0.7" />
                  <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" fill="none" />
                  <polyline
                    points="7,14 11,10 16,13 21,7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="7" cy="14" r="1.5" />
                  <circle cx="11" cy="10" r="1.5" />
                  <circle cx="16" cy="13" r="1.5" />
                  <circle cx="21" cy="7" r="1.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Engagement Analytics</h3>
                <p className="mt-2 text-muted-foreground">Monitor attendance, feedback, and conversion rates.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start text-left p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 bg-background">
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-[#FF5733]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" opacity="0.3" />
                  <path d="M14 2l6 6h-6V2z" />
                  <path
                    d="M8 12h8M8 16h8M8 20h5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Reporting & Insights</h3>
                <p className="mt-2 text-muted-foreground">Track ROI across admissions and marketing.</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-popover">Built for humans, powered by AI.</p>
        </div>
      </section>

      {/* Who Uses ZeaCRM */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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
            <li key={item} className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg">
              {item}
            </li>
          ))}
        </ul>
      </section> */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[rgba(223,168,34,1)] mb-16">
          Who Uses ZeaCRM
        </h2>
        {/* Left Column - Main Value Prop */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight text-sidebar-ring">
              Conquer the toughest enrollment challenges while delighting the most demanding students and parents.
            </h3>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              ZeaCRM automation transforms every education professional into an enrollment hero. Through real-time AI
              collaboration, teams gain expert guidance and workflow support, reducing repetitive tasks, keeping
              operations smooth, and delivering faster, better service that keeps students and families coming back.
            </p>
          </div>

          <div className="lg:col-span-1">
            <div className="min-h-[400px]">
              {whoUsesPage === 0 && (
                <div className="animate-in fade-in duration-500">
                  <div className="flex items-start gap-3 mb-6">
                    <svg
                      className="w-8 h-8 text-[rgba(223,168,34,1)] flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h4 className="text-xl font-bold text-background">Schools and Colleges</h4>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Streamline counselor onboarding.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Enhance the staff experience.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Increase employee retention.</span>
                    </li>
                  </ul>
                </div>
              )}
              {whoUsesPage === 1 && (
                <div className="animate-in fade-in duration-500">
                  <div className="flex items-start gap-3 mb-6">
                    <svg
                      className="w-8 h-8 text-[rgba(223,168,34,1)] flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h4 className="text-xl font-bold text-background">Coaching &amp; Tutoring Centers</h4>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Simplify batch management.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Automate attendance tracking.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Track student progress.</span>
                    </li>
                  </ul>
                </div>
              )}
              {whoUsesPage === 2 && (
                <div className="animate-in fade-in duration-500">
                  <div className="flex items-start gap-3 mb-6">
                    <svg
                      className="w-8 h-8 text-[rgba(223,168,34,1)] flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h4 className="text-xl font-bold text-background">EdTech and Online Learning Platforms</h4>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Scale with automation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Personalize learning paths.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Maximize subscription renewals.</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Student/Parent Benefits */}
          <div className="lg:col-span-1">
            <div className="min-h-[400px]">
              {whoUsesPage === 0 && (
                <div className="animate-in fade-in duration-500">
                  <div className="flex items-start gap-3 mb-6">
                    <svg
                      className="w-8 h-8 text-[rgba(223,168,34,1)] flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h4 className="text-xl font-bold text-background">Universities &amp; Educational Consultants</h4>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Deliver faster service.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Boost human-AI collaboration.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Strengthen student loyalty.</span>
                    </li>
                  </ul>
                </div>
              )}
              {whoUsesPage === 1 && (
                <div className="animate-in fade-in duration-500">
                  <div className="flex items-start gap-3 mb-6">
                    <svg
                      className="w-8 h-8 text-[rgba(223,168,34,1)] flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h4 className="text-xl font-bold text-background">
                      Corporate Training &amp; Language Academies and Institutes{" "}
                    </h4>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Manage enterprise clients.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Track certification progress.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Measure training ROI.</span>
                    </li>
                  </ul>
                </div>
              )}
              {whoUsesPage === 2 && (
                <div className="animate-in fade-in duration-500">
                  <div className="flex items-start gap-3 mb-6">
                    <svg
                      className="w-8 h-8 text-[rgba(223,168,34,1)] flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h4 className="text-xl font-bold text-background">Skill Development &amp; Vocational Centers</h4>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Nurture student communities.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Automate course delivery.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[rgba(223,168,34,1)] flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground">Increase course completions.</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 flex-row mt-0">
          {[0, 1, 2].map((page) => (
            <button
              key={page}
              onClick={() => setWhoUsesPage(page)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                whoUsesPage === page
                  ? "bg-[rgba(223,168,34,1)] w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to page ${page + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Why ZeaCRM */}
      {/* <section className="bg-background border-t border-border py-16 md:py-24">
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
              <div key={n} className="relative p-6 rounded-xl border border-border bg-card overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-300">
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
      </section> */}
      <section className="relative px-6 py-20  rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[rgba(223,168,34,1)]">Why ZeaCRM</h2>
          <div className="mt-10 grid md:grid-cols-5 gap-4 leading-5">
            {[
              "AI‑Driven Precision – Predict trends and optimize student journeys.",
              "Automation‑First Design – Replace manual tasks with smart workflows.",
              "Secure & Compliant – Enterprise‑grade data protection for education.",
              "Built for Education – Purpose‑built modules, not generic add‑ons.",
              "Proven Impact – Growth in enrollments and retention.",
            ].map((n, i) => (
              <div
                key={n}
                className="relative p-6 rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 leading-6 bg-primary"
              >
                <div className="absolute inset-0 bg-primary opacity-0 rounded-xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] [clip-path:circle(0%_at_50%_50%)] group-hover:opacity-100 group-hover:[clip-path:circle(140.9%_at_0_0)]" />
                <p className="relative p-6 rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 leading-6 text-primary text-background bg-background">
                  {n}
                </p>
                {i < 4 && <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-3xl">→</div>}
              </div>
            ))}
          </div>
        </div>
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
              <Link href="/playbooks/videos">Watch Demo Video</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-background border-background hover:scale-105 transition transition-all">
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
