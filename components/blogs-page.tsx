"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const featuredArticles = [
    {
      id: 1,
      title: "How to Streamline Your Sales Pipeline with AI",
      excerpt: "Learn how artificial intelligence can help you manage leads more effectively and close deals faster.",
      date: "Oct 28, 2024",
      category: "Sales",
      image: "/sales-pipeline.jpg",
    },
    {
      id: 2,
      title: "Customer Retention Strategies That Work",
      excerpt: "Discover proven tactics to keep your customers engaged and reduce churn rates.",
      date: "Oct 25, 2024",
      category: "Customer Success",
      image: "/customer-retention.jpg",
    },
    {
      id: 3,
      title: "Automation Best Practices for Growing Teams",
      excerpt: "Explore how to automate repetitive tasks and focus on high-value activities.",
      date: "Oct 22, 2024",
      category: "Automation",
      image: "/automation-concept.png",
    },
  ]

  const allArticles = [
    ...featuredArticles,
    {
      id: 4,
      title: "Email Marketing Campaigns That Convert",
      excerpt: "Master the art of email marketing with proven strategies and templates.",
      date: "Oct 20, 2024",
      category: "Marketing",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Building High-Performing Sales Teams",
      excerpt: "Learn how to recruit, train, and motivate your sales team for maximum results.",
      date: "Oct 18, 2024",
      category: "Sales",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Data Security Best Practices",
      excerpt: "Protect your customer data with industry-leading security practices.",
      date: "Oct 15, 2024",
      category: "Security",
      image: "/placeholder.svg",
    },
  ]

  const trendingTopics = [
    "AI in CRM",
    "Sales Automation",
    "Customer Analytics",
    "Lead Scoring",
    "Email Marketing",
    "Team Collaboration",
  ]

  const categories = ["All", "Sales", "Customer Success", "Automation", "Marketing", "Security", "ZeaCRM"]

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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">ZeaCRM Blog</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Insights, tips, and strategies to grow your business with AI-powered CRM
            </p>
            <div className="flex gap-4 justify-center">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border bg-background text-foreground w-full max-w-md"
              />
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 md:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border hover:border-primary"
                  }`}
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
            <h2 className="text-3xl font-bold text-foreground mb-12">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
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
                    <Link href="#" className="text-primary hover:text-primary/80 font-semibold">
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
            <h2 className="text-3xl font-bold text-foreground mb-12">Trending Topics</h2>
            <div className="flex flex-wrap gap-4">
              {trendingTopics.map((topic, index) => (
                <button
                  key={index}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-semibold"
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
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {searchQuery || selectedCategory !== "All" ? "Search Results" : "All Articles"}
            </h2>
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredArticles.map((article) => (
                  <article key={article.id} className="flex gap-4 pb-8 border-b border-border last:border-b-0">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground mb-2">{article.date}</div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{article.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
                      <Link href="#" className="text-primary hover:text-primary/80 text-sm font-semibold">
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">Get the latest CRM tips and strategies delivered to your inbox</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
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
