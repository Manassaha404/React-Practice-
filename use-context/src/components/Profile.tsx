import { useContext } from "react";
import { dashboardContext } from "../context/dashboard.context";
// look we don't provide any props to profile 
const Profile = () => {
  const user = useContext(dashboardContext); // how we consume state 

  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h1>{user.name}</h1>

      <p>{user.bio}</p>

      <p>Status: {user.isActive ? "Active" : "Inactive"}</p>

      <p>Followers: {user.followers}</p>

      <p>Following: {user.following}</p>

      <p>Instagram: {user.instagram}</p>

      <p>Twitter: {user.Twitter}</p>
    </div>
  );
};

export default Profile;