"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export function Guides2Page() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const guides = [
    {
      id: 1,
      title: "ZeaCRM Setup Wizard",
      description: "Complete your ZeaCRM setup in 5 minutes with our guided wizard.",
      difficulty: "Beginner",
      duration: "5 min",
      category: "Getting Started",
    },
    {
      id: 2,
      title: "Advanced Pipeline Management",
      description: "Master complex sales pipelines and custom stages.",
      difficulty: "Advanced",
      duration: "40 min",
      category: "Sales",
    },
    {
      id: 3,
      title: "Workflow Automation Mastery",
      description: "Create powerful automations to save time and reduce errors.",
      difficulty: "Intermediate",
      duration: "30 min",
      category: "Automation",
    },
    {
      id: 4,
      title: "API Integration Guide",
      description: "Connect ZeaCRM with external applications using our API.",
      difficulty: "Advanced",
      duration: "45 min",
      category: "Integration",
    },
    {
      id: 5,
      title: "Custom Dashboard Creation",
      description: "Build personalized dashboards for your team's needs.",
      difficulty: "Intermediate",
      duration: "25 min",
      category: "Analytics",
    },
    {
      id: 6,
      title: "Team Permissions & Security",
      description: "Set up proper access controls and security policies.",
      difficulty: "Beginner",
      duration: "15 min",
      category: "Security",
    },
  ]

  const categories = ["All", "Getting Started", "Sales", "Automation", "Integration", "Analytics", "Security"]
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

  const [selectedDifficulty, setSelectedDifficulty] = useState("All")

  const filteredGuides = useMemo(() => {
    return guides.filter((guide) => {
      const matchesCategory = selectedCategory === "All" || guide.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === "All" || guide.difficulty === selectedDifficulty
      const matchesSearch =
        guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesDifficulty && matchesSearch
    })
  }, [selectedCategory, selectedDifficulty, searchQuery])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-15 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* <div className="flex justify-center mb-6 animate-fade-in">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/68c6c410024cf8ec47d6e3a7%281%29-zH93U9LGERy9pNBqMr2KDpBbblZtgX.png"
                alt="ZeaCRM Logo"
                className="h-12 w-auto"
              />
            </div> */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">Guides</h1>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
              Comprehensive guides to master every aspect of ZeaCRM
            </p>
            <input
              type="text"
              placeholder="Search guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-lg border border-border bg-background text-foreground w-full max-w-md mx-auto hover-lift animate-slide-up"
            />
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-4 md:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, i) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 hover-lift ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "bg-card border border-border hover:border-primary"
                      }`}
                      style={{ animationDelay: `${i * 30}ms` }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Difficulty Level</h3>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((difficulty, i) => (
                    <button
                      key={difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 hover-lift ${
                        selectedDifficulty === difficulty
                          ? "bg-primary text-primary-foreground"
                          : "bg-card border border-border hover:border-primary"
                      }`}
                      style={{ animationDelay: `${i * 30}ms` }}
                    >
                      {difficulty}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 animate-slide-up">
              {filteredGuides.length} Guide{filteredGuides.length !== 1 ? "s" : ""} Found
            </h2>
            {filteredGuides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredGuides.map((guide, i) => (
                  <div
                    key={guide.id}
                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300 hover-lift animate-fade-in"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground flex-1">{guide.title}</h3>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-2 ${
                          guide.difficulty === "Beginner"
                            ? "bg-green-500/10 text-green-600"
                            : guide.difficulty === "Intermediate"
                              ? "bg-yellow-500/10 text-yellow-600"
                              : "bg-red-500/10 text-red-600"
                        }`}
                      >
                        {guide.difficulty}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">⏱️ {guide.duration}</span>
                      <Link href="#" className="text-primary hover:text-primary/80 font-semibold transition-colors">
                        Start Guide →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No guides found matching your filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-primary/10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-slide-up">Need More Help?</h2>
            <p className="text-muted-foreground mb-8">Contact our support team for personalized assistance</p>
            <Link
              href="/contact-us"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover-lift"
            >
              Contact Support
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
