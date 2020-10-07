export default class Slider {
  value: number
  change: number
  min: number
  max: number
  onChange?: (isTop: boolean) => void

  constructor(
    value: number,
    change: number,
    min: number,
    max: number,
    onChange?: (isTop: boolean) => void
  ) {
    this.value = value
    this.change = change
    this.min = min
    this.max = max
    this.onChange = onChange
  }

  next() {
    const isTop = this.value + this.change > this.max
    const isBottom = this.value + this.change < this.min
    if (isTop || isBottom) {
      if (this.onChange) this.onChange(isTop)
      this.change *= -1
    }
    this.value += this.change
  }
}
