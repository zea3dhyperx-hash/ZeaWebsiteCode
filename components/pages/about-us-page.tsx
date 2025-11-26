"use client"

import Link from "next/link"

import { Brain, Compass, Crown, Facebook, HandHeart, Heart, Instagram, Lightbulb, Linkedin, Rocket, ShieldCheck, Sparkles, Twitter, Users } from "lucide-react"

import FAQ from "@/components/faq"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const team = [
  {
    name: "Soujanya Rao",
    role: "Founder",
    bio: "Product-first founder who turned customer pain points into the blueprint for ZeaCRM.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    slug: "soujanya-rao",
    socials: {
      instagram: "https://instagram.com/soujanya-rao",
      facebook: "https://facebook.com/soujanya.rao",
      twitter: "https://twitter.com/soujanyarao",
      linkedin: "https://linkedin.com/in/soujanyarao",
    },
  },
  {
    name: "Vinoth Kumar",
    role: "CEO",
    bio: "Operator focused on predictable delivery, secure scale, and measurable customer impact.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    slug: "vinoth-kumar",
    socials: {
      instagram: "https://instagram.com/vinoth-kumar",
      facebook: "https://facebook.com/vinoth.kumar",
      twitter: "https://twitter.com/vinothk",
      linkedin: "https://linkedin.com/in/vinothk",
    },
  },
  {
    name: "Lena Brooks",
    role: "Head of Customer Success",
    bio: "Partners with teams to adopt AI workflows and realize outcomes that stick.",
    img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
    slug: "lena-brooks",
    socials: {
      instagram: "https://instagram.com/lenabrooks",
      facebook: "https://facebook.com/lena.brooks",
      twitter: "https://twitter.com/lena_brooks",
      linkedin: "https://linkedin.com/in/lenabrooks",
    },
  },
  {
    name: "Kai Miller",
    role: "Head of Design",
    bio: "Builds calm, intuitive interfaces that keep humans at the center of every flow.",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
    slug: "kai-miller",
    socials: {
      instagram: "https://instagram.com/kai-miller",
      facebook: "https://facebook.com/kai.miller",
      twitter: "https://twitter.com/kaimiller",
      linkedin: "https://linkedin.com/in/kaimiller",
    },
  },
]

const leaders = [
  {
    slug: "soujanya-rao",
    name: "Soujanya Rao",
    role: "Founder",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80",
    slogan: "Build boldly, listen constantly.",
    copy:
      "Soujanya turned years of customer interviews into the first ZeaCRM prototype. She champions product clarity, reliable data foundations, and workflows that reduce busywork for every team. Her focus is making AI feel like a trusted teammate rather than a black box.",
    motivation: "Why this work: she loves helping teams reclaim time for real conversations and decisions instead of manual follow-ups.",
  },
  {
    slug: "vinoth-kumar",
    name: "Vinoth Kumar",
    role: "CEO",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
    slogan: "Steady delivery beats lucky sprints.",
    copy:
      "Vinoth leads operations and growth, ensuring every release is stable, compliant, and tied to customer ROI. He drives the cadence that keeps product, sales, and support moving together, with an eye on uptime and security.",
    motivation: "Why this work: he enjoys turning ambitious roadmaps into predictable outcomes customers can rely on every quarter.",
  },
  {
    slug: "lena-brooks",
    name: "Lena Brooks",
    role: "Head of Customer Success",
    img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80",
    slogan: "Adoption is a feeling, not a checkbox.",
    copy:
      "Lena designs onboarding and change-management programs that help teams adopt automation without friction, creating measurable wins within the first 30 days. She builds playbooks that keep humans confident while the AI does the heavy lifting.",
    motivation: "Why this work: she loves seeing teams celebrate their first automated win and the momentum that follows.",
  },
  {
    slug: "kai-miller",
    name: "Kai Miller",
    role: "Head of Design",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=700&q=80&sat=-60",
    slogan: "Design calm surfaces for complex work.",
    copy:
      "Kai leads the design system and accessibility efforts, ensuring every surface is intuitive, inclusive, and consistent-from dashboards to mobile experiences. He keeps interactions minimal so users stay focused on customers, not controls.",
    motivation: "Why this work: he loves translating intricate workflows into interfaces that feel obvious on the first click.",
  },
]

export default function AboutUsPageContent() {
  const scrollToLeader = (slug: string) => {
    const target = document.getElementById(`leader-${slug}`)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-gray-100">

        <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background/60 via-background/60 to-card/30 py-20"
        >
        {/* Background video */}
        <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/herobg5.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
        />
        {/* Dark overlay to improve text contrast */}
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
            <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "1s" }}
            />
        </div>

        <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">About Us</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-5xl mx-auto">We build AI-powered tools that keep relationships human.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300">
                <a href="/playbooks/videos">Request Demo</a>
            </button>
            </div>
        </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary font-semibold mb-4">About Us</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">We build AI-powered tools that keep relationships human.</h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                ZeaCRM started with a simple idea: make it effortless for teams to know every customer, anticipate their needs, and act
                quickly. Today we partner with organizations across industries to automate the busywork so people can focus on meaningful
                conversations.
              </p>
            </div>
          </div>
        </section>

        {/* <section className="max-w-6xl mx-auto px-4 py-16 space-y-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 text-amber-300 font-semibold">
                <Heart className="h-5 w-5" /> Our Mission
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Keep every relationship warm, human, and full of care.</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe technology should feel like a kind friend—clearing paths, anticipating needs, and letting people focus on the
                moments that matter. ZeaCRM exists to remove friction so teams can lead with empathy at scale.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: HandHeart, title: "Care at scale", desc: "Automations that feel personal, never robotic." },
                  { icon: ShieldCheck, title: "Trust first", desc: "Security and clarity woven into every interaction." },
                  { icon: Users, title: "People-centered", desc: "Designed with the humans behind every record in mind." },
                  { icon: Sparkles, title: "Delightful by design", desc: "Interfaces that stay calm, clear, and reassuring." },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-3 rounded-xl bg-slate-900/60 border border-slate-800 p-3">
                      <div className="h-10 w-10 rounded-lg bg-amber-400/15 text-amber-200 border border-amber-300/30 flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{item.title}</p>
                        <p className="text-gray-300 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Every snapshot is a promise: we build alongside our customers, shoulder to shoulder. The more we listen, co-create, and
                celebrate small wins, the warmer every relationship becomes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
              ].map((src) => (
                <div key={src} className="overflow-hidden rounded-2xl border border-slate-800">
                  <img src={src} alt="Team moments" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
            <p className="text-gray-300">
              Help every team build trust at scale by combining automation, data, and human empathy in one platform.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-semibold text-white mb-3">What We Do</h3>
            <p className="text-gray-300">
              We deliver AI-driven workflows, unified data, and real-time insights so teams can move faster and serve smarter.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-semibold text-white mb-3">How We Work</h3>
            <p className="text-gray-300">
              We collaborate closely with customers, ship iteratively, and measure every release against customer outcomes.
            </p>
          </div>
        </section> */}

        <section className="bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="flex flex-col gap-6 mb-10">
              <div>
                <p className="text-amber-400 font-semibold mb-2">Meet the Team</p>
                <h2 className="text-3xl font-bold text-white">People behind the product</h2>
              </div>
              <p className="text-gray-300 max-w-3xl">
                We are a distributed team of builders, designers, and operators who believe great software should feel calm, secure, and
                personal. Here are a few of the people leading the charge.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="space-y-3 text-center">
                  <div
                    role="link"
                    tabIndex={0}
                    onClick={() => {
                      scrollToLeader(member.slug)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        scrollToLeader(member.slug)
                      }
                    }}
                    className="group relative h-80 w-full [perspective:1000px] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-2xl"
                  >
                    <div className="absolute inset-0 rounded-2xl border border-slate-800 bg-slate-900/60 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]">
                        <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-slate-950/90 flex flex-col items-center justify-center gap-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <p className="text-white font-semibold">{member.name}</p>
                        <div className="flex gap-4 text-amber-200">
                          <a href={member.socials.instagram} aria-label={`${member.name} Instagram`} className="hover:text-amber-400 transition-colors" target="_blank" rel="noreferrer">
                            <Instagram className="h-5 w-5" />
                          </a>
                          <a href={member.socials.facebook} aria-label={`${member.name} Facebook`} className="hover:text-amber-400 transition-colors" target="_blank" rel="noreferrer">
                            <Facebook className="h-5 w-5" />
                          </a>
                          <a href={member.socials.twitter} aria-label={`${member.name} Twitter`} className="hover:text-amber-400 transition-colors" target="_blank" rel="noreferrer">
                            <Twitter className="h-5 w-5" />
                          </a>
                          <a href={member.socials.linkedin} aria-label={`${member.name} LinkedIn`} className="hover:text-amber-400 transition-colors" target="_blank" rel="noreferrer">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <button
                      type="button"
                      onClick={() => scrollToLeader(member.slug)}
                      className="block w-full text-white font-semibold text-lg leading-tight hover:text-amber-200 transition-colors"
                    >
                      {member.name}
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollToLeader(member.slug)}
                      className="block w-full text-gray-300 text-sm leading-snug hover:text-amber-200 transition-colors"
                    >
                      {member.role}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16 space-y-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-amber-400 font-semibold">Leadership spotlight</h2>
            <h3 className="text-3xl font-bold text-white">More about the people building ZeaCRM</h3>
            <p className="text-gray-300 max-w-3xl">
              Learn what drives each leader, their focus areas, and how they shape the product and customer experience.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            {leaders.map((person, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div key={person.name} className={`grid items-center gap-8 md:grid-cols-2 ${isEven ? "" : "md:[&>div:first-child]:order-2"}`}>
                  <div id={`leader-${person.slug}`} className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70 h-full">
                    <div className="relative w-full aspect-[14/16] md:aspect-[14/16]">
                      <img src={person.img} alt={`Portrait of ${person.name}`} className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-amber-300 text-sm font-semibold mb-2">{person.role}</p>
                    <h3 className="text-2xl font-bold text-white mb-3">{person.name}</h3>
                    <p className="text-amber-200 text-sm font-semibold mb-2">{person.slogan}</p>
                    <p className="text-gray-300 leading-relaxed mb-3">{person.copy}</p>
                    <p className="text-gray-400 leading-relaxed">{person.motivation}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-2xl font-semibold text-white mb-4">Our story</h3>
            <p className="text-gray-300 leading-relaxed">
              We founded ZeaCRM after watching teams juggle fragmented tools that slowed them down. By unifying data, automating follow-ups,
              and providing AI guidance, we enable teams to spend time where it matters most.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              From the first beta customers to enterprise deployments, we have focused on reliability, security, and a user experience
              that teams love to use every day.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-2xl font-semibold text-white mb-4">What guides us</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Customer-first decisions that prioritize clarity and trust.</li>
              <li>Security and compliance as defaults, not add-ons.</li>
              <li>Measurable impact through automation that saves time.</li>
              <li>Design that keeps human connection at the center of every workflow.</li>
            </ul>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="text-center space-y-4 mb-10">
            <h3 className="text-3xl font-bold text-white">Our Journey Into the Future</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              From our first prototype to today&apos;s AI-driven platform, we focus on user-centered design, secure engineering, and performance
              you can trust.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-0 right-0 top-9 h-px bg-slate-800" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              {[
                { year: "2020", label: "Concept", icon: Lightbulb },
                { year: "2021", label: "Inception", icon: Compass },
                { year: "2022", label: "Launch", icon: Rocket },
                { year: "2023", label: "Breakthrough Model", icon: Brain },
                { year: "2024", label: "Platform Maturity", icon: ShieldCheck },
                { year: "2025", label: "Elite Version", icon: Crown },
              ].map((item) => {
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
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 pb-20 space-y-6">
          <div className="text-center space-y-3">
            {/* <p className="text-amber-400 font-semibold">Snapshots from the journey</p> */}
            {/* <h3 className="text-3xl font-bold text-white">Moments that shaped ZeaCRM</h3> */}
            {/* <p className="text-gray-300 max-w-3xl mx-auto">
              Hover to expand each milestone moment and see the story behind it.
            </p> */}
          </div>
          <div className="flex h-[320px] sm:h-[360px] md:h-[420px] w-full gap-1 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-1">
            {[
              {
                title: "ZeaCRM Lauch day",
                // image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&h=900&q=80",
                image: "images(about us)/s1.png",
              },
              {
                title: "Launch day",
                // image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&h=900&q=80",
                image: "images(about us)/s2.png",
              },
              {
                title: "Success playbooks",
                // image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&h=900&q=80",
                image: "images(about us)/s3.png",
              },
              {
                title: "Success Copy",
                // image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&h=900&q=80",
                image: "images(about us)/s4.png",
              },
              {
                title: "Scale-up retrospective",
                // image: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&w=1600&h=900&q=80",
                image: "images(about us)/s5.png",
              },
            //   {
            //     title: "Partner lab",
                // image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&h=900&q=80",
            //     image: "images(about us)/s6.png",
            //   },
            ].map((card) => (
              <div
                key={card.title}
                className="group relative flex h-full w-16 flex-1 cursor-pointer overflow-hidden rounded-xl transition-[flex] duration-300 ease-in-out hover:flex-[100]"
                style={{ flexBasis: "10%" }}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <div className="relative w-full h-full">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      style={{ aspectRatio: "16 / 9" }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <p className="text-2xl font-bold text-white drop-shadow-lg">{card.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-10 md:px-10 md:py-12 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-white">Join Us on This Journey</h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                We&apos;re just getting started. The future of AI-powered customer relationships is being written right now, and we&apos;re looking
                for passionate people and partners to help shape it.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                {/* <Link
                  href="/contact-us"
                  className="px-4 py-2 rounded-lg bg-primary text-slate-950 font-semibold hover:bg-amber-500 transition-colors shadow-[0_10px_30px_-12px_rgba(251,191,36,0.5)]"
                >
                  Explore Careers
                </Link> */}
                <Link
                  href="/contact-us"
                  className="px-4 py-2 rounded-lg border border-slate-700 text-gray-200 font-semibold hover:border-amber-300 hover:text-amber-200 transition-colors"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="text-center space-y-4 mb-10">
            <p className="text-amber-400 font-semibold">Meet the Team</p>
            <h3 className="text-3xl font-bold text-white">The people building ZeaCRM</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Builders, designers, and operators focused on keeping every customer relationship human.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
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
            title="About ZeaCRM"
            className="px-6 py-10 md:px-10 md:py-12"
            items={[
              {
                q: "How is ZeaCRM different from other CRMs?",
                a: "We pair AI-powered automation with human-first design so teams can focus on conversations, not clicks. Workflows, reminders, and follow-ups are automated while keeping data transparent and secure.",
              },
              {
                q: "Do you support regulated industries?",
                a: "Yes. We work with healthcare, finance, and other regulated teams. Security, auditability, and data residency are built into our roadmap and delivery process.",
              },
              {
                q: "What does onboarding look like?",
                a: "We run a guided onboarding with playbooks tailored to your roles. Most teams see their first automated wins within 30 days, with Customer Success coaching along the way.",
              },
            ]}
          />
        </section>

        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="px-6 py-10 md:px-10 md:py-12 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-primary">Ready to talk?</h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                See ZeaCRM in action or get your questions answered.Book a tailored demo, reach out to our team, or browse FAQs to learn how ZeaCRM fits your workflows.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link
                  href="/"
                  className="px-4 py-2 rounded-lg bg-primary text-slate-950 font-semibold hover:bg-amber-500 transition-colors shadow-[0_10px_30px_-12px_rgba(251,191,36,0.5)]"
                >
                  Book a Demo
                </Link>
                {/* <Link
                  href="/contact-us"
                  className="px-4 py-2 rounded-lg border border-slate-700 text-gray-200 font-semibold hover:border-amber-300 hover:text-amber-200 transition-colors"
                >
                  Partner With Us
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
