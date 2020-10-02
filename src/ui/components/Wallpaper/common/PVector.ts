/**
 * A class that represents a position vector in two dimensional space.
 * @property x The x position
 * @property y The y position
 */
export default class PVector {
  /** The x-position of the vector */
  readonly x: number
  /** The y-position of the vector */
  readonly y: number

  /**
   * Makes a new PVector.
   *
   * @param x The x position
   * @param y The y position (defaults to be the same as the x position)
   */
  constructor(x: number, y: number = x) {
    this.x = x
    this.y = y
  }

  /**
   * Applies a given action to a list of vectors component-wise.
   *
   * For example, to add two vectors, `a` and `b`, componentwise, we could do
   * ```ts
   * PVector.componentWise((aComp, bComp) => aComp + bComp, a, b)
   * ```
   *
   * @param action The action to be preformed on each component
   * @param vectors The vectors whose components will be passed to the action
   */
  static componentWise(
    action: (...components: number[]) => number,
    ...vectors: PVector[]
  ) {
    return new PVector(
      action(...vectors.map(v => v.x)),
      action(...vectors.map(v => v.y))
    )
  }
  /**
   * The same as the static method, but the first vector will be the current
   * `this`.
   *
   * @param action The action to perform on each component
   * @param extraVectors Any extra vectors to be included in the calculation
   */
  componentWise(
    action: (...components: number[]) => number,
    ...extraVectors: PVector[]
  ) {
    return PVector.componentWise(action, this, ...extraVectors)
  }

  /**
   * Adds a list of vectors together component-wise.
   *
   * @param vectors The vectors to add
   */
  static add(...vectors: PVector[]) {
    return PVector.componentWise(
      (...components) => components.reduce((s, v) => s + v, 0),
      ...vectors
    )
  }
  /**
   * Adds a list of vectors to the vector component-wise.
   *
   * @param vectors The vectors to add
   */
  add(...vectors: PVector[]) {
    return PVector.add(this, ...vectors)
  }

  /**
   * Subtracts a list of vectors from a given vector.
   *
   * @param from The vector that will be subtracted from
   * @param vectors The vectors to subtract
   */
  static subtract(from: PVector, ...vectors: PVector[]) {
    return PVector.componentWise(
      (from, sum) => from - sum,
      from,
      PVector.add(...vectors)
    )
  }
  /**
   * Subtracts a list of vectors from the vector.
   *
   * @param vectors The vectors to subtract
   */
  subtract(...vectors: PVector[]) {
    return PVector.subtract(this, ...vectors)
  }

  /**
   * Returns the component-wise multiplication of the vectors.
   *
   * @param vectors The vectors to multiply
   */
  static multiply(...vectors: PVector[]) {
    return PVector.componentWise(
      (...components) => components.reduce((p, v) => p * v, 1),
      ...vectors
    )
  }
  /**
   * Multiplies the vector by a list of vectors.
   *
   * @param vectors The vectors to multiply by
   */
  multiply(...vectors: PVector[]) {
    return PVector.multiply(this, ...vectors)
  }

  /**
   * Divides a given vector by a list of other vectors component-wise.
   *
   * @param dividend The vector to be divided
   * @param divisors The vectors to divide by
   */
  static divide(dividend: PVector, ...divisors: PVector[]) {
    return PVector.componentWise(
      (dividend, divisor) => dividend / divisor,
      dividend,
      PVector.multiply(...divisors)
    )
  }
  /**
   * Divides the vector by a list of other vectors component-wise.
   *
   * @param divisors The vectors to divide by
   */
  divide(...divisors: PVector[]) {
    return PVector.divide(this, ...divisors)
  }

  /** Multiplies a vector by a matrix [a b, c d], and translates by e, f. */
  static transform(
    vector: PVector,
    a: number,
    b: number,
    c: number,
    d: number,
    e = 0,
    f = 0
  ) {
    return new PVector(
      vector.x * a + vector.y * c + e,
      vector.x * b + vector.y * d + f
    )
  }
  /** Multiplies the vector by a matrix [a b, c d], and translates by e, f. */
  transform(a: number, b: number, c: number, d: number, e = 0, f = 0) {
    return PVector.transform(this, a, b, c, d, e, f)
  }

  /** Rotates a vector by an angle. (anticlockwise in radians) */
  static rotate(vector: PVector, theta: number) {
    const cos = Math.cos(theta)
    const sin = Math.sin(theta)
    return vector.transform(cos, -sin, sin, cos, 0, 0)
  }
  /** Rotates the vector by an angle. (anticlockwise in radians) */
  rotate(theta: number) {
    return PVector.rotate(this, theta)
  }

  /** Scales a vector by a factor. */
  static scale(vector: PVector, sf: number) {
    return PVector.componentWise(x => sf * x, vector)
  }
  /** Scales the vector by a factor. */
  scale(sf: number) {
    return PVector.scale(this, sf)
  }

  /** Gets the modulus of a vector */
  static modulus(vector: PVector) {
    return Math.sqrt(vector.x * vector.x + vector.y * vector.y)
  }
  /** Gets the modulus of a vector */
  modulus() {
    return PVector.modulus(this)
  }
}
