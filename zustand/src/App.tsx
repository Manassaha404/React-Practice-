import useCounterStore from "./store/counterStore"


const logCount = () => {
  const count = useCounterStore.getState().count;
  // The getState method is a function provided by the Zustand store that allows you to access the current state 
  // of the store outside of a React component.
  console.log("Current count:", count);
};

function App() {
  const count = useCounterStore((state) => state.count);
  // We use the useCounterStore hook to access the count state from our Zustand store.
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  return (
    <>
      <div>
        <h1>Zustand</h1>
        <p>count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={logCount}>Log Count</button>
        <button onClick={incrementAsync}>Increment Async</button>
      </div>
    </>
  )
}

export default App
