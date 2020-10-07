import React from 'react'
import { CanvasWallpaper, CanvasDrawingMethod } from '../common/Wallpaper'
import Circle from './Circle'

const draw: CanvasDrawingMethod = (ctx, width, height) => {
  const circles: Circle[] = []
  for (let i = 0; i < (width * height) / 100000; i++) {
    circles.push(new Circle())
  }

  let frame: number

  const drawFrame = () => {
    frame = requestAnimationFrame(drawFrame)
    ctx.clearRect(0, 0, width, height)
    circles.forEach(c => c.draw(ctx))
  }

  drawFrame()
  return () => cancelAnimationFrame(frame)
}

/**
 * A wallpaper component that draws nice circles to the screen.
 */
const Circles: React.FC = () => {
  return <CanvasWallpaper className="Circles" draw={draw} />
}

export default Circles
