import Circles from './Circles'
import Perspectives from './Perspectives'

const allWallpapers = [Circles, Perspectives]

export default allWallpapers[Math.floor(Math.random() * allWallpapers.length)]
