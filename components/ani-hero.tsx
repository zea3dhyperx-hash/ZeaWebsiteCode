// import React from 'react';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// const App = () => {
//   return (
//     <DotLottieReact
//       src="https://lottie.host/0f06fda3-9fb5-434b-bc53-1a421f89f269/7Vk3taRuSO.lottie"
//       loop
//       autoplay
//     />
//   );
// };


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

export default function AniRobot({
  src = "https://lottie.host/3bbbb6e9-0d0d-411b-b401-e3f9aac5d3b2/4sr0UecHjh.lottie",
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
