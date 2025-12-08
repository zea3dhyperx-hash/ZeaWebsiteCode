"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BLOG_POSTS } from "@/lib/blogs"
import { X } from "lucide-react"

type EditableArticle = {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image?: string
  slug?: string
  htmlPath?: string
  author?: string
}

export default function BlogsManagePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory] = useState("All")
  const [selectedAuthor] = useState("All Authors")
  const [newsletterName, setNewsletterName] = useState("")
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)

  const initialArticles: EditableArticle[] = BLOG_POSTS.map((p, idx) => ({
    id: idx + 1,
    title: p.title,
    excerpt: p.excerpt ?? "",
    date: p.date,
    category: p.category,
    image: p.image,
    slug: p.slug,
    htmlPath: p.htmlPath,
    author: p.author,
  }))

  const [articles, setArticles] = useState<EditableArticle[]>(initialArticles)
  const featuredArticles = useMemo(
    () => articles.filter((_, idx) => BLOG_POSTS[idx]?.featured).slice(0, 3),
    [articles],
  )
  const [editing, setEditing] = useState<EditableArticle | null>(null)

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
      const matchesAuthor = selectedAuthor === "All Authors" || article.author === selectedAuthor
      return matchesSearch && matchesCategory && matchesAuthor
    })
  }, [articles, searchQuery, selectedCategory, selectedAuthor])

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const body = new URLSearchParams()
      body.append("fullName", newsletterName)
      body.append("email", newsletterEmail)
      await fetch("https://n8n.urlfactory.website/webhook/ZeaCRM-Subscribe", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      })
    } catch (err) {
      console.error("Newsletter subscribe failed", err)
    } finally {
      setNewsletterName("")
      setNewsletterEmail("")
      setNewsletterSubscribed(true)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-15 md:py-24 px-4 md:px-8">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/herobg2.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">Blogs</h1>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
              Expert insights, industry trends, and success stories from the ZeaCRM community
            </p>
            <div className="flex gap-4 justify-center animate-slide-up">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border border-primary bg-background text-foreground w-full max-w-md hover-lift"
              />
            </div>
          </div>
        </section>

        {/* All Articles Grid */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-slide-up">
              {searchQuery || selectedCategory !== "All" ? "Search Results" : "All Articles"}
            </h2>
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredArticles.map((article, i) => (
                  <article
                    key={article.id}
                    className="relative bg-card w-85 border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <button
                      aria-label="Edit article"
                    className="absolute right-2 top-2 rounded-full border border-border bg-black/70 px-3 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                      onClick={() =>
                        window.open(`/playbooks/blogs/manage/editor?slug=${encodeURIComponent(article.slug || "")}`, "_blank")
                      }
                    >
                      Edit
                    </button>
                    <Link href={article.htmlPath || "#"} className="block">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                    </Link>
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{article.date}</span>
                        <span className="px-3 py-1 rounded-full border border-border text-[11px]">{article.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{article.title}</h3>
                      <p className="text-base text-muted-foreground leading-6">
                        {`${article.excerpt} Built for the way your team operates—unified communication, automation, and insights that keep deals moving. Focus on relationships, not admin. Smarter follow-ups, clearer pipeline visibility, and faster response times so every lead gets the attention it deserves.`}
                      </p>
                      <Link
                        href={article.htmlPath || "#"}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 animate-slide-up">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article, i) => (
                <article
                  key={article.id}
                  className="relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300 hover-lift animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <button
                    aria-label="Edit featured article"
                    className="absolute right-2 top-2 rounded-full border border-border bg-black/70 px-3 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    onClick={() =>
                      window.open(`/playbooks/blogs/manage/editor?slug=${encodeURIComponent(article.slug || "")}`, "_blank")
                    }
                  >
                    Edit
                  </button>
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{article.title}</h3>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                    <Link
                      href={article.htmlPath || "#"}
                      className="text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-primary/10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-slide-up">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">Get the latest CRM insights and strategies delivered weekly</p>
            <form className="flex flex-col sm:flex-row gap-2 animate-slide-up justify-center" onSubmit={handleNewsletterSubmit}>
              <input
                type="text"
                placeholder="Full name"
                value={newsletterName}
                onChange={(e) => setNewsletterName(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground hover-lift min-w-[220px]"
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground hover-lift min-w-[220px]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover-lift"
              >
                Subscribe
              </button>
            </form>
            {newsletterSubscribed && (
              <p className="mt-3 text-sm text-amber-500 font-semibold">
                dYZ% Thanks for subscribing! We&apos;ll keep you updated.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />

    </>
  )
}
