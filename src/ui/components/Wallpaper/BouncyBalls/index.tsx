import React from 'react'
import { CanvasWallpaper, CanvasDrawingMethod } from '../common/Wallpaper'
import PVector from '../common/PVector'
import Ball from './Ball'

const draw: CanvasDrawingMethod = (ctx, { width, height }) => {
  const numBalls = (width * height) / 50000
  const balls: Ball[] = []
  for (let i = 0; i < numBalls; i++) {
    balls.push(new Ball(new PVector(0, 0), new PVector(width, height)))
  }
  let frame: number

  const drawFrame = () => {
    frame = requestAnimationFrame(drawFrame)
    ctx.clearRect(0, 0, width, height)

    balls.forEach(ball => {
      ball.draw(ctx)
      ball.move()
    })
  }

  drawFrame()
  return () => {
    cancelAnimationFrame(frame)
  }
}

const BouncyBalls: React.FC = () => (
  <CanvasWallpaper className="BouncyBalls" draw={draw} />
)

export default BouncyBalls
