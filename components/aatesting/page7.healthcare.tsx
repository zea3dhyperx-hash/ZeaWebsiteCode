"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import AniHealthcare from "../animations/ani-health";
import { SegmentCarousel } from "../segment-carousel";
import { BookDemoButton } from "../book-demo-button";


export default function HealthcareCRMPage() {
  const [expanded, setExpanded] = useState(false);
  const [lockedOpen, setLockedOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const [cardsVisible, setCardsVisible] = useState([false, false, false])
  const [currentDate, setCurrentDate] = useState(() => {
    const date = new Date()
    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" }
    return date.toLocaleDateString("en-US", options)
  })

  useEffect(() => {
    if (panelRef.current) setPanelHeight(panelRef.current.scrollHeight);
  }, [expanded]);

  useEffect(() => {
    const node = cardsContainerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting)
        if (visible) {
          setCardsVisible([true, true, true])
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, []);

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

          const relatedTarget = e.relatedTarget as EventTarget | null;

          // Prevent collapse when entering iframe
          const isNode = relatedTarget instanceof Node;
          const isElement = relatedTarget instanceof Element;
          if (
            relatedTarget === null ||
            (iframeRef.current && isNode && iframeRef.current.contains(relatedTarget))
          ) {
            return;
          }

          // Close only when moving to header
          if (isElement) {
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
                <BookDemoButton className="inline-flex items-center justify-center rounded-md border border-primary bg-transparent px-6 py-3 text-lg font-semibold text-primary transition-transform duration-200 hover:scale-[1.03] active:scale-95">
                  Book a Demo
                </BookDemoButton>
              </div>
            </div>
            <div className="rounded-xl border border-border overflow-hidden bg-card">
              <video
                src="https://storage.googleapis.com/msgsndr/bsexF0htDBOfNeCh7844/media/692e783baaad91a44b47e725.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                aria-label="Healthcare CRM demonstration video"
              />
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
            {/* <div className="mt-6 text-left justify-center md:w-2/3 mx-auto">
              <p className="font-semibold text-center">Key Highlights:</p>
              <ul className="mt-2 text-center hover:scale-105 transition transition-all space-y-2 p-4 rounded-lg bg-muted">
                <li>• Smart Scheduling & Automated Reminders</li>
                <li>• Unified Patient Communication via WhatsApp, Email & SMS</li>
                <li>• Intelligent Record Tracking (EMR Integration)</li>
                <li>• Insight-Driven Decisions with AI Analytics</li>
                <li>• Secure, Compliant, and Scalable</li>
              </ul>
            </div> */}
            <div className="mt-12 pt-8">
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr_2.5fr] gap-8 lg:gap-4 items-center text-left">
                {/* Left: Feature List */}
                <div className="space-y-4 animate-[fadeInLeft_0.8s_ease-out]">
                  <h3 className="text-2xl font-bold text-amber-400 mb-6">Zea CRM</h3>
                  <ul className="space-y-3">
                    {[
                      "Smart Scheduling & Automated Reminders",
                      "Unified Patient Communication via WhatsApp, Email & SMS",
                      "Intelligent Record Tracking (EMR Integration)",
                      "Insight-Driven Decisions with AI Analytics",
                      "Secure, Compliant, and Scalable",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-foreground animate-[fadeIn_0.6s_ease-out] opacity-0"
                        style={{ animationDelay: `${idx * 0.15}s`, animationFillMode: "forwards" }}
                      >
                        <span className="text-green-400 text-lg mt-0.5">✓</span>
                        <span className="leading-relaxed tracking-normal text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                

                {/* Middle: Action Buttons */}
                <div
                  className="flex flex-col gap-6 items-center justify-center relative animate-[fadeIn_0.8s_ease-out_0.3s] opacity-0"
                  style={{ animationFillMode: "forwards" }}
                >
                  {/* Arrow connectors for larger screens */}
                  <div
                    className="hidden lg:block absolute -right-8 top-[15%]"
                    style={{
                      opacity: cardsVisible[0] ? 1 : 0,
                      transition: "opacity 600ms ease 200ms",
                    }}
                  >
                    <svg width="80" height="60" viewBox="0 0 80 60" className="text-amber-400">
                      <path
                        d="M 0 30 Q 40 30, 60 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        markerEnd="url(#arrowhead)"
                      />
                    </svg>
                  </div>
                  <div
                    className="hidden lg:block absolute -right-8 top-[50%] -translate-y-1/2"
                    style={{
                      opacity: cardsVisible[0] ? 1 : 0,
                      transition: "opacity 600ms ease 300ms",
                    }}
                  >
                    <svg width="60" height="20" viewBox="0 0 60 20" className="text-amber-400">
                      <path
                        d="M 0 10 L 50 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        markerEnd="url(#arrowhead)"
                      />
                    </svg>
                  </div>
                  <div
                    className="hidden lg:block absolute -right-8 bottom-[15%]"
                    style={{
                      opacity: cardsVisible[0] ? 1 : 0,
                      transition: "opacity 600ms ease 400ms",
                    }}
                  >
                    <svg width="80" height="60" viewBox="0 0 80 60" className="text-amber-400">
                      <path
                        d="M 0 30 Q 40 30, 60 45"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        markerEnd="url(#arrowhead)"
                      />
                    </svg>
                  </div>
                  <div
                    className="hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2"
                    style={{
                      opacity: cardsVisible[0] ? 1 : 0,
                      transition: "opacity 600ms ease 200ms",
                    }}
                  >
                    <svg width="60" height="20" viewBox="0 0 60 20" className="text-amber-400">
                      <path
                        d="M 0 10 L 50 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        markerEnd="url(#arrowhead)"
                      />
                    </svg>
                  </div>

                  <svg className="hidden">
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="3"
                        orient="auto"
                        className="text-amber-400"
                      >
                        <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                      </marker>
                    </defs>
                  </svg>

                  <button className="w-48 py-3 px-4 bg-white text-black rounded-lg font-medium hover:bg-amber-50 transition-colors shadow-md animate-[float_3s_ease-in-out_infinite]">
                    New Appointment
                  </button>
                  <button className="w-48 py-3 px-4 bg-white text-black rounded-lg font-medium hover:bg-amber-50 transition-colors shadow-md animate-[float_3s_ease-in-out_0.5s_infinite]">
                    Message Patient
                  </button>
                  <button className="w-48 py-3 px-4 bg-white text-black rounded-lg font-medium hover:bg-amber-50 transition-colors shadow-md animate-[float_3s_ease-in-out_1s_infinite]">
                    View Analytics
                  </button>
                </div>

                {/* Right: Output Cards */}
                <div ref={cardsContainerRef} className="space-y-4 transition-all duration-300">
                  {/* Schedule Card */}
                  <div
                    className={`text-black p-4 rounded-lg border-2 shadow-lg border-foreground bg-slate-100 hover:shadow-2xl hover:border-amber-400 transition-all duration-500 cursor-pointer group ${
                      cardsVisible[0] ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
                    }`}
                  >
                    <h4 className="font-semibold mb-2 group-hover:text-amber-600 transition-colors duration-300">
                      Today's Schedule - {currentDate}
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                        <span className="font-medium">9:00 AM</span>
                        <span className="text-green-500 animate-pulse">●</span>
                        <span>John Smith - Checkup</span>
                      </div>
                      <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                        <span className="font-medium">11:30 AM</span>
                        <span className="text-yellow-500 animate-pulse">●</span>
                        <span>Sarah Wilson - Follow-up...</span>
                      </div>
                    </div>
                  </div>

                  {/* Communication Card */}
                  <div
                    className={`text-black p-4 rounded-lg border-2 shadow-lg border-foreground bg-slate-100 hover:shadow-2xl hover:border-amber-400 transition-all duration-500 cursor-pointer group ${
                      cardsVisible[1] ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2 text-sm flex-wrap group-hover:gap-3 transition-all duration-300">
                      <span className="group-hover:scale-110 transition-transform duration-300">💬 WhatsApp (3)</span>
                      <span className="group-hover:scale-110 transition-transform duration-300 delay-75">
                        ❤️ Email (1)
                      </span>
                      <span className="group-hover:scale-110 transition-transform duration-300 delay-150">📱 SMS</span>
                    </div>
                    <div className="space-y-1 text-sm group-hover:space-y-2 transition-all duration-300">
                      <p className="group-hover:translate-x-1 transition-transform duration-300">
                        Maria G.: "Can I reschedule..."
                      </p>
                      <p className="group-hover:translate-x-1 transition-transform duration-300 delay-75">
                        Dr. Chen: "Lab results ready"
                      </p>
                    </div>
                  </div>

                  {/* Records Card */}
                  <div
                    className={`text-black p-4 rounded-lg border-2 shadow-lg border-foreground bg-slate-100 hover:shadow-2xl hover:border-amber-400 transition-all duration-500 cursor-pointer group ${
                      cardsVisible[2] ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
                    }`}
                  >
                    <h4 className="font-semibold mb-2 group-hover:text-amber-600 transition-colors duration-300">
                      Intelligent Records
                    </h4>
                    <div className="space-y-1 text-sm group-hover:space-y-2 transition-all duration-300">
                      <p className="group-hover:translate-x-1 transition-transform duration-300">
                        📁 12 Updated Records Today
                      </p>
                      <p className="group-hover:translate-x-1 transition-transform duration-300 delay-75">
                        🔍 AI-Tagged: 8 Critical Flags
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 – Powering Every Corner of Healthcare */}
        {/* <section className="bg-muted/30 border-y border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-background text-center">
              ZeaCRM supports the full healthcare ecosystem — connecting medical, administrative, and patient operations in one place.
            </h2> */}
            {/* <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            </div> */}
          {/* </div>
        </section> */}

        <section
          className="border-y border-border py-16 md:py-24 animate-[fadeIn_0.8s_ease-out_0.4s] opacity-0 bg-[rgba(223,168,34,1)]"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[rgba(223,168,34,1)]">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
              ZeaCRM supports the full healthcare ecosystem — connecting medical, administrative, and patient operations
              in one place.
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Hospitals */}
              <div className="p-8 rounded-xl text-black hover:scale-105 hover:shadow-xl transition-all duration-300 bg-background border-foreground border">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20 bg-background">
                    <div className="absolute inset-0 rounded-full bg-background" />
                    <Image
                      src="/images/group-20241.png"
                      alt="Hospitals"
                      width={80}
                      height={80}
                      className="relative z-10"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-[rgba(223,168,34,1)]">Hospitals</h3>
                <p className="text-sm text-center text-foreground">
                  Coordinate departments, track patient journeys, and automate follow-ups.
                </p>
              </div>

              {/* Clinics */}
              <div className="p-8 rounded-xl text-black hover:scale-105 hover:shadow-xl transition-all duration-300 bg-background border border-foreground">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full bg-background" />
                    <Image
                      src="/images/group-20242.png"
                      alt="Clinics"
                      width={80}
                      height={80}
                      className="relative z-10"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-[rgba(223,168,34,1)]">Clinics</h3>
                <p className="text-sm text-center text-foreground">
                  Manage appointments, patient histories, and communication seamlessly.
                </p>
              </div>

              {/* Labs */}
              <div className="p-8 rounded-xl text-black hover:scale-105 hover:shadow-xl transition-all duration-300 bg-background border border-foreground">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full bg-primary" />
                    <Image
                      src="/images/group-20243.png"
                      alt="Labs"
                      width={80}
                      height={80}
                      className="relative z-10 bg-background"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-[rgba(223,168,34,1)]">Labs</h3>
                <p className="text-sm text-center text-foreground">
                  Send test reports automatically and track client feedback in real time.
                </p>
              </div>

              {/* Pharmacies */}
              <div className="p-8 rounded-xl text-black hover:scale-105 hover:shadow-xl transition-all duration-300 bg-background border border-foreground">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full bg-background" />
                    <Image
                      src="/images/group-20244.png"
                      alt="Pharmacies"
                      width={80}
                      height={80}
                      className="relative z-10"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-[rgba(223,168,34,1)]">Pharmacies</h3>
                <p className="text-sm text-center text-foreground">
                  Automate prescription refills, digital orders, and customer engagement.
                </p>
              </div>

              {/* Nursing Homes */}
              <div className="p-8 rounded-xl text-black hover:scale-105 hover:shadow-xl transition-all duration-300 bg-background border border-foreground">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full bg-background" />
                    <Image
                      src="/images/group-20245.png"
                      alt="Nursing Homes"
                      width={80}
                      height={80}
                      className="relative z-10"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-[rgba(223,168,34,1)]">Nursing Homes</h3>
                <p className="text-sm text-center text-foreground">Simplify care plans and automate family updates.</p>
              </div>

              {/* Wellness Centers */}
              <div className="p-8 rounded-xl text-black hover:scale-105 hover:shadow-xl transition-all duration-300 bg-background border-foreground border">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full bg-background" />
                    <Image
                      src="/images/group-20246.png"
                      alt="Wellness Centers"
                      width={80}
                      height={80}
                      className="relative z-10"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-[rgba(223,168,34,1)]">Wellness Centers</h3>
                <p className="text-sm text-center text-foreground">Personalize plans, reminders, and session logs.</p>
              </div>

              {/* Dental & Home Care */}
              <div className="p-8 rounded-xl text-black hover:scale-105 hover:shadow-xl transition-all duration-300 bg-background border border-foreground">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full bg-background" />
                    <Image
                      src="/images/group-20251.png"
                      alt="Dental & Home Care"
                      width={80}
                      height={80}
                      className="relative z-10"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-[rgba(223,168,34,1)]">Dental & Home Care</h3>
                <p className="text-sm text-center text-foreground">
                  Automate scheduling, recalls, and caregiver coordination.
                </p>
              </div>

              {/* Insurance Providers */}
              <div className="p-8 rounded-xl text-black hover:scale-105 hover:shadow-xl transition-all duration-300 bg-background border border-foreground">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full bg-background" />
                    <Image
                      src="/images/group-20248.png"
                      alt="Insurance Providers"
                      width={80}
                      height={80}
                      className="relative z-10"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-[rgba(223,168,34,1)]">Insurance Providers</h3>
                <p className="text-sm text-center text-foreground">
                  Manage leads, inventory, and client orders in one view.
                </p>
              </div>

              {/* Medical Suppliers */}
              <div className="p-8 rounded-xl text-black hover:scale-105 hover:shadow-xl transition-all duration-300 bg-background border border-foreground">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full bg-background" />
                    <Image
                      src="/images/group-20249.png"
                      alt="Medical Suppliers"
                      width={80}
                      height={80}
                      className="relative z-10"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-[rgba(223,168,34,1)]">Medical Suppliers</h3>
                <p className="text-sm text-center text-foreground">
                  Manage leads, inventory, and client orders in one view.
                </p>
              </div>

              {/* Telemedicine */}
              <div className="p-8 rounded-xl text-black hover:scale-105 hover:shadow-xl transition-all duration-300 bg-background border border-foreground">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full bg-background" />
                    <Image
                      src="/images/group-20250.png"
                      alt="Telemedicine"
                      width={80}
                      height={80}
                      className="relative z-10"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-[rgba(223,168,34,1)]">Telemedicine</h3>
                <p className="text-sm text-center text-foreground">
                  Integrate calls, chats, and consultations into a single system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 – Key Features by Segment */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <SegmentCarousel />
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
              <BookDemoButton className="inline-flex items-center justify-center rounded-md border border-background bg-transparent px-6 py-3 text-lg font-semibold text-background transition-transform duration-200 hover:scale-[1.03] active:scale-95">
                Book a Demo
              </BookDemoButton>
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
