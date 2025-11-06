"use client"

import Link from "next/link"
import Image from "next/image"

interface RelatedBlog {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  image: string
  tag: string
}

interface RelatedBlogsProps {
  blogs: RelatedBlog[]
}

export function RelatedBlogs({ blogs }: RelatedBlogsProps) {
  return (
    <section className="mt-20 space-y-6 border-t border-border pt-12">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">More Great Reads</h2>
        <p className="text-muted-foreground">Explore other insightful articles from our blog</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary hover:shadow-lg">
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/20" />
                <span className="absolute left-4 top-4 inline-block rounded bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {blog.tag}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {blog.title}
                </h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">{blog.excerpt}</p>

                {/* Meta Info */}
                <div className="flex items-center justify-between border-t border-border pt-3">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-foreground">{blog.author}</p>
                    <p className="text-xs text-muted-foreground">{blog.date}</p>
                  </div>
                  <div className="text-primary transition-transform group-hover:translate-x-2">→</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
