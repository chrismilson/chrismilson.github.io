import React from 'react'
import useCanvas from './hooks/useCanvas'
import './Wallpaper.css'

export const CanvasWallpaper: React.FC<{
  /** extra classes for css */
  className: string
  draw: (
    /** A drawing context on the canvas object. */
    context: CanvasRenderingContext2D,
    /** The width of the drawing context. */
    width: number,
    /** The height of the drawing context. */
    height: number
  ) => void | (() => void)
}> = props => {
  const { draw, className } = props
  const canvasRef = useCanvas(draw)
  return <canvas className={`Wallpaper Canvas ${className}`} ref={canvasRef} />
}
