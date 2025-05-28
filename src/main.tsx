import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Grid from "./components/Grid/Grid.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Grid size={20} />
  </StrictMode>
);
