import React from 'react'
import { CanvasWallpaper, CanvasDrawingMethod } from './common/Wallpaper'
import PVector from './common/PVector'
import { randomInt, randomRange } from './common/random'

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
    this.v = new PVector(1 + Math.random() * 3, 1 + Math.random() * 3).multiply(
      new PVector(randomInt(2) || -1, randomInt(2) || -1)
    )
    this.radius = radius
    this.min = min
    this.max = max.add(min.multiply(new PVector(-1)))
    this.hue = randomInt(360)
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
    if (hit.x | hit.y) this.hue = randomInt(360)

    this.s = this.s
      // apply velocity
      .add(this.v)

    this.v = this.v
      // bounce off walls
      .multiply(new PVector(1).subtract(hit.multiply(new PVector(2))))
      // lose momentum on any wall hit
      // .multiply(new PVector(1 - 0.1 * (hit.x + hit.y)))
      // add gravity
      .add(new PVector(0, 0.1 * (1 - hit.y)))
  }
}

const draw: CanvasDrawingMethod = (ctx, width, height) => {
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
