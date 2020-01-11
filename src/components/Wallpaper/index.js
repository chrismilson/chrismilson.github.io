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
    this.ctx.canvas.width = this.width = this.canvas.current.offsetWidth
    this.ctx.canvas.height = this.height = this.canvas.current.offsetHeight

    this.circles = new Array(20).fill(0)
      .map(z => new Circle(this.width, this.height))

    this.drawCircles()
  }

  componentWillUnmount () { window.cancelAnimationFrame(this.timeout) }

  drawCircles () {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.circles = this.circles.map(c => {
      if (c.draw(this.ctx)) {
        return new Circle(this.width, this.height)
      }
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
