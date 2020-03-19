/**
 * Returns a random integer in a given range, or if only one value is supplied,
 * between zero and that value.
 */
export const randomInt = (from: number, to: number = from) => {
  if (from === to) from = 0
  return from + Math.floor(Math.random() * (to - from))
}

/**
 * Returns a random float in a given range.
 */
export const randomRange = (from: number, to: number) => {
  return from + Math.random() * (to - from)
}
