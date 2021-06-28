import React from 'react'
import useDrawingCanvas, { DrawingMethod } from 'react-hooks-use-drawing-canvas'
import './Wallpaper.css'

export type CanvasDrawingMethod = DrawingMethod

export const CanvasWallpaper: React.FC<{
  /** extra classes for css */
  className: string
  draw: CanvasDrawingMethod
  /** Render the canvas pixelated; without interpolation. Default: false */
  pixelated?: boolean
}> = props => {
  const { draw, className, pixelated = false } = props
  const canvasRef = useDrawingCanvas(draw)
  const classNames = ['Wallpaper', 'Canvas']

  if (className !== undefined) {
    classNames.push(className)
  }
  if (pixelated) {
    classNames.push('pixelated')
  }

  return <canvas className={classNames.join(' ')} ref={canvasRef} />
}
