"use client"

import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export interface AniHeroProps {
  src?: string
  loop?: boolean
  autoplay?: boolean
  width?: number | string
  height?: number | string
  className?: string
  style?: React.CSSProperties
}

export default function AniAuto({
  src = "https://lottie.host/6e011b0e-eb00-4d8a-b5df-34b54643f056/YkCwa7rVlM.lottie",
  loop = true,
  autoplay = true,
  width = "100%",
  height = "100%",
  
  className,
  style,
}: AniHeroProps) {
  return (
    <div className={className} style={{ width, height, ...style }}>
      <DotLottieReact src={src} loop={loop} autoplay={autoplay} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}