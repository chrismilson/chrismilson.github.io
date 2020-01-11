export default class Circle {
  constructor (width, height) {
    this.color = Math.floor(Math.random() * 256)
    this.age = -Math.floor(Math.random() * 200)
    this.size = Math.random() + 0.5

    this.x = Math.floor(Math.random() * width)
    this.y = Math.floor(Math.random() * height)
  }

  draw (ctx) {
    if (this.age < 0) {
      this.age++
      return false
    }
    ctx.beginPath()
    // by taking the square root, the area will increase uniformly
    ctx.ellipse(
      this.x, this.y,
      Math.sqrt(this.age) * 10 * this.size,
      Math.sqrt(this.age) * 10 * this.size,
      0, 0, Math.PI * 2
    )

    ctx.strokeStyle = `hsla(
        ${this.color},
        100%,
        40%,
        ${1 - (this.age / 200)}
      )`

    ctx.stroke()

    return this.age++ > 200
  }
}
