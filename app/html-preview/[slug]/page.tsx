import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"

type Props = {
  params: { slug: string }
}

// Allow only known HTML files to be previewed
const allowed = new Set(["index", "features", "why-us"])

export function generateStaticParams() {
  return Array.from(allowed).map((slug) => ({ slug }))
}

export default function HtmlPreviewPage({ params }: Props) {
  const slug = params.slug
  if (!allowed.has(slug)) return notFound()

  const src = `../html/${slug}.html`

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="border border-border rounded-lg overflow-hidden bg-card">
            <iframe
              src={src}
              title={`Preview ${slug}`}
              className="w-full min-h-[80vh] bg-white"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
