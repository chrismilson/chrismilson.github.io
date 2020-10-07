import PVector from '../common/PVector'
import { randomInt, randomRange } from '../common/random'

export default class WebPoint {
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

    for (const neighbor of this.neighbors) {
      const strength = Math.min(
        1,
        Math.max(
          0,
          1 -
            this.pos.subtract(neighbor.pos).modulus() /
              (4 * this.phasor.modulus())
        )
      )
      ctx.strokeStyle = `hsla(${this.hue},60%,80%,${strength})`
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
    ctx.fillStyle = `hsl(${this.hue},70%,80%)`

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
