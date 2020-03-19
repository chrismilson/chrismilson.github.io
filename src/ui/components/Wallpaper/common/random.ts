/**
 * Returns a random integer between two numbers, or if there is only one number,
 * between zero and that number.
 *
 * @param from The lower bound
 * @param to The upper bound
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
