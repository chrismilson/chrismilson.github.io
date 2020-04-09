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

/** Returns a random normally distributed float */
export const randomNormal = (mean = 0, stddev = 1) => {
  let u = 0
  let v = 0
  while (u === 0) u = Math.random()
  while (v === 0) v = Math.random()
  const statistic = Math.sqrt(-2 * Math.log(u)) + Math.cos(2 * Math.PI * v)
  return statistic * stddev + mean
}
