import React from 'react'
import useDrawingCanvas, { DrawingMethod } from 'react-hooks-use-drawing-canvas'
import './Wallpaper.css'

export type CanvasDrawingMethod = DrawingMethod

export const CanvasWallpaper: React.FC<{
  /** extra classes for css */
  className: string
  draw: CanvasDrawingMethod
}> = props => {
  const { draw, className } = props
  const canvasRef = useDrawingCanvas(draw)
  return <canvas className={`Wallpaper Canvas ${className}`} ref={canvasRef} />
}
