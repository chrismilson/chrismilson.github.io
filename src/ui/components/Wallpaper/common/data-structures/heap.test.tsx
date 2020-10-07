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
