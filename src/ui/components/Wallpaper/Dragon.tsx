import React from 'react'
import { CanvasWallpaper, CanvasDrawingMethod } from './common/Wallpaper'
import PVector from './common/PVector'
import { randomInt } from './common/random'

class Slider {
  value: number
  change: number
  min: number
  max: number
  onChange?: (isTop: boolean) => void

  constructor(
    value: number,
    change: number,
    min: number,
    max: number,
    onChange?: (isTop: boolean) => void
  ) {
    this.value = value
    this.change = change
    this.min = min
    this.max = max
    this.onChange = onChange
  }

  next() {
    const isTop = this.value + this.change > this.max
    const isBottom = this.value + this.change < this.min
    if (isTop || isBottom) {
      if (this.onChange) this.onChange(isTop)
      this.change *= -1
    }
    this.value += this.change
  }
}

class Scale {
  start: PVector
  end: PVector

  next?: Scale

  constructor(start: PVector, end: PVector) {
    this.start = start
    this.end = end
  }

  private mid(o: number) {
    // cubic bezier
    const t = (3 * (1 - o) + o) * o * o
    const theta = (t * Math.PI) / 4

    const cos = Math.cos(theta)
    const sin = Math.sin(theta)
    const sf = 1 / (2 * cos)

    return this.start.add(
      this.end
        .subtract(this.start)
        .transform(cos, -sin, sin, cos)
        .scale(sf)
    )
  }

  split() {
    const temp = this.next
    this.next = new Scale(this.end, this.mid(1))
    this.end = this.mid(1)
    this.next.next = temp
  }

  join() {
    if (this.next) {
      this.end = this.next.start
      this.next = this.next.next
    }
  }

  trace(ctx: CanvasRenderingContext2D, t = 0) {
    const { start, end } = this
    const mid = this.mid(t)
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(mid.x, mid.y)
    ctx.lineTo(end.x, end.y)
  }
}

class Dragon {
  head: Scale
  depth = 0

  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.head = new Scale(new PVector(x1, y1), new PVector(x2, y2))
  }

  deeper() {
    this.depth += 1
    let current: Scale | undefined = this.head
    while (current) {
      current.split()
      current = current.next?.next
    }
  }

  shallower() {
    this.depth -= 1
    let current: Scale | undefined = this.head
    while (current) {
      current.join()
      current = current.next
    }
  }

  trace(ctx: CanvasRenderingContext2D, depth: number) {
    let diff = Math.floor(depth - this.depth)
    while (diff-- > 0) this.deeper()
    while (diff++ < 0) this.shallower()

    const offset = depth - Math.floor(depth)

    let current: Scale | undefined = this.head
    while (current) {
      current.trace(ctx, offset)
      current = current.next
    }
  }
}

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
