import React from 'react'
import { CanvasWallpaper } from './common/Wallpaper'
import PVector from './common/PVector'
import { randomInt, randomRange } from './common/random'

/** A class representing a circle on the screen. */
class Circle {
  static maxAge = 200
  private position = new PVector(Math.random(), Math.random())
  private hue = randomInt(360)
  /**
   * The age of the circle. A negative number represents an
   * unborn circle
   */
  private age = -randomInt(2 * Circle.maxAge)
  private size = randomRange(0.5, 1.5)

  private resetIfNeeded() {
    if (this.age > Circle.maxAge) {
      this.position = new PVector(Math.random(), Math.random())
      this.hue = randomInt(360)
      this.age = -randomInt(Circle.maxAge)
      this.size = randomRange(0.5, 1.5)
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.age >= 0) {
      const path = new Path2D()
      path.arc(
        ctx.canvas.width * this.position.x,
        ctx.canvas.height * this.position.y,
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
