function WithoutUseState() {
  let count = 0;
  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          count++;
          console.log(count);//yes the value of count is increase but the page is not rerender so we cannot see the changes. 
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          count++;
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default WithoutUseState;
