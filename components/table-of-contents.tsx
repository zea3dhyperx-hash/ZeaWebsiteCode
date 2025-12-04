"use client"

import { useEffect, useState } from "react"

interface TOCItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  sections: Array<{
    title: string
  }>
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")
  const [isVisible, setIsVisible] = useState(true)

  const tocItems: TOCItem[] = [
    { id: "intro", title: "Introduction", level: 1 },
    ...sections.map((section, index) => ({
      id: `section-${index}`,
      title: section.title,
      level: 1,
    })),
    // { id: "conclusion", title: "Conclusion", level: 1 },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll("h2, h1")
      let current = activeId

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect()
        if (rect.top < 120) {
          current = heading.id || current
        }
      })

      setActiveId(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeId])

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 96
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      setActiveId(id)
    }
  }

  return (
    <aside className="sticky top-8 hidden h-fit w-80 lg:block">
      <div className="rounded-lg border border-border bg-card p-6 shadow-md">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary" aria-hidden />
            Table of Contents
          </h3>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {isVisible ? "Hide" : "Show"}
          </button>
        </div>

        {isVisible && (
          <nav className="space-y-2">
            {tocItems.map((item) => {
              const isActive = activeId === item.id
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className={`flex items-center gap-2 w-full text-left text-sm transition-all duration-200 ${
                    isActive
                      ? "border-l-2 border-primary pl-3 font-semibold text-primary"
                      : "border-l-2 border-transparent pl-3 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`h-2 w-2 rounded-full ${isActive ? "bg-primary" : "bg-muted-foreground/60"}`}
                  />
                  <span>{item.title}</span>
                </button>
              )
            })}
          </nav>
        )}

        {/* Reading Time Estimate */}
        <div className="mt-6 border-t border-border pt-4">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">8 min</span> read
          </p>
        </div>
      </div>
    </aside>
  )
}
