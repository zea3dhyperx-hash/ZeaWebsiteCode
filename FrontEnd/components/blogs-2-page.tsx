"use client"

import { useState, useMemo } from "react"
// import FAQ from "@/components/faq"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

type BlogResponse = {
  _id?: string
  slug?: string
  card?: {
    title?: string
    excerpt?: string
    date?: string
    time?: string
    category?: string
    image?: string
    author?: string
  }
  title?: string
  excerpt?: string
  date?: string
  author?: string
  htmlPath?: string
  categories?: string[]
}

type Blogs2PageProps = {
  initialBlogs: BlogResponse[]
}

export function Blogs2Page({ initialBlogs = [] }: Blogs2PageProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedAuthor, setSelectedAuthor] = useState("All Authors")
  const [newsletterName, setNewsletterName] = useState("")
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)

  const articles = useMemo(
    () =>
      initialBlogs.map((p, idx) => {
        const card = p.card || {}
        const slugPath = p.slug ? `/playbooks/blogs/${p.slug}` : undefined
        const link = slugPath || p.htmlPath || "#"
        return {
          id: p._id || idx + 1,
          title: card.title || p.title || "Untitled post",
          excerpt: card.excerpt || p.excerpt || "",
          date: card.date || p.date || "",
          category: card.category || p.categories?.[0] || "General",
          image: card.image || "/placeholder.svg",
          slug: p.slug,
          htmlPath: link,
          author: card.author || p.author || "Anonymous",
        }
      }),
    [initialBlogs],
  )

  const featuredArticles = articles.slice(0, 3)
  const allArticles = articles

  const trendingTopics = [
    "AI Automation",
    "Customer Analytics",
    "Sales Forecasting",
    "Team Productivity",
    "Data Integration",
    "Mobile Sales",
  ]

  const categories = ["All", "AI & Technology", "Sales Strategy", "Case Studies", "Integration", "Mobile", "ZeaCRM"]

  const authors = useMemo(() => {
    const names = Array.from(new Set(articles.map((p) => p.author).filter(Boolean))).sort()
    return ["All Authors", ...names]
  }, [articles])

  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
      const matchesAuthor = selectedAuthor === "All Authors" || article.author === selectedAuthor
      return matchesSearch && matchesCategory && matchesAuthor
    })
  }, [searchQuery, selectedCategory, selectedAuthor, allArticles])

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
          {/* Background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/herobg2.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          {/* Dark overlay to improve text contrast */}
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* <div className="flex justify-center mb-6 animate-fade-in">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/68c6c410024cf8ec47d6e3a7%281%29-zH93U9LGERy9pNBqMr2KDpBbblZtgX.png"
                alt="ZeaCRM Logo"
                className="h-12 w-auto"
              />
            </div> */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">Blogs</h1>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
              Expert insights, industry  trends, and success stories from the ZeaCRM community
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

        {/* Category + Author Filters */}
        {/* <section className="py-8 px-4 md:px-8 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-3">
              {categories.map((category, i) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 hover-lift ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border hover:border-primary"
                  }`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {authors.map((name, i) => (
                <button
                  key={name}
                  onClick={() => setSelectedAuthor(name)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 hover-lift ${
                    selectedAuthor === name
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border hover:border-primary"
                  }`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </section> */}

        {/* All Articles Grid */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-slide-up">
              {searchQuery || selectedCategory !== "All" ? "Search Results" : "All Articles"}
            </h2>
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, i) => (
                  <article
                    key={article.id}
                    className="bg-card w-85 border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
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
                        <span className="px-3 py-1 rounded-full border border-border text-[11px]">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{article.title}</h3>
                      <p
                        className="text-base text-muted-foreground leading-6"
                        style={{ display: "-webkit-box", WebkitLineClamp: 7, WebkitBoxOrient: "vertical", overflow: "hidden" }}
                      >
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
        
        {/* Trending Topics
        <section className="py-16 md:py-24 px-4 md:px-8 bg-primary/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 animate-slide-up">Trending Topics</h2>
            <div className="flex flex-wrap gap-4">
              {trendingTopics.map((topic, i) => (
                <button
                  key={i}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 font-semibold hover-lift animate-fade-in"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </section> */}


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
                🎉 Thanks for subscribing! We&apos;ll keep you updated.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}



