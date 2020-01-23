import React from 'react'
import Social from './components/Social'
import Wallpaper from './components/Wallpaper'
import NotTypist from 'react-not-typist' // I wrote this
import './App.scss'

const words = [
  'Global Citizen',
  'Mathematician',
  'Maker',
  'Japanese Speaker',
  'Front End Developer',
  'Back End Developer'
].map(w => w.toLowerCase())

function App () {
  return (
    <div className='App'>
      <h2>Chris Milson</h2>
      <p>
        <NotTypist speed={2000} delay={5000} words={words} />
      </p>

      <Social />
      <Wallpaper />
    </div>
  )
}

export default App
