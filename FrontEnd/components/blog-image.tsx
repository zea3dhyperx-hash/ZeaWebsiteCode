"use client"

interface BlogImageProps {
  src: string
  alt: string
}

export function BlogImage({ src, alt }: BlogImageProps) {
  return (
    <div className="my-12 overflow-hidden rounded-lg bg-card">
      <img src={src || "/placeholder.svg"} alt={alt} className="h-auto w-full object-cover" />
    </div>
  )
}
