"use client"

import React, { useState } from "react"
import { DemoForm } from "./demo-form"

interface BookDemoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
}

export function BookDemoButton({
  label = "Book a Demo",
  children,
  onClick,
  className,
  ...props
}: BookDemoButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event)
    if (!event.defaultPrevented) {
      setIsOpen(true)
    }
  }

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children ?? label}
      </button>
      <DemoForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
