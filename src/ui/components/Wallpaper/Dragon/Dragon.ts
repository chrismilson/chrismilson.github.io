import Scale from './Scale'
import PVector from '../common/PVector'

export default class Dragon {
  head: Scale
  depth = 0

  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.head = new Scale(new PVector(x1, y1), new PVector(x2, y2))
  }

  deeper() {
    this.depth += 1
    let current: Scale | undefined = this.head
    while (current) {
      current.split()
      current = current.next?.next
    }
  }

  shallower() {
    this.depth -= 1
    let current: Scale | undefined = this.head
    while (current) {
      current.join()
      current = current.next
    }
  }

  trace(ctx: CanvasRenderingContext2D, depth: number) {
    let diff = Math.floor(depth - this.depth)
    while (diff-- > 0) this.deeper()
    while (diff++ < 0) this.shallower()

    const offset = depth - Math.floor(depth)

    let current: Scale | undefined = this.head
    while (current) {
      current.trace(ctx, offset)
      current = current.next
    }
  }
}
