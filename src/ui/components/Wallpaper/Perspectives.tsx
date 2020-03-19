import React from 'react'
import { CanvasWallpaper } from './common/Wallpaper'
import { randomInt } from './common/random'

/** Project a line of a set length from a point */
const project = (
  ctx: CanvasRenderingContext2D,
  from: { x: number; y: number },
  to: { x: number; y: number },
  length: number
) => {
  ctx.save()
  ctx.translate(from.x, from.y)
  ctx.moveTo(0, 0)
  ctx.rotate(-Math.atan2(to.x - from.x, to.y - from.y))
  ctx.lineTo(0, length)
  ctx.restore()
}

const Perspectives: React.FC = () => {
  return (
    <CanvasWallpaper
      className="Perspectives"
      draw={(ctx, width, height) => {
        const centers = [
          {
            x: 0,
            y: height / 4
          },
          {
            x: width,
            y: (3 * height) / 4
          }
        ]

        const speed = 0.3
        const separation = 30
        const length = -width / 7
        const lines = [
          {
            x: (2 * width) / 9,
            offset: 0,
            increment: speed,
            separation,
            length
          },
          {
            x: (7 * width) / 9,
            offset: 0,
            increment: -2 * speed,
            separation,
            length
          }
        ]
        let hue = randomInt(360)

        let frame: number

        ctx.lineWidth = 3
        ctx.lineCap = 'round'

        const drawFrame = () => {
          frame = requestAnimationFrame(drawFrame)
          ctx.clearRect(0, 0, width, height)
          ctx.strokeStyle = `hsla(${hue++}, 100%, 40%, 0.6)`

          ctx.beginPath()
          lines.forEach(({ x, offset, separation, length }) => {
            centers.forEach(center => {
              for (
                let y = offset - separation;
                y < height + separation;
                y += separation
              ) {
                project(ctx, { x, y }, center, length)
              }
            })
          })
          ctx.closePath()
          ctx.stroke()
          lines.forEach(line => {
            line.offset = (line.offset + line.increment) % line.separation
          })
        }

        drawFrame()

        return () => cancelAnimationFrame(frame)
      }}
    />
  )
}

export default Perspectives
