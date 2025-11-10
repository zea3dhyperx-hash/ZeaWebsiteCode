"use client"

import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export interface AniHealthProps {
  src?: string
  loop?: boolean
  autoplay?: boolean
  width?: number | string
  height?: number | string
  className?: string
  style?: React.CSSProperties
}

export default function AniHealthcare({
  src = "https://lottie.host/eae6df93-0993-4fbc-b80d-cf005a6f75a1/nVGi04eX4n.lottie",
  loop = true,
  autoplay = true,
  width = "100%",
  height = "100%",
  
  className,
  style,
}: AniHealthProps) {
  return (
    <div className={className} style={{ width, height, ...style }}>
      <DotLottieReact src={src} loop={loop} autoplay={autoplay} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}