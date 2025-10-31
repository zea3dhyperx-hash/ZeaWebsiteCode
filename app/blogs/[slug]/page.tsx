import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BLOG_POSTS, getPostBySlug } from "@/lib/blogs"
import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export default function BlogArticle({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()
  let bodyHtml = post.content || ""
  if (!bodyHtml && post.htmlPath) {
    try {
      const htmlPath = path.join(process.cwd(), "public", post.htmlPath.replace(/^\/+/, ""))
      bodyHtml = fs.readFileSync(htmlPath, "utf-8")
    } catch (e) {
      // ignore and fall back to empty content
    }
  }

  return (
    <div className="min-h-screen bg-black text-white font-[Montserrat]">
      <Header />
      <article className="max-w-3xl mx-auto px-4 py-16">
        <div className="mb-6 text-sm text-zinc-400 flex items-center gap-3">
          <span className="px-2 py-0.5 rounded-full border" style={{ color: "#d4af37", borderColor: "#d4af37" }}>
            {post.category}
          </span>
          <span>{post.date}</span>
          <span>•</span>
          <span>By {post.author}</span>
        </div>
        <h1 className="text-4xl font-bold mb-6" style={{ color: "#d4af37" }}>
          {post.title}
        </h1>
        <img src={post.image} alt={post.title} className="w-full h-80 object-cover rounded-lg border border-zinc-800 mb-8" />
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      </article>
      <Footer />
    </div>
  )
}
