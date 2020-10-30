import React, { useEffect, useState, Suspense } from 'react'
import Wallpaper from './components/Wallpaper'
import NotTypist from 'react-not-typist'
import { Github, Linkedin, Resume } from './components/Social'
import LightSwitch from './components/LightSwitch'
import './App.css'

const App: React.FC = () => {
  const [word, setWord] = useState('My name is')
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWord('Chris Milson')
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
        <Resume />
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
