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
  // {
  //   slug: "ai-powered-customer-insights",
  //   title: "AI-Powered Customer Insights",
  //   author: "Miles",
  //   date: "Oct 29, 2024",
  //   category: "AI & Tech",
  //   image: "/ai-customer-insights.jpg",
  //   excerpt:
  //     "AI transforms how CRMs work by turning data into decisions.",
  //   content: "<p>AI transforms how CRMs work...</p>",
  //   htmlPath: "/html/why-us.html",
  //   featured: true,
  // },
  {
    slug: "banana-url",
    title: "Zea CRM — Where Every Lead Becomes a Relationship",
    author: "Sherly Angel",
    date: "Nov 06, 2025",
    category: "AI & Technology",
    image: "/ai-customer-insights.jpg",
    excerpt:
      "Designed for the Way You Work",
    content: "<p>Zea CRM automatically collects, assigns, and tracks leads from every source — website forms, phone calls, campaigns, or social media.</p>",
    // Example using external html file under public/blogs/banana-url.html
    htmlPath: "blog-1",
    featured: true,
  },
]

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
