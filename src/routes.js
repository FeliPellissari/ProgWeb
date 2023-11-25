import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Perguntas from "./pages/Perguntas";
import Signup from "./pages/Signup";



function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/sobre" element={<AboutUs />} />
                <Route path="/perguntas" element={<Perguntas />}/>
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesApp;