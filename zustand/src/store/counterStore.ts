// if we had contextApi from react, why we a a state management libery like zustand?? 
// -> Context API is a dependency injection tool, not a state management tool.
// While Context is great for low-frequency updates (like themes or user authentication),
// it falls apart in complex, high-frequency scenarios. Here is a breakdown
// of why Zustand often takes the crown for actual state management.


//The biggest issue with Context API is how it handles updates.
//If you change a single value inside a Context object,
//every component consuming that context will re-render,
//even if it only cares about a completely different piece of the state.
// in simple term context have some performance problem(because of unnecessary )



// we import the create function from the zustand library, which is used to create a new store.
import { create } from "zustand";

// We define a TypeScript interface called couterStoreType that describes the shape of our store.
interface couterStoreType {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementAsync: () => Promise<void>;
}


// We create a new store using the create function from zustand. The create function takes a function as an argument,
// which receives the set function as a parameter. The set function is used to update the state of the store.



const useCounterStore = create<couterStoreType>((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 })); 
    // The increment function updates the count state by using the set function. 
    // It takes the current state as an argument and returns a new state object with the updated count value. 
    // In this case, it increments the count by 1.
  },
  //how to handle async operation in zustand?? too simple 
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate an asynchronous operation
    set((state) => ({ count: state.count + 1 })); // Increment the count after the async operation is complete
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));


// useCounterStore is a custom hook that we can use in our React components to access the count state and the increment and decrement functions.
// but we can also in outside of react component to access the count state and the increment and decrement functions.

export default useCounterStore;
