import Cell from './Cell'
import { randomInt } from '../common/random'

export default class Game {
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
