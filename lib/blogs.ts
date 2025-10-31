export type BlogPost = {
  slug: string
  title: string
  author: string
  date: string
  category: string
  image: string
  excerpt?: string
  content?: string
  htmlPath?: string
  featured?: boolean
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-powered-customer-insights",
    title: "AI-Powered Customer Insights",
    author: "Sam Ebenezer",
    date: "Oct 29, 2024",
    category: "AI & Tech",
    image: "/ai-customer-insights.jpg",
    excerpt:
      "AI transforms how CRMs work by turning data into decisions.",
    content: "<p>AI transforms how CRMs work...</p>",
    htmlPath: "/html/why-us.html",
    featured: true,
  },
  {
    slug: "banana-url",
    title: "Banana Health Benefits",
    author: "Sam Ebenezer",
    date: "Oct 30, 2024",
    category: "Healthcare",
    image: "/ai-customer-insights.jpg",
    excerpt:
      "Why Banana is a superfood.",
    content: "<p>this is the content for the banana article.</p>",
    // Example using external html file under public/blogs/banana-url.html
    htmlPath: "/blogs/template.html",
    featured: false,
  },
]

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
