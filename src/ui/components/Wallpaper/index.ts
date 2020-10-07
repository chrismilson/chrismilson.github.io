import React from 'react'

const Circles = React.lazy(() => import('./Circles'))
const Perspectives = React.lazy(() => import('./Perspectives'))
const BouncyBalls = React.lazy(() => import('./BouncyBalls'))
const GameOfLife = React.lazy(() => import('./GameOfLife'))
const Dragon = React.lazy(() => import('./Dragon'))
const YinYang = React.lazy(() => import('./YinYang'))
const StarMap = React.lazy(() => import('./StarMap'))

const allWallpapers = [
  Circles,
  Perspectives,
  BouncyBalls,
  GameOfLife,
  Dragon,
  YinYang,
  StarMap
]

// Get the next wallpaper in the list and remember which one we just used
const storage = window.localStorage
const idx = parseInt(storage.getItem('wallpaper') || '0', 10)
storage.setItem('wallpaper', `${(idx + 1) % allWallpapers.length}`)

export default allWallpapers[idx]
