import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home";
import AirDrop from "./pages/airdrop";
import Ico from "./pages/ico";
import Stacking from "./pages/stacking";
import WhitePaper from "./pages/whitePaper";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/airdrop" element={<AirDrop />} />
          <Route path="/pages/ico" element={<Ico />} />
          <Route path="/pages/stacking" element={<Stacking />} />
          <Route path="/pages/whitepaper" element={<WhitePaper />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
