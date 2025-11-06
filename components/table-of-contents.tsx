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
    { id: "conclusion", title: "Conclusion", level: 1 },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll("h2, h1")
      let current = ""

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect()
        if (rect.top < 100) {
          current = heading.id || ""
        }
      })

      setActiveId(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveId(id)
    }
  }

  return (
    <aside className="sticky top-8 hidden h-fit w-64 lg:block">
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Table of Contents</h3>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {isVisible ? "Hide" : "Show"}
          </button>
        </div>

        {isVisible && (
          <nav className="space-y-2">
            {tocItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className={`block w-full text-left text-sm transition-all duration-200 ${
                  activeId === item.id
                    ? "border-l-2 border-primary pl-3 font-semibold text-primary"
                    : "border-l-2 border-transparent pl-3 text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.title}
              </button>
            ))}
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
