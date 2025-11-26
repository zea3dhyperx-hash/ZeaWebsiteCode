"use client"

import Link from "next/link"

import { Brain, Compass, Crown, Lightbulb, Rocket, ShieldCheck, Sparkles } from "lucide-react"

import FAQ from "@/components/faq"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const founders = [
  {
    name: "Soujanya Rao",
    role: "Founder 1 - [Soujanya]",
    bio: "Add bio here.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    slug: "soujanya-rao",
  },
  {
    name: "Vinoth Kumar",
    role: "Founder 2 - [Vinoth]",
    bio: "Add bio here.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    slug: "vinoth-kumar",
  },
]

const teamMembers = [
  {
    name: "Lena Brooks",
    role: "Head of Customer Success",
    bio: "Partners with teams to adopt AI workflows and realize outcomes that stick.",
    img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kai Miller",
    role: "Head of Design",
    bio: "Builds calm, intuitive interfaces that keep humans at the center of every flow.",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Rina Patel",
    role: "Head of Product",
    bio: "Aligns roadmap and research so every release feels intuitive and purposeful.",
    img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Marcus Lee",
    role: "VP of Engineering",
    bio: "Keeps the platform resilient, secure, and fast as automation scales.",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
  },
]

const journey = [
  { year: "2019 - Beginnings", label: "Started as URL Factory, building websites and crafting clean, modern UI/UX experiences.", icon: Lightbulb },
  { year: "2020 - Digital Growth", label: "Expanded into full-service development, helping businesses improve their digital workflows.", icon: Compass },
  { year: "2021 - Workflow Tools", label: "Created internal tools and reusable systems that simplified project and client operations.", icon: Rocket },
  { year: "2022 - Process Framework", label: "Developed early automation modules and structured data pipelines to streamline tasks.", icon: Brain },
  { year: "2023 - Platform Foundation", label: "Built the core components and architecture that would later evolve into a unified system.", icon: ShieldCheck },
  { year: "2024 - Automation Exploration", label: "Researched workflow automation and prepared the groundwork for a platform-level transformation.", icon: Crown },
  { year: "2025 - Zea Platform (AI Era)", label: "Launched the Zea ecosystem with AI-powered workflows, automation, and the first release of ZeaCRM Elite.", icon: Sparkles },
]

export default function AboutUsPageContentAlt() {
  const scrollToFounder = (slug: string) => {
    const target = document.getElementById(`founder-${slug}`)
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-gray-100">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background/60 via-background/60 to-card/30 py-20">
          <video className="absolute inset-0 w-full h-full object-cover" src="/videos/herobg5.mp4" autoPlay muted loop playsInline aria-hidden="true" />
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
          <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">About Us</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-5xl mx-auto">Where intelligent automation meets human-centered customer relationships.</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16 space-y-10">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-amber-400 font-semibold">Founder Spotlight</h2>
            <h3 className="text-3xl font-bold text-white">More about the people building ZeaCRM</h3>
            <p className="text-gray-300 max-w-3xl mx-auto"></p>
          </div>
          <div className="flex flex-col gap-10">
            {founders.map((person, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div key={person.name} className={`grid items-center gap-8 md:grid-cols-2 ${isEven ? "" : "md:[&>div:first-child]:order-2"}`}>
                  <div id={`founder-${person.slug}`} className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70 h-full">
                    <div className="relative w-full aspect-[14/16] md:aspect-[14/16]">
                      <img src={person.img} alt={`Portrait of ${person.name}`} className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-amber-300 text-sm font-semibold mb-2">{person.role}</p>
                    <h3 className="text-2xl font-bold text-white mb-3">{person.name}</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">{person.bio}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary font-semibold mb-4">About Us</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Where intelligent automation meets human-centered customer relationships.</h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                ZeaCRM is an AI-powered customer workflow platform built to help teams communicate smarter, work faster, and build meaningful relationships with clarity. Instead of overwhelming users with complicated tools, we bring customer data, automation, and intuitive design together in one seamless experience. Our goal is simple: create technology that supports people—not the other way around. With ZeaCRM, businesses eliminate repetitive tasks, streamline operations, and deliver a more personal, efficient customer experience at scale.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="flex flex-col gap-6 mb-10 items-center text-center">
              <div>
                <p className="text-amber-400 font-semibold mb-2">⭐ Meet the Founders</p>
                {/* <h2 className="text-3xl font-bold text-white">(Add your two bios here.)</h2> */}
              </div>
              <p className="text-gray-300 max-w-3xl"></p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
              {founders.map((member) => (
                <div key={member.name} className="space-y-3 text-center">
                  <button
                    type="button"
                    onClick={() => scrollToFounder(member.slug)}
                    className="relative h-80 w-full max-w-sm mx-auto overflow-hidden rounded-2xl justify-center border border-slate-800 bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
                  </button>
                  <div className="space-y-1">
                    <p className="block w-full text-white font-semibold text-lg leading-tight">{member.name}</p>
                    <p className="block w-full text-gray-300 text-sm leading-snug">{member.role}</p>
                    <p className="block w-full text-gray-400 text-xs leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To build intelligent systems that simplify workflows, strengthen customer relationships, and help businesses operate with more clarity, efficiency, and human connection.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
            <ul className="space-y-3 text-gray-300">
              <li>A future where teams rely on automation and AI to remove operational friction—freeing people to focus on creativity, strategy, and genuine customer engagement.</li>
            </ul>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="text-center space-y-4 mb-10">
            <h3 className="text-3xl font-bold text-white">Our Journey</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center">
            {journey.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.year} className="relative flex flex-col items-center gap-3">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/15 border border-amber-300/40 text-amber-200">
                    <Icon />
                  </div>
                  <div className="text-white text-lg font-semibold">{item.year}</div>
                  <div className="text-gray-300 text-sm">{item.label}</div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-10 md:px-10 md:py-12 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-white">Join Us on This Journey</h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                We&apos;re just getting started. The future of AI-powered customer relationships is being written right now, and we&apos;re looking for passionate people and partners to help shape it.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link href="/contact-us" className="px-4 py-2 rounded-lg border border-slate-700 text-gray-200 font-semibold hover:border-amber-300 hover:text-amber-200 transition-colors">
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="text-center space-y-4 mb-10">
            <p className="text-amber-400 font-semibold">⭐ Meet the Team</p>
            {/* <h3 className="text-3xl font-bold text-white">(Add employee photos here.)</h3> */}
            <p className="text-gray-300 max-w-3xl mx-auto">
              We are a global team of engineers, designers, and product thinkers committed to building software that feels modern, intuitive, and human-centered. Every feature we ship is shaped by real-world challenges and a deep focus on customer experience.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col items-center gap-3">
                <div className="h-28 w-28 overflow-hidden rounded-full border border-slate-800">
                  <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <div className="text-center space-y-1">
                  <p className="text-white font-semibold text-lg">{member.name}</p>
                  <p className="text-gray-300 text-sm">{member.role}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 pb-20">
          <FAQ
            title="FAQs"
            className="px-6 py-10 md:px-10 md:py-12"
            items={[
              {
                q: "1. How is ZeaCRM different from traditional CRMs?",
                a: "ZeaCRM is built with AI and automation at its core, not added later. This creates a faster, cleaner, and more intelligent experience with fewer steps, less complexity, and more personalization.",
              },
              {
                q: "2. Do you support regulated industries?",
                a: "Yes. ZeaCRM includes encryption, role-based access controls, audit logs, and compliance-ready security architecture suitable for regulated industries.",
              },
              {
                q: "3. What does onboarding look like?",
                a: "We offer guided setup, data migration assistance, personalized training, and ongoing support to ensure your team gets value from day one.",
              },
              {
                q: "4. Can ZeaCRM scale with my business as we grow?",
                a: "Absolutely. ZeaCRM is built on a flexible, modular architecture that supports small teams and enterprise-level organizations with ease.",
              },
              {
                q: "5. Does ZeaCRM integrate with our existing tools?",
                a: "Yes. Our platform connects with popular communication, sales, support, and productivity tools—helping you unify your workflow without disrupting your existing ecosystem.",
              },
            ]}
          />
        </section>

        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="px-6 py-10 md:px-10 md:py-12 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-primary">Ready to See ZeaCRM in Action?</h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Experience the future of customer workflows with intelligent automation and a human touch.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link
                  href="/"
                  className="px-4 py-2 rounded-lg bg-primary text-slate-950 font-semibold hover:bg-amber-500 transition-colors shadow-[0_10px_30px_-12px_rgba(251,191,36,0.5)]"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
