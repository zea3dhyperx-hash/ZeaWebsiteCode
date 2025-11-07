"use client"

export function AutomotiveNav() {
  const navItems = ["Video", "UseCases", "Benefits", "Solution"]

  const handleNavClick = (item: string) => {
    const sectionMap: Record<string, string> = {
      Video: "video",
      UseCases: "usecases",
      Benefits: "benefits",
      Solution: "solution",
    }

    const elementId = sectionMap[item]
    if (elementId) {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <section className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center items-center gap-12">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="text-white font-semibold hover:text-amber-400 transition-colors duration-300 cursor-pointer text-2xl"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </section>
  )
}
