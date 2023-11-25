import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutUs from "./pages/AboutUs";



function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/sobre" element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesApp;