import { useEffect, useRef, useState } from 'react'

function useThrottle<T>(value: T, timer = 500): T {
  const [throttledValue, setThrottledValue] = useState<T>(value)
  const lastExecuted = useRef<number>(Date.now())

  useEffect(() => {
    if (Date.now() >= lastExecuted.current + timer) {
      lastExecuted.current = Date.now()
      setThrottledValue(value)
    } else {
      const timerId = setTimeout(() => {
        lastExecuted.current = Date.now()
        setThrottledValue(value)
      }, timer)

      return () => clearTimeout(timerId)
    }
  }, [value, timer])

  return throttledValue
}

export default  useThrottle;