export default class Cell {
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
