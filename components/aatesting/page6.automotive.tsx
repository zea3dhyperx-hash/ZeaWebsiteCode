"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function AutomotiveManufacturingCRM() {
  const [expanded, setExpanded] = useState(false);
  const [lockedOpen, setLockedOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState(0);
  const [helpHover, setHelpHover] = useState<{ i: number | null; x: number; y: number }>({ i: null, x: 0, y: 0 });

  useEffect(() => {
    if (panelRef.current) setPanelHeight(panelRef.current.scrollHeight);
  }, [expanded]);

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
                  title="ZeaCRM Automotive & Manufacturing Video"
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
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary">Automotive & Manufacturing CRM</h1>
            <p className="mt-3 text-muted-foreground text-xl">Streamline Sales, Service, and Supply Chain — All in One Platform</p>
            <p className="mt-3 text-muted-foreground text-xl">ZeaCRM brings automation, intelligence, and visibility to every part of your automotive or manufacturing business.</p>
            <p className="mt-3 text-muted-foreground text-xl">From dealer management to production coordination, simplify workflows, boost efficiency, and strengthen customer relationships.</p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/demo">👉 Book a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/get-started">🚀 Start Free Trial</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-xl border border-border p-6 bg-card">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <li className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">Test drive booking automation</li>
              <li className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">Service & warranty reminders</li>
              <li className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">Inventory and order visibility</li>
              <li className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-background hover:scale-105 transform transition-transform">Omnichannel WhatsApp/SMS/Email</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries We Empower */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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
            <div key={card.title} className="rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
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
                {/* Inner card – applies scaling but does NOT create stacking context */}
                <div className="p-4 rounded-lg bg-muted transition-transform group-hover:scale-[1.02]">
                  <div className="font-medium">{item.title}</div>
                </div>

                {/* Floating tooltip */}
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
            <h3 className="mt-4 mb-4 text-muted-foreground">ZeaCRM empowers automotive and manufacturing businesses to run smarter operations:</h3>
            <ul className="mt-6 space-y-3 text-muted-foreground text-lg">
              <li>Unified CRM: Centralize leads, service records, and history</li>
              <li>AI Insights: Forecast sales, demand, and maintenance cycles</li>
              <li>Automation Engine: Replace manual tasks with workflows</li>
              <li>Omnichannel: WhatsApp, Email, and SMS</li>
              <li>Analytics Dashboard: Real‑time performance tracking</li>
            </ul>
            <p className="mt-4 text-sm">Result: Reduced overhead, faster turnaround, higher lifetime value.</p>
          </div>
          <div className="rounded-xl border border-border p-0 object-contain bg-card overflow-hidden">
            <video
              src="/videos/realvid.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Choose ZeaCRM */}
      <section className="bg-background border-t border-border py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Why Choose ZeaCRM</h2>
          <h2 className="text-xl mt-4 mb-4 md:text-xl text-muted-foreground">Our platform is engineered with five core principles:</h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
            {[
              "AI‑Powered Intelligence – Learn from data to act faster",
              "Automation‑First Design – Eliminate routine bottlenecks",
              "Secure & Compliant Architecture – Enterprise‑grade safety",
              "Industry‑Ready Customization – Tailored to automotive & industrial",
              "Proven Performance Impact – Measurable efficiency and ROI",
            ].map((txt) => (
              <li key={txt} className="p-4 rounded-lg bg-card border border-border">{txt}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-primary text-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">All-in-One Platform for Automotive & Industrial Excellence</h2>
          <p className="mt-4 text-lg">Whether it’s managing showrooms, suppliers, or after-sales service — ZeaCRM brings every team under one system.</p>
          <p className=" text-lg">With AI automation, integrated data, and predictive analytics, your organization becomes more agile, data-driven, and future-ready.</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="hover:scale-105 transition transition-all">
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
