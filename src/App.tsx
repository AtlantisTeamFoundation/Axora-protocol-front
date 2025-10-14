import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home";
import AirDrop from "./pages/airdrop";
import Ico from "./pages/ico";
import Stacking from "./pages/stacking";
import WhitePaper from "./pages/whitePaper";
import { useInitDarkMode } from "./store/darkModeStore";

function App() {
  // Initialize dark mode with cookies
  useInitDarkMode();

  return (
    <div
      id="darkWrapper"
      className="transition-colors duration-300 border-black bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/airdrop" element={<AirDrop />} />
          <Route path="/pages/ico" element={<Ico />} />
          <Route path="/pages/stacking" element={<Stacking />} />
          <Route path="/pages/whitepaper" element={<WhitePaper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
