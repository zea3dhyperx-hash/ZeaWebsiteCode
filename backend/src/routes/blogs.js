import express from "express"
import { Blog } from "../models/Blog.js"

const router = express.Router()

// Get all blogs
router.get("/", async (_req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ updatedAt: -1 })
    res.json(blogs)
  } catch (err) {
    console.error("List blogs error", err)
    res.status(500).json({ error: "Failed to fetch blogs" })
  }
})

// Get blog by slug
router.get("/slug/:slug", async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug })
    if (!blog) return res.status(404).json({ error: "Not found" })
    res.json(blog)
  } catch (err) {
    console.error("Fetch blog error", err)
    res.status(500).json({ error: "Failed to fetch blog" })
  }
})

export default router
