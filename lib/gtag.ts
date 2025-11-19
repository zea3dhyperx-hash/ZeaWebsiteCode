export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") return
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

type GtagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

export const event = ({ action, category, label, value }: GtagEvent) => {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") return
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  })
}

