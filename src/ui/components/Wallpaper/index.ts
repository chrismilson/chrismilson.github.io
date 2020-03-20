import Circles from './Circles'
import Perspectives from './Perspectives'
import BouncyBalls from './BouncyBalls'
import GameOfLife from './GameOfLife'

const allWallpapers = [Circles, Perspectives, BouncyBalls, GameOfLife]

export default allWallpapers[Math.floor(Math.random() * allWallpapers.length)]
