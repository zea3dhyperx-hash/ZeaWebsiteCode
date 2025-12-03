"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AniAuto from "../animations/ani-auto";
import {
  Car,
  Factory,
  ShieldCheck,
  Sparkles,
  Gauge,
  Wrench,
  Workflow,
  Users2,
  Bot,
  Zap,
  BarChart4,
  CheckCircle2,
} from "lucide-react";



export default function AutomotiveManufacturingCRM() {
  const [expanded, setExpanded] = useState(false);
  const [lockedOpen, setLockedOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState(0);
  const [helpHover, setHelpHover] = useState<{ i: number | null; x: number; y: number }>({ i: null, x: 0, y: 0 });
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [activeSlide, setActiveSlide] = useState(0)
  const [industriesVisible, setIndustriesVisible] = useState(false)
  const industriesRef = useRef<HTMLDivElement>(null)
  const helpIcons = [Car, Factory, Wrench, Workflow, Users2, Bot, Zap, ShieldCheck, Gauge]

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIndustriesVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (industriesRef.current) {
      observer.observe(industriesRef.current)
    }

    return () => {
      if (industriesRef.current) {
        observer.unobserve(industriesRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIndustriesVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (industriesRef.current) {
      observer.observe(industriesRef.current)
    }

    return () => {
      if (industriesRef.current) {
        observer.unobserve(industriesRef.current)
      }
    }
  }, [])

  useEffect(() => {
    setVideoSrc(
      "https://www.youtube.com/embed/uMWnFWuF1ew?si=bq9ErFpW5Kk8AsAq"
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
  const helpItems = [
    { title: "Automobile Dealers", desc: "Manage leads, test drives, and service schedules effortlessly." },
    { title: "Car Service Centers", desc: "Automate reminders, billing, and customer follow-ups." },
    { title: "Parts Distributors", desc: "Monitor stock, automate reorders, and track shipments." },
    { title: "Vehicle Leasing Firms", desc: "Simplify renewals, invoicing, and customer updates." },
    { title: "OEMs & Equipment Makers", desc: "Oversee dealer orders, suppliers, and production." },
    { title: "Component Suppliers", desc: "Manage B2B relationships and delivery tracking." },
    { title: "Fleet & Logistics Operators", desc: "Track contracts, usage, and vehicle maintenance." },
    { title: "EV Startups", desc: "Manage network partners, charging points, and user engagement." },
    { title: "Machinery Dealers", desc: "Handle quotations, demos, and warranty processes digitally." },
  ];
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
          if (
            relatedTarget === null ||
            (relatedTarget instanceof Node && iframeRef.current?.contains(relatedTarget))
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
                  title="ZeaCRM Automotive & Manufacturing Video"
                  onLoad={onIframeLoad}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative border-b border-border bg-background py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 " aria-hidden="true" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="text-center md:text-left space-y-3">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">Automotive & Manufacturing CRM</h1>
            <p className="text-muted-foreground text-lg">Streamline Sales, Service, and Supply Chain - All in One Platform</p>
            <p className="text-muted-foreground text-lg">ZeaCRM brings automation, intelligence, and visibility to every part of your automotive or manufacturing business.</p>
            <p className="text-muted-foreground text-lg">From dealer management to production coordination, simplify workflows, boost efficiency, and strengthen customer relationships.</p>
            {/* <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" /> Automation-first
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <ShieldCheck className="h-4 w-4" /> Secure by design
              </span>
            </div> */}
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/playbooks/videos">Watch Demo Video</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/get-started">Book a Demo</Link>
              </Button>
            </div>
            {/* <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              {[
                { label: "AI insights", Icon: Bot },
                { label: "Ops visibility", Icon: Gauge },
                { label: "Faster service", Icon: Zap },
              ].map((chip) => {
                const Icon = chip.Icon;
                return (
                  <span key={chip.label} className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground/80 shadow-sm">
                    <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    {chip.label}
                  </span>
                );
              })}
            </div> */}
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl blur-2xl" aria-hidden="true" />
            <div className="relative rounded-3xl border border-border overflow-hidden bg-card shadow-2xl">
              <video
                src="https://storage.googleapis.com/msgsndr/bsexF0htDBOfNeCh7844/media/692e783b82f4c5639389a57b.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                aria-label="Healthcare CRM demonstration video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Empower */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Industries We Empower</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[{
            title: "Dealers & Showrooms",
            bullets: [
              "Automated test drive bookings via WhatsApp/SMS",
              "Smart service and warranty reminders",
              "Instant digital billing and invoicing",
            ],
            result: "Higher conversions and repeat servicing",
          },
          {
            title: "Spare Parts Retailers",
            bullets: [
              "Real‑time inventory alerts and reorders",
              "Digital payments and loyalty programs",
              "Automated repeat purchase campaigns",
            ],
            result: "More repeat buyers and improved cycles",
          },
          {
            title: "Equipment & OEM Manufacturers",
            bullets: [
              "Streamlined dealer–OEM communication",
              "Predictive maintenance alerts",
              "Performance analytics dashboards",
            ],
            result: "Better forecasting and supply chain visibility",
          }].map((card) => (
            <div key={card.title} className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {card.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm">Result: {card.result}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section
        ref={industriesRef}
        className="max-w-7xl mx-auto px-4 rounded-lg sm:px-6 lg:px-8 py-16 md:py-24 text-card bg-foreground"
      >
        <h2
          className={`text-4xl md:text-5xl font-extrabold text-center text-[rgba(223,168,34,1)] transition-all duration-1000 ${
            industriesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Industries We Empower
        </h2>
        <div className="mt-10 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {[
                {
                  title: "Dealers & Showrooms",
                  bullets: [
                    "Automated test drive bookings via WhatsApp/SMS",
                    "Smart service and warranty reminders",
                    "Instant digital billing and invoicing",
                  ],
                  result: "Higher conversions and repeat servicing",
                },
                {
                  title: "Spare Parts Retailers",
                  bullets: [
                    "Real‑time inventory alerts and reorders",
                    "Digital payments and loyalty programs",
                    "Automated repeat purchase campaigns",
                  ],
                  result: "More repeat buyers and improved cycles",
                },
                {
                  title: "Equipment & OEM Manufacturers",
                  bullets: [
                    "Streamlined dealer–OEM communication",
                    "Predictive maintenance alerts",
                    "Performance analytics dashboards",
                  ],
                  result: "Better forecasting and supply chain visibility",
                },
              ].map((card, index) => (
                <div key={card.title} className="w-full flex-shrink-0 px-4">
                  <div
                    className={`max-w-5xl mx-auto rounded-2xl border-2 border-border overflow-hidden transition-all duration-700 bg-white shadow-2xl ${
                      industriesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Left side - Content */}
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{card.title}</h3>
                        <ul className="space-y-4 mb-6">
                          {card.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                              <CheckCircle2 className="text-orange-600 h-5 w-5 mt-1" aria-hidden="true" />
                              <span className="text-slate-700 text-lg leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-lg font-semibold text-orange-600 mt-4">Result: {card.result}</p>
                      </div>

                      {/* Right side - Image */}
                      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
                        <div className="relative w-full h-full min-h-[300px] rounded-lg overflow-hidden shadow-xl">
                          <img
                            src={
                              card.title === "Dealers & Showrooms"
                                ? "/images/dealers-showrooms.png"
                                : card.title === "Spare Parts Retailers"
                                  ? "/images/untitled-20design-20-2814-29.png"
                                  : "/images/equipment-oem.png"
                            }
                            alt={card.title}
                            className="w-full h-full object-cover"
                          />
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-gray-100 text-slate-900 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-gray-100 text-slate-900 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex items-center justify-center gap-3 mt-8">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeSlide === index ? "w-12 h-3 bg-orange-600" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      {/* <section className="bg-muted/30 border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Who We Help</h2>
          <p className="text-muted-foreground text-center mt-4 mb-4">ZeaCRM is designed to unify every link in the automotive and industrial value chain.</p>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {helpItems.map((item, i) => (
              <li
                key={item.title}
                className="relative group p-4 rounded-lg bg-muted transition-transform hover:scale-[1.02] focus-within:scale-[1.02] overflow-visible"
                onMouseEnter={() => setHelpHover((h) => ({ ...h, i }))}
                onMouseMove={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  const rect = target.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  setHelpHover({ i, x, y });
                }}
                onMouseLeave={() => setHelpHover({ i: null, x: 0, y: 0 })}
              >
                <div className="font-medium">{item.title}</div>
                {helpHover.i === i && (
                  <div
                    className="pointer-events-none absolute z-[1005] min-w-[14rem] max-w-[18rem] rounded-md bg-primary text-background text-sm p-3 shadow-lg ring-1 ring-black/10"
                    style={{ left: helpHover.x + 12, top: helpHover.y + 12 }}
                  >
                    <div className="font-semibold text-sm">{item.title}</div>
                    <p className="mt-1 leading-5">{item.desc}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      {/* Who We Help */}
      <section className="bg-muted/30 border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">
            Who We Help
          </h2>
          <p className="text-muted-foreground text-center mt-4 mb-4">
            ZeaCRM is designed to unify every link in the automotive and industrial value chain.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {helpItems.map((item, i) => (
              <li
                key={item.title}
                className="relative group p-0 rounded-lg overflow-visible"
                onMouseEnter={() => setHelpHover((h) => ({ ...h, i }))}
                onMouseMove={(e) => {
                  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  setHelpHover({ i, x, y });
                }}
                onMouseLeave={() => setHelpHover({ i: null, x: 0, y: 0 })}
              >
                <div className="p-5 rounded-lg bg-card border border-border shadow-sm transition-all group-hover:-translate-y-1 group-hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 border border-primary/30 text-primary">
                      {(() => {
                        const Icon = helpIcons[i % helpIcons.length]
                        return <Icon className="h-5 w-5" aria-hidden="true" />
                      })()}
                    </div>
                    <div className="font-medium">{item.title}</div>
                  </div>
                </div>

                {helpHover.i === i && (
                  <div
                    className="pointer-events-none absolute z-[99999] min-w-[14rem] max-w-[18rem] rounded-md bg-primary text-background text-sm p-3 shadow-lg ring-1 ring-black/10"
                    style={{
                      left: helpHover.x + 12,
                      top: helpHover.y + 12,
                    }}
                  >
                    <div className="font-semibold text-sm">{item.title}</div>
                    <p className="mt-1 leading-5">{item.desc}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* Built for Smart Growth */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Built for Smart, Scalable Growth</h2>
            <p className="mt-4 mb-4 text-muted-foreground text-lg">ZeaCRM empowers automotive and manufacturing businesses to run smarter operations:</p>
            <ul className="mt-6 space-y-3 text-muted-foreground text-lg">
              {[
                { text: "Unified CRM: Centralize leads, service records, and history", Icon: Users2 },
                { text: "AI Insights: Forecast sales, demand, and maintenance cycles", Icon: Gauge },
                { text: "Automation Engine: Replace manual tasks with workflows", Icon: Workflow },
                { text: "Omnichannel: WhatsApp, Email, and SMS", Icon: Sparkles },
                { text: "Analytics Dashboard: Real-time performance tracking", Icon: BarChart4 },
              ].map(({ text, Icon }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 border border-primary/30 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">Result: Reduced overhead, faster turnaround, higher lifetime value.</p>
          </div>
          {/* <div className="rounded-xl border border-border p-0 object-contain bg-card overflow-hidden"> */}
            {/* <video
              src="/videos/realvid.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            /> */}
            <AniAuto />
          {/* </div> */}
        </div>
      </section>

      {/* Why Choose ZeaCRM */}
      <section className="bg-background border-t border-border py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Why Choose ZeaCRM</h2>
          <p className="text-lg mt-4 mb-4 text-muted-foreground">Our platform is engineered with five core principles:</p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
            {[
              { text: "AI-Powered Intelligence - Learn from data to act faster", Icon: Bot },
              { text: "Automation-First Design - Eliminate routine bottlenecks", Icon: Workflow },
              { text: "Secure & Compliant Architecture - Enterprise-grade safety", Icon: ShieldCheck },
              { text: "Industry-Ready Customization - Tailored to automotive & industrial", Icon: Factory },
              { text: "Proven Performance Impact - Measurable efficiency and ROI", Icon: BarChart4 },
            ].map(({ text, Icon }) => (
              <li key={text} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:scale-105 hover:shadow-lg transition-all duration-300">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 border border-primary/30 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-primary text-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">All-in-One Platform for Automotive & Industrial Excellence</h2>
          <p className="mt-4 text-lg">Whether it's managing showrooms, suppliers, or after-sales service — ZeaCRM brings every team under one system.</p>
          <p className="mt-4 text-lg">With AI automation, integrated data, and predictive analytics, your organization becomes more agile, data-driven, and future-ready.</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="hover:scale-105 transition transition-all">
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
            <summary className="cursor-pointer font-semibold">How does ZeaCRM help automotive businesses increase sales?</summary>
            <p className="mt-2 text-muted-foreground">Automates lead capture, test drive scheduling, and follow‑ups for faster responses and better visibility across stages.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">Can manufacturers use ZeaCRM for dealer and supplier management?</summary>
            <p className="mt-2 text-muted-foreground">Yes — unified dashboards track orders, payments, and production status in real time.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">Does ZeaCRM support after‑sales service automation?</summary>
            <p className="mt-2 text-muted-foreground">Absolutely — warranty reminders, service notifications, and more to boost retention.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">How can ZeaCRM improve inventory and parts management?</summary>
            <p className="mt-2 text-muted-foreground">Automated stock alerts, reorder triggers, and integrated billing ensure availability.</p>
          </details>
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">Why is ZeaCRM ideal for global brands?</summary>
            <p className="mt-2 text-muted-foreground">AI‑powered, multi‑location/multilingual/multi‑currency readiness supports scale.</p>
          </details>
        </div>
      </section>

      <Footer />
    </>
  );
}
