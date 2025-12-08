"use client"

import React from "react"
import { Plus, Save, Eye, FileText, Image as ImageIcon, Type, ListChecks, CalendarDays, User } from "lucide-react"

export default function BlogBuilderPage() {
  const sampleBlogs = [
    { title: "Building Client Relationships", author: "Ava Martin", updated: "Dec 8, 2025", status: "Published" },
    { title: "Automations That Convert", author: "Leo Singh", updated: "Dec 3, 2025", status: "Draft" },
    { title: "Scaling Revenue Operations", author: "Maya Chen", updated: "Nov 28, 2025", status: "Published" },
  ]

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
            <button className="inline-flex items-center gap-2 rounded-lg border border-amber-400 bg-amber-400 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition-colors">
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

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[1.1fr,1.9fr]">
        {/* Sidebar: Blog list */}
        <aside className="space-y-4 rounded-2xl border border-gray-800 bg-gray-950/60 p-5 shadow-lg shadow-amber-400/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">All blogs</p>
              <h2 className="text-xl font-semibold text-white">Existing posts</h2>
            </div>
            <button className="flex items-center gap-2 rounded-lg border border-gray-800 px-3 py-1.5 text-xs text-amber-300 hover:border-amber-400">
              <Plus className="h-4 w-4" />
              New
            </button>
          </div>
          <div className="space-y-3">
            {sampleBlogs.map((blog, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-800 bg-gray-900/60 px-4 py-3 hover:border-amber-400 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold text-white">{blog.title}</p>
                    <p className="text-xs text-gray-500">
                      <User className="mr-1 inline-block h-3 w-3" />
                      {blog.author} • <CalendarDays className="mr-1 inline-block h-3 w-3" />
                      {blog.updated}
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
              </div>
            ))}
          </div>
        </aside>

        {/* Main workspace */}
        <div className="space-y-6">
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
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  placeholder="Enter blog title"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Slug / URL</label>
                <input
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  placeholder="/playbooks/blogs/your-title"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Author</label>
                <input
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  placeholder="Author name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Publish date</label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Category</label>
                <input
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  placeholder="e.g., Playbooks, Guides, Product"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Tags</label>
                <input
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
                <select className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none">
                  <option>H1 Bold</option>
                  <option>H2 Bold</option>
                  <option>H3 Semibold</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Body font</label>
                <select className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none">
                  <option>Inter</option>
                  <option>Manrope</option>
                  <option>Playfair</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Text size</label>
                <input type="range" min="14" max="22" className="w-full accent-amber-400" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Text color</label>
                <input type="color" className="h-10 w-full rounded-lg border border-gray-800 bg-black p-1" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Line height</label>
                <input type="range" min="1.2" max="2" step="0.1" className="w-full accent-amber-400" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Alignment</label>
                <div className="grid grid-cols-3 gap-2">
                  {["Left", "Center", "Justify"].map((item) => (
                    <button
                      key={item}
                      className="rounded-lg border border-gray-800 bg-black px-3 py-2 text-sm text-gray-200 hover:border-amber-400"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <label className="text-sm text-gray-400">Content</label>
              <textarea
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
                  <span className="text-sm text-gray-500">Upload or paste URL</span>
                  <button className="flex items-center gap-2 rounded-lg border border-gray-800 px-3 py-1.5 text-xs text-amber-300 hover:border-amber-400">
                    <Plus className="h-4 w-4" /> Upload
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Alt text</label>
                <input
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  placeholder="Describe the cover image"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-gray-400">SEO title</label>
                <input
                  className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  placeholder="70 characters max"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-gray-400">Meta description</label>
                <textarea
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
              {[1, 2].map((item) => (
                <div key={item} className="rounded-xl border border-gray-800 bg-black/60 p-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-500">Question {item}</label>
                    <input
                      className="w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                      placeholder={`FAQ question ${item}`}
                    />
                  </div>
                  <div className="mt-3 space-y-2">
                    <label className="text-xs text-gray-500">Answer</label>
                    <textarea
                      className="min-h-[70px] w-full rounded-lg border border-gray-800 bg-black px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                      placeholder="Short, clear answer"
                    />
                  </div>
                </div>
              ))}
              <button className="inline-flex items-center gap-2 rounded-lg border border-gray-800 px-4 py-2 text-sm text-amber-300 hover:border-amber-400">
                <Plus className="h-4 w-4" />
                Add FAQ
              </button>
            </div>
          </div>

          {/* Preview */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/70 p-6 shadow-lg shadow-amber-400/10">
            <div className="mb-4 flex items-center gap-2">
              <Eye className="h-5 w-5 text-amber-300" />
              <h3 className="text-lg font-semibold text-white">Live preview</h3>
            </div>
            <div className="rounded-xl border border-dashed border-gray-800 bg-black/40 p-6 text-gray-400">
              Preview your blog as you fill in the fields. Toggle light/dark, mobile/desktop views, and check how FAQs and images render.
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
