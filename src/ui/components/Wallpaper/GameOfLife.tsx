import React from 'react'
import { CanvasWallpaper, CanvasDrawingMethod } from './common/Wallpaper'
import { randomInt } from './common/random'

class Cell {
  private status: number
  private neighbors: Cell[] = []

  constructor(initiallyAlive: boolean) {
    this.status = initiallyAlive ? 1 : 0
  }

  get isAlive() {
    return this.status & 1
  }

  swap() {
    this.status ^= 1
  }

  addNeighbor(neighbor: Cell) {
    this.neighbors.push(neighbor)
  }

  check() {
    const liveNeighbors = this.neighbors.reduce((s, n) => s + n.isAlive, 0)

    if ((liveNeighbors | this.status) === 3) this.status |= 2
  }

  age() {
    this.status = this.status >> 1
  }
}

class Game {
  private width: number
  private height: number
  /**
   * A cell is a number representing different states.
   * The bits from least significan to most significant mean:
   * - The cells current status.
   * - The cells next status.
   */
  private board: Cell[][]

  constructor(width: number, height: number) {
    this.width = Math.floor(width)
    this.height = Math.floor(height)
    this.board = []

    const probabilityOfLife = 0.1
    for (let i = 0; i < this.width; i++) {
      this.board[i] = []
      for (let j = 0; j < this.height; j++) {
        this.board[i][j] = new Cell(Math.random() < probabilityOfLife)
      }
    }

    // addd the cell's neighbors
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        for (const [dx, dy] of [
          [-1, -1],
          [-1, 0],
          [-1, 1],
          [0, -1],
          [0, 1],
          [1, -1],
          [1, 0],
          [1, 1]
        ]) {
          const x = (i + dx + this.width) % this.width
          const y = (j + dy + this.height) % this.height
          this.board[i][j].addNeighbor(this.board[x][y])
        }
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        if (this.board[i][j].isAlive) {
          ctx.save()
          ctx.fillStyle = `hsl(${randomInt(360)},100%,40%)`
          ctx.fillRect(i, j, 1, 1)
          ctx.restore()
        }
      }
    }
  }

  move() {
    this.board.forEach(row => row.forEach(cell => cell.check()))
    this.board.forEach(row => row.forEach(cell => cell.age()))

    const randomSwaps = 5
    for (let i = 0; i < randomSwaps; i++) {
      this.board[randomInt(this.width)][randomInt(this.height)].swap()
    }
  }
}

const draw: CanvasDrawingMethod = (ctx, widthPX, heightPX) => {
  // transform the canvas
  const ratio = 4
  const width = widthPX / ratio
  const height = heightPX / ratio
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
  ctx.globalAlpha = 0.2

  const game = new Game(width, height)

  const draw = () => {
    ctx.clearRect(0, 0, width, height)

    game.draw(ctx)
    game.move()
  }

  const interval = setInterval(draw, 100)
  return () => {
    clearInterval(interval)
  }
}

const GameOfLife: React.FC = () => (
  <CanvasWallpaper className="GameOfLife" draw={draw} />
)

export default GameOfLife
