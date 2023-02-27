import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const checkSize = () => {
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  })
  return (
    <>
      <h1>Window width</h1>
      <h2>{width}</h2>
      <h1>Window Height</h1>
      <h2>{height}</h2>
    </>
  )
}

export default UseEffectCleanup
