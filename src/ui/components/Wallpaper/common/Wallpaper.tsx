import React from 'react'
import useDrawingCanvas, { DrawingMethod } from 'react-hooks-use-drawing-canvas'
import { useOffscreenDrawingCanvas } from 'react-hooks-use-offscreen-drawing-canvas'
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

export const OffscreenCanvasWallpaper: React.FC<{
  /** extra classes for css */
  className: string
  initDrawingModule: () => Promise<typeof import('worker-loader!*')>
  /** Render the canvas pixelated; without interpolation. Default: false */
  pixelated?: boolean
}> = props => {
  const { className, initDrawingModule, pixelated } = props
  const canvasRef = useOffscreenDrawingCanvas(initDrawingModule)
  const classNames = ['Wallpaper', 'Canvas', 'Offscreen']

  if (className !== undefined) {
    classNames.push(className)
  }
  if (pixelated) {
    classNames.push('pixelated')
  }

  return <canvas className={classNames.join(' ')} ref={canvasRef} />
}
