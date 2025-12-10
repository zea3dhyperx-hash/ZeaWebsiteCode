"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function useScrollRestore() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return

    const key = `scroll:${pathname}`

    const restore = () => {
      try {
        const nav = performance.getEntriesByType?.("navigation")[0] as PerformanceNavigationTiming | undefined
        const isHistory = (nav && (nav.type === "back_forward" || nav.type === "reload")) || false
        const saved = sessionStorage.getItem(key)
        const y = saved ? parseInt(saved, 10) : 0
        if (isHistory && !Number.isNaN(y)) {
          window.scrollTo(0, y)
        } else if (!isHistory) {
          // First load or link navigation: start at top
          window.scrollTo(0, 0)
        }
      } catch {}
    }

    const save = () => {
      try {
        sessionStorage.setItem(key, String(window.scrollY))
      } catch {}
    }

    // Restore after paint
    requestAnimationFrame(() => restore())

    // Save on visibility change and before unload
    const onVis = () => { if (document.visibilityState === "hidden") save() }
    window.addEventListener("beforeunload", save)
    document.addEventListener("visibilitychange", onVis)

    // Also save on scroll throttled
    let t: number | null = null
    const onScroll = () => {
      if (t !== null) return
      t = window.setTimeout(() => { save(); t = null }, 250)
    }
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      save()
      window.removeEventListener("beforeunload", save)
      document.removeEventListener("visibilitychange", onVis)
      window.removeEventListener("scroll", onScroll)
    }
  }, [pathname])
}

