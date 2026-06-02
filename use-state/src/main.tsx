import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UseState from "./UseState.tsx";
import WithoutUseState from "./WithoutUseState.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <p>without use state</p>
    <WithoutUseState />
    <p>with use state</p>
    <UseState />
  </StrictMode>,
);
