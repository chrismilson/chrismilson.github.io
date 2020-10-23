import {
  DrawingMethodProps,
  exposeOffscreenDrawingMethod,
  OffscreenDrawingMethod
} from 'react-hooks-use-offscreen-drawing-canvas'
import PVector from '../common/PVector'
import poissantDiscSampler from '../common/poissantDiscSampler'
import WebPoint from './WebPoint'
import { DrawingMethod } from 'react-hooks-use-drawing-canvas'

export type HybridDrawingMethod = DrawingMethod & OffscreenDrawingMethod

const draw = (
  ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
  options: DrawingMethodProps
): void | (() => void) => {
  const { width, height } = options
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

// we are in a web worker.
exposeOffscreenDrawingMethod(draw)
