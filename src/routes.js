import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Perguntas from "./pages/Perguntas";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Ranking from "./pages/Ranking";
import EsqueciSenha from "./pages/EsqueciSenha";



function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/sobre" element={<AboutUs />} />
                <Route path="/perguntas" element={<Perguntas />}/>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/esqueciMinhaSenha" element={<EsqueciSenha />} />
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesApp;