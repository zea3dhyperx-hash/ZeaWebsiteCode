"use client"

interface BlogHeaderProps {
  tag: string
  title: string
  author: string
  date: string
  time: string
}

export function BlogHeader({ tag, title, author, date, time }: BlogHeaderProps) {
  return (
    <header className="mb-8 space-y-4">
      {/* Tag */}
      <div className="inline-flex">
        <span className="rounded-full bg-primary/20 px-4 py-1 text-sm font-semibold text-primary">{tag}</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">{title}</h1>

      {/* Author, Date, and Time */}
      <div className="flex flex-wrap items-center gap-4 pt-4 text-muted-foreground">
        <div className="flex items-center gap-2">
          
          <div>
            <p className="text-sm font-semibold text-foreground">{author}</p>
          </div>
        </div>

        <div className="hidden h-5 w-px bg-border md:block" />

        <div className="flex flex-col gap-1 text-sm">
          <p className="text-muted-foreground">{date}</p>
        </div>

        <div className="hidden h-5 w-px bg-border md:block" />

        <div className="flex flex-col gap-1 text-sm">
          <p className="text-muted-foreground">{time}</p>
        </div>

      </div>

      {/* Divider */}
      <div className="pt-4">
        <div className="h-px bg-border" />
      </div>
    </header>
  )
}
