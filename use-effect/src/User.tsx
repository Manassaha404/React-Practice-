import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    async function getUser() {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
        {
          signal: controller.signal,
        },
      );
      const data = await response.json();
      setUser(data.data.data);
    }
    getUser(); // it calls when the component mount

    //cleanup function
    return () => {
      controller.abort();
      console.log("Cleanup: fetch aborted");
    };
  }, []);

  return (
    <div>
      {user.length > 0 ? (
        <>
          {user.map((u, i) => (
            <p key={i}>{u.email}</p>
          ))}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default User;
