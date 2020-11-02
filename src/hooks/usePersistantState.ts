import { Dispatch, SetStateAction, useEffect, useState } from 'react'

// Shorthand for the localStorage methods
const get = function<T>(key: string): T {
  const stored = window.localStorage.getItem(key)

  return stored && JSON.parse(stored)
}

const set = function<T>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

/**
 * Persists the state through refresh and page closure with the
 * [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 * API.
 *
 * @param storageKey The key to the local storage value.
 * @param fallbackValue A default value to use if no value exists.
 */
const usePersistentState = function<T>(
  storageKey: string,
  fallbackValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState((get(storageKey) as T) || fallbackValue)

  useEffect(() => {
    set(storageKey, state)
  }, [storageKey, state])

  return [state, setState]
}

export default usePersistentState
