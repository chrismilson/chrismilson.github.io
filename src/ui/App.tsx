import React, { useEffect, useState, Suspense } from 'react'
import Wallpaper from './components/Wallpaper'
import { Github, Linkedin } from './components/Social'
import LightSwitch from './components/LightSwitch'
import usePersistentState from '../hooks/usePersistantState'
import './App.css'

const App: React.FC = () => {
  const [word, setWord] = useState('')
  const [dark, setDark] = usePersistentState('darkMode', false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWord('')
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  const classNames = ['App']

  if (dark) {
    classNames.push('Dark')
  }

  return (
    <div className={classNames.join(' ')}>
      <div className="Icons">
        <Github />
        <Linkedin />
        <LightSwitch dark={dark} onChange={() => setDark(d => !d)} />
      </div>
      <section>
        <h2>Welcome</h2>
        <p>
          This site is part of an ongoing self-hosting project, which includes managing various applications and services on personal infrastructure, mostly behind a private network. A particular focus is on reliable email delivery for these applications.
        </p>
        <p>
          Email sent from this site is strictly transactional. For example: account confirmations, password resets, and notifications for users of the hosted applications. <strong>No marketing or unsolicited bulk email is sent.</strong>
        </p>
      </section>
      <Suspense fallback>
        <Wallpaper />
      </Suspense>
    </div>
  )
}

export default App
