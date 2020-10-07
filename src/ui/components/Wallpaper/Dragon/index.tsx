import React from 'react'
import { CanvasWallpaper, CanvasDrawingMethod } from '../common/Wallpaper'
import { randomInt } from '../common/random'
import Dragon from './Dragon'
import Slider from './Slider'

const draw: CanvasDrawingMethod = (ctx, { width, height }) => {
  let portrait = false
  if (width < height) {
    const temp = width
    width = height
    height = temp
    ctx.setTransform(0, 1, 1, 0, 0, 0)
    portrait = true
  }

  const dragon = new Dragon(0, 0, 0, height / 2)
  let reverse = false

  const depth = new Slider(2, 0.01, 2, 9, isTop => {
    if (isTop) return
    reverse = !reverse
  })

  let hue = randomInt(0, 360)
  const translate = width / 5
  ctx.globalAlpha = 0.5

  let frame: number
  const drawFrame = () => {
    frame = requestAnimationFrame(drawFrame)
    ctx.clearRect(0, 0, width, height)
    ctx.beginPath()

    ctx.save()
    if (reverse) ctx.transform(0.8, 0, 0, -0.8, width / 10, (7 * height) / 10)
    else ctx.transform(0.8, 0, 0, 0.8, width / 10, (3 * height) / 10)

    ctx.save()
    ctx.translate(translate, 0)
    ctx.scale(-1, 1)
    dragon.trace(ctx, depth.value)
    ctx.save()
    ctx.translate(0, height / 2)
    ctx.scale(-1, -1)
    dragon.trace(ctx, depth.value)
    ctx.restore()
    ctx.restore()

    ctx.save()
    ctx.translate(width - translate, 0)
    if (portrait) ctx.scale(-1, 1)
    dragon.trace(ctx, depth.value)
    ctx.save()
    ctx.translate(0, height / 2)
    ctx.scale(-1, -1)
    dragon.trace(ctx, depth.value)
    ctx.restore()
    ctx.restore()

    ctx.restore()
    ctx.strokeStyle = `hsl(${hue},100%,40%)`
    hue = (hue + 1) % 360
    ctx.stroke()

    depth.next()
  }

  drawFrame()
  return () => cancelAnimationFrame(frame)
}

const DragonCurve: React.FC = () => {
  return <CanvasWallpaper className="Dragon" draw={draw} />
}

export default DragonCurve
