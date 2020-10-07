import React from 'react'
import { CanvasWallpaper, CanvasDrawingMethod } from '../common/Wallpaper'
import { randomInt } from '../common/random'
import layer from './layer'

const draw: CanvasDrawingMethod = (ctx, { width, height }) => {
  const radius = Math.max(20, Math.min(width / 2, height / 2) - 20)

  ctx.translate(width / 2, height / 2)

  let hue = randomInt(0, 360)
  let angle = 0

  let frame: number
  const drawFrame = () => {
    frame = requestAnimationFrame(drawFrame)
    ctx.clearRect(-width / 2, -height / 2, width, height)
    const primaryStyle = `hsl(${hue},100%,40%)`
    const secondaryStyle = `hsl(${hue + 180}, 100%,40%)`
    layer(ctx, radius, angle, primaryStyle, secondaryStyle)
    ctx.save()
    ctx.fillStyle = 'rgba(255,255,255,0.5)'
    ctx.fillRect(-width / 2, -height / 2, width, height)
    ctx.restore()
    hue = (hue + 0.2) % 360
    angle = angle + 0.005
  }

  drawFrame()

  return () => cancelAnimationFrame(frame)
}

const YinYang: React.FC = () => {
  return <CanvasWallpaper className="Perspectives" draw={draw} />
}

export default YinYang
