// by changing these factors, the pattern will evolve differently
const leftFactor = 1
const rightFactor = 1

const layer = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  angle: number,
  primaryStyle: string | CanvasGradient | CanvasPattern,
  secondaryStyle: string | CanvasGradient | CanvasPattern
): void => {
  // draw semicircles and go deeper
  ctx.save()
  ctx.rotate(angle)

  // primary colour
  ctx.beginPath()
  ctx.arc(0, 0, radius, 0, Math.PI)
  ctx.closePath()
  ctx.fillStyle = primaryStyle
  ctx.fill()

  // secondary color
  ctx.beginPath()
  ctx.arc(0, 0, radius, 0, Math.PI, true)
  ctx.closePath()
  ctx.fillStyle = secondaryStyle
  ctx.fill()

  if (radius < 30) {
    const half = radius / 2
    // bigger circles
    ctx.beginPath()
    ctx.arc(-half, 0, half, 0, 2 * Math.PI)
    ctx.closePath()

    ctx.fillStyle = primaryStyle
    ctx.fill()

    ctx.beginPath()
    ctx.arc(half, 0, half, 0, 2 * Math.PI)
    ctx.closePath()

    ctx.fillStyle = secondaryStyle
    ctx.fill()

    // small circles
    ctx.beginPath()
    ctx.arc(-half, 0, half / 2, 0, 2 * Math.PI)
    ctx.closePath()

    ctx.fillStyle = secondaryStyle
    ctx.fill()

    ctx.beginPath()
    ctx.arc(half, 0, half / 2, 0, 2 * Math.PI)
    ctx.closePath()

    ctx.fillStyle = primaryStyle
    ctx.fill()
  } else {
    ctx.translate(-radius / 2, 0)
    layer(ctx, radius / 2, leftFactor * angle, primaryStyle, secondaryStyle)

    ctx.translate(radius, 0)
    layer(ctx, radius / 2, rightFactor * angle, primaryStyle, secondaryStyle)
  }

  ctx.restore()
}

export default layer
