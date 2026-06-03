import { useCallback, useState } from "react";

import Search from "./Search";
import shuffle from "./utils/shuffle";

const allUsers = ["jhon", "manas", "joy", "riya", "suraj"];

function App() {
  const [user, setUser] = useState(allUsers);

  //in react every render change the function, although the content remain same but the function is changed
  // it means previous rendered function !== new rendered function
  // thats why when we pass this function to Search component Search rerender, although Search wrap in memo(),
  // because every time the prop function changed

  /*
  const handelsearch = (val: string) => {
    const filteredUser = allUsers.filter((v) => v.startsWith(val));
    setUser(filteredUser);
  };
  */

  // const handelsearch = useCallback(

  //   (val: string) => {
  //     console.log(user[0])
  //     const filteredUser = allUsers.filter((v) => v.startsWith(val));
  //     setUser(filteredUser);
  //   },
  //   [],
  // );
  // use callback memorize the function so now every rerender here not create a new function
  // also one thing should keep in mind that in useCallback the body of callback or function is freeze
  // in above useCallback() have a big problem, we log the first user, but after we search first user remain same 'jhon',
  // because the body of handelsearch is freeze, it means the value of user always same as initial value of user in that function body
  // so here come dependence array, if we pass user state in the array the handelsearch function will recreate with user change..

  const handelsearch = useCallback(
    (val: string) => {
      console.log(user[0]);
      const filteredUser = allUsers.filter((v) => v.startsWith(val));
      setUser(filteredUser);
    },
    [user],
  );

  return (
    <>
      <div>
        <button
          onClick={() => {
            setUser(shuffle(user));
          }}
        >
          Shuffle
        </button>
        <Search fn={handelsearch} />
        {user.map((v, i) => (
          <p key={i}>{v}</p>
        ))}
      </div>
    </>
  );
}

export default App;
