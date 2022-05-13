import React, { useState, useEffect, useRef, useMemo } from 'react'

function UseMemoxEample() {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  const renders = useRef(1)

  const sqrt = useMemo(() => {
    getSqrt(number)
  }, [number])

  // const sqrt = getSqrt(number)

  useEffect(() => {
    renders.current = renders.current + 1
  })

  const onClick = () => {
    setInc((prevState) => {
      console.log('', prevState + 1)
      return prevState + 1
    })
  }

  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className='form-control w-25'
      />
      <h2 className='my-3'>
        the suare root of {number} is {sqrt}
      </h2>
      <button className='btn btn-primary' onClick={onClick}>
        Re Render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  )
}

const getSqrt = (number) => {
  for (let i = 0; i <= 10000; i++) {
    console.log('', i)
  }
  console.log('expensive funciton')
  return Math.sqrt(number)
}

export default UseMemoxEample
