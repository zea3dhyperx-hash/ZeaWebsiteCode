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

export default function Anim1({
  src = "https://lottie.host/c016b551-864c-4f1d-9a95-bf03e619c9a4/2wTzWfn8mc.lottie",
  loop = true,
  autoplay = true,
  width = "100%",
  height = "100%",
  
  
  className,
  style,
}: AniHeroProps) {
  return (
    <div className={className} style={{ width, height, ...style }}>
      <DotLottieReact src={src} loop={loop} autoplay={autoplay} style={{ width: '100%', height: '100%', scale: '1.2',}} />
    </div>
  )
}