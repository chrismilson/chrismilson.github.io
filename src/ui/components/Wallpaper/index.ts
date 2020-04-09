import Circles from './Circles'
import Perspectives from './Perspectives'
import BouncyBalls from './BouncyBalls'
import GameOfLife from './GameOfLife'
import Dragon from './Dragon'

const allWallpapers = [Circles, Perspectives, BouncyBalls, GameOfLife, Dragon]

export default allWallpapers[Math.floor(Math.random() * allWallpapers.length)]
