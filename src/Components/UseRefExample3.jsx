import React, { useState } from 'react'
import Todo from './Todo'

function useRefExample3() {
  const [showTodo, setTodo] = useState(true)

  return (
    <div>
      {showTodo && <Todo />}
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => {
          setTodo(!showTodo)
        }}
      >
        Toggle Todo
      </button>
    </div>
  )
}

export default useRefExample3
