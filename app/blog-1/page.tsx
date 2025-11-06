import { BlogHeader } from "@/components/blog-header"
import { BlogImage } from "@/components/blog-image"
import { BlogContent } from "@/components/blog-content"
import { BlogFooter } from "@/components/blog-footer"
import { TableOfContents } from "@/components/table-of-contents"
import FAQ from "@/components/faq"
import Link from "next/link";
import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
// import { RelatedBlogs } from "@/components/related-blogs" // optional

export const metadata = {
  title: "Zea CRM — Where Every Lead Becomes a Relationship | Blog",
  description:
    " Zea CRM — Where Every Lead Becomes a Relationship | Blog",
}

export default function BlogPage() {
  // Local FAQ for this page (independent)
  const blogFaq = [
    { q: 'What is Zea CRM?', a: 'Zea CRM helps teams turn leads into lasting relationships with a streamlined, AI-assisted workflow.' },
    { q: 'Is there a free trial?', a: 'Yes, you can start with a 14-day free trial—no credit card required.' },
    { q: 'Does it integrate with my tools?', a: 'It supports common tools like email, calendars, WhatsApp, and more. Custom integrations are available.' },
  ]

  function BlogFaq() {
    const [open, setOpen] = React.useState<number | null>(null)
    return (
      <section className="mt-12 border-t border-border pt-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {blogFaq.map((item, i) => (
            <div key={i} className="rounded-md border border-border">
              <button
                className="w-full text-left px-4 py-3 flex justify-between items-center"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-muted-foreground">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-sm text-muted-foreground">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    )
  }

  const blogData = {
    tag: "ZeaCRM",
    title: "Zea CRM — Where Every Lead Becomes a Relationship",
    author: "Sherly Angel",
    date: "November 6, 2025",
    time: "8:30 AM",
    image: "images/blogimg1.png",
    content: {
      intro:
        "In business, it’s easy to get caught up chasing numbers.\n Leads. Deals. Targets. Reports. \n But growth isn’t just about collecting contacts — it’s about building meaningful relationships that last. \n \n That’s what Zea CRM is built for. \n It helps businesses turn every lead, call, or message into a real connection — one that moves your team forward and your customers closer.",
      sections: [
        {
          title: "Designed for the Way You Work",
          blocks: [
            {
              type: "paragraph",
              content:
                "Zea CRM doesn’t force you to change how you do business — it enhances it. \n Everything that matters is right where you need it: leads, conversations, follow-ups, performance, and automation.",
            },
            // {
            //   type: "list",
            //   items: [
            //     "Generate entire functions from natural language descriptions",
            //     "Provide intelligent code suggestions based on context",
            //     "Automatically refactor existing code for optimization",
            //     "Detect and fix bugs before they reach production",
            //   ],
            // },
            {
              type: "paragraph",
              content:
                "It’s built to help your team focus less on managing software and more on creating results.",
            },
          ],
        },
        {
          title: "Smarter Lead Management",
          blocks: [
            {
              type: "paragraph",
              content: "Forget about juggling spreadsheets and inbox chaos. \n Zea CRM automatically collects, assigns, and tracks leads from every source — website forms, phone calls, campaigns, or social media. \n Your team gets context instantly, so they can respond faster and convert better.",
            },
          ],
        },
        {
          title: "Automation That Feels Effortless",
          blocks: [
            {
              type: "paragraph",
              content: "Good automation doesn’t replace people — it empowers them. \n Zea CRM handles repetitive tasks like follow-ups, reminders, and updates, while keeping the human touch intact. \n It saves time without losing warmth, precision, or personalization.",
            },
          ],
        },
        {
          title: "All Conversations in One Place",
          blocks: [
            {
              type: "paragraph",
              content: "Emails, calls, WhatsApp, or chat — every message lives inside one unified view. \n No more switching tabs or missing history. Zea CRM keeps your communication smart, structured, and searchable.",
            },
          ],
        },
        {
          title: "Insights That Matter",
          blocks: [
            {
              type: "paragraph",
              content: "Zea CRM turns raw data into clarity. \n It helps you see where every lead stands, how your team is performing, and what’s truly driving growth. \n Reports aren’t just numbers here — they’re stories about progress.",
            },
          ],
        },
        {
          title: "Part of a Bigger Vision",
          blocks: [
            {
              type: "paragraph",
              content: "Zea CRM is one part of the Zea ecosystem, designed by URL Factory to make business automation simple and human:",
            },
            {
              type: "list",
              items: [
                "	Zea.IVR – Your AI Voice Agent that never misses a call.",
                "	Zea.Play – The gamified task manager that makes work fun.",
                "	Zea.Wit – The onboarding specialist that simplifies client journeys.",
                "	Zea.Safe – The password vault that keeps your data protected.",
              ],
            },
            {
              type: "paragraph",
              content: "Together, they create a seamless flow where every tool talks to the other — and your business runs like one connected system.",
            },
          ],
        },
        {
          title: "The Results Speak for Themselves",
          blocks: [
            {
              type: "paragraph",
              content: "Teams using Zea CRM have reported:",
            },
            {
              type: "list",
              items: [
                "	✅ 60–70 % less manual work",
                "	✅ 40 % faster lead response",
                "	✅ 2× higher conversion rates",
                "	✅ 100 % visibility across departments",
              ],
            },
            {
              type: "paragraph",
              content: "When technology gets out of the way, people perform better — and results follow naturally.",
            },
          ],
        },
        {
          title: "A CRM Built for Humans, Not Just Data",
          blocks: [
            {
              type: "paragraph",
              content: "Zea CRM isn’t just about automating sales — it’s about amplifying people. \n It gives structure to your chaos, rhythm to your routines, and visibility to your wins. \n Because business is personal — and Zea CRM helps you keep it that way.",
            },
          ],
        },
        {
          title: "Every lead is a story. Every story deserves your attention.",
          blocks: [
            {
              type: "paragraph",
              content: "Experience Zea CRM — where automation meets connection. Visit ZeaCRM.com to explore the future of customer relationships.",
            },
          ],
        },
      ],
    },
    
  }

  const relatedBlogs = [
    {
      id: "react-18-features",
      title: "React 18: New Features and Best Practices",
      excerpt:
        "Discover the powerful new features in React 18 including automatic batching, transitions, and suspense improvements that are changing how we build modern UIs.",
      author: "Michael Chen",
      date: "October 28, 2025",
      image: "/images/blogimg1.png",
      tag: "React",
    },
    {
      id: "nextjs-performance",
      title: "Optimizing Performance in Next.js 15",
      excerpt:
        "Learn advanced techniques for optimizing your Next.js applications including image optimization, code splitting, and caching strategies for lightning-fast websites.",
      author: "Emma Rodriguez",
      date: "October 22, 2025",
      image: "/next-js-performance-optimization.jpg",
      tag: "Next.js",
    },
  ]
  

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="flex gap-8">
          {/* === MAIN CONTENT === */}
          <div className="flex-1 min-w-0">
            <div className="max-w-4xl">
              <BlogHeader
                tag={blogData.tag}
                title={blogData.title}
                author={blogData.author}
                date={blogData.date}
                time={blogData.time}
              />

              <BlogImage src={blogData.image} alt={blogData.title} />

              <BlogContent
                intro={blogData.content.intro}
                sections={blogData.content.sections}
              />

              {/* Inline CTA with external link */}
              <p className="leading-7 mt-4">
                Experience Zea CRM — where automation meets connection. Visit{" "}
                <a href="https://zeacrm.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-2 hover:underline">
                  ZeaCRM.com
                </a>{" "}
                to explore the future of customer relationships.
              </p>

              {/* FAQ Section (independent, bottom) */}
              <FAQ
                items={[
                  { q: "1️⃣ What makes Zea CRM different?", a: "It focuses on real connections — not just contacts — combining automation, communication, and AI to help teams work smarter." },
                  { q: "2️⃣ Is Zea CRM good for small businesses?", a: "Yes! Zea CRM scales easily, making it perfect for startups, growing teams, and enterprises alike." },
                  { q: "3️⃣ Does Zea CRM support multiple communication channels?", a: "Yes, you can manage emails, calls, WhatsApp, and chats — all from one dashboard." },
                  { q: "4️⃣ How soon will I see results?", a: "Most users notice faster follow-ups and smoother workflows within the first few weeks." },
                ]}
              />
              {/* <BlogFooter author={blogData.author} /> */}


              {/* <RelatedBlogs blogs={relatedBlogs} /> */}
            </div>
          </div>

          {/* === TABLE OF CONTENTS === */}
          <TableOfContents sections={blogData.content.sections} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
