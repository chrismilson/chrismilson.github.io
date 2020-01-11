import React from 'react'
import edit from './edit'
import './styles.scss'

function Char (props) {
  return (
    <span
      className={props.className + (props.char === ' ' ? ' space' : '')}
    >{props.char === ' ' ? '-' : props.char}</span>
  )
}

export default class LevenshteinMerryGoRound extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      display: []
    }

    this.current = this.props.words ? this.props.words.length - 1 : 0
  }

  componentDidMount () { this.next() }

  componentWillUnmount () { clearInterval(this.timeout) }

  next () {
    if (!this.props.words || this.props.words.length < 1) return
    const next = (this.current + 1) % this.props.words.length

    const a = this.props.words[this.current]
    const b = this.props.words[next]

    this.setState({ display: edit(a, b) })

    this.current = next

    this.timeout = setTimeout(() => this.next(), 3000)
  }

  render () {
    return (
      <span
        className='LevenshteinMerryGoRound'
        aria-label={this.props.words && this.props.words[this.current]}
      >{
          this.state.display.map((c, idx) => (
            <span key={idx} className='char' aria-hidden>
              <Char className='orig' char={c.orig} />
              <Char className='next' char={c.next} />
            </span>
          ))
        }</span>
    )
  }
}
