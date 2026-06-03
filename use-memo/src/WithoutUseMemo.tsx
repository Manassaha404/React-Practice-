import { useState } from "react";
import { items } from "./utils/create-items";

function WithoutUseMemo() {
  const [count, setCount] = useState<number>(0);
  const [item, setItem] = useState(items as any);

  const selectedItem = item.find((v) => v.isSelected === true); 
  // // this is a very expensive operation that runs on every rerender
  // useMemo 
  // const selectedItem = useMemo(() => item.find((v) => v.isSelected === true), [item]);
  
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

export default WithoutUseMemo;
