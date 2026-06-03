import { createRoot } from "react-dom/client";
import "./index.css";
import WithoutUseMemo from "./WithoutUseMemo.tsx";
import WithUseMemo from "./WithUseMemo.tsx";
createRoot(document.getElementById("root")!).render(
  <>
    <u>without use memo</u>
    <WithoutUseMemo />
    <u>with use memo</u>
    <WithUseMemo />
  </>
);
