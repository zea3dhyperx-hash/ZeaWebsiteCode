"use client"

import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// const App = () => {
//   return (
//     <DotLottieReact
//       src="https://lottie.host/09a46167-a962-48c7-a789-10148c2e2365/btaCzuM9nx.lottie"
//       loop
//       autoplay
//     />
//   );
// };
export interface AniRobotProps {
  src?: string
  loop?: boolean
  autoplay?: boolean
  width?: number | string
  height?: number | string
  className?: string
  style?: React.CSSProperties
}

export default function AniRobot({
  src = 'https://lottie.host/09a46167-a962-48c7-a789-10148c2e2365/btaCzuM9nx.lottie',
  loop = true,
  autoplay = true,
  width = "50%",
  height = "50%",
  
  className,
  style,
}: AniRobotProps) {
  return (
    <div className={className} style={{ width, height, ...style }}>
      <DotLottieReact src={src} loop={loop} autoplay={autoplay} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}
