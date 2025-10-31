


import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BLOG_POSTS } from "@/lib/blogs"

export default function Blogs() {
  return (
    <div className="min-h-screen bg-black text-white font-[Montserrat]">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8" style={{ color: "#d4af37" }}>
          Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="border border-zinc-800 rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-zinc-400 mb-2">
                  <span className="px-2 py-0.5 rounded-full border border-zinc-700" style={{ color: "#d4af37", borderColor: "#d4af37" }}>
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                {post.excerpt && <p className="text-zinc-300 mb-4">{post.excerpt}</p>}
                <Link href={post.htmlPath || "#"} className="font-semibold" style={{ color: "#d4af37" }}>
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

