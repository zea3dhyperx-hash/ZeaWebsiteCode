"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedVideoPlaylist, setSelectedVideoPlaylist] = useState(0)

  const guides = [
    {
      id: 1,
      title: "Getting Started with ZeaCRM",
      description: "A comprehensive guide to set up your ZeaCRM account and start managing customers.",
      difficulty: "Beginner",
      duration: "15 min",
      category: "Getting Started",
    },
    {
      id: 2,
      title: "Advanced Lead Scoring Techniques",
      description: "Learn how to implement sophisticated lead scoring to prioritize high-value prospects.",
      difficulty: "Advanced",
      duration: "30 min",
      category: "Sales & Leads",
    },
    {
      id: 3,
      title: "Automating Your Sales Workflow",
      description: "Step-by-step instructions to automate repetitive sales tasks and boost productivity.",
      difficulty: "Intermediate",
      duration: "25 min",
      category: "Automation",
    },
    {
      id: 4,
      title: "Integrating Third-Party Tools",
      description: "Connect your favorite tools with ZeaCRM for seamless data flow.",
      difficulty: "Intermediate",
      duration: "20 min",
      category: "Integrations",
    },
    {
      id: 5,
      title: "Building Custom Reports",
      description: "Create tailored reports to track metrics that matter most to your business.",
      difficulty: "Advanced",
      duration: "35 min",
      category: "Reporting",
    },
    {
      id: 6,
      title: "Team Collaboration Best Practices",
      description: "Master team features and communication tools for better collaboration.",
      difficulty: "Beginner",
      duration: "12 min",
      category: "Best Practices",
    },
  ]

  const videoPlaylists = [
    {
      id: 1,
      title: "Getting Started Playlist",
      description: "Essential videos to get you up and running with ZeaCRM",
      videos: [
        {
          id: 1,
          title: "Account Setup Guide",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "8:30",
        },
        {
          id: 2,
          title: "Dashboard Overview",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "6:45",
        },
        {
          id: 3,
          title: "First Steps with Contacts",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "7:20",
        },
      ],
    },
    {
      id: 2,
      title: "Advanced Features Playlist",
      description: "Master advanced ZeaCRM features and workflows",
      videos: [
        {
          id: 1,
          title: "Workflow Automation Deep Dive",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "15:30",
        },
        {
          id: 2,
          title: "Custom Reports & Analytics",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "12:45",
        },
        {
          id: 3,
          title: "Integration Strategies",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "14:20",
        },
      ],
    },
    {
      id: 3,
      title: "Sales Optimization Playlist",
      description: "Optimize your sales process with ZeaCRM",
      videos: [
        {
          id: 1,
          title: "Lead Scoring Mastery",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "11:15",
        },
        {
          id: 2,
          title: "Pipeline Management",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "9:50",
        },
        {
          id: 3,
          title: "Sales Forecasting",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "10:30",
        },
      ],
    },
  ]

  const categories = [
    "All",
    "Getting Started",
    "Sales & Leads",
    "Automation",
    "Integrations",
    "Reporting",
    "Best Practices",
  ]
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

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
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">ZeaCRM Guides</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Step-by-step tutorials to master ZeaCRM and maximize your results
            </p>
            <input
              type="text"
              placeholder="Search guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-lg border border-border bg-background text-foreground w-full max-w-md mx-auto"
            />
          </div>
        </section>

        {/* Video Playlists Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-primary/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">Video Tutorials & Playlists</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Video Player */}
              <div className="lg:col-span-2">
                <div className="bg-black rounded-lg overflow-hidden aspect-video mb-6">
                  <iframe
                    width="100%"
                    height="100%"
                    src={videoPlaylists[selectedVideoPlaylist].videos[0].url}
                    title={videoPlaylists[selectedVideoPlaylist].videos[0].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {videoPlaylists[selectedVideoPlaylist].title}
                  </h3>
                  <p className="text-muted-foreground">{videoPlaylists[selectedVideoPlaylist].description}</p>
                </div>
              </div>

              {/* Playlist Selection */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground mb-4">Available Playlists</h3>
                {videoPlaylists.map((playlist, index) => (
                  <button
                    key={playlist.id}
                    onClick={() => setSelectedVideoPlaylist(index)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      selectedVideoPlaylist === index
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border hover:border-primary"
                    }`}
                  >
                    <div className="font-semibold text-sm mb-1">{playlist.title}</div>
                    <div className="text-xs opacity-70">{playlist.videos.length} videos</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Videos in Selected Playlist */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {videoPlaylists[selectedVideoPlaylist].title} - Videos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videoPlaylists[selectedVideoPlaylist].videos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-black aspect-video flex items-center justify-center">
                      <div className="text-white text-4xl">▶</div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">{video.title}</h4>
                      <p className="text-sm text-muted-foreground">Duration: {video.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-4 md:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
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
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Difficulty Level</h3>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((difficulty) => (
                    <button
                      key={difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedDifficulty === difficulty
                          ? "bg-primary text-primary-foreground"
                          : "bg-card border border-border hover:border-primary"
                      }`}
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
            <h2 className="text-3xl font-bold text-foreground mb-12">
              {filteredGuides.length} Guide{filteredGuides.length !== 1 ? "s" : ""} Found
            </h2>
            {filteredGuides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredGuides.map((guide) => (
                  <div
                    key={guide.id}
                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
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
                      <Link href="#" className="text-primary hover:text-primary/80 font-semibold">
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

        {/* Categories */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-primary/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Getting Started", "Sales & Leads", "Automation", "Reporting", "Integrations", "Best Practices"].map(
                (category, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedCategory(category)}
                    className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors text-left"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-2">{category}</h3>
                    <p className="text-sm text-muted-foreground">Explore {category.toLowerCase()} guides</p>
                  </button>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">Best Practices</h2>
            <div className="space-y-6">
              {[
                { title: "Data Quality", description: "Maintain clean and accurate customer data for better insights" },
                { title: "Regular Backups", description: "Always backup your important data to prevent loss" },
                { title: "Team Training", description: "Ensure your team is properly trained on ZeaCRM features" },
                {
                  title: "Security",
                  description: "Implement strong security practices to protect customer information",
                },
              ].map((practice, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{practice.title}</h3>
                  <p className="text-muted-foreground">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-bold text-foreground mb-2">Documentation</h3>
                <p className="text-sm text-muted-foreground">Complete API and feature documentation</p>
              </button>
              <button className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <div className="text-3xl mb-3">🎥</div>
                <h3 className="font-bold text-foreground mb-2">Video Tutorials</h3>
                <p className="text-sm text-muted-foreground">Watch step-by-step video guides</p>
              </button>
              <button className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-bold text-foreground mb-2">Community Forum</h3>
                <p className="text-sm text-muted-foreground">Connect with other ZeaCRM users</p>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
