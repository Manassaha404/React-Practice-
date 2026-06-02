//What is state?? -> State is a information that can change overtime within a component.
// why we use useState hook ? -> If we want when my state change my page will be rerender automatically,so the updates shown ensuant. 
import { useState } from "react"; // how we import useState

function UseState() {
  const [count, setCount] = useState<number>(0); //how we declare useState
  //state get a default value, in this case we provide 0, if we don't  provide any value it will be undefined  
  // count is the value of the state, and setCount is a function to change the state value.
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
          setCount((prev) => --prev); //we can provide the direct value to setCount fn, but we need the prev value so we access it by a parameter of the callback 
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default UseState;
