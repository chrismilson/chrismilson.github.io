import Circles from './Circles'
import Perspectives from './Perspectives'
import BouncyBalls from './BouncyBalls'
import GameOfLife from './GameOfLife'
import Dragon from './Dragon'
import YinYang from './YinYang'

const allWallpapers = [
  Circles,
  Perspectives,
  BouncyBalls,
  GameOfLife,
  Dragon,
  YinYang
]

// Get the next wallpaper in the list and remember which one we just used
const storage = window.localStorage
const idx = parseInt(storage.getItem('wallpaper') || '0', 10)
storage.setItem('wallpaper', `${(idx + 1) % allWallpapers.length}`)

export default allWallpapers[idx]
