import React, {useReducer} from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassTimerRef from './components/ClassTimerRef';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import ComponentOne from './components/ComponentOne';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import DataFetching from './components/DataFetching';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import DocTitleOne from './components/DocTitleOne';
import HookContainer from './components/HookContainer';
import HookCounter from './components/HookCounter';
import HookCounterFive from './components/HookCounterFive';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import HookTimerRef from './components/HookTimerRef';
import InternalHookCounter from './components/InternalHookCounter';
import MemoCounter from './components/MemoCounter';
import ParentCComponent from './components/ParentCComponent';
import ReducerOne from './components/ReducerOne';
import ReducerThree from './components/ReducerThree';
import ReducerTwo from './components/ReducerTwo';
import UseRefHook from './components/UseRefHook';
import UserForm from './components/UserForm';

 export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
  
    default:
     return state
  }
}

function App() {
  const [ count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}} >
    <div className="App">
      {/* <ClassCounter/>
      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/> */}
      {/* <HookCounterFive/> */}
      {/* <HookMouse/> */}
      {/* <HookContainer/> */}
      {/* <InternalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <UserContext.Provider value={'The greatest'}>
        <ChannelContext.Provider value={'The least'}>
        <ComponentOne/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <ReducerOne/> */}
      {/* <ReducerTwo/> */}
      {/* <ReducerThree/> */}

      {/* count - {count}
      <ComponentA/>
      <ComponentB/>
      <ComponentC/> */}
      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}
      {/* <ParentCComponent/> */}
      {/* <MemoCounter/> */}
      {/* <UseRefHook/> */}
      {/* <ClassTimerRef/> */}
      {/* <HookTimerRef/> */}
      {/* <DocTitleOne/> */}
      {/* <CounterOne/> 
      <CounterTwo/> */}
      <UserForm/>
    </div>
    </CountContext.Provider>
  );
}

export default App;
