import { memo } from "react";
type props = { fn: (val: string) => void };

const Search = ({ fn }: props) => {
  console.log("Search rendered..");

  return (
    <div>
      <input
        onChange={(e) => {
          fn(e.target.value);
        }}
        type="text"
        placeholder="search user.."
      />
    </div>
  );
};

export default memo(Search);
// what is memo()? -> memo() is react hook, it is use for optimize component rendering.
// if we wrap a component in memo(), the component will only if the provide props will change
// it means if props change then rerender, if props don't change don't need to rerender
// it gives the optimization
