import React from 'react'
import { OffscreenCanvasWallpaper } from '../common/Wallpaper'

const init = (m => () => m)(import('worker-loader!./draw'))

export const StarMap: React.FC = () => {
  return (
    <OffscreenCanvasWallpaper className="StarMap" initDrawingModule={init} />
  )
}

export default StarMap
