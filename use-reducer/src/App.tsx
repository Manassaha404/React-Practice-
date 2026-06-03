//what is useReducer()? -> useReducer() is a state management hook like useState(), but useReducer() works differently
// useReducer() ensure that what action can perform to state for change the state. It gives predictability of how state change

//when we have complex state type, we should or can use useReducer(),
// const [state, dispatch] = useReducer(reducer, initialState) -> this is the basic syntax
// 1. state -> it is the state variable, by this we can access state value
// 2. dispatch -> we pass the action which we want to perform in args of dispatch function,
// it sends the action(which we provide) towards the reducer function.
// 3. reducer -> it is a custom function we can made, it have 2 arguments (state, action) => {}, based on the action we can perform any action to state
// 4. initialState -> it is the initial state of the state variable, it is optional, if we don't provide any value it will be undefined

// the third argument of useReducer() is a function, it is called "init" function, it is optional,
//  if we provide any value it will be used to initialize the state, it is called "lazy initialization".
// const [state, dispatch] = useReducer(reducer, initialState, init) -> this is the syntax
// React will call the init function and pass the initialState as an argument to the init function.
// and the init function will return the initial state.
// init function is called only once when the component mount.

import { useReducer } from "react";

interface Action {
  type: "INCREMENT" | "DECREMENT";
} // this the action types, it gives us predictability 
type initialState = {
  count: number;
  error: null | string;
}; // this the initialState type 

interface initialStateArgs {
  count: number;
} // it is the argument type that pass to the init function 



// this the init function, it return the initialState
const init = (initialState: initialStateArgs):initialState => {
  return {
    count: initialState.count,
    error: null
  };
}; 


// this the reducer function, it return the new state based on the action
const reducer = (state: initialState, action: Action) => {
  switch (action.type) {
    case "INCREMENT": 
      if(state.count >= 10){
        return {
          ...state,
          error: "Count is greater than 10",
        };
      }
      return {
        ...state,
        count: state.count + 1,
        error: null,
      };
    case "DECREMENT":
      if(state.count <= 0){
        return {
          ...state,
          error: "Count is less than 0",
        };
      }
      return {
        ...state,
        count: state.count - 1,
        error: null,
      };
    default:
      return state;
  }
};

const initialStateArgs: initialStateArgs = {
  count: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialStateArgs, init);
  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Error: {state.error}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default App;
