import Link from "next/link"
import { notFound } from "next/navigation"
import FAQ from "@/components/faq"
import { BlogDemoForm } from "@/components/blog-demo-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { TableOfContents } from "@/components/table-of-contents"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

async function getBlog(slug: string) {
  const res = await fetch(`${API_URL}/api/blogs/slug/${encodeURIComponent(slug)}`, { cache: "no-store" })
  if (res.status === 404) return null
  if (!res.ok) throw new Error("Failed to load blog")
  return res.json()
}

type TocEntry = { id: string; title: string; blockId: string }

function buildTocEntries(blog: any): TocEntry[] {
  if (!blog?.blocks) return []
  return blog.blocks
    .filter((b: any) => b.showInToc && (b.title?.trim() || b.content?.trim()))
    .map((b: any, idx: number) => {
      const label = b.title?.trim() || b.content?.split("\n")[0] || "Section"
      return { id: `section-${idx}`, title: label, blockId: b.id }
    })
}

function renderBlock(block: any, tocEntries: TocEntry[], blog: any, slug: string) {
  const tocAnchor = tocEntries.find((entry) => entry.blockId === block.id)?.id
  const commonProps = { id: block.showInToc && tocAnchor ? tocAnchor : undefined }

  switch (block.type) {
    case "heading2":
      return (
        <h3 key={block.id} {...commonProps} className="text-xl font-semibold" dangerouslySetInnerHTML={{ __html: block.content }} />
      )
    case "heading3":
      return (
        <h4 key={block.id} {...commonProps} className="text-lg font-semibold" dangerouslySetInnerHTML={{ __html: block.content }} />
      )
    case "heading4":
      return (
        <h5 key={block.id} {...commonProps} className="text-base font-semibold" dangerouslySetInnerHTML={{ __html: block.content }} />
      )
    case "heading5":
      return (
        <h6
          key={block.id}
          {...commonProps}
          className="text-sm font-semibold uppercase tracking-wide"
          dangerouslySetInnerHTML={{ __html: block.content }}
        />
      )
    case "heading6":
      return (
        <p
          key={block.id}
          {...commonProps}
          className="text-sm font-semibold uppercase tracking-wide"
          dangerouslySetInnerHTML={{ __html: block.content }}
        />
      )
    case "paragraph":
      return (
        <p
          key={block.id}
          {...commonProps}
          className="text-base text-muted-foreground leading-7"
          dangerouslySetInnerHTML={{ __html: block.content }}
        />
      )
    case "image": {
      const width = block.imageWidth ?? 100
      const align = block.imageAlign ?? "center"
      const alignClass = align === "left" ? "justify-start" : align === "right" ? "justify-end" : "justify-center"
      return (
        <div key={block.id} {...commonProps} className={`flex ${alignClass}`}>
          <div className="overflow-hidden rounded-lg border border-border" style={{ width: `${width}%`, maxWidth: "100%" }}>
            <img src={block.content} alt={block.alt || block.title || "Blog image"} className="w-full h-auto object-contain" />
          </div>
        </div>
      )
    }
    case "list": {
      const itemsHtml = (block.content || "")
        .split("\n")
        .filter(Boolean)
        .map((item: string) => `<li>${item.replace(/^-\\s*/, "")}</li>`)
        .join("")
      return (
        <ul
          key={block.id}
          {...commonProps}
          className="list-disc list-inside space-y-1 text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: itemsHtml }}
        />
      )
    }
    case "quote":
      return (
        <blockquote
          key={block.id}
          {...commonProps}
          className="border-l-4 border-primary/50 pl-4 italic text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: block.content }}
        />
      )
    case "code":
      return (
        <pre
          key={block.id}
          {...commonProps}
          className="rounded-lg border border-border bg-gray-950/80 p-3 text-sm text-muted-foreground overflow-auto"
        >
          <code dangerouslySetInnerHTML={{ __html: block.content }} />
        </pre>
      )
    case "divider":
      return <hr key={block.id} {...commonProps} className="border-border" />
    case "callout":
      return (
        <div
          key={block.id}
          {...commonProps}
          className="rounded-lg border border-amber-400/60 bg-amber-400/10 p-4 text-foreground"
          dangerouslySetInnerHTML={{ __html: block.content }}
        />
      )
    case "video": {
      const width = block.imageWidth ?? 100
      const align = block.imageAlign ?? "center"
      const alignClass = align === "left" ? "justify-start" : align === "right" ? "justify-end" : "justify-center"
      return (
        <div key={block.id} {...commonProps} className={`flex ${alignClass}`}>
          <div className="aspect-video overflow-hidden rounded-lg border border-border w-full" style={{ width: `${width}%`, maxWidth: "100%" }}>
            <iframe
              src={block.content}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={block.title || "Embedded video"}
            />
          </div>
        </div>
      )
    }
    case "toc":
      return (
        <div key={block.id} {...commonProps} className="w-full flex justify-center">
          <div className="w-full max-w-2xl">
            <TableOfContents sections={tocEntries.map(({ id, title }) => ({ id, title }))} />
          </div>
        </div>
      )
    case "form":
      return (
        <div key={block.id} {...commonProps} className="max-w-xl">
          <BlogDemoForm blogLink={slug ? `/playbooks/blogs/${slug}` : undefined} blogTitle={blog?.title} />
        </div>
      )
    case "faq":
      return (
        <div key={block.id} id={commonProps.id}>
          <FAQ title={block.title || "Frequently Asked Questions"} items={block.faqs || []} className="mt-6 [&_*]:rounded-lg" />
        </div>
      )
    case "popularCard":
      return (
        <article key={block.id} {...commonProps} className="rounded-lg border border-border bg-background overflow-hidden max-w-md">
          <img src={block.cardImage || "/placeholder.svg"} alt={block.cardTitle || "Popular blog"} className="w-full h-32 object-cover" />
          <div className="p-3 space-y-2">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{block.cardCategory || "Category"}</span>
              {block.cardLink ? (
                <a href={block.cardLink} className="text-primary hover:underline text-xs">
                  View
                </a>
              ) : null}
            </div>
            <h5 className="text-sm font-semibold text-foreground">{block.cardTitle || "Popular blog title"}</h5>
            <p className="text-xs text-muted-foreground line-clamp-8">{block.cardExcerpt || "Short teaser for this blog card."}</p>
          </div>
        </article>
      )
    default:
      return null
  }
}

export default async function BlogViewPage({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug)
  if (!blog) return notFound()

  const tocEntries = buildTocEntries(blog)

  return (
    <div className={`editor-theme-${blog.theme || "dark"}`}>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <div
          className="mx-auto px-4"
          style={{ paddingTop: "32px", paddingBottom: "40px", maxWidth: "calc(100% - 60px)" }}
        >
          <Link
            href="/playbooks/blogs"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          >
            ‹ Back
          </Link>
          <div className="mt-6 flex flex-col lg:flex-row-reverse gap-6">
            <aside className="lg:w-80 shrink-0 lg:pl-2 pr-0 space-y-4">
              {blog.sidebarBlocks?.length ? (
                <div className="space-y-4">{blog.sidebarBlocks.map((block: any) => renderBlock(block, tocEntries, blog, params.slug))}</div>
              ) : (
                <p className="text-xs text-muted-foreground">No sidebar content.</p>
              )}
            </aside>

            <article className="flex-1 space-y-6">
              <header className="space-y-2">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Blog</p>
                <h1 className="text-3xl font-bold">{blog.title}</h1>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                  {blog.time ? <span>{blog.time}</span> : null}
                  {Array.isArray(blog.categories) && blog.categories.length > 0 ? (
                    <span className="flex flex-wrap gap-2">
                      {blog.categories.map((cat: string) => (
                        <span key={cat} className="rounded-full border border-border px-2 py-0.5 text-xs">
                          {cat}
                        </span>
                      ))}
                    </span>
                  ) : null}
                </div>
              </header>

              {blog.blocks?.length
                ? blog.blocks.map((block: any) => renderBlock(block, tocEntries, blog, params.slug))
                : <p className="text-muted-foreground">No content available.</p>}
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
