export function EducationNav() {
  const navItems = [
    { label: "Video", href: "#video" },
    { label: "UseCases", href: "#usecases" },
    { label: "Benefits", href: "#benefits" },
    
  ]

  return (
    <div className="bg-slate-900 border-b border-amber-500/20 py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white font-semibold hover:text-amber-400 transition-colors leading-7 tracking-wide text-2xl"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
