//what is useEffect? -> use effect is function. It behave like a side effect of a event.
// this can be a event for fire useEffect
// 1. component mount 2. page render 3. state change 4. function call
// when the useEffect fires it depends on the dependence array

import { useEffect, useState } from "react";

/* 
  useEffect(() => {}, []) // the basic useEffect structure 

  lets talk to dependence array, 
  1. If we gave give a empty dependence array, useEffect run only one time when the component mount 
  2. If we don't give a dependence array, useEffect run on component mount and every render of component
  3. if we provide a variable or state, useEffect run on component mount and when the state change 
  4. if we provide a function, useEffect run on component mount and when that function will call 


  In useEffect() if we return a function it runs before the next useEffect() and when the component unmount 
  we call it the clean up function 
  
  
  so the syntax looks-> 
  useEffect(() => {
    //Effect logic

    return () => {
      //cleanup logic 
    }
  }, []) 
*/

function App() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(count);// it is run every time when count change 
  }, [count]); 

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((prev) => ++prev);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prev) => --prev);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
