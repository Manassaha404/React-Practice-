import { useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef(0);

  const handelIncrement = () => {
    //here is the clear difference between state and ref 
    setCount(count + 1);
    countRef.current++;

    console.log(`State: ${count}`); //but here a wired behavior happened, although the state count increment but count is still have the previous value
    // because in react the value of state change with the rerender  
    console.log(`Ref: ${countRef.current}`); // but here is normal behavior, ref count value in increment normally
    // but with the change of ref the component will not rerender..
  }
  return (
    <>
    {/*  here count increment normally*/}
      <p>Count: {count}</p> 
      <button onClick={handelIncrement}>Increment</button>
    </>
  );
}

export default Counter;
