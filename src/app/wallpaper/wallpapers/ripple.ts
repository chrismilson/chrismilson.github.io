class Center {
  private color = {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256)
  };
  private age = Math.floor(Math.random() * -200);
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
      Math.sqrt(this.age) * 10, Math.sqrt(this.age) * 10,
      0, 0, Math.PI * 2
    );

    ctx.strokeStyle = `rgba(
      ${this.color.r},
      ${this.color.g},
      ${this.color.b},
      ${1 - (this.age / 200)}
    )`;

    ctx.stroke();

    return this.age++ > 200;
  }
}

export default class Ripple {
  centers: any;

  constructor(ctx) {
    this.centers = new Array(4);

    for (let i = 0; i < this.centers.length; i++) {
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
