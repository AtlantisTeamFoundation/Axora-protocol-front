import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CookiesProvider } from "react-cookie";
import { DarkModeCheck } from "./providers/cookieCheck/cookieCheck.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider>
      <DarkModeCheck>
        <App />
      </DarkModeCheck>
    </CookiesProvider>
  </StrictMode>
);
