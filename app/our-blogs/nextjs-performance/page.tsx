import { BlogHeader } from "@/components/blog-header"
import { BlogImage } from "@/components/blog-image"
import { BlogContent } from "@/components/blog-content"
import { BlogFooter } from "@/components/blog-footer"
import { TableOfContents } from "@/components/table-of-contents"
import { RelatedBlogs } from "@/components/related-blogs"

export const metadata = {
  title: "Optimizing Performance in Next.js 15 | Blog",
  description:
    "Learn advanced techniques for optimizing your Next.js applications including image optimization, code splitting, and caching strategies.",
}

export default function NextJsPerformanceBlogPage() {
  const blogData = {
    tag: "Next.js",
    title: "Optimizing Performance in Next.js 15",
    author: "Emma Rodriguez",
    date: "October 22, 2025",
    time: "2:45 PM",
    image: "/next-js-performance-optimization.jpg",
    content: {
      intro:
        "Next.js 15 introduces powerful performance optimization features that make building lightning-fast web applications easier than ever. From enhanced image optimization to intelligent code splitting and advanced caching strategies, Next.js 15 gives developers the tools to create blazingly fast experiences. Performance isn't just a feature—it's foundational to user satisfaction and search engine rankings. In this guide, we'll explore practical techniques to squeeze every ounce of performance from your Next.js applications.",
      sections: [
        {
          title: "Image Optimization Strategies",
          description: "Master the Image component for optimal visual performance:",
          items: [
            "Automatic WebP conversion for supported browsers",
            "Responsive image sizing with srcSet generation",
            "Lazy loading with intersection observer API",
            "Blur placeholder support for perceived performance",
          ],
          paragraph:
            "Images are typically the largest assets on modern websites, and optimizing them can have dramatic performance impacts. Next.js's Image component handles much of this complexity automatically. When you use the Image component, Next.js analyzes your images and creates optimized versions for different screen sizes and formats. The component automatically serves WebP images to browsers that support them, falling back to JPG for older browsers. This alone can reduce image file sizes by 30-40%. Combined with lazy loading and blur placeholders, images no longer block page loads or hurt perceived performance.",
        },
        {
          title: "Code Splitting and Route Prefetching",
          description: "Reduce initial load time with intelligent code splitting:",
          items: [
            "Automatic code splitting at route boundaries",
            "Prefetch links visible in viewport automatically",
            "Dynamic imports for on-demand component loading",
            "Route-specific bundle analysis tools",
          ],
          paragraph:
            "Next.js automatically splits your code at route boundaries, meaning each page only includes the JavaScript it needs. This is a game-changer for large applications. When users navigate to a new route, Next.js prefetches the required code if the link is visible on screen. This makes navigation feel instantaneous. For components that are rarely used or large libraries, dynamic imports let you load them on demand. You can now build massive applications where the initial JavaScript bundle remains small, directly impacting first contentful paint times.",
        },
        {
          title: "Caching Strategies and ISR",
          description: "Implement sophisticated caching for optimal delivery:",
          items: [
            "Incremental Static Regeneration for dynamic content",
            "Edge caching with Vercel Edge Network",
            "Browser caching headers configuration",
            "Stale-while-revalidate patterns",
          ],
          paragraph:
            "Caching is one of the most powerful tools in performance optimization, and Next.js makes it remarkably elegant. Incremental Static Regeneration (ISR) lets you combine the benefits of static generation with the flexibility of server-side rendering. You can set pages to regenerate at most every N seconds, ensuring fresh content without the overhead of rendering on every request. With edge caching through Vercel, your content can be served from a location close to your users, dramatically reducing latency.",
        },
        {
          title: "Server and Client Component Optimization",
          description: "Leverage React Server Components for performance:",
          items: [
            "Keep heavy computation on the server",
            "Minimize JavaScript sent to browser",
            "Progressive enhancement with server components",
            "Optimal use of useEffect and client-side hooks",
          ],
          paragraph:
            "React Server Components represent a paradigm shift in how we build web applications. By running components on the server, you can eliminate unnecessary JavaScript from the client bundle. Database queries, data processing, and sensitive operations that might have required client-side logic can now stay on the server. This reduces the amount of JavaScript the browser has to parse and execute. The result is faster page loads and better performance on lower-end devices.",
        },
        {
          title: "Web Vitals and Monitoring",
          description: "Track and maintain performance with monitoring tools:",
          items: [
            "Core Web Vitals measurement and tracking",
            "Real-time performance analytics",
            "User experience metrics collection",
            "Automated performance regression detection",
          ],
          paragraph:
            "You can't optimize what you can't measure. Next.js provides first-class support for tracking Core Web Vitals—the metrics Google uses for ranking. By tracking metrics like Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and First Input Delay (FID), you get insight into how real users experience your application. Analytics providers integrated with Next.js can send this data automatically, alerting you if performance regresses with new deployments.",
        },
      ],
    },
  }

  const relatedBlogs = [
    {
      id: "react-18-features",
      title: "React 18: New Features and Best Practices",
      excerpt:
        "Discover the powerful new features in React 18 including automatic batching, transitions, and suspense improvements.",
      author: "Michael Chen",
      date: "October 28, 2025",
      image: "/react-18-features-and-improvements.jpg",
      tag: "React",
    },
    {
      id: "page",
      title: "The Future of AI in Web Development",
      excerpt:
        "Explore how artificial intelligence is transforming web development practices and tools with AI-powered code generation.",
      author: "Sarah Johnson",
      date: "November 5, 2025",
      image: "/ai-web-development-future-technology.jpg",
      tag: "Technology",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="flex gap-8">
          <div className="flex-1 min-w-0">
            <div className="max-w-4xl">
              <BlogHeader
                tag={blogData.tag}
                title={blogData.title}
                author={blogData.author}
                date={blogData.date}
                time={blogData.time}
              />

              <BlogImage src={blogData.image} alt={blogData.title} />

              <BlogContent sections={blogData.content.sections} intro={blogData.content.intro} />

              <BlogFooter author={blogData.author} />

              <RelatedBlogs blogs={relatedBlogs} />
            </div>
          </div>

          <TableOfContents sections={blogData.content.sections} />
        </div>
      </div>
    </main>
  )
}
