import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 20,
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function ReducerTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div> firstCounter: {count.firstCounter} </div>
        <div> secondCounter: {count.secondCounter} </div>
      <button onClick={(e) => dispatch({type: 'increment', value: 10})} >Increment</button>
      <button onClick={(e) => dispatch({type: 'decrement', value: 10})}>Decrement</button>
      <button onClick={(e) => dispatch({type: 'increment', value: 5})} >Increment 5</button>
      <button onClick={(e) => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
      <button onClick={(e) => dispatch({type: 'increment2', value: 8})} >IncrementTwo 5</button>
      <button onClick={(e) => dispatch({type: 'decrement2', value: 8 })}>DecrementTwo 5</button>
      <button  onClick={(e) => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default ReducerTwo
