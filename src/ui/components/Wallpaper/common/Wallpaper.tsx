import React from 'react'
import useDrawingCanvas from 'react-hooks-use-drawing-canvas'
import './Wallpaper.css'

export type CanvasDrawingMethod = (
  /** A drawing context on the canvas object. */
  context: CanvasRenderingContext2D,
  /** The width of the drawing context. */
  width: number,
  /** The height of the drawing context. */
  height: number
) => void | (() => void)

export const CanvasWallpaper: React.FC<{
  /** extra classes for css */
  className: string
  draw: CanvasDrawingMethod
}> = props => {
  const { draw, className } = props
  const canvasRef = useDrawingCanvas(draw)
  return <canvas className={`Wallpaper Canvas ${className}`} ref={canvasRef} />
}
