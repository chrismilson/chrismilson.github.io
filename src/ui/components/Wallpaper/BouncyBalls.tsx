import React from 'react'
import { CanvasWallpaper } from './Wallpaper'

/**
 * Returns a random integer in a given range, or if only one value is supplied,
 * between zero and that value.
 */
const randomInt = (from: number, to: number = from) => {
  if (from === to) from = 0
  return from + Math.floor(Math.random() * (to - from))
}

const randomRange = (from: number, to: number) => {
  return from + Math.random() * (to - from)
}

class PVector {
  readonly x: number
  readonly y: number

  constructor(x: number, y: number = x) {
    this.x = x
    this.y = y
  }

  static componentWise(
    action: (...components: number[]) => number,
    ...vectors: PVector[]
  ) {
    return new PVector(
      action(...vectors.map(v => v.x)),
      action(...vectors.map(v => v.y))
    )
  }
  componentWise(
    action: (...components: number[]) => number,
    ...extraVectors: PVector[]
  ) {
    return PVector.componentWise(action, this, ...extraVectors)
  }

  static add(...vectors: PVector[]) {
    return PVector.componentWise(
      (...components) => components.reduce((s, v) => s + v, 0),
      ...vectors
    )
  }
  add(...vectors: PVector[]) {
    return PVector.add(this, ...vectors)
  }

  static subtract(from: PVector, ...vectors: PVector[]) {
    return PVector.componentWise(
      (from, sum) => from - sum,
      from,
      PVector.add(...vectors)
    )
  }
  subtract(...vectors: PVector[]) {
    return PVector.subtract(this, ...vectors)
  }

  static multiply(...vectors: PVector[]) {
    return PVector.componentWise(
      (...components) => components.reduce((p, v) => p * v, 1),
      ...vectors
    )
  }
  multiply(...vectors: PVector[]) {
    return PVector.multiply(this, ...vectors)
  }

  static divide(dividend: PVector, ...divisors: PVector[]) {
    return PVector.componentWise(
      (dividend, divisor) => dividend / divisor,
      dividend,
      PVector.multiply(...divisors)
    )
  }
  divide(...divisors: PVector[]) {
    return PVector.divide(this, ...divisors)
  }
}

class Ball {
  /** The displacement of the ball */
  private s: PVector
  /** The velocity of the ball */
  private v: PVector
  /** The bottom left corner of the ball's bounding box */
  private min: PVector
  /** The top right corner of the ball's bounding box */
  private max: PVector
  /** The radius of the ball */
  private radius: number
  /** The hue of the ball */
  private hue: number

  constructor(
    min: PVector,
    max: PVector,
    radius = Math.min(max.x - min.x, max.y - min.y, 20 + Math.random() * 20)
  ) {
    this.s = new PVector(
      randomRange(min.x + radius, max.x - radius),
      randomRange(min.y + radius, max.y - radius)
    )
    this.v = new PVector(2 + Math.random() * 6, 2 + Math.random() * 6).multiply(
      new PVector(randomInt(2) || -1, randomInt(2) || -1)
    )
    this.radius = radius
    this.min = min
    this.max = max.add(min.multiply(new PVector(-1)))
    this.hue = randomInt(256)
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()

    ctx.beginPath()
    ctx.arc(
      this.min.x + this.s.x,
      this.min.y + this.s.y,
      this.radius,
      0,
      2 * Math.PI
    )
    ctx.closePath()

    ctx.fillStyle = `hsla(${this.hue}, 100%, 40%, 0.6)`
    ctx.fill()

    ctx.restore()
  }

  move() {
    const hit = PVector.componentWise(
      (s, v, max) =>
        Math.abs(Math.floor((s + v - this.radius) / (max - 2 * this.radius))),
      this.s,
      this.v,
      this.max
    )

    this.s = this.s
      // apply velocity
      .add(this.v)

    this.v = this.v
      // bounce off walls
      .multiply(new PVector(1).subtract(hit.multiply(new PVector(2))))
      // lose momentum on any wall hit
      // .multiply(new PVector(1 - 0.1 * (hit.x + hit.y)))
      // add gravity
      .add(new PVector(0, 0.25 * (1 - hit.y)))
  }
}

const BouncyBalls: React.FC = () => (
  <CanvasWallpaper
    className="BouncyBalls"
    draw={(ctx, width, height) => {
      const numBalls = (width * height) / 100000
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
    }}
  />
)

export default BouncyBalls
