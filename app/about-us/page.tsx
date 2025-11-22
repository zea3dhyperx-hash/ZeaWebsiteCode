import Link from "next/link"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"

export const metadata = {
  title: "About Us | ZeaCRM",
  description: "Meet the team building ZeaCRM and learn about our mission, values, and story.",
}

const team = [
  { name: "Soujanya Rao", role: "Founder", bio: "Product-first founder who turned customer pain points into the blueprint for ZeaCRM." },
  { name: "Vinoth Kumar", role: "CEO", bio: "Operator focused on predictable delivery, secure scale, and measurable customer impact." },
  { name: "Lena Brooks", role: "Head of Customer Success", bio: "Partners with teams to adopt AI workflows and realize outcomes that stick." },
  { name: "Kai Miller", role: "Head of Design", bio: "Builds calm, intuitive interfaces that keep humans at the center of every flow." },
]

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-gray-100">
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28">
            <div className="max-w-3xl">
              <p className="text-amber-400 font-semibold mb-4">About ZeaCRM</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">We build AI-powered tools that keep relationships human.</h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                ZeaCRM started with a simple idea: make it effortless for teams to know every customer, anticipate their needs,
                and act quickly. Today we partner with organizations across industries to automate the busywork so people can
                focus on meaningful conversations.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-12 space-y-10">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-semibold mb-2">Our journey</p>
            <h2 className="text-3xl font-bold text-white mb-3">How ZeaCRM was built</h2>
            <p className="text-gray-300">
              From customer interviews to scaled deployments, every milestone reflects what we learned from teams who needed
              automation that still felt human.
            </p>
          </div>
          <div className="relative">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-full w-28 -translate-x-1/2 text-amber-300/60"
              viewBox="0 0 120 800"
              preserveAspectRatio="none"
            >
              <path
                d="M60 10 C 35 50, 85 90, 55 140 S 90 210, 45 270 75 340, 60 400 90 470, 50 540 80 620, 55 780"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="14 10"
              />
            </svg>
            <div className="space-y-10">
              {[
                { year: "2021", title: "Prototype and first pilots", detail: "Built the first AI-assisted workflows after 50+ founder-led interviews with sales and support teams." },
                { year: "2022", title: "Launch and early growth", detail: "Shipped secure data foundations, onboarded regulated customers, and automated the top 5 repetitive workflows." },
                { year: "2023", title: "Scaling outcomes", detail: "Expanded to multi-team deployments with success playbooks that cut follow-up time by 40% on average." },
                { year: "2024", title: "Platform maturity", detail: "Introduced advanced analytics, accessibility upgrades, and mobile parity to keep every touchpoint consistent." },
                { year: "2025", title: "Partnering for the future", detail: "Co-building with enterprise customers to deliver industry-specific automation that stays transparent and compliant." },
              ].map((item, idx) => {
                const isLeft = idx % 2 === 0
                return (
                  <div
                    key={item.year}
                    className={`relative flex flex-col gap-2 md:max-w-xl ${isLeft ? "md:pr-16 md:pl-0 md:ml-0 md:mr-auto" : "md:pl-16 md:pr-0 md:ml-auto md:mr-0"}`}
                  >
                    <span className="absolute left-1/2 -translate-x-1/2 top-2 h-4 w-4 rounded-full bg-amber-400 shadow-[0_0_0_6px] shadow-amber-400/15" />
                    <div className={`text-amber-200 font-semibold text-sm ${isLeft ? "md:text-left" : "md:text-right"}`}>{item.year}</div>
                    <h3 className={`text-xl font-semibold text-white ${isLeft ? "md:text-left" : "md:text-right"}`}>{item.title}</h3>
                    <p className={`text-gray-300 ${isLeft ? "md:text-left" : "md:text-right"}`}>{item.detail}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
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
        </section>

        <section className="bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="flex flex-col gap-6 mb-10">
              <div>
                <p className="text-amber-400 font-semibold mb-2">Meet the Team</p>
                <h2 className="text-3xl font-bold text-white">People behind the product</h2>
              </div>
              <p className="text-gray-300 max-w-3xl">
                We are a distributed team of builders, designers, and operators who believe great software should feel calm,
                secure, and personal. Here are a few of the people leading the charge.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="p-6 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-lg font-semibold text-white">{member.name}</p>
                      <p className="text-sm text-amber-300">{member.role}</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-amber-400/10 border border-amber-300/30 flex items-center justify-center text-amber-300 font-semibold">
                      {member.name
                        .split(" ")
                        .map((part) => part.charAt(0))
                        .join("")}
                    </div>
                  </div>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16 space-y-10">
          <div className="flex flex-col gap-3">
            <p className="text-amber-400 font-semibold">Leadership spotlight</p>
            <h2 className="text-3xl font-bold text-white">More about the people building ZeaCRM</h2>
            <p className="text-gray-300 max-w-3xl">
              Learn what drives each leader, their focus areas, and how they shape the product and customer experience.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            {[
              {
                name: "Soujanya Rao",
                role: "Founder",
                img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80",
                slogan: "Build boldly, listen constantly.",
                copy:
                  "Soujanya turned years of customer interviews into the first ZeaCRM prototype. She champions product clarity, reliable data foundations, and workflows that reduce busywork for every team. Her focus is making AI feel like a trusted teammate rather than a black box.",
                motivation:
                  "Why this work: she loves helping teams reclaim time for real conversations and decisions instead of manual follow-ups.",
              },
              {
                name: "Vinoth Kumar",
                role: "CEO",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
                slogan: "Steady delivery beats lucky sprints.",
                copy:
                  "Vinoth leads operations and growth, ensuring every release is stable, compliant, and tied to customer ROI. He drives the cadence that keeps product, sales, and support moving together, with an eye on uptime and security.",
                motivation:
                  "Why this work: he enjoys turning ambitious roadmaps into predictable outcomes customers can rely on every quarter.",
              },
              {
                name: "Lena Brooks",
                role: "Head of Customer Success",
                img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80",
                slogan: "Adoption is a feeling, not a checkbox.",
                copy:
                  "Lena designs onboarding and change-management programs that help teams adopt automation without friction, creating measurable wins within the first 30 days. She builds playbooks that keep humans confident while the AI does the heavy lifting.",
                motivation:
                  "Why this work: she loves seeing teams celebrate their first automated win and the momentum that follows.",
              },
              {
                name: "Kai Miller",
                role: "Head of Design",
                img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=700&q=80&sat=-60",
                slogan: "Design calm surfaces for complex work.",
                copy:
                  "Kai leads the design system and accessibility efforts, ensuring every surface is intuitive, inclusive, and consistent-from dashboards to mobile experiences. He keeps interactions minimal so users stay focused on customers, not controls.",
                motivation:
                  "Why this work: he loves translating intricate workflows into interfaces that feel obvious on the first click.",
              },
            ].map((person, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div
                  key={person.name}
                  className={`grid items-center gap-8 md:grid-cols-2 ${isEven ? "" : "md:[&>div:first-child]:order-2"}`}
                >
                  <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70 h-full">
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
              We founded ZeaCRM after watching teams juggle fragmented tools that slowed them down. By unifying data,
              automating follow-ups, and providing AI guidance, we enable teams to spend time where it matters most.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              From the first beta customers to enterprise deployments, we have focused on reliability, security, and a user
              experience that teams love to use every day.
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
          <FAQ
            title="About ZeaCRM"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-10 md:px-10 md:py-12"
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
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3">
              <p className="text-amber-400 font-semibold">Ready to talk?</p>
              <h3 className="text-3xl font-bold text-white">See ZeaCRM in action or get your questions answered.</h3>
              <p className="text-gray-300 max-w-2xl">
                Book a tailored demo, reach out to our team, or browse FAQs to learn how ZeaCRM fits your workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="px-4 py-2 rounded-lg bg-amber-400 text-slate-950 font-semibold hover:bg-amber-500 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/get-started"
                className="px-4 py-2 rounded-lg border border-amber-300 text-amber-200 font-semibold hover:bg-amber-300/10 transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
