import { BlogHeader } from "@/components/blog-header"
import { BlogImage } from "@/components/blog-image"
import { BlogContent } from "@/components/blog-content"
import { BlogFooter } from "@/components/blog-footer"
import { TableOfContents } from "@/components/table-of-contents"
import React from "react"
import FAQ from "../faq"
// import { RelatedBlogs } from "@/components/related-blogs" // optional

export const metadata = {
  title: "Zea CRM — Where Every Lead Becomes a Relationship | Blog",
  description:
    " Zea CRM — Where Every Lead Becomes a Relationship | Blog",
}

export default function BlogPage() {
  // Local FAQ for this template (independent)
  const templateFaq = [
    { q: 'Can I customize this template?', a: 'Yes, you can edit all sections, styles, and content to match your needs.' },
    { q: 'Is this SEO friendly?', a: 'It uses semantic HTML and supports structured content to help with SEO.' },
    { q: 'Does it support MDX?', a: 'You can embed MDX or use block-based content depending on your setup.' },
  ]

  function TemplateFaq() {
    const [open, setOpen] = React.useState<number | null>(null)
    return (
      <section className="mt-12 border-t border-border pt-8">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-3">
          {templateFaq.map((item, i) => (
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
    image: "/ai-web-development-future-technology.jpg",
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
          title: "The Developer Experience",
          blocks: [
            {
              type: "paragraph",
              content:
                "The tools we use are evolving rapidly. Key improvements include:",
            },
            {
              type: "list",
              items: [
                "Natural language query interfaces for documentation",
                "Real-time error explanation and solutions",
                "Personalized learning paths based on skill level",
                "Collaborative AI assistants that understand project context",
              ],
            },
            {
              type: "image",
              imageUrl: "/developer-ai-tools.jpg",
            },
            {
              type: "paragraph",
              content:
                "Imagine spending less time searching through documentation and more time implementing solutions. AI assistants are now capable of understanding your entire project architecture, your coding style, and your team's conventions.",
            },
          ],
        },
        {
          title: "Real-World Impact and Adoption",
          blocks: [
            {
              type: "paragraph",
              content:
                "Companies across industries are already experiencing tangible benefits:",
            },
            {
              type: "list",
              items: [
                "Startup teams shipping features 2–3x faster",
                "Enterprise development cycles compressed by weeks",
                "Reduced onboarding time for new team members",
                "Significant cost savings in development resources",
              ],
            },
            {
              type: "quote",
              quote:
                "AI isn’t replacing developers — it’s amplifying their capabilities.",
            },
            {
              type: "paragraph",
              content:
                "Forward-thinking companies are reporting extraordinary results. A typical startup might go from idea to market-ready product in months instead of years.",
            },
          ],
        },
        {
          title: "Real-World Impact and Adoption",
          blocks: [
            {
              type: "paragraph",
              content:
                "Companies across industries are already experiencing tangible benefits:",
            },
            {
              type: "list",
              items: [
                "Startup teams shipping features 2–3x faster",
                "Enterprise development cycles compressed by weeks",
                "Reduced onboarding time for new team members",
                "Significant cost savings in development resources",
              ],
            },
            {
              type: "quote",
              quote:
                "AI isn’t replacing developers — it’s amplifying their capabilities.",
            },
            {
              type: "paragraph",
              content:
                "Forward-thinking companies are reporting extraordinary results. A typical startup might go from idea to market-ready product in months instead of years.",
            },
          ],
        },
        {
          title: "Challenges and Ethical Considerations",
          blocks: [
            {
              type: "paragraph",
              content:
                "As with any transformative technology, AI in development comes with important considerations:",
            },
            {
              type: "list",
              items: [
                "Ensuring AI-generated code maintains security standards",
                "Protecting intellectual property and open-source contributions",
                "Understanding AI bias in code patterns and suggestions",
                "Training developers to work effectively with AI systems",
              ],
            },
            {
              type: "paragraph",
              content:
                "While AI can generate code quickly, we must ensure that generated code meets security, performance, and maintainability standards. Bias in training data can inadvertently lead AI systems to suggest suboptimal or problematic patterns.",
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
      image: "/react-18-features-and-improvements.jpg",
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

              {/* FAQ Section (independent, bottom) */}
              <FAQ
                items={[
                  { q: "What is Zea CRM?", a: "Zea CRM helps teams turn leads into lasting relationships with a streamlined, AI-assisted workflow." },
                  { q: "Is there a free trial?", a: "Yes, you can start with a 14-day free trial—no credit card required." },
                  { q: "Does it integrate with my tools?", a: "It supports common tools like email, calendars, WhatsApp, and more. Custom integrations are available." },
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
    </main>
  )
}
