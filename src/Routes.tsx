import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

import { GraphicEuro } from "./pages/GraphicEuro";
import App from "./App";

export function AppRoutes(){
    return(
    <Router>
        <Routes>
            <Route path="/euro" element={<GraphicEuro />} />
            <Route path="/" element={<App/>} />
        </Routes>
    </Router>
    )
}