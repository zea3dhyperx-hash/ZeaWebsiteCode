"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"

import { Brain, Compass, Crown, Facebook, HandHeart, Heart, Instagram, Lightbulb, Linkedin, Rocket, ShieldCheck, Sparkles, Twitter, Users } from "lucide-react"

import FAQ from "@/components/faq"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { BookDemoButton } from "../book-demo-button"

const team = [
  {
    name: "Vinoth Kumar",
    role: "Founder",
    bio: "Operator focused on predictable delivery, secure scale, and measurable customer impact.",
    img: "/about-us-images/founder21.png",
    slug: "vinoth-kumar",
    socials: {
      instagram: "https://instagram.com/vinoth-kumar",
      facebook: "https://facebook.com/vinoth.kumar",
      twitter: "https://twitter.com/vinothk",
      linkedin: "https://linkedin.com/in/vinothk",
    },
  },
  {
    name: "Katta Soujanya Rao",
    role: "Founder",
    bio: "Product-first founder who turned customer pain points into the blueprint for ZeaCRM.",
    img: "/about-us-images/founder11.jpg",
    // img: "/about-us-images/founder1.jpg",
    slug: "soujanya-rao",
    socials: {
      instagram: "https://instagram.com/soujanya-rao",
      facebook: "https://facebook.com/soujanya.rao",
      twitter: "https://twitter.com/soujanyarao",
      linkedin: "https://linkedin.com/in/soujanyarao",
    },
  },
]

// const extendedTeam = [
//   ...team,
//   {
//     name: "Lena Brooks",
//     role: "Head of Customer Success",
//     bio: "Partners with teams to adopt AI workflows and realize outcomes that stick.",
//     img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Kai Miller",
//     role: "Head of Design",
//     bio: "Builds calm, intuitive interfaces that keep humans at the center of every flow.",
//     img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Selin Yilmaz",
//     role: "Product Operations Lead",
//     bio: "Keeps launches on track and teams aligned from idea to rollout.",
//     img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80&sat=-30",
//   },
//   {
//     name: "Samuel Hart",
//     role: "Principal Engineer",
//     bio: "Builds resilient systems that stay fast and secure at any scale.",
//     img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Alice Moreno",
//     role: "Customer Programs Manager",
//     bio: "Designs adoption playbooks that help customers realize value quickly.",
//     img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80&sat=-40",
//   },
//   {
//     name: "Gwen Carter",
//     role: "Data Strategy Lead",
//     bio: "Shapes data quality standards and analytics that inform every decision.",
//     img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Marco Reyes",
//     role: "Security Engineer",
//     bio: "Hardened our infrastructure so reliability and compliance stay non-negotiable.",
//     img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Priya Shah",
//     role: "Lifecycle Marketing Manager",
//     bio: "Crafts campaigns that translate product value into clear customer wins.",
//     img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80&sat=-35",
//   },
//   {
//     name: "Ethan Collins",
//     role: "Solutions Architect",
//     bio: "Designs scalable architectures that keep implementations smooth and future-ready.",
//     img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Noor Patel",
//     role: "QA Lead",
//     bio: "Builds test suites that keep every release stable, fast, and user-friendly.",
//     img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80&sat=-20",
//   },
// ]

const marqueeRows = [
  {
    direction: "left",
    speed: 50,
    images: [
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739790/IMG_5936_c4gonk.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739788/IMG_5859_p5ar74.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739791/IMG_6001_andvgf.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739788/IMG_5734_ltxyvj.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739791/IMG_5858_dqpjrg.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739794/IMG_6002_qteopq.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739791/IMG_5999_trh1qs.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739794/IMG_6006_twx1j7.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739794/IMG_6003_rdqwyz.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739791/IMG_5976_grzzlx.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739794/IMG_6008_qnevwt.jpg",
    ],
  },
  {
    direction: "right",
    speed: 55,
    images: [
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739804/IMG_6543_w6znib.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739803/IMG_6530_ma8wnn.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739803/IMG_6398_qslmbm.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739801/IMG_6387_mflucz.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739808/IMG_6545_qgdaqe.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739803/IMG_6393_lmopip.jpg",
    ],
  },
  {
    direction: "left",
    speed: 60,
    images: [
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739797/IMG_6239_fqfhdv.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739797/IMG_6255_c9et0l.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739797/IMG_6166_hatdss.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739808/IMG_5301_i7d2h3.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739796/IMG_6207_mwlogz.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739797/IMG_6219_fsqana.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739798/IMG_6280_vsvdkf.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739788/IMG_5300_qg3hgi.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739804/IMG_6300_an0ta0.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739800/IMG_6338_sivtuy.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739800/IMG_6293_n6fmem.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739787/IMG_5285_vawtmy.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739800/IMG_6292_rnnepk.jpg",
      "https://res.cloudinary.com/dlyxgk8cx/image/upload/v1764739787/IMG_5307_olqfdm.jpg",
    ],
  },
  // {
  //   direction: "right",
  //   speed: 50,
  //   images: [
  //     "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
  //     "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&q=80",
  //     "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?auto=format&fit=crop&w=600&q=80",
  //     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  //     "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  //     "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
  //     "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
  //   ],
  // },
]

const leaders = [
  {
    slug: "vinoth-kumar",
    name: "Vinoth Kumar",
    role: "Founder",
    img: "/about-us-images/founder22.jpg",
    slogan: "Work with heart, finish what you start.",
    copy:
    "Vinoth was born in Kancheepuram, Tamil Nadu, in a family rooted in traditional weaving - a place where discipline, craftsmanship, and hard work were a way of life. Growing up in a simple South Indian home, he learned to stay accountable, work honestly, and finish what he starts. Those values became the foundation of who he is today. \n\nEven though his passion was always sales, he followed the classic Tamil Nadu route and completed Engineering in 2010. Life moved forward, and he married Soujanya - now his co-founder - and together they are raising their son, Mithran. \n\nAfter nearly a decade in Bengaluru's fast urban life, Vinoth realised something important: businesses weren't failing due to lack of talent, but due to broken systems. So he left the city and settled in Salem with a mission to help small businesses automate, organise, and grow without chaos. \n\nWith just a laptop and long nights of figuring things out, he built URL Factory and later ZEA CRM - not just as tools, but as practical ecosystems that solve real operational problems. People come to Vinoth for clarity, workflows, and structure - and he rarely says no, a weakness that also makes him deeply trusted. His vision is simple: build strong systems, help founders breathe easier, and scale a company beyond $10M with honesty, discipline, and purpose.",
    motivation: "",
  },
  {
    slug: "soujanya-rao",
    name: "Katta Soujanya Rao",
    role: "Founder",
    img: "/about-us-images/founder1.jpg",
    slogan: "Helping teams operate with discipline, structure, and smart automation.",
    copy:
      "Katta Soujanya Rao is the Co-Founder of URL Factory and ZeaCRM, two rapidly growing technology ventures focused on helping businesses automate their operations, streamline workflows, and scale with confidence.\n\nWith over five years of experience in sales, marketing, and growth strategy, she brings a strong understanding of customer behavior, operational challenges, and the systems modern businesses need to perform efficiently. Her career across startups and multinational companies shaped her ability to build solutions that are practical, scalable, and easy for any business to adopt. Driven by this experience, Soujanya co-founded URL Factory to deliver digital solutions, workflow automation, voice AI, and operational systems that support service-based businesses. \n\nAs a co-founder of ZeaCRM, she leads product direction for a business management platform designed for growing companies - offering CRM and lead management, sales pipelines, communication tools, and automated workflows that simplify daily operations. Under her leadership, both platforms have expanded significantly, supporting industries across services, retail, education, healthcare, real estate, and blue-collar sectors. \n\nHer vision remains clear: to help businesses work smarter, automate faster, and grow consistently using modern AI and workflow technologies.",
    motivation: "",
  },
  // {
  //   slug: "lena-brooks",
  //   name: "Lena Brooks",
  //   role: "Head of Customer Success",
  //   img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80",
  //   slogan: "Adoption is a feeling, not a checkbox.",
  //   copy:
  //     "Lena designs onboarding and change-management programs that help teams adopt automation without friction, creating measurable wins within the first 30 days. She builds playbooks that keep humans confident while the AI does the heavy lifting.",
  //   motivation: "Why this work: she loves seeing teams celebrate their first automated win and the momentum that follows.",
  // },
  // {
  //   slug: "kai-miller",
  //   name: "Kai Miller",
  //   role: "Head of Design",
  //   img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=700&q=80&sat=-60",
  //   slogan: "Design calm surfaces for complex work.",
  //   copy:
  //     "Kai leads the design system and accessibility efforts, ensuring every surface is intuitive, inclusive, and consistent-from dashboards to mobile experiences. He keeps interactions minimal so users stay focused on customers, not controls.",
  //   motivation: "Why this work: he loves translating intricate workflows into interfaces that feel obvious on the first click.",
  // },
]

export default function AboutUsPageContentAlt() {
  const [showAllTeam, setShowAllTeam] = useState(false)
  const [marqueeActive, setMarqueeActive] = useState(false)
  const marqueeRef = useRef<HTMLDivElement | null>(null)

  const MAX_IMAGES_PER_ROW = 12
  const optimizedRows = useMemo(
    () =>
      marqueeRows.map((row) => ({
        ...row,
        images: row.images.slice(0, MAX_IMAGES_PER_ROW),
      })),
    []
  )

  useEffect(() => {
    const node = marqueeRef.current
    if (!node || marqueeActive) return

    const start = () => {
      setMarqueeActive(true)
      // Warm images in the background once we decide to render them
      const urls = optimizedRows.flatMap((row) => row.images)
      urls.forEach((src) => {
        const img = new Image()
        img.decoding = "async"
        img.loading = "eager"
        img.src = src
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting)
        if (isVisible) {
          start()
          observer.disconnect()
        }
      },
      { rootMargin: "200px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [marqueeActive, optimizedRows])
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
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Where intelligent automation meets human-centered customer relationships.</h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                ZeaCRM is an AI-powered customer workflow platform built to help teams communicate smarter, work faster, and build meaningful relationships with clarity. Instead of overwhelming users with complicated tools, we bring customer data, automation, and intuitive design together in one seamless experience. Our goal is simple: create technology that supports people—not the other way around. With ZeaCRM, businesses eliminate repetitive tasks, streamline operations, and deliver a more personal, efficient customer experience at scale.
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
            <div className="flex flex-col gap-6 mb-10 text-center items-center">
              <div>
                <p className="text-amber-400 font-semibold mb-2">Meet the Founders</p>
                <h2 className="text-3xl font-bold text-white">People behind our company</h2>
              </div>
              {/* <p className="text-gray-300 max-w-3xl">
                (Bio Here)
              </p> */}
            </div>
            <div className="grid sm:grid-cols-2 lg:mx-60 justify-items-center lg:grid-cols-2 ">
              {team.map((member) => (
                <div key={member.name} className="space-y-3 w-60 text-center">
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
              Learn what drives each Founders, their focus areas, and how they shape the product and customer experience.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            {leaders.map((person, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div key={person.name} className={`grid items-center gap-8 md:grid-cols-2 ${isEven ? "" : "md:[&>div:first-child]:order-2"}`}>
                  <div id={`leader-${person.slug}`} className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70 h-[580px] md:h-[660px]">
                    <div className="relative w-full h-full">
                      <img src={person.img} alt={`Portrait of ${person.name}`} className="block h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-amber-300 text-sm font-semibold mb-2">{person.role}</p>
                    <h3 className="text-2xl font-bold text-white mb-3">{person.name}</h3>
                    <p className="text-amber-200 text-sm font-semibold mb-2">{person.slogan}</p>
                    {person.copy.split("\n\n").map((para, idx) => (
                      <p key={idx} className="text-gray-300 leading-relaxed mb-3">
                        {para}
                      </p>
                    ))}
                    <p className="text-gray-400 leading-relaxed">{person.motivation}</p>
                  </div>
                </div>
              )
            })}
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
            <p className="text-gray-300 leading-relaxed mt-4">
              A future where teams rely on automation and AI to remove operational friction—freeing people to focus on creativity, strategy, and genuine customer engagement.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="text-center space-y-4 mb-10">
            <p className="text-amber-400 font-semibold">Our Journey</p>
            <h3 className="text-3xl font-bold text-white">From URL Factory to Zea Platform</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              A year-by-year path of products, processes, and automation that shaped ZeaCRM Elite.
            </p>
          </div>
          <div className="relative">
            {/* <div className="absolute left-0 right-0 top-9 h-px bg-slate-800" /> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 text-center">
              {[
                { year: "2019", label: "Beginnings", desc: "Started as URL Factory, building websites and crafting clean, modern UI/UX experiences.", icon: Lightbulb },
                { year: "2020", label: "Digital Growth", desc: "Expanded into full-service development, helping businesses improve their digital workflows.", icon: Compass },
                { year: "2021", label: "Workflow Tools", desc: "Created internal tools and reusable systems that simplified project and client operations.", icon: Sparkles },
                { year: "2022", label: "Process Framework", desc: "Developed early automation modules and structured data pipelines to streamline tasks.", icon: ShieldCheck },
                { year: "2023", label: "Platform Foundation", desc: "Built the core components and architecture that would later evolve into a unified system.", icon: Rocket },
                { year: "2024", label: "Automation Exploration", desc: "Researched workflow automation and prepared the groundwork for a platform-level transformation.", icon: Brain },
                { year: "2025", label: "Zea Platform (AI Era)", desc: "Launched the Zea ecosystem with AI-powered workflows, automation, and the first release of ZeaCRM Elite.", icon: Crown },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.year} className="relative flex flex-col items-center gap-3">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/15 border border-amber-300/40 text-amber-200">
                      <Icon />
                    </div>
                    <div className="text-white text-lg font-semibold">{item.year}</div>
                    <div className="text-gray-200 text-sm font-semibold">{item.label}</div>
                    <div className="text-gray-400 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* <section className="max-w-6xl mx-auto px-4 pb-20 space-y-6">
          <div className="text-center space-y-3">
          </div>
          <div className="flex h-[320px] sm:h-[360px] md:h-[420px] w-full gap-1 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-1">
            {[
              {
                title: "ZeaCRM Lauch day",
                image: "images(about us)/s1.png",
              },
              {
                title: "Launch day",
                image: "images(about us)/s2.png",
              },
              {
                title: "Success playbooks",
                image: "images(about us)/s3.png",
              },
              {
                title: "Success Copy",
                image: "images(about us)/s4.png",
              },
              {
                title: "Scale-up retrospective",
                image: "images(about us)/s5.png",
              },
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
        </section> */}

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
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="text-center space-y-4 mb-10">
            <p className="text-amber-400 font-semibold">Meet the Team</p>
            <h3 className="text-3xl font-bold text-white">The people building ZeaCRM</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We are a global team of engineers, designers, and product thinkers committed to building software that feels modern, intuitive, and human-centered. Every feature we ship is shaped by real-world challenges and a deep focus on customer experience.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ease-in-out">
            {(showAllTeam ? extendedTeam : extendedTeam.slice(0, 8)).map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col items-center gap-3 transition-all duration-700 ease-in-out"
              >
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
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllTeam((prev) => !prev)}
              className="px-5 py-2 rounded-lg border border-amber-300/60 text-amber-200 font-semibold hover:bg-amber-400/10 transition-colors"
            >
              {showAllTeam ? "Show fewer" : "See the whole team"}
            </button>
          </div>
        </section> */}

        <section ref={marqueeRef} className="max-w-6xl mx-auto px-4 pb-20 space-y-8">
          <div className="text-center space-y-3">
            <p className="text-amber-400 font-semibold">Meet the Team</p>
            <h3 className="text-3xl font-bold text-white">The people building ZeaCRM</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Four subtle, alternating marquee rows glide past in an even rhythm for a premium, parallax feel.
            </p>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We are a global team of engineers, designers, and product thinkers committed to building software that feels modern, intuitive, and human-centered. Every feature we ship is shaped by real-world challenges and a deep focus on customer experience.
            </p>
          </div>
          <div className="space-y-6">
            {marqueeActive ? (
              optimizedRows.map((row, idx) => (
                <div
                  key={row.direction + idx}
                  className="overflow-hidden border border-slate-800 bg-slate-900/40 p-3"
                >
                  <div
                    className={`marquee-track ${row.direction === "left" ? "marquee-left" : "marquee-right"}`}
                    style={{ ["--marquee-duration" as any]: `${row.speed}s` }}
                  >
                    {[...row.images, ...row.images].map((src, imgIdx) => (
                      <div
                        key={`${idx}-${imgIdx}-${src}`}
                        className="h-42 w-72 flex-shrink-0 overflow-hidden border border-slate-800 bg-slate-950/60"
                      >
                        <img
                          src={src}
                          alt={`Gallery ${imgIdx + 1}`}
                          loading="lazy"
                          decoding="async"
                          fetchPriority="low"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="grid gap-4">
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={`placeholder-${idx}`}
                    className="h-40 rounded-xl border border-slate-800 bg-slate-900/30 animate-pulse"
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 pb-20">
          <FAQ
            title="About ZeaCRM"
            className="px-6 py-10 md:px-10 md:py-12"
            items={[
              {
                q: "How is ZeaCRM different from traditional CRMs?",
                a: "ZeaCRM is built with AI and automation at its core, not added later. This creates a faster, cleaner, and more intelligent experience with fewer steps, less complexity, and more personalization.",
              },
              {
                q: "Do you support regulated industries?",
                a: "Yes. ZeaCRM includes encryption, role-based access controls, audit logs, and compliance-ready security architecture suitable for regulated industries.",
              },
              {
                q: "What does onboarding look like?",
                a: "We offer guided setup, data migration assistance, personalized training, and ongoing support to ensure your team gets value from day one.",
              },
              {
                q: "Can ZeaCRM scale with my business as we grow?",
                a: "Absolutely. ZeaCRM is built on a flexible, modular architecture that supports small teams and enterprise-level organizations with ease.",
              },
              {
                q: "Does ZeaCRM integrate with our existing tools?",
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
                <BookDemoButton className="px-4 py-2 rounded-lg bg-primary text-slate-950 font-semibold hover:bg-amber-500 transition-colors shadow-[0_10px_30px_-12px_rgba(251,191,36,0.5)]">
                  Book a Demo
                </BookDemoButton>
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
      <style jsx global>{`
        .marquee-track {
          display: flex;
          gap: 1rem;
          align-items: center;
          animation: marquee-left var(--marquee-duration, 45s) linear infinite;
          will-change: transform;
        }
        .marquee-track.marquee-right {
          animation-name: marquee-right;
        }
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
