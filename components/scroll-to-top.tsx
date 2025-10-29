"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function ScrollToTop() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    // Scroll to top on initial load
    window.scrollTo(0, 0)

    // Listen for route changes
    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  // Also handle client-side navigation by watching pathname
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [router])

  return null
}
