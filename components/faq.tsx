"use client"

import React from 'react'

export type FAQItem = {
  q: string
  a: string
}

export interface FAQProps {
  title?: string
  items: FAQItem[]
  className?: string
}

export default function FAQ({ title = 'Frequently Asked Questions', items, className }: FAQProps) {
  const [open, setOpen] = React.useState<number | null>(null)

  return (
    <section className={className ?? 'mt-12 border-t border-border pt-8'}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="rounded-md border border-border border-primary/75">
            <button
              className="w-full text-left px-4 py-3 flex justify-between items-center"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="font-medium">{item.q}</span>
              <span className="text-muted-foreground">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && (
              <div className="px-4 pb-4 text-sm text-muted-foreground">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

