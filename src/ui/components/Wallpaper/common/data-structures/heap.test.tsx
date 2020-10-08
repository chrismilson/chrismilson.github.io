import { heapify, heappop } from './heap'

describe('heapify', () => {
  /**
   * Each example is accompanied by what the function should be expected to
   * return.
   */
  const examples = [
    [
      [2, 1],
      [1, 2]
    ],
    [
      [3, 2, 1],
      [1, 2, 3]
    ],
    [
      [9, 8, 7, 6, 5, 4, 3, 2, 1],
      [1, 2, 3, 6, 5, 4, 7, 8, 9]
    ]
  ]

  it.each(examples)('should heapify an array.', (original, target) => {
    const heap = heapify([...original])

    expect(heap).toMatchObject(target)
  })
})

describe('heappop', () => {
  const examples = [
    [4, 3, 2],
    [1, 5, 7, 3, 1, 2, 23, 5, 55],
    [123, 9, 45, -5, 2]
  ].map(arr => [heapify(arr), [...arr].sort((a, b) => a - b)])

  it.each(examples)('should return the minimum element.', (heap, sorted) => {
    const heapCopy = [...heap]

    expect(heappop(heapCopy)).toEqual(sorted[0])
  })

  it.each(examples)(
    'should return the first and second minimum element.',
    (heap, sorted) => {
      const heapCopy = [...heap]

      expect(heappop(heapCopy)).toEqual(sorted[0])
      expect(heappop(heapCopy)).toEqual(sorted[1])
    }
  )

  it.each(examples)('should return the elements in order.', (heap, sorted) => {
    const heapCopy = [...heap]

    for (let i = 0; i < sorted.length; i++) {
      expect(heappop(heapCopy)).toEqual(sorted[i])
    }
  })
})

describe('type inference', () => {
  class Comparable {
    private value: number

    constructor(value: number) {
      this.value = value
    }

    valueOf() {
      return this.value
    }
  }

  const examples: [(string | Comparable)[], string | Comparable][] = [
    'abcdefg'.split(''),
    'gkjhcubua'.split(''),
    [new Comparable(7), new Comparable(4), new Comparable(2), new Comparable(1)]
  ].map(arr => {
    let minElem = arr[0]

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minElem) {
        minElem = arr[i]
      }
    }

    return [arr, minElem]
  })

  it.each(examples)(
    'should find the minimum value among non-number inputs.',
    (arr, minElem) => {
      const heap = heapify([...arr])

      expect(heappop(heap)).toBe(minElem)
    }
  )
})
