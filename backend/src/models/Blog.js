import mongoose from "mongoose"

const BlockSchema = new mongoose.Schema(
  {
    id: String,
    type: String,
    content: String,
    title: String,
    showInToc: Boolean,
    alt: String,
    imageWidth: Number,
    imageAlign: String,
    faqs: [
      {
        q: String,
        a: String,
      },
    ],
    cardTitle: String,
    cardExcerpt: String,
    cardImage: String,
    cardCategory: String,
    cardLink: String,
  },
  { _id: false },
)

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String },
    metaDescription: String,
    focusKeywords: String,
    categories: [String],
    slug: { type: String, required: true, unique: true },
    htmlPath: { type: String, required: true },
    card: {
      title: String,
      excerpt: String,
      date: String,
      time: String,
      category: String,
      categories: [String],
      image: String,
      author: String,
      htmlPath: String,
      slug: String,
    },
    blocks: [BlockSchema],
    sidebarBlocks: [BlockSchema],
    theme: { type: String, default: "dark" },
  },
  { timestamps: true },
)

export const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema)
