import React, { useRef } from 'react'

function UseRefExample1() {
  const inputRef = useRef()
  const paraRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    inputRef.current.value = 'Hello'
    inputRef.current.style.backgroundColor = 'red'
    paraRef.current.innerText = 'Goodbye'
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input id='name' ref={inputRef} className='form-control mb-2' />
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
        <p ref={paraRef}>Hello</p>
      </form>
    </div>
  )
}

export default UseRefExample1
