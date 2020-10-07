import PVector from '../common/PVector'

export default class Scale {
  start: PVector
  end: PVector

  next?: Scale

  constructor(start: PVector, end: PVector) {
    this.start = start
    this.end = end
  }

  private mid(o: number) {
    // cubic bezier
    const t = (3 * (1 - o) + o) * o * o
    const theta = (t * Math.PI) / 4

    const cos = Math.cos(theta)
    const sin = Math.sin(theta)
    const sf = 1 / (2 * cos)

    return this.start.add(
      this.end
        .subtract(this.start)
        .transform(cos, -sin, sin, cos)
        .scale(sf)
    )
  }

  split() {
    const temp = this.next
    this.next = new Scale(this.end, this.mid(1))
    this.end = this.mid(1)
    this.next.next = temp
  }

  join() {
    if (this.next) {
      this.end = this.next.start
      this.next = this.next.next
    }
  }

  trace(ctx: CanvasRenderingContext2D, t = 0) {
    const { start, end } = this
    const mid = this.mid(t)
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(mid.x, mid.y)
    ctx.lineTo(end.x, end.y)
  }
}
