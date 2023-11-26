import { useState, useEffect } from "react";
import style from "../styles/styleHome.css";
import play from"../assets/botaoPlay256.png";
import Header from "./Header";
import Perguntas from "./Perguntas";
import QuizComponent from "./QuizComponent";

function Home(){

    const [isPopupOpen, setPopupOpen] = useState(false);

    function openPopUp() {
      setPopupOpen(true);
    }
  
    function closePopUp() {
      setPopupOpen(false);
    }


    return(

        <>
        <Header />

            <main className="container">    
            <h1>Aperte o botão para iniciar:</h1>
            <button type="submit" id="container__botaoPlay" className="container__botaoPlay" onClick={openPopUp}><img className={style.container__botaoPlay} src={play} alt=""/></button>
            
            {isPopupOpen && (
            <QuizComponent />
            )}


            </main>
        
        </>

        );
}

export default Home;