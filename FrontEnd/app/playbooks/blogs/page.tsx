import type { Metadata } from "next"
import { Blogs2Page } from "@/components/blogs-2-page"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

async function getBlogs() {
  const res = await fetch(`${API_URL}/api/blogs`, { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to load blogs")
  return res.json()
}

export default async function Blogs2() {
  const blogs = await getBlogs()
  return <Blogs2Page initialBlogs={blogs} />
}

export const metadata: Metadata = {
  title: "Blogs | ZeaCRM",
  description: "Stay updated with the latest insights, tips, and trends in customer relationship management and business automation through Zea CRM's blog.",
}
