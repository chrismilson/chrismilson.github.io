import React from 'react'
import Social from './components/Social'
import Wallpaper from './components/Wallpaper'
import MerryGoRound from './components/LevenshteinMerryGoRound'
import './App.scss'

const words = [
  'Global Citizen',
  'Mathematician',
  'Front End Developer',
  'Back End Developer',
  'Maker',
  'Japanese Speaker'
].map(w => w.toLowerCase())

function App () {
  return (
    <div className='App'>
      <h2>Chris Milson</h2>
      <p>
        <MerryGoRound words={words} />
      </p>

      <Social />
      <Wallpaper />
    </div>
  )
}

export default App
