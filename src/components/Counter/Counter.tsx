// test hook useReducer
import React, { FC, useReducer } from 'react'

interface IStateAction {
  type: string
  payload?: any
}

function init(initialCount: number) {
  return { count: initialCount }
}

function reducer(state: { count: number }, action: IStateAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}

type CounterProps = {
  initialCount: number
}

const Counter: FC<CounterProps> = ({ initialCount = 0 }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init)
  return (
    <>
      Count:
      {state.count}
      <button type='button' onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
        Reset
      </button>
      <button type='button' onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
      <button type='button' onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
    </>
  )
}
export default Counter
