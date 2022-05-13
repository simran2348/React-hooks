import { useState } from 'react'

function UseLocalStorage(key, initialValue) {
  const [localValue, setLocalValue] = useState(() =>
    getLocalValue(key, initialValue)
  )

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(localValue) : value

    setLocalValue(value)

    localStorage.setItem(key, JSON.stringify(valueToStore))
  }

  return [localValue, setValue]
}

const getLocalValue = (key, initialValue) => {
  const storageItem = localStorage.getItem(key)

  return storageItem ? JSON.parse(storageItem) : initialValue
}

export default UseLocalStorage
