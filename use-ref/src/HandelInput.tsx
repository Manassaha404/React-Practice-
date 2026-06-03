import { useCallback, useRef, useState } from "react";

const HandelInput = () => {
  const [data, setData] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handelOnchange = useCallback(() => {
    setData(inputRef.current.value);
  }, []);
  return (
    <div>
      <input
        ref={inputRef} // here how we target a html element by useRef, and use it's property 
        onChange={handelOnchange}
        type="text"
        placeholder="type something... "
      />
      <p>{data}</p>
    </div>
  );
};

export default HandelInput;
