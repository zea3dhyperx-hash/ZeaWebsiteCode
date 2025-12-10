"use client"

export function RealEstateNav() {
  const navItems = ["Video", "UseCases", "Benefits", "Solutions"]

  const handleScroll = (feature: string) => {
    const ids: { [key: string]: string } = {
      Video: "video",
      UseCases: "usecases",
      Benefits: "benefits",
      Solutions: "solutions",
    }
    const element = document.getElementById(ids[feature])
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="sticky top-0 bg-black/90 py-6 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center items-center gap-12 text-2xl">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </section>
  )
}
