import React, { useLayoutEffect } from 'react'
import useCanvas from './hooks/useCanvas'

/**
 * A wallpaper component that draws nice circles to the screen.
 */
const Circles: React.FC = () => {
  const canvasRef = useCanvas(ctx => {
    ctx.fillRect(0, 0, 100, 100)
  })

  return <canvas ref={canvasRef} />
}

export default Circles
