"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { pageview } from "@/lib/gtag"

export function GAAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname) return
    const url = searchParams ? `${pathname}?${searchParams.toString()}` : pathname
    pageview(url)
  }, [pathname, searchParams])

  return null
}

