import React from 'react'
import PVector from '../common/PVector'
import { CanvasWallpaper, CanvasDrawingMethod } from '../common/Wallpaper'
import poissantDiscSampler from '../common/poissantDiscSampler'
import WebPoint from './WebPoint'

const draw: CanvasDrawingMethod = (ctx, { width, height }) => {
  const samples = poissantDiscSampler(
    width,
    height,
    50,
    new PVector(width / 2, height / 2)
  )
  const points = samples.map(([point]) => new WebPoint(point, 15))

  samples.forEach((sample, i) => {
    for (const j of sample[1]) {
      points[i].addNeighbor(points[j])
    }
  })

  let frame: number

  const drawFrame = () => {
    frame = requestAnimationFrame(drawFrame)
    ctx.clearRect(0, 0, width, height)
    points.forEach(p => {
      p.spin()
      p.joinNeighbors(ctx)
    })
    // we dont want the joining lines to cover the points
    points.forEach(p => {
      p.paint(ctx)
    })
  }

  drawFrame()

  return () => cancelAnimationFrame(frame)
}

const StarMap: React.FC = () => {
  return <CanvasWallpaper className="StarMap" draw={draw} />
}

export default StarMap
