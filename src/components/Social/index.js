import React from 'react'
import { FaGithub, FaLinkedin, FaIdBadge } from 'react-icons/fa'
import './styles.scss'

export default function Social (props) {
  return (
    <div className='Social'>
      <a
        title='Check out my Github'
        href='https://github.com/chrismilson'
        target='_blank'
        rel='noopener noreferrer'
      ><FaGithub /></a>
      <a
        title='...or my Linkedin'
        href='https://linkedin.com/in/chris-milson'
        target='_blank'
        rel='noopener noreferrer'
      ><FaLinkedin /></a>
      <a
        title='Have a look at my CV too'
        href='CV.pdf'
        target='_blank'
      ><FaIdBadge /></a>
    </div>
  )
}
