import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (value === 0) document.title = 'zero hai'
    if (value >= 1) document.title = `bhaisahab(${value})`
  }, [value])
  return (
    <>
      <h2>{value}</h2>
      <button
        className='btn'
        onClick={() => {
          setValue(value + 1)
        }}
      >
        Add count
      </button>
      <button
        className='btn'
        onClick={() => {
          if (value === 0) setValue(0)
          else {
            setValue(value - 1)
          }
        }}
      >
        Subtract Count
      </button>
      <button
        className='btn'
        onClick={() => {
          setValue(0)
        }}
      >
        Reset Count
      </button>
    </>
  )
}

export default UseEffectCleanup
