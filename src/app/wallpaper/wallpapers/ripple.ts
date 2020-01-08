class Center {
  private color = Math.floor(Math.random() * 256);
  private age = -Math.floor(Math.random() * 200);
  private size = Math.random() + 0.5;
  private x: number;
  private y: number;

  constructor(width, height) {
    this.x = Math.floor(Math.random() * width);
    this.y = Math.floor(Math.random() * height);
  }

  draw(ctx) {
    if (this.age < 0) {
      this.age++;
      return false;
    }

    ctx.beginPath();
    // by taking the square root, the area will increase uniformly
    ctx.ellipse(
      this.x, this.y,
      Math.sqrt(this.age) * 10 * this.size,
      Math.sqrt(this.age) * 10 * this.size,
      0, 0, Math.PI * 2
    );

    ctx.strokeStyle = `hsla(
      ${this.color},
      100%,
      40%,
      ${1 - (this.age / 200)}
    )`;

    ctx.stroke();

    return this.age++ > 200;
  }
}

export default class Ripple {
  centers: any;

  constructor(ctx) {
    const size = Math.floor(ctx.canvas.width * ctx.canvas.height / 50000);
    this.centers = new Array(size);

    for (let i = 0; i < size; i++) {
      this.centers[i] = new Center(ctx.canvas.width, ctx.canvas.height);
    }
  }

  render(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i < this.centers.length; i++) {
      if (this.centers[i].draw(ctx)) {
        this.centers[i] = new Center(ctx.canvas.width, ctx.canvas.height);
      }
    }

  }
}
