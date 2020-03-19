import React from 'react'
import { CanvasWallpaper } from './Wallpaper'

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
        const leftCenter = {
          x: 0,
          y: height / 4
        }
        const rightCenter = {
          x: width,
          y: (3 * height) / 4
        }

        const leftVertical = (2 * width) / 9
        const rightVertical = (7 * width) / 9

        let leftOffset = 0
        let rightOffset = 0
        const separation = 30

        const len = 150
        const speed = 0.3
        let hue = Math.floor(Math.random() * 256)

        let frame: number

        const drawFrame = () => {
          frame = requestAnimationFrame(drawFrame)
          ctx.clearRect(0, 0, width, height)
          ctx.strokeStyle = `hsla(${hue++}, 100%, 40%, 0.7)`

          ctx.beginPath()
          for (let y = leftOffset; y < height; y += separation) {
            project(ctx, { x: leftVertical, y }, leftCenter, -len)
            project(ctx, { x: leftVertical, y }, rightCenter, -len)
          }
          for (let y = rightOffset; y < height; y += separation) {
            project(ctx, { x: rightVertical, y }, leftCenter, -len)
            project(ctx, { x: rightVertical, y }, rightCenter, -len)
          }
          ctx.stroke()
          leftOffset = (leftOffset + speed) % separation
          rightOffset = (rightOffset + separation - 2 * speed) % separation
        }

        drawFrame()

        return () => cancelAnimationFrame(frame)
      }}
    />
  )
}

export default Perspectives
