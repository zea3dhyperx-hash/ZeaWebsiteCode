import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
import { connectDB } from "./config/db.js"
import blogsRouter from "./routes/blogs.js"

// Resolve the backend root so dotenv works even when running from src/
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, "../.env") })

async function bootstrap() {
  try {
    await connectDB(process.env.MONGODB_URI)
    console.log("Connected to MongoDB")
  } catch (err) {
    console.error("MongoDB connection failed", err)
    process.exit(1)
  }

  const app = express()
  app.use(cors())
  app.use(express.json({ limit: "5mb" }))

  app.get("/health", (_req, res) => res.json({ status: "ok" }))
  app.use("/api/blogs", blogsRouter)

  const port = process.env.PORT || 4000
  app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`)
  })
}

bootstrap()
