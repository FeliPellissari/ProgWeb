import style from "./styles/styleHome.css";
import { Link } from "react-router-dom";
import './App.css';
import RoutesApp from './routes';

function App() {
  return (
    <div className="App">
      <RoutesApp />
      <header className={style.cabecalho}>

            <div className={style.logo}>Music Quiz</div>


            <div className={style.hamburger}>
                <div className={style.linha}></div>
                <div className={style.linha}></div>
                <div className={style.linha}></div>
            </div>



            <nav className={style.nav_bar}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/sobre">About Us</Link>
                    </li>

                    <li>
                        <Link to="/ranking">Ranking</Link>
                    </li>

                    <li>
                        <Link to="/login">Login</Link>
                    </li>

                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  );
}

export default App;
