import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EuroPage from "./pages/EuroPage";
import DolarPage from "./pages/DolarPage";
import BtcPage from "./pages/BtcPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/euro" element={<EuroPage />} />
          <Route path="/dolar" element={<DolarPage />} />
          <Route path="/btc" element={<BtcPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
