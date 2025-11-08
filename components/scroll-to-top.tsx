"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function ScrollToTop() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      try {
        const key = `scroll-pos:${location.pathname}`
        const saved = sessionStorage.getItem(key)
        if (saved) return // skip auto scroll-to-top when we have a saved position
      } catch {}
      window.scrollTo(0, 0)
    }

    // Scroll to top on initial load
    try {
      const key = `scroll-pos:${location.pathname}`
      const saved = sessionStorage.getItem(key)
      if (!saved) window.scrollTo(0, 0)
    } catch {
      window.scrollTo(0, 0)
    }

    // Listen for route changes
    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  // Also handle client-side navigation by watching pathname
  useEffect(() => {
    try {
      const key = `scroll-pos:${location.pathname}`
      const saved = sessionStorage.getItem(key)
      if (!saved) window.scrollTo(0, 0)
    } catch {
      window.scrollTo(0, 0)
    }
  }, [router])

  return null
}
