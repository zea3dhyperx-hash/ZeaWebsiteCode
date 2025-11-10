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

export default function AniEdu({
  src = "https://lottie.host/4ec54254-bf9e-49b3-9207-f67bca0a8e19/kWfntkmnZv.lottie",
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