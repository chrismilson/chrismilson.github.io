import Circles from './Circles'
import Perspectives from './Perspectives'
import BouncyBalls from './BouncyBalls'

const allWallpapers = [Circles, Perspectives, BouncyBalls]

export default allWallpapers[Math.floor(Math.random() * allWallpapers.length)]
