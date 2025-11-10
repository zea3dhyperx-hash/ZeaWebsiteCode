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

export default function AniRetail({
  src = "https://lottie.host/16c3c2b9-dffe-49e7-b998-24859af2ef90/nS998eB7aq.lottie",
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