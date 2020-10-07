import React from 'react'
import { CanvasWallpaper, CanvasDrawingMethod } from '../common/Wallpaper'
import Game from './Game'

const draw: CanvasDrawingMethod = (
  ctx,
  { width: widthPX, height: heightPX }
) => {
  // transform the canvas
  const ratio = 4
  const width = widthPX / ratio
  const height = heightPX / ratio
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
  ctx.globalAlpha = 0.2

  const game = new Game(width, height)

  const draw = () => {
    ctx.clearRect(0, 0, width, height)

    game.draw(ctx)
    game.move()
  }

  const interval = setInterval(draw, 100)
  return () => {
    clearInterval(interval)
  }
}

const GameOfLife: React.FC = () => (
  <CanvasWallpaper className="GameOfLife" draw={draw} pixelated />
)

export default GameOfLife
