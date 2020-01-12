import React from 'react'
import './styles.scss'
import Circle from './Circle'

export default class Wallpaper extends React.Component {
  constructor (props) {
    super(props)

    this.canvas = React.createRef()
  }

  componentDidMount () {
    this.ctx = this.canvas.current.getContext('2d')
    this.resize()

    this.drawCircles()
    window.addEventListener('resize', () => this.resize())
  }

  componentWillUnmount () {
    window.cancelAnimationFrame(this.timeout)
    window.removeEventListener('resize', () => this.resize())
  }

  resize () {
    this.ctx.canvas.width = this.width = this.canvas.current.offsetWidth
    this.ctx.canvas.height = this.height = this.canvas.current.offsetHeight
    const size = Math.floor(this.width * this.height / 100000)
    if (!this.circles || this.circles.length !== size) {
      this.circles = new Array(size)
        .fill(0)
        .map(c => new Circle(this.width, this.height))
    }
  }

  drawCircles () {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.circles = this.circles.map(c => {
      if (c.draw(this.ctx)) return new Circle(this.width, this.height)
      return c
    })

    this.timeout = window.requestAnimationFrame(() => this.drawCircles())
  }

  render () {
    return (
      <canvas className='Wallpaper' ref={this.canvas} />
    )
  }
}
