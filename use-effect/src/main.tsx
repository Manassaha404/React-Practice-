
import { createRoot } from "react-dom/client";
import App from "./Counter.tsx";
import User from "./User.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <User/>
  </>
);
