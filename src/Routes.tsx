import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

import {GraphicEuro} from "./pages/GraphicEuro"

export function AppRoutes(){
    return(
    <Router>
        <Routes>
            <Route path="/euro" element={<GraphicEuro />} />
        </Routes>
    </Router>
    )
}