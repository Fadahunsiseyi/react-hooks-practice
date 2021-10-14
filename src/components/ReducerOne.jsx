import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState;
            default:
                return state
    }
}

function ReducerOne() {
 const [count, dispatch] =   useReducer(reducer, initialState)
  return (
    <div>
        <div>Count - {count}</div>
      <button onClick={(e) => dispatch('increment')} >Increment</button>
      <button onClick={(e) => dispatch('decrement')}>Decrement</button>
      <button onClick={(e) => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default ReducerOne
