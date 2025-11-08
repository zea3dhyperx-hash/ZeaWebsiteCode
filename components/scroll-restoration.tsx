"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function ScrollRestoration() {
  const pathname = usePathname() || "/"
  const restoring = useRef(false)

  const keyFor = (p: string) => `scroll-pos:${p}`

  const readPos = (p: string) => {
    try {
      const saved = sessionStorage.getItem(keyFor(p))
      const y = saved ? parseInt(saved, 10) : 0
      return Number.isNaN(y) ? 0 : y
    } catch {
      return 0
    }
  }

  const savePos = (p: string, y: number) => {
    try {
      sessionStorage.setItem(keyFor(p), String(y))
    } catch {}
  }

  const doRestore = (p: string) => {
    const y = readPos(p)
    if (y <= 0) return
    restoring.current = true
    // rAF -> setTimeout(0) -> rAF to beat Next resets and layout shifts
    requestAnimationFrame(() => {
      setTimeout(() => {
        requestAnimationFrame(() => {
          window.scrollTo(0, y)
          requestAnimationFrame(() => {
            restoring.current = false
          })
        })
      }, 0)
    })
  }

  useEffect(() => {
    if (typeof window === "undefined") return

    // Initial restore after hydration
    doRestore(pathname)

    // Backup restore after resources load
    const onLoad = () => doRestore(pathname)
    window.addEventListener("load", onLoad)

    // Save on scroll (debounced)
    let t: number | undefined
    const onScroll = () => {
      if (restoring.current) return
      if (t) clearTimeout(t)
      t = window.setTimeout(() => savePos(pathname, window.scrollY), 80)
    }
    window.addEventListener("scroll", onScroll, { passive: true })

    // Save on hide/unload
    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        savePos(pathname, window.scrollY)
      }
    }
    const onPageHide = () => savePos(pathname, window.scrollY)
    window.addEventListener("visibilitychange", onVisibility)
    window.addEventListener("pagehide", onPageHide)

    // Restore when coming back from bfcache
    const onPageShow = (e: PageTransitionEvent) => {
      // @ts-ignore
      if (e.persisted) doRestore(pathname)
    }
    window.addEventListener("pageshow", onPageShow)

    return () => {
      if (t) clearTimeout(t)
      window.removeEventListener("load", onLoad)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("visibilitychange", onVisibility)
      window.removeEventListener("pagehide", onPageHide)
      window.removeEventListener("pageshow", onPageShow)
    }
  }, [])

  // Restore on route changes with a backup pass
  useEffect(() => {
    if (typeof window === "undefined") return
    doRestore(pathname)
    const id = window.setTimeout(() => doRestore(pathname), 250)
    return () => clearTimeout(id)
  }, [pathname])

  return null
}
