import React from 'react'
import edit from './edit'
import './styles.scss'

/**
 * A Changer is a component that takes two props:
 *
 * - from, and
 * - to.
 *
 * It will first display the from character, and then morph into the second
 * character.
 *
 * @param {*} props
 */
class Changer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fromWidth: 0,
      toWidth: 0
    }

    this.fromSpace = props.from === ' '
    this.toSpace = props.to === ' '

    this.state.from = this.fromSpace ? 't' : props.from
    this.state.to = this.toSpace ? 't' : props.to

    this.from = React.createRef()
    this.to = React.createRef()
  }

  componentDidMount () {
    var fromWidth = this.from.current.offsetWidth
    var toWidth = this.to.current.offsetWidth

    this.setState({ fromWidth, toWidth })
    this.calculated = true
  }

  render () {
    const { fromWidth, toWidth, from, to } = this.state

    return (
      <span
        className='Changer'
        style={this.calculated && {
          '--from-width': fromWidth + 'px',
          '--to-width': toWidth + 'px',
          animationDelay: fromWidth < toWidth ? '0s' : '2s'
        }}
        aria-hidden
      >
        <span
          className={'from' + (this.fromSpace ? ' space' : '')}
          ref={this.from}
        >{ from }</span>
        <span
          className={'to' + (this.toSpace ? ' space' : '')}
          ref={this.to}
        >{ to }</span>
      </span>
    )
  }
}

export default class LevenshteinMerryGoRound extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      display: []
    }
    this.idx = 0
    this.current = this.props.words && this.props.words.length - 1
  }

  componentDidMount () { this.props.words && this.next() }

  componentWillUnmount () { clearInterval(this.timeout) }

  next () {
    if (!this.props.words || this.props.words.length < 1) return
    var next
    do {
      next = Math.floor(Math.random() * this.props.words.length)
    } while (next === this.current)

    const a = this.props.words[this.current]
    const b = this.props.words[next]

    this.setState({ display: edit(a, b) })

    this.current = next

    this.timeout = setTimeout(() => this.next(), 4000)
  }

  render () {
    return this.props.words && (
      <span
        className='LevenshteinMerryGoRound'
        aria-label={this.state.display.map(c => c.next).join('')}
      >
        {
          this.state.display.map(c => (
            <Changer
              key={this.idx++}
              from={c.orig}
              to={c.next}
            />
          ))
        }
      </span>
    )
  }
}
