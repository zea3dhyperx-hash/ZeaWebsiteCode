"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { BLOG_POSTS } from "@/lib/blogs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Eye,
  EyeOff,
  Grip,
  Trash2,
  Type,
  Image as ImageIcon,
  List,
  AlignLeft,
  Heading1,
  Heading2,
  Quote,
  Code,
  Minus,
  Sparkles,
  Video,
} from "lucide-react"

type BlockType = "heading1" | "heading2" | "paragraph" | "image" | "list" | "quote" | "code" | "divider" | "callout" | "video"

type Block = {
  id: string
  type: BlockType
  content: string
  title?: string
  showInToc?: boolean
}

const palette: Record<BlockType, { label: string; icon: any }> = {
  heading1: { label: "H1 Heading", icon: Heading1 },
  heading2: { label: "H2 Heading", icon: Heading2 },
  paragraph: { label: "Paragraph", icon: Type },
  image: { label: "Image", icon: ImageIcon },
  list: { label: "List", icon: List },
  quote: { label: "Quote", icon: Quote },
  code: { label: "Code Block", icon: Code },
  divider: { label: "Divider", icon: Minus },
  callout: { label: "Callout", icon: Sparkles },
  video: { label: "Video", icon: Video },
}

function makeId() {
  return Math.random().toString(36).slice(2, 9)
}

export default function BlogEditorPage() {
  const searchParams = useSearchParams()
  const slug = searchParams.get("slug") || ""

  const base = useMemo(() => BLOG_POSTS.find((p) => p.slug === slug) ?? BLOG_POSTS[0], [slug])
  const [title, setTitle] = useState(base?.title || "Untitled Blog")
  const [author, setAuthor] = useState(base?.author || "Author")
  const [date, setDate] = useState(base?.date || "2025-12-08")
  const [preview, setPreview] = useState(false)
  const [blocks, setBlocks] = useState<Block[]>([])
  const [viewMode, setViewMode] = useState<"page" | "card">("page")
  const [cardData, setCardData] = useState({
    title: base?.title || "Untitled Card",
    excerpt: base?.excerpt || "Short summary of the blog card goes here.",
    date: base?.date || "2025-12-08",
    time: "10:00 AM",
    category: base?.category || "Playbooks",
    image: base?.image || "/placeholder.svg",
    author: base?.author || "Author",
    htmlPath: base?.htmlPath || base?.slug || "#",
  })
  const categoryOptions = ["Playbooks", "Guides", "Product", "Updates", "Case Studies", "AI & Automation", "Sales Ops"]
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    cardData.category ? cardData.category.split(",").map((c) => c.trim()).filter(Boolean) : [],
  )
  const [showCategoryMenu, setShowCategoryMenu] = useState(false)
  const [newCategory, setNewCategory] = useState("")
  const [dragId, setDragId] = useState<string | null>(null)
  const [formatMenu, setFormatMenu] = useState<{
    show: boolean
    x: number
    y: number
    blockId: string
    range: [number, number]
  }>({ show: false, x: 0, y: 0, blockId: "", range: [0, 0] })
  const [linkMenu, setLinkMenu] = useState<{ show: boolean; x: number; y: number; url: string }>({
    show: false,
    x: 0,
    y: 0,
    url: "",
  })
  const [colorMenu, setColorMenu] = useState<{ show: boolean; x: number; y: number; value: string }>({
    show: false,
    x: 0,
    y: 0,
    value: "#f59e0b",
  })

  const handleDrop = (type: BlockType) => {
    const defaults: Record<BlockType, string> = {
      heading1: "Heading 1",
      heading2: "Heading 2",
      paragraph: "Start writing your paragraph...",
      image: "https://placehold.co/800x400?text=Image",
      list: "- Item one\n- Item two\n- Item three",
      quote: "“Add your quote here.”",
      code: "const hello = 'world'",
      divider: "---",
      callout: "Callout text goes here.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    }
    setBlocks((prev) => [
      ...prev,
      { id: makeId(), type, content: defaults[type], title: "", showInToc: false },
    ])
  }

  const updateBlock = (id: string, data: Partial<Block>) => {
    setBlocks((prev) => prev.map((b) => (b.id === id ? { ...b, ...data } : b)))
  }

  const removeBlock = (id: string) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id))
  }

  const reorderBlocks = (fromId: string, toId: string) => {
    setBlocks((prev) => {
      const fromIndex = prev.findIndex((b) => b.id === fromId)
      const toIndex = prev.findIndex((b) => b.id === toId)
      if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) return prev
      const newBlocks = [...prev]
      const [moved] = newBlocks.splice(fromIndex, 1)
      newBlocks.splice(toIndex, 0, moved)
      return newBlocks
    })
  }

  const applyFormatting = (action: "bold" | "italic" | "underline" | "caps" | "lower" | "color" | "link") => {
    if (!formatMenu.show) return
    setBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== formatMenu.blockId) return b
        const [start, end] = formatMenu.range
        const before = b.content.slice(0, start)
        const selected = b.content.slice(start, end)
        const after = b.content.slice(end)
        if (!selected) return b
        let replacement = selected
        switch (action) {
          case "bold":
            replacement = `<strong>${selected}</strong>`
            break
          case "italic":
            replacement = `<em>${selected}</em>`
            break
          case "underline":
            replacement = `<u>${selected}</u>`
            break
          case "caps":
            replacement = selected.toUpperCase()
            break
          case "lower":
            replacement = selected.toLowerCase()
            break
          case "color":
            setColorMenu({ show: true, x: formatMenu.x, y: formatMenu.y, value: colorMenu.value || "#f59e0b" })
            return b
          case "link":
            setLinkMenu({ show: true, x: formatMenu.x, y: formatMenu.y, url: "" })
            return b
          default:
            break
        }
        return { ...b, content: `${before}${replacement}${after}` }
      }),
    )
    if (action !== "link" && action !== "color") {
      setFormatMenu((prev) => ({ ...prev, show: false }))
    }
  }

  const applyColor = () => {
    if (!formatMenu.show || !colorMenu.value) {
      setColorMenu((prev) => ({ ...prev, show: false }))
      return
    }
    setBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== formatMenu.blockId) return b
        const [start, end] = formatMenu.range
        const before = b.content.slice(0, start)
        const selected = b.content.slice(start, end)
        const after = b.content.slice(end)
        if (!selected) return b
        const replacement = `<span style="color:${colorMenu.value}">${selected}</span>`
        return { ...b, content: `${before}${replacement}${after}` }
      }),
    )
    setFormatMenu((prev) => ({ ...prev, show: false }))
    setColorMenu({ show: false, x: 0, y: 0, value: colorMenu.value })
  }

  const applyLink = () => {
    if (!formatMenu.show || !linkMenu.url.trim()) {
      setLinkMenu((prev) => ({ ...prev, show: false }))
      return
    }
    setBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== formatMenu.blockId) return b
        const [start, end] = formatMenu.range
        const before = b.content.slice(0, start)
        const selected = b.content.slice(start, end)
        const after = b.content.slice(end)
        if (!selected) return b
        const replacement = `<a href="${linkMenu.url.trim()}" target="_blank" rel="noreferrer">${selected}</a>`
        return { ...b, content: `${before}${replacement}${after}` }
      }),
    )
    setFormatMenu((prev) => ({ ...prev, show: false }))
    setLinkMenu({ show: false, x: 0, y: 0, url: "" })
  }

  const toc = blocks.filter((b) => b.showInToc && b.title?.trim())

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <div className="border-b border-border bg-card px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Blog editor</p>
            <h1 className="text-2xl font-semibold">{title}</h1>
          </div>
            <div className="flex items-center gap-3">
              <button className="rounded-lg border border-primary bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors">
                Create Blog
              </button>
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Preview</span>
                <button
                  className="rounded-full border border-border p-2 hover:border-primary hover:text-primary"
                  onClick={() => setPreview((p) => !p)}
              >
                {preview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </label>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 px-4 py-6 max-w-6xl mx-auto">
          {/* Sidebar palette */}
          <aside className="w-full lg:w-80 shrink-0 space-y-5 rounded-2xl border border-border bg-card p-4 sticky top-20 h-fit">
            <div className="flex gap-2">
              {(["page", "card"] as const).map((mode) => (
                <button
                  key={mode}
                  className={`flex-1 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${
                    viewMode === mode
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-foreground hover:border-primary"
                  }`}
                  onClick={() => setViewMode(mode)}
                >
                  {mode === "page" ? "Page" : "Card"}
                </button>
              ))}
            </div>

            {viewMode === "page" ? (
              <>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-foreground">Add blocks</h3>
                  <div className="space-y-2">
                    {(Object.keys(palette) as BlockType[]).map((type) => {
                      const Icon = palette[type].icon
                      return (
                        <button
                          key={type}
                          className="w-full flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2 text-left text-sm hover:border-primary hover:text-primary"
                          onClick={() => handleDrop(type)}
                        >
                          <Icon className="h-4 w-4" />
                          {palette[type].label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Current blocks</h4>
                  {blocks.length === 0 ? (
                    <p className="text-xs text-muted-foreground">None yet. Add blocks to see them here.</p>
                  ) : (
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {blocks.map((block, idx) => {
                        const label = block.title?.trim() || block.content.split("\n")[0] || palette[block.type].label
                        return (
                          <li
                            key={block.id}
                            draggable
                            onDragStart={() => setDragId(block.id)}
                            onDragOver={(e) => {
                              e.preventDefault()
                              if (dragId && dragId !== block.id) reorderBlocks(dragId, block.id)
                            }}
                            onDragEnd={() => setDragId(null)}
                            className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 cursor-move"
                          >
                            <span className="text-xs text-muted-foreground">{idx + 1}.</span>
                            <span className="truncate">{label}</span>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Card title</label>
                  <input
                    value={cardData.title}
                    onChange={(e) => setCardData({ ...cardData, title: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Excerpt</label>
                  <textarea
                    value={cardData.excerpt}
                    onChange={(e) => setCardData({ ...cardData, excerpt: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none min-h-[70px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">Date</label>
                    <input
                      value={cardData.date}
                      onChange={(e) => setCardData({ ...cardData, date: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">Time</label>
                    <input
                      value={cardData.time}
                      onChange={(e) => setCardData({ ...cardData, time: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Categories (multi-select)</label>
                  <div className="relative">
                    <button
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-left text-foreground flex items-center justify-between hover:border-primary"
                      onClick={() => setShowCategoryMenu((v) => !v)}
                    >
                      <span className="text-sm">{selectedCategories.length ? "Manage categories" : "Select categories"}</span>
                      <span className="text-xs text-muted-foreground">▼</span>
                    </button>
                    {showCategoryMenu && (
                      <div className="absolute z-20 mt-2 w-full rounded-lg border border-border bg-card shadow-lg">
                        <div className="max-h-56 overflow-auto">
                          {categoryOptions.map((cat) => {
                            const active = selectedCategories.includes(cat)
                            return (
                              <button
                                key={cat}
                                className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                                  active ? "bg-primary/10 text-primary" : "text-foreground hover:bg-background"
                                }`}
                        onClick={() => {
                          setSelectedCategories((prev) =>
                            prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
                          )
                          setShowCategoryMenu(false)
                        }}
                      >
                        {cat}
                      </button>
                    )
                  })}
                        </div>
                        <div className="border-t border-border p-3 space-y-2">
                          <input
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            placeholder="Add category"
                            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
                          />
                          <button
                            className="w-full rounded-lg border border-border px-3 py-2 text-sm text-foreground hover:border-primary"
                            onClick={() => {
                              const name = newCategory.trim()
                              if (!name) return
                              setSelectedCategories((prev) => (prev.includes(name) ? prev : [...prev, name]))
                              setNewCategory("")
                              if (!categoryOptions.includes(name)) {
                                categoryOptions.push(name)
                              }
                              setShowCategoryMenu(false)
                            }}
                          >
                            Add category
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  {selectedCategories.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {selectedCategories.map((cat) => (
                        <span
                          key={cat}
                          className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-3 py-1 text-xs text-primary"
                        >
                          {cat}
                          <button
                            aria-label={`Remove ${cat}`}
                            className="text-muted-foreground hover:text-destructive"
                            onClick={() => setSelectedCategories((prev) => prev.filter((c) => c !== cat))}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Image URL</label>
                  <input
                    value={cardData.image}
                    onChange={(e) => setCardData({ ...cardData, image: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Author</label>
                  <input
                    value={cardData.author}
                    onChange={(e) => setCardData({ ...cardData, author: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">HTML path / Link</label>
                  <input
                    value={cardData.htmlPath}
                    onChange={(e) => setCardData({ ...cardData, htmlPath: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Card preview</h4>
                  <article className="rounded-lg border border-border bg-background overflow-hidden">
                    <img src={cardData.image || "/placeholder.svg"} alt={cardData.title} className="w-full h-32 object-cover" />
                    <div className="p-3 space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                        <span>
                          {cardData.date} {cardData.time ? `• ${cardData.time}` : ""}
                        </span>
                        <div className="flex flex-wrap gap-1 justify-end">
                          {selectedCategories.length > 0
                            ? selectedCategories.map((cat) => (
                                <span key={cat} className="px-2 py-1 rounded-full border border-border">
                                  {cat}
                                </span>
                              ))
                            : (
                                <span className="px-2 py-1 rounded-full border border-border">
                                  {cardData.category || "Category"}
                                </span>
                              )}
                        </div>
                      </div>
                      <h5 className="text-sm font-semibold text-foreground">{cardData.title}</h5>
                      <p className="text-xs text-muted-foreground line-clamp-3">{cardData.excerpt}</p>
                      <span className="text-xs font-semibold text-primary">Read More →</span>
                    </div>
                  </article>
                </div>
              </div>
            )}
          </aside>

          {/* Canvas / Preview */}
          <section className="flex-1 space-y-4">
            {!preview && (
              <div className="rounded-2xl border border-dashed border-border bg-card/60 p-4 space-y-4">
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">Blog Title</label>
                    <input
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">Author</label>
                    <input
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">Date</label>
                    <input
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>

                {blocks.length === 0 && (
                  <div className="rounded-lg border border-dashed border-border bg-background/50 p-6 text-center text-muted-foreground">
                    Drag blocks from the left to start building your blog.
                  </div>
                )}

                <div className="space-y-3">
            {blocks.map((block) => {
              const Icon = palette[block.type].icon
                    const draggableHandle = (
                      <button
                        className="rounded-md border border-border bg-background p-1 text-muted-foreground hover:border-primary hover:text-primary cursor-move"
                        draggable
                        onDragStart={() => setDragId(block.id)}
                        onDragEnd={() => setDragId(null)}
                        aria-label="Drag to reorder"
                      >
                        <Grip className="h-4 w-4" />
                      </button>
                    )
                    return (
                      <div
                        key={block.id}
                        onDragOver={(e) => {
                          if (!dragId) return
                          e.preventDefault()
                          if (dragId !== block.id) reorderBlocks(dragId, block.id)
                        }}
                        className="rounded-lg border border-border bg-background p-3 space-y-2"
                      >
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            {draggableHandle}
                            <Icon className="h-4 w-4" />
                            <span>{palette[block.type].label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <label className="flex items-center gap-1 text-xs text-muted-foreground">
                              <input
                                type="checkbox"
                                checked={Boolean(block.showInToc)}
                                onChange={(e) => updateBlock(block.id, { showInToc: e.target.checked })}
                              />
                              TOC Title
                            </label>
                            <button
                              className="rounded-full p-1 text-muted-foreground hover:text-destructive"
                              onClick={() => removeBlock(block.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        <div className="grid gap-2 md:grid-cols-2">
                          <div className="space-y-1">
                            <label className="text-xs text-muted-foreground">Section title (for TOC)</label>
                            <input
                              value={block.title || ""}
                              onChange={(e) => updateBlock(block.id, { title: e.target.value })}
                              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                              placeholder="Optional section title"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs text-muted-foreground">Content</label>
                            {block.type === "image" ? (
                              <input
                                value={block.content}
                                onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                                placeholder="Image URL"
                              />
                            ) : (
                              <textarea
                                value={block.content}
                                onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                                onContextMenu={(e) => {
                                  if (e.currentTarget.selectionStart === e.currentTarget.selectionEnd) return
                                  e.preventDefault()
                                  setFormatMenu({
                                    show: true,
                                    x: e.clientX,
                                    y: e.clientY,
                                    blockId: block.id,
                                    range: [e.currentTarget.selectionStart, e.currentTarget.selectionEnd],
                                  })
                                  setLinkMenu({ show: false, x: 0, y: 0, url: "" })
                                }}
                                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none min-h-[90px]"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {preview && (
              <div className="rounded-2xl border border-border bg-card/70 p-6 space-y-6">
                <header className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-primary">Blog Preview</p>
                  <h1 className="text-3xl font-bold">{title}</h1>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span>By {cardData.author}</span>
                    <span>• {cardData.date}</span>
                    {cardData.time ? <span>• {cardData.time}</span> : null}
                    {selectedCategories.length > 0 && (
                      <span className="flex flex-wrap gap-2">
                        {selectedCategories.map((cat) => (
                          <span key={cat} className="rounded-full border border-border px-2 py-0.5 text-xs">
                            {cat}
                          </span>
                        ))}
                      </span>
                    )}
                  </div>
                </header>

                {toc.length > 0 && (
                  <div className="rounded-lg border border-border bg-background p-4">
                    <h3 className="text-sm font-semibold mb-2">Table of Contents</h3>
                    <ul className="space-y-1 text-sm text-primary">
                      {toc.map((b) => (
                        <li key={b.id}>
                          <a href={`#${b.id}`}>{b.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <article className="space-y-6">
                  {blocks.map((block) => {
                    const commonProps = { id: block.showInToc && block.title ? block.id : undefined }
                    if (block.type === "heading1") {
                      return (
                          <h2
                            key={block.id}
                            {...commonProps}
                            className="text-2xl font-bold"
                            dangerouslySetInnerHTML={{ __html: block.content }}
                          />
                        )
                      }
                      if (block.type === "heading2") {
                        return (
                          <h3
                            key={block.id}
                            {...commonProps}
                            className="text-xl font-semibold"
                            dangerouslySetInnerHTML={{ __html: block.content }}
                          />
                        )
                    }
                    if (block.type === "paragraph") {
                      return (
                        <p
                          key={block.id}
                          {...commonProps}
                          className="text-base text-muted-foreground leading-7"
                          dangerouslySetInnerHTML={{ __html: block.content }}
                        />
                      )
                    }
                    if (block.type === "image") {
                      return (
                        <div key={block.id} {...commonProps} className="overflow-hidden rounded-lg border border-border">
                          <img src={block.content} alt={block.title || "Blog image"} className="w-full h-auto" />
                        </div>
                      )
                    }
                    if (block.type === "list") {
                      return (
                        <ul
                          key={block.id}
                          {...commonProps}
                          className="list-disc list-inside space-y-1 text-muted-foreground"
                        >
                          {block.content
                            .split("\n")
                            .filter(Boolean)
                            .map((item, idx) => (
                              <li key={idx}>{item.replace(/^-\\s*/, "")}</li>
                            ))}
                        </ul>
                      )
                    }
                    if (block.type === "quote") {
                      return (
                        <blockquote
                          key={block.id}
                          {...commonProps}
                          className="border-l-4 border-primary/50 pl-4 italic text-muted-foreground"
                          dangerouslySetInnerHTML={{ __html: block.content }}
                        />
                      )
                    }
                    if (block.type === "code") {
                      return (
                        <pre
                          key={block.id}
                          {...commonProps}
                          className="rounded-lg border border-border bg-gray-950/80 p-3 text-sm text-muted-foreground overflow-auto"
                        >
                          <code>{block.content}</code>
                        </pre>
                      )
                    }
                    if (block.type === "divider") {
                      return <hr key={block.id} {...commonProps} className="border-border" />
                    }
                    if (block.type === "callout") {
                      return (
                        <div
                          key={block.id}
                          {...commonProps}
                          className="rounded-lg border border-amber-400/60 bg-amber-400/10 p-4 text-foreground"
                          dangerouslySetInnerHTML={{ __html: block.content }}
                        />
                      )
                    }
                    if (block.type === "video") {
                      return (
                        <div key={block.id} {...commonProps} className="aspect-video overflow-hidden rounded-lg border border-border">
                          <iframe
                            src={block.content}
                            className="h-full w-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={block.title || "Embedded video"}
                          />
                        </div>
                      )
                    }
                    return null
                  })}
                </article>
              </div>
            )}
          </section>
        </div>

        {formatMenu.show && (
          <div
            className="fixed z-50 rounded-lg border border-border bg-card shadow-lg p-2 flex flex-wrap gap-1 text-xs"
            style={{ top: formatMenu.y, left: formatMenu.x }}
          >
            <button className="px-2 py-1 hover:text-primary" onClick={() => applyFormatting("bold")}>
              <span className="font-semibold">B</span>
            </button>
            <button className="px-2 py-1 hover:text-primary italic" onClick={() => applyFormatting("italic")}>
              I
            </button>
            <button className="px-2 py-1 hover:text-primary underline" onClick={() => applyFormatting("underline")}>
              U
            </button>
            <button className="px-2 py-1 hover:text-primary uppercase" onClick={() => applyFormatting("caps")}>
              AA
            </button>
            <button className="px-2 py-1 hover:text-primary lowercase" onClick={() => applyFormatting("lower")}>
              aa
            </button>
            <button className="px-2 py-1 hover:text-primary" onClick={() => applyFormatting("color")}>
              🎨
            </button>
            <button className="px-2 py-1 hover:text-primary" onClick={() => applyFormatting("link")}>
              🔗
            </button>
          </div>
        )}

        {linkMenu.show && (
          <div
            className="fixed z-50 rounded-lg border border-border bg-card shadow-lg p-3 space-y-2 text-sm"
            style={{ top: linkMenu.y, left: linkMenu.x }}
          >
            <input
              value={linkMenu.url}
              onChange={(e) => setLinkMenu((prev) => ({ ...prev, url: e.target.value }))}
              placeholder="Paste URL"
              className="w-64 rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
            />
            <div className="flex gap-2">
              <button
                className="flex-1 rounded-lg bg-primary px-3 py-2 text-primary-foreground text-xs font-semibold hover:bg-primary/90"
                onClick={applyLink}
              >
                Apply
              </button>
              <button
                className="flex-1 rounded-lg border border-border px-3 py-2 text-xs hover:border-primary"
                onClick={() => setLinkMenu({ show: false, x: 0, y: 0, url: "" })}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {colorMenu.show && (
          <div
            className="fixed z-50 rounded-lg border border-border bg-card shadow-lg p-3 space-y-2 text-sm"
            style={{ top: colorMenu.y, left: colorMenu.x }}
          >
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={colorMenu.value}
                onChange={(e) => setColorMenu((prev) => ({ ...prev, value: e.target.value }))}
              />
              <input
                value={colorMenu.value}
                onChange={(e) => setColorMenu((prev) => ({ ...prev, value: e.target.value }))}
                className="w-28 rounded-lg border border-border bg-background px-2 py-1 text-foreground focus:border-primary focus:outline-none text-xs"
              />
            </div>
            <div className="flex gap-2">
              <button
                className="flex-1 rounded-lg bg-primary px-3 py-2 text-primary-foreground text-xs font-semibold hover:bg-primary/90"
                onClick={applyColor}
              >
                Apply
              </button>
              <button
                className="flex-1 rounded-lg border border-border px-3 py-2 text-xs hover:border-primary"
                onClick={() => setColorMenu({ show: false, x: 0, y: 0, value: colorMenu.value })}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
