import React from 'react'
import { CanvasWallpaper } from './Wallpaper'

/**
 * Returns a random integer between two numbers, or if there is only one number,
 * between zero and that number.
 *
 * @param from The lower bound
 * @param to The upper bound
 */
const randomInt = (from: number, to = from) => {
  if (from === to) from = 0
  return from + Math.floor(Math.random() * (to - from))
}

/** A class representing a circle on the screen. */
class Circle {
  static maxAge = 200
  private x = Math.random()
  private y = Math.random()
  private hue = randomInt(256)
  /**
   * The age of the circle. A negative number represents an
   * unborn circle
   */
  private age = -randomInt(2 * Circle.maxAge)
  private size = Math.random() + 0.5

  private resetIfNeeded() {
    if (this.age > Circle.maxAge) {
      this.x = Math.random()
      this.y = Math.random()
      this.hue = randomInt(256)
      this.age = -randomInt(Circle.maxAge)
      this.size = Math.random() + 0.5
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.age >= 0) {
      const path = new Path2D()
      path.arc(
        ctx.canvas.width * this.x,
        ctx.canvas.height * this.y,
        this.age * this.size,
        0,
        2 * Math.PI
      )

      ctx.save()
      ctx.strokeStyle = `hsla(${this.hue}, 100%, 40%, ${1 -
        this.age / Circle.maxAge})`
      ctx.stroke(path)
      ctx.restore()

      this.resetIfNeeded()
    }
    this.age++
  }
}

/**
 * A wallpaper component that draws nice circles to the screen.
 */
const Circles: React.FC = () => {
  return (
    <CanvasWallpaper
      className="Circles"
      draw={(ctx, width, height) => {
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
      }}
    />
  )
}

export default Circles
