import { useState } from 'react';
import style from '../styles/styleHeader.css';
import { Link } from "react-router-dom";



function Header(){


    const [navBarActive, setNavBarActive] = useState(false);

    const handleHamburgerClick = () => {
      setNavBarActive(!navBarActive);
    };


    return(
        <>
            <header className="cabecalho">

            <div> <p className="logo">Music Quiz</p></div>

            <div class="hamburger" onClick={handleHamburgerClick}>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
        </div>

            <nav className="nav_bar">
                <ul>
                    <li>
                            <Link to="/" >Home</Link>
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
        </>
    );
}

export default Header;