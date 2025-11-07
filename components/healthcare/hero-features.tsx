"use client"

export function HeroFeatures() {
  const features = ["Video", "Usecases", "Benefit", "Solutions"]

  const handleFeatureClick = (feature: string) => {
    let elementId = ""

    switch (feature) {
      case "Video":
        elementId = "video"
        break
      case "Usecases":
        elementId = "usecases"
        break
      case "Benefit":
        elementId = "benefit"
        break
      case "Solutions":
        elementId = "solutions"
        break
    }

    if (elementId) {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <section className="bg-slate-950 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-12 flex-wrap md:flex-nowrap">
          {features.map((feature, idx) => (
            <span
              key={idx}
              onClick={() => handleFeatureClick(feature)}
              className="text-lg md:text-xl font-semibold text-amber-400 whitespace-nowrap transition-all duration-300 cursor-pointer hover:text-amber-300 hover:scale-110"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
