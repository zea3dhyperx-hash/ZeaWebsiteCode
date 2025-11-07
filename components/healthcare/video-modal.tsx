"use client"

import { useEffect } from "react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 rounded-2xl w-full max-w-4xl aspect-video flex items-center justify-center relative border border-amber-400/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-amber-400 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video player placeholder */}
        <div className="w-full h-full flex flex-col items-center justify-center">
          <svg className="w-24 h-24 text-amber-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
          </svg>
          <p className="text-slate-300 text-lg">Your Video Demo Here</p>
          <p className="text-slate-500 text-sm mt-2">Replace with your video URL</p>
        </div>
      </div>
    </div>
  )
}
