import { useState, useEffect } from 'react'

export function useTypewriter(
  text: string, 
  speed: number = 50,
  startDelay: number = 0
) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  
  useEffect(() => {
    const startTimeout = setTimeout(() => setIsStarted(true), startDelay)
    return () => clearTimeout(startTimeout)
  }, [startDelay])
  
  useEffect(() => {
    if (!isStarted) return
    
    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index))
        index++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, speed)
    
    return () => clearInterval(interval)
  }, [text, speed, isStarted])
  
  return { displayText, isComplete, isStarted }
}
