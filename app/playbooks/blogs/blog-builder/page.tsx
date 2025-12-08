"use client"

import React, { useMemo, useState } from "react"
import {
  Plus,
  Save,
  Eye,
  FileText,
  Image as ImageIcon,
  Type,
  ListChecks,
  CalendarDays,
  User,
  AlignLeft,
  AlignCenter,
  AlignJustify,
} from "lucide-react"

type Blog = {
  title: string
  slug: string
  author: string
  date: string
  category: string
  tags: string
  cover: string
  alt: string
  seoTitle: string
  seoDescription: string
  status: "Draft" | "Published"
  body: string
  headingStyle: string
  bodyFont: string
  textSize: number
  textColor: string
  lineHeight: number
  align: "Left" | "Center" | "Justify"
  faqs: { q: string; a: string }[]
}

const starterBlogs: Blog[] = [
  {
    title: "Building Client Relationships",
    slug: "/playbooks/blogs/building-client-relationships",
    author: "Ava Martin",
    date: "2025-12-08",
    category: "Playbooks",
    tags: "crm, relationships, retention",
    cover: "",
    alt: "",
    seoTitle: "Building Client Relationships",
    seoDescription: "How to turn every client into a long-term partner.",
    status: "Published",
    body: "A quick guide on nurturing client trust and driving long-term growth.",
    headingStyle: "H1 Bold",
    bodyFont: "Inter",
    textSize: 16,
    textColor: "#e5e7eb",
    lineHeight: 1.6,
    align: "Left",
    faqs: [
      { q: "What is this about?", a: "Building strong client relationships through consistent value." },
      { q: "Who is it for?", a: "Teams that want repeat business and referrals." },
    ],
  },
  {
    title: "Automations That Convert",
    slug: "/playbooks/blogs/automations-that-convert",
    author: "Leo Singh",
    date: "2025-12-03",
    category: "Guides",
    tags: "automation, revenue, playbooks",
    cover: "",
    alt: "",
    seoTitle: "Automations That Convert",
    seoDescription: "Build automations that actually close revenue.",
    status: "Draft",
    body: "Blueprints for automation journeys that increase conversion.",
    headingStyle: "H2 Bold",
    bodyFont: "Manrope",
    textSize: 17,
    textColor: "#e5e7eb",
    lineHeight: 1.6,
    align: "Left",
    faqs: [{ q: "Where to start?", a: "Map your funnel and automate handoffs first." }],
  },
]

export default function BlogBuilderPage() {
  const [blogs, setBlogs] = useState<Blog[]>(starterBlogs)
  const [selectedSlug, setSelectedSlug] = useState<string>(starterBlogs[0]?.slug || "")

  const selectedBlog = useMemo(() => blogs.find((b) => b.slug === selectedSlug) || blogs[0], [blogs, selectedSlug])

  const updateSelected = <K extends keyof Blog>(key: K, value: Blog[K]) => {
    setBlogs((prev) => prev.map((blog) => (blog.slug === selectedBlog?.slug ? { ...blog, [key]: value } : blog)))
  }

  const addFaq = () => {
    updateSelected("faqs", [...(selectedBlog?.faqs || []), { q: "", a: "" }])
  }

  const updateFaq = (index: number, field: "q" | "a", value: string) => {
    if (!selectedBlog) return
    const updatedFaqs = selectedBlog.faqs.map((faq, i) => (i === index ? { ...faq, [field]: value } : faq))
    updateSelected("faqs", updatedFaqs)
  }

  const addNewBlog = () => {
    const newBlog: Blog = {
      title: "Untitled Blog",
      slug: `/playbooks/blogs/new-${Date.now()}`,
      author: "Author",
      date: new Date().toISOString().slice(0, 10),
      category: "Playbooks",
      tags: "",
      cover: "",
      alt: "",
      seoTitle: "Untitled Blog",
      seoDescription: "",
      status: "Draft",
      body: "",
      headingStyle: "H1 Bold",
      bodyFont: "Inter",
      textSize: 16,
      textColor: "#e5e7eb",
      lineHeight: 1.6,
      align: "Left",
      faqs: [],
    }
    setBlogs((prev) => [newBlog, ...prev])
    setSelectedSlug(newBlog.slug)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-gray-800 bg-gradient-to-r from-gray-900 via-black to-gray-900 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-amber-400">Blog Builder</p>
            <h1 className="mt-2 text-4xl font-bold text-white">Create and manage blogs without code</h1>
            <p className="mt-3 max-w-2xl text-gray-400">
              Draft, style, and publish blog posts with rich controls for layout, typography, media, FAQs, and metadata.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-200 hover:border-amber-400 hover:text-amber-300 transition-colors">
              <Eye className="h-4 w-4" />
              Preview
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-lg border border-amber-400 bg-amber-400 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition-colors"
              onClick={addNewBlog}
            >
              <Plus className="h-4 w-4" />
              Add New Blog
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-emerald-400 bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-colors">
              <Save className="h-4 w-4" />
              Save Draft
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[1.2fr,1.8fr]">
        {/* Left column: controls and list */}
        <div className="space-y-6">
          {/* Sidebar: Blog list */}
          <aside className="space-y-4 rounded-2xl border border-gray-800 bg-gray-950/60 p-5 shadow-lg shadow-amber-400/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">All blogs</p>
                <h2 className="text-xl font-semibold text-white">Existing posts</h2>
              </div>
              <button
                className="flex items-center gap-2 rounded-lg border border-gray-800 px-3 py-1.5 text-xs text-amber-300 hover:border-amber-400"
                onClick={addNewBlog}
              >
                <Plus className="h-4 w-4" />
                New
              </button>
            </div>
            <div className="space-y-3">
              {blogs.map((blog) => (
                <button
                  key={blog.slug}
                  onClick={() => setSelectedSlug(blog.slug)}
                  className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
                    selectedSlug === blog.slug
                      ? "border-amber-400 bg-gray-900"
                      : "border-gray-800 bg-gray-900/60 hover:border-amber-400"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-semibold text-white">{blog.title || "Untitled"}</p>
                      <p className="text-xs text-gray-500">
                        <User className="mr-1 inline-block h-3 w-3" />
                        {blog.author} ? <CalendarDays className="mr-1 inline-block h-3 w-3" />
                        {blog.date}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        blog.status === "Published"
                          ? "bg-emerald-500/15 text-emerald-300"
                          : "bg-amber-500/15 text-amber-200"
                      }`}
                    >
                      {blog.status}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* Core details */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/70 p-6 shadow-lg shadow-amber-400/10">
            <div className="mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-amber-300" />
              <h3 className="text-lg font-semibold text-white">Blog details</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Title</label>
                <input
                  value={selectedBlog?.title || ""}
                  onChange={(e) => updateSelected("title", e.target.value)}
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  placeholder="Enter blog title"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Slug / URL</label>
                <input
                  value={selectedBlog?.slug || ""}
                  onChange={(e) => updateSelected("slug", e.target.value)}
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  placeholder="/playbooks/blogs/your-title"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Author</label>
                <input
                  value={selectedBlog?.author || ""}
                  onChange={(e) => updateSelected("author", e.target.value)}
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  placeholder="Author name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Publish date</label>
                <input
                  type="date"
                  value={selectedBlog?.date || ""}
                  onChange={(e) => updateSelected("date", e.target.value)}
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Category</label>
                <input
                  value={selectedBlog?.category || ""}
                  onChange={(e) => updateSelected("category", e.target.value)}
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  placeholder="e.g., Playbooks, Guides, Product"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Tags</label>
                <input
                  value={selectedBlog?.tags || ""}
                  onChange={(e) => updateSelected("tags", e.target.value)}
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  placeholder="crm, automation, revenue, sales"
                />
              </div>
            </div>
          </div>

          {/* Content editor controls */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/70 p-6 shadow-lg shadow-amber-400/10">
            <div className="mb-4 flex items-center gap-2">
              <Type className="h-5 w-5 text-amber-300" />
              <h3 className="text-lg font-semibold text-white">Content & styling</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Heading style</label>
                <select
                  value={selectedBlog?.headingStyle || "H1 Bold"}
                  onChange={(e) => updateSelected("headingStyle", e.target.value)}
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                >
                  <option>H1 Bold</option>
                  <option>H2 Bold</option>
                  <option>H3 Semibold</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Body font</label>
                <select
                  value={selectedBlog?.bodyFont || "Inter"}
                  onChange={(e) => updateSelected("bodyFont", e.target.value)}
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                >
                  <option>Inter</option>
                  <option>Manrope</option>
                  <option>Playfair</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Text size</label>
                <input
                  type="range"
                  min="14"
                  max="22"
                  value={selectedBlog?.textSize || 16}
                  onChange={(e) => updateSelected("textSize", Number(e.target.value))}
                  className="w-full accent-amber-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Text color</label>
                <input
                  type="color"
                  value={selectedBlog?.textColor || "#e5e7eb"}
                  onChange={(e) => updateSelected("textColor", e.target.value)}
                  className="h-10 w-full rounded-lg border border-gray-800 bg-black p-1"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Line height</label>
                <input
                  type="range"
                  min="1.2"
                  max="2"
                  step="0.1"
                  value={selectedBlog?.lineHeight || 1.6}
                  onChange={(e) => updateSelected("lineHeight", Number(e.target.value))}
                  className="w-full accent-amber-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Alignment</label>
                <div className="grid grid-cols-3 gap-2">
                  {(["Left", "Center", "Justify"] as const).map((item) => {
                    const Icon = { Left: AlignLeft, Center: AlignCenter, Justify: AlignJustify }[item]
                    return (
                      <button
                        key={item}
                        onClick={() => updateSelected("align", item)}
                        className={`flex items-center justify-center gap-1 rounded-lg border px-3 py-2 text-sm transition-colors ${
                          selectedBlog?.align === item
                            ? "border-amber-400 bg-amber-400/10 text-amber-300"
                            : "border-gray-800 bg-black text-gray-200 hover:border-amber-400"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {item}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <label className="text-sm text-gray-400">Content</label>
              <textarea
                value={selectedBlog?.body || ""}
                onChange={(e) => updateSelected("body", e.target.value)}
                className="min-h-[180px] w-full rounded-lg border border-gray-800 bg-black px-3 py-3 text-white focus:border-amber-400 focus:outline-none"
                placeholder="Write or paste your blog content here. Use the styling controls above to fine-tune typography."
              />
              <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                <span className="rounded-full border border-gray-800 px-3 py-1">Bold / Italic / Underline</span>
                <span className="rounded-full border border-gray-800 px-3 py-1">Lists & bullets</span>
                <span className="rounded-full border border-gray-800 px-3 py-1">Quotes</span>
                <span className="rounded-full border border-gray-800 px-3 py-1">Callouts</span>
              </div>
            </div>
          </div>

          {/* Media & SEO */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/70 p-6 shadow-lg shadow-amber-400/10">
            <div className="mb-4 flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-amber-300" />
              <h3 className="text-lg font-semibold text-white">Media & SEO</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Cover image</label>
                <div className="flex items-center justify-between rounded-lg border border-dashed border-gray-800 bg-black px-3 py-3">
                  <input
                    value={selectedBlog?.cover || ""}
                    onChange={(e) => updateSelected("cover", e.target.value)}
                    className="w-full bg-transparent text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none"
                    placeholder="Upload or paste URL"
                  />
                  <button className="ml-2 flex items-center gap-2 rounded-lg border border-gray-800 px-3 py-1.5 text-xs text-amber-300 hover:border-amber-400">
                    <Plus className="h-4 w-4" /> Upload
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Alt text</label>
                <input
                  value={selectedBlog?.alt || ""}
                  onChange={(e) => updateSelected("alt", e.target.value)}
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  placeholder="Describe the cover image"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-gray-400">SEO title</label>
                <input
                  value={selectedBlog?.seoTitle || ""}
                  onChange={(e) => updateSelected("seoTitle", e.target.value)}
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  placeholder="70 characters max"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-gray-400">Meta description</label>
                <textarea
                  value={selectedBlog?.seoDescription || ""}
                  onChange={(e) => updateSelected("seoDescription", e.target.value)}
                  className="min-h-[80px] w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  placeholder="155 characters max"
                />
              </div>
            </div>
          </div>

          {/* FAQ builder */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/70 p-6 shadow-lg shadow-amber-400/10">
            <div className="mb-4 flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-amber-300" />
              <h3 className="text-lg font-semibold text-white">FAQ</h3>
            </div>
            <div className="space-y-3">
              {(selectedBlog?.faqs || []).map((item, idx) => (
                <div key={idx} className="rounded-xl border border-gray-800 bg-black/60 p-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-500">Question {idx + 1}</label>
                    <input
                      value={item.q}
                      onChange={(e) => updateFaq(idx, "q", e.target.value)}
                      className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                      placeholder={`FAQ question ${idx + 1}`}
                    />
                  </div>
                  <div className="mt-3 space-y-2">
                    <label className="text-xs text-gray-500">Answer</label>
                    <textarea
                      value={item.a}
                      onChange={(e) => updateFaq(idx, "a", e.target.value)}
                      className="min-h-[70px] w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                      placeholder="Short, clear answer"
                    />
                  </div>
                </div>
              ))}
              <button
                className="inline-flex items-center gap-2 rounded-lg border border-gray-800 px-4 py-2 text-sm text-amber-300 hover:border-amber-400"
                onClick={addFaq}
              >
                <Plus className="h-4 w-4" />
                Add FAQ
              </button>
            </div>
          </div>
        </div>

        {/* Right column: previews */}
        <div className="space-y-6">
          {/* Blog list preview */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/60 p-6 shadow-lg shadow-amber-400/10">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Blog list preview</h3>
              <span className="text-xs text-gray-500">How the listing grid looks</span>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {blogs.slice(0, 4).map((blog) => (
                <div key={blog.slug} className="rounded-xl border border-gray-800 bg-black/70 p-4">
                  <p className="text-xs uppercase tracking-wide text-amber-400">{blog.category}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{blog.title || "Untitled"}</p>
                  <p className="text-sm text-gray-500">{blog.seoDescription || blog.body}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                    <span>
                      <User className="mr-1 inline-block h-3 w-3" />
                      {blog.author}
                    </span>
                    <span>
                      <CalendarDays className="mr-1 inline-block h-3 w-3" />
                      {blog.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Single blog preview */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/60 p-6 shadow-lg shadow-amber-400/10">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Single blog preview</h3>
              <span className="text-xs text-gray-500">How the article renders</span>
            </div>
            {selectedBlog ? (
              <article
                className="space-y-4 rounded-xl border border-gray-800 bg-black/60 p-5"
                style={{
                  color: selectedBlog.textColor,
                  fontFamily: selectedBlog.bodyFont,
                  lineHeight: selectedBlog.lineHeight,
                  textAlign: selectedBlog.align.toLowerCase() as React.CSSProperties["textAlign"],
                  fontSize: selectedBlog.textSize,
                }}
              >
                <header className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-amber-400">{selectedBlog.category}</p>
                  <h2
                    className="font-bold text-white"
                    style={{
                      fontSize:
                        selectedBlog.headingStyle === "H1 Bold"
                          ? "2rem"
                          : selectedBlog.headingStyle === "H2 Bold"
                          ? "1.5rem"
                          : "1.25rem",
                    }}
                  >
                    {selectedBlog.title || "Untitled"}
                  </h2>
                  <div className="text-xs text-gray-500">
                    <span className="mr-3">
                      <User className="mr-1 inline-block h-3 w-3" />
                      {selectedBlog.author}
                    </span>
                    <span>
                      <CalendarDays className="mr-1 inline-block h-3 w-3" />
                      {selectedBlog.date}
                    </span>
                  </div>
                </header>
                {selectedBlog.cover && (
                  <div className="overflow-hidden rounded-lg border border-gray-800">
                    <div className="flex h-40 items-center justify-center bg-gray-900 text-gray-500">
                      <ImageIcon className="mr-2 h-5 w-5" />
                      <span>{selectedBlog.cover}</span>
                    </div>
                  </div>
                )}
                <p className="text-sm text-gray-300">{selectedBlog.body || "Start writing your content..."}</p>
                {selectedBlog.faqs.length > 0 && (
                  <div className="space-y-2 rounded-lg border border-gray-800 bg-gray-950/70 p-4">
                    <p className="text-sm font-semibold text-white">FAQ</p>
                    <div className="space-y-2">
                      {selectedBlog.faqs.map((faq, idx) => (
                        <div key={idx}>
                          <p className="text-sm font-semibold text-amber-300">{faq.q || `Question ${idx + 1}`}</p>
                          <p className="text-sm text-gray-300">{faq.a || "Answer goes here."}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ) : (
              <div className="rounded-lg border border-dashed border-gray-800 bg-black/40 p-6 text-gray-500">
                Select or create a blog to preview.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
