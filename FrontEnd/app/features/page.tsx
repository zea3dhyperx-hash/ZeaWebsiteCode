import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto max-w-5xl px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">Features</h1>
          <p className="text-muted-foreground">
            Feature highlights will appear here.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
