import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home";
import AirDrop from "./pages/airdrop";
import Ico from "./pages/ico";
import Stacking from "./pages/stacking";
import WhitePaper from "./pages/whitePaper";
import { CookiesProvider } from "react-cookie";
import { useEffect, useState } from "react";
import DarkModeBtn from "./components/darkModeBtn";

function App() {
  const [dark, setDark] = useState<boolean>(false);

  const darkModeHandler = () => {
    setDark((prev) => !prev);
  };

  // toggle '.dark' class on wrapper
  useEffect(() => {
    const wrapper = document.getElementById("darkWrapper");
    wrapper?.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div
      id="darkWrapper"
      className="transition-colors duration-300 border-black bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      <CookiesProvider>
        <BrowserRouter>
          <div className="fixed top-1 right-1 z-50">
            <DarkModeBtn dark={dark} darkModeHandler={darkModeHandler} />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/airdrop" element={<AirDrop />} />
            <Route path="/pages/ico" element={<Ico />} />
            <Route path="/pages/stacking" element={<Stacking />} />
            <Route path="/pages/whitepaper" element={<WhitePaper />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </div>
  );
}

export default App;
