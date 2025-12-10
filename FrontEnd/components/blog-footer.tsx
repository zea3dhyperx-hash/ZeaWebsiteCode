"use client"

interface BlogFooterProps {
  author: string
}

export function BlogFooter({ author }: BlogFooterProps) {
  return (
    <footer className="mt-16 space-y-6 border-t border-border pt-8">
      {/* Author Bio Section */}
      <div className="flex items-center gap-4 rounded-lg bg-card p-6">
        <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <span className="text-xl font-bold text-primary">{author.charAt(0)}</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">About {author}</h3>
          <p className="text-sm text-muted-foreground">
            A passionate technology writer and developer with expertise in web development, AI, and modern software
            engineering practices.
          </p>
        </div>
      </div>

      {/* Related Articles */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-foreground">Related Articles</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {["Web Development Trends in 2025", "Getting Started with Next.js 15"].map((article, index) => (
            <a
              key={index}
              href="#"
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:bg-primary/10"
            >
              <h4 className="font-semibold text-foreground group-hover:text-primary">{article}</h4>
              <p className="mt-2 text-sm text-muted-foreground">Read more →</p>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
