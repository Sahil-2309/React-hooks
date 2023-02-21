import React from 'react'

const UseStateArray = () => {
  const [count, setCount] = React.useState(0)
  return (
    <>
      <h1>Counter React</h1>
      <button
        className='btn'
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Add count
      </button>

      {count}
      <button
        className='btn'
        onClick={() => {
          if (count === 0) setCount(0)
          else {
            setCount(count - 1)
          }
        }}
      >
        Subtract Count
      </button>
      <button
        className='btn'
        onClick={() => {
          setCount(0)
        }}
      >
        Reset Count
      </button>
    </>
  )
}

export default UseStateArray
