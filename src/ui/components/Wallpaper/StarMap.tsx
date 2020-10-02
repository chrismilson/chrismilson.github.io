import React from 'react'
import PVector from './common/PVector'
import { randomInt, randomRange } from './common/random'
import { CanvasWallpaper, CanvasDrawingMethod } from './common/Wallpaper'

/**
 * This method will produce a sampling of points in 2d space such that the
 * distance between any two points is at least r.
 *
 * @param width The width of the sample area.
 * @param height The height of the sample area.
 * @param r The minimum distance between samples.
 * @param K How many candidate points to try before deciding the point is
 * surrounded.
 */
const poissantDiscSampler = (
  width: number,
  height: number,
  r: number,
  startNode = new PVector(randomRange(0, width), randomRange(0, height)),
  K = 10
): [PVector, number[]][] => {
  const points: PVector[] = [startNode]
  // Indices of the entries in points that are not processed yet
  const unprocessed: number[] = [0]
  // If we divide the space up into squares of this size, no two points can be
  // in the same square.
  const cellSize = r * Math.SQRT1_2
  /**
   * A 2d array that contains the indices of the sampled points.
   * We will use it to check for other points within a certain area.
   */
  const grid: number[][] = [...Array(Math.ceil(width / cellSize))].map(() =>
    Array(Math.ceil(height / cellSize)).fill(-1)
  )
  // We should add the starting node to the grid
  grid[Math.floor(startNode.x / cellSize)][
    Math.floor(startNode.y / cellSize)
  ] = 0

  /**
   * Produces a new PVector that is in the goldilocks zone around v.
   *
   * @param v The center of the annulus to sample from.
   */
  const generateAround = (v: PVector) => {
    const radius = randomRange(r, r * 2)
    const angle = randomRange(0, Math.PI * 2)

    return v.add(new PVector(0, 1).rotate(angle).scale(radius))
  }

  while (unprocessed.length > 0) {
    const p = randomInt(unprocessed.length)
    const parent = points[unprocessed[p]]

    // we now want to attempt to add a new point near parent.
    let success = false
    for (let attempt = 0; !success && attempt < K; attempt++) {
      const candidate = generateAround(parent)
      if (
        candidate.x < 0 ||
        candidate.x > width ||
        candidate.y < 0 ||
        candidate.y > height
      ) {
        continue
      }

      // We now need to check the 9 grid cells around the cell that other would
      // go into to check if there are any other nodes already here.
      const i = Math.floor(candidate.x / cellSize)
      const j = Math.floor(candidate.y / cellSize)
      // innocent until provn guilty
      let isGoodCandidate = true
      for (let di = -2; isGoodCandidate && di <= 2; di++) {
        for (let dj = -2; isGoodCandidate && dj <= 2; dj++) {
          if (
            i + di < 0 ||
            i + di >= grid.length ||
            j + dj < 0 ||
            j + dj >= grid[0].length
          ) {
            continue
          }
          const neighbor = grid[i + di][j + dj]
          if (
            // If there is another node relatively close; and,
            neighbor >= 0 &&
            // the distance is less than our minimum distance,
            candidate.subtract(points[neighbor]).modulus() < r
          ) {
            // this candidate is not a good one.
            isGoodCandidate = false
          }
        }
      }
      if (isGoodCandidate) {
        // the candidate will be the next value in points, so its index will be
        // the current length of points.
        success = true
        grid[i][j] = points.length
        unprocessed.push(points.length)
        points.push(candidate)
      }
    }
    if (!success) {
      // we want to swap the last unprocessed element with our parent element
      unprocessed[p] = unprocessed[unprocessed.length - 1]
      // and then remove the last element (which is now definitely our parent)
      unprocessed.pop()
    }
  }

  // return points
  // now we have finished generating the points, now we want to return the
  // points with a list of their possible neighbors
  return points.map(p => {
    const neighbors = []
    const i = Math.floor(p.x / cellSize)
    const j = Math.floor(p.y / cellSize)

    for (let di = -2; di <= 2; di++) {
      for (let dj = -2; dj <= 2; dj++) {
        if (
          di + dj < 0 ||
          (di === 0 && dj === 0) ||
          i + di < 0 ||
          i + di >= grid.length ||
          j + dj < 0 ||
          j + dj >= grid[0].length
        ) {
          continue
        }
        const neighbor = grid[i + di][j + dj]
        if (neighbor >= 0 && p.subtract(points[neighbor]).modulus() < r * 2) {
          neighbors.push(neighbor)
        }
      }
    }
    return [p, neighbors]
  })
}

class WebPoint {
  origin: PVector
  phasor: PVector
  phasorSpeed: number
  pos: PVector
  neighbors: WebPoint[]
  hue: number

  constructor(origin: PVector, phasorLength: number) {
    this.neighbors = []
    this.origin = origin
    this.phasor = new PVector(0, phasorLength).rotate(
      randomRange(0, 2 * Math.PI)
    )
    this.phasorSpeed = randomRange(-0.02, 0.02)

    this.pos = this.origin.add(this.phasor)

    this.hue = randomInt(360)
  }

  joinNeighbors(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.strokeStyle = `hsl(${this.hue},60%,80%)`

    for (const neighbor of this.neighbors) {
      ctx.beginPath()
      ctx.moveTo(this.pos.x, this.pos.y)
      ctx.lineTo(neighbor.pos.x, neighbor.pos.y)
      ctx.closePath()
      ctx.stroke()
    }
    ctx.restore()
  }

  paint(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.fillStyle = `hsl(${this.hue},100%,80%)`

    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, 3, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fill()

    ctx.restore()
  }

  spin() {
    this.phasor = this.phasor.rotate(this.phasorSpeed)
    this.pos = this.origin.add(this.phasor)
  }

  addNeighbor(neighbor: WebPoint) {
    this.neighbors.push(neighbor)
  }
}

const draw: CanvasDrawingMethod = (ctx, width, height) => {
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
