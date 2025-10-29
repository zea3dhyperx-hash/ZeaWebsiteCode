"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export function Blogs2Page() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const featuredArticles = [
    {
      id: 1,
      title: "AI-Powered Customer Insights: The Future of CRM",
      excerpt:
        "Discover how artificial intelligence transforms customer data into actionable insights for better decision-making.",
      date: "Oct 29, 2024",
      category: "AI & Technology",
      image: "/ai-customer-insights.jpg",
    },
    {
      id: 2,
      title: "Scaling Your Sales Team Without Scaling Costs",
      excerpt: "Learn proven strategies to grow your sales revenue while maintaining operational efficiency.",
      date: "Oct 26, 2024",
      category: "Sales Strategy",
      image: "/sales-team-scaling.jpg",
    },
    {
      id: 3,
      title: "Customer Success Stories: Real Results with ZeaCRM",
      excerpt: "Read how leading companies achieved remarkable growth using ZeaCRM's powerful features.",
      date: "Oct 23, 2024",
      category: "Case Studies",
      image: "/customer-success-team.png",
    },
  ]

  const allArticles = [
    ...featuredArticles,
    {
      id: 4,
      title: "The Complete Guide to Lead Nurturing",
      excerpt: "Master the art of nurturing leads through every stage of the sales funnel.",
      date: "Oct 20, 2024",
      category: "Sales Strategy",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Integrating Your Tech Stack: Best Practices",
      excerpt: "Learn how to seamlessly integrate ZeaCRM with your existing tools and systems.",
      date: "Oct 17, 2024",
      category: "Integration",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Mobile CRM: Managing Sales on the Go",
      excerpt: "Explore how mobile CRM capabilities empower your team to close deals anywhere.",
      date: "Oct 14, 2024",
      category: "Mobile",
      image: "/placeholder.svg",
    },
  ]

  const trendingTopics = [
    "AI Automation",
    "Customer Analytics",
    "Sales Forecasting",
    "Team Productivity",
    "Data Integration",
    "Mobile Sales",
  ]

  const categories = ["All", "AI & Technology", "Sales Strategy", "Case Studies", "Integration", "Mobile"]

  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6 animate-fade-in">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/68c6c410024cf8ec47d6e3a7%281%29-zH93U9LGERy9pNBqMr2KDpBbblZtgX.png"
                alt="ZeaCRM Logo"
                className="h-12 w-auto"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">ZeaCRM Blog 2</h1>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
              Expert insights, industry trends, and success stories from the ZeaCRM community
            </p>
            <div className="flex gap-4 justify-center animate-slide-up">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border bg-background text-foreground w-full max-w-md hover-lift"
              />
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 md:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2">
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
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300 hover-lift animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
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
                    <Link href="#" className="text-primary hover:text-primary/80 font-semibold transition-colors">
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Topics */}
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
                    className="flex gap-4 pb-8 border-b border-border last:border-b-0 hover:translate-x-1 transition-transform duration-300 animate-fade-in"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground mb-2">{article.date}</div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{article.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
                      <Link
                        href="#"
                        className="text-primary hover:text-primary/80 text-sm font-semibold transition-colors"
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

        {/* Newsletter Signup */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-primary/10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-slide-up">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">Get the latest CRM insights and strategies delivered weekly</p>
            <div className="flex gap-2 animate-slide-up">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground hover-lift"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover-lift">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
