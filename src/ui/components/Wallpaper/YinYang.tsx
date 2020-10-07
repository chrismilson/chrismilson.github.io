import React from 'react'
import { CanvasWallpaper, CanvasDrawingMethod } from './common/Wallpaper'
import { randomInt } from './common/random'

// by changing these factors that pattern will evolve differently
const leftFactor = 1
const rightFactor = 1

const layer = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  angle: number,
  primaryStyle: string | CanvasGradient | CanvasPattern,
  secondaryStyle: string | CanvasGradient | CanvasPattern
) => {
  // draw semicircles and go deeper
  ctx.save()
  ctx.rotate(angle)

  // primary colour
  ctx.beginPath()
  ctx.arc(0, 0, radius, 0, Math.PI)
  ctx.closePath()
  ctx.fillStyle = primaryStyle
  ctx.fill()

  // secondary color
  ctx.beginPath()
  ctx.arc(0, 0, radius, 0, Math.PI, true)
  ctx.closePath()
  ctx.fillStyle = secondaryStyle
  ctx.fill()

  if (radius < 30) {
    const half = radius / 2
    // bigger circles
    ctx.beginPath()
    ctx.arc(-half, 0, half, 0, 2 * Math.PI)
    ctx.closePath()

    ctx.fillStyle = primaryStyle
    ctx.fill()

    ctx.beginPath()
    ctx.arc(half, 0, half, 0, 2 * Math.PI)
    ctx.closePath()

    ctx.fillStyle = secondaryStyle
    ctx.fill()

    // small circles
    ctx.beginPath()
    ctx.arc(-half, 0, half / 2, 0, 2 * Math.PI)
    ctx.closePath()

    ctx.fillStyle = secondaryStyle
    ctx.fill()

    ctx.beginPath()
    ctx.arc(half, 0, half / 2, 0, 2 * Math.PI)
    ctx.closePath()

    ctx.fillStyle = primaryStyle
    ctx.fill()
  } else {
    ctx.translate(-radius / 2, 0)
    layer(ctx, radius / 2, leftFactor * angle, primaryStyle, secondaryStyle)

    ctx.translate(radius, 0)
    layer(ctx, radius / 2, rightFactor * angle, primaryStyle, secondaryStyle)
  }

  ctx.restore()
}

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
