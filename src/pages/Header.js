import style from '../styles/styleHeader.css';
import { Link } from "react-router-dom";



function Header(){
    return(
        <>
            <header className="cabecalho">

            <div> <p className="logo">Music Quiz</p></div>


            <nav className="nav_bar">
                <ul>
                    <li>
                        <Link className="a" to="/">Home</Link>
                    </li>

                    <li>
                        <Link className="a" to="/sobre">About Us</Link>
                    </li>

                    <li>
                        <Link className="a" to="/ranking">Ranking</Link>
                    </li>

                    <li>
                        <Link className="a" to="/login">Login</Link>
                    </li>

                    <li>
                        <Link className="a" to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}

export default Header;