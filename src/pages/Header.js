import style from '../styles/styleHeader.css';
import { Link } from "react-router-dom";



function Header(){
    return(
        <>
            <header className={style.cabecalho}>

            <div> <p className={style.logo}>Music Quiz</p></div>


            <nav className={style.nav_bar}>
                <ul>
                    <li>
                        <Link className={style.a} to="/">Home</Link>
                    </li>

                    <li>
                        <Link className={style.a} to="/sobre">About Us</Link>
                    </li>

                    <li>
                        <Link className={style.a} to="/ranking">Ranking</Link>
                    </li>

                    <li>
                        <Link className={style.a} to="/login">Login</Link>
                    </li>

                    <li>
                        <Link className={style.a} to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}

export default Header;