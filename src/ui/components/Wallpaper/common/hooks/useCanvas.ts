import { useEffect, useRef, useState, useLayoutEffect } from 'react'

/**
 * Returns a reference to attach to a canvas object, and accepts a method for
 * drawing with with a 2d context on said canvas.
 *
 * @param draw A method for drawing on the canvas, can return a cleanup method.
 */
export default function useCanvas(
  draw: (
    context: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => void | (() => void)
) {
  const ref = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.canvas.width = canvas.offsetWidth
    ctx.canvas.height = canvas.offsetHeight

    setContext(ctx)
  }, [ref])

  useLayoutEffect(() => {
    if (context) {
      return draw(context, context.canvas.width, context.canvas.height)
    }
  }, [context, draw])

  return ref
}
