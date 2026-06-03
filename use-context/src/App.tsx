import { useEffect, useState } from "react";
import type { User } from "./types/User";
import Dashboard from "./components/Dashboard";
import { dashboardContext } from "./context/dashboard.context";
const MOCK_DATA: User = {
  name: "Manas Saha",
  bio: "Full-stack developer passionate about React and Node.js.",
  isActive: true,
  followers: 1250,
  following: 320,
  instagram: "@manas.dev",
  Twitter: "@manas_saha",
};

function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    setTimeout(() => {
      setUser(MOCK_DATA);
    }, 1000);
  });
  if (!user) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      Welcome to VibeCheck {user?.name}
      {/* how we wrap the parent (here Dashboard) and passing a value, this value now available every child of dashboard */}
      <dashboardContext.Provider value={user}> 
        <Dashboard />
      </dashboardContext.Provider>
    </div>
  );
}

export default App;
