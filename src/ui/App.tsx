import React, { useEffect, useState, Suspense } from 'react'
import Social from './components/Social'
import Wallpaper from './components/Wallpaper'
import NotTypist from 'react-not-typist'
import './App.css'

const App: React.FC = () => {
  const [word, setWord] = useState('My name is')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWord('Chris Milson')
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="App">
      <Social />
      <h1>
        <NotTypist words={[word]} speed={1000} />
      </h1>
      <Suspense fallback>
        <Wallpaper />
      </Suspense>
    </div>
  )
}

export default App
