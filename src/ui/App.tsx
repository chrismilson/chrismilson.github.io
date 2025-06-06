import React, { useEffect, useState, Suspense } from 'react'
import Wallpaper from './components/Wallpaper'
import NotTypist from 'react-not-typist'
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
      <h1 className="Title">
        <NotTypist words={[word]} speed={1000} />
      </h1>
      <Suspense fallback>
        <Wallpaper />
      </Suspense>
    </div>
  )
}

export default App
