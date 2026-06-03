import { useContext } from "react";
import { dashboardContext } from "../context/dashboard.context";

const Sidebar = () => {
  const user = useContext(dashboardContext);

  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h3>Sidebar</h3>

      <p>{user.name}</p>

      <ul>
        <li>Profile</li>
        <li>Followers ({user.followers})</li>
        <li>Following ({user.following})</li>
        <li>{user.isActive ? "🟢 Online" : "🔴 Offline"}</li>
      </ul>
    </div>
  );
};

export default Sidebar;
