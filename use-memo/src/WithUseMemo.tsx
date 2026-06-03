import { useMemo, useState } from "react";
import { items } from "./utils/create-items";

function WithUseMemo() {
  const [count, setCount] = useState<number>(0);
  const [item, setItem] = useState(items as any); 
  
  const selectedItem = useMemo(() => item.find((v) => v.isSelected === true), [item]);
  // it runs when the component mount and every time item state change 
  // this is a very optimize approach to handel expensive operation 
  // we use useMemo for this type of cases 
  // always aware of dependence array of useMemo.. 

  /* 

  const selectedItem = useMemo(() => item.find((v) => v.value === count), [item]); 
  // in this case it breaks, we can't see what we expected 
  // because in this operation depends on item and also count but we provide only item so it don't runs on count changes 
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
      <p>selected item: {selectedItem.value}</p>
    </div>
  );
    
  
  
  */
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
      <p>selected item: {selectedItem.value}</p>
    </div>
  );
}

export default WithUseMemo;
