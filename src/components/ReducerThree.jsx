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

function ReducerThree() {
 const [count, dispatch] =   useReducer(reducer, initialState)
 const [countTwo, dispatchTwo] =   useReducer(reducer, initialState)
  return (
    <div>
        <div>Count - {count}</div>
      <button onClick={(e) => dispatch('increment')} >Increment</button>
      <button onClick={(e) => dispatch('decrement')}>Decrement</button>
      <button onClick={(e) => dispatch('reset')}>Reset</button>
        <div>Count - {countTwo}</div>
      <button onClick={(e) => dispatchTwo('increment')} >Increment</button>
      <button onClick={(e) => dispatchTwo('decrement')}>Decrement</button>
      <button onClick={(e) => dispatchTwo('reset')}>Reset</button>
    </div>
  )
}

export default ReducerThree
