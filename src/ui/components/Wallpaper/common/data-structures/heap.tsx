/**
 * Bubbles arr[startIdx] up to retain heap structure.
 *
 * @param arr An array with a heap structure except perhaps at startIdx.
 * @param startIdx
 */
const up = <T,>(arr: T[], startIdx: number) => {
  let idx = startIdx

  while (idx > 0) {
    const parent = Math.floor((idx - 1) / 2)

    if (arr[parent] < arr[idx]) {
      break
    }
    const temp = arr[parent]
    arr[parent] = arr[idx]
    arr[idx] = temp
    idx = parent
  }
}

/**
 * Bubbles arr[startIdx] down to retain heap structure.
 *
 * @param arr An array with a heap structure except perhaps at startIdx.
 * @param startIdx
 */
const down = <T,>(arr: T[], startIdx: number) => {
  let idx = startIdx

  while (idx < arr.length) {
    let extreme = idx
    const left = 2 * idx + 1
    const right = 2 * idx + 2

    if (left < arr.length && arr[left] < arr[extreme]) {
      extreme = left
    }
    if (right < arr.length && arr[right] < arr[extreme]) {
      extreme = right
    }
    if (extreme === idx) {
      break
    }
    const temp = arr[extreme]
    arr[extreme] = arr[idx]
    arr[idx] = temp
    idx = extreme
  }
}

/**
 * Rearranges an array into a min heap in-place and returns the heapified array.
 *
 * @param arr The array to heapify
 */
export const heapify = <T,>(arr: T[]) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    down(arr, i)
  }
  return arr
}

/**
 * Pops the minimum element from a heapified array.
 *
 * @param heap The heapified array to pop from.
 */
export const heappop = <T,>(heap: T[]) => {
  if (heap.length <= 1) {
    return heap.pop()
  }
  // our heap has more than one element
  const result = heap[0]
  heap[0] = heap.pop() as T
  down(heap, 0)
  return result
}

export const heappush = <T,>(heap: T[], value: T) => {
  up(heap, heap.push(value))
}

/**
 * Does both a pop operation and a push operation, however will be faster than a
 * pop followed by a push as the array will not be resized.
 *
 * @param heap The heapified array
 * @param value The value to add to the heap after popping.
 */
export const heappushpop = <T,>(heap: T[], value: T) => {
  if (heap.length < 1) {
    heap.push(value)
    return undefined
  }
  const result = heap[0]
  heap[0] = value
  down(heap, 0)
  return result
}
