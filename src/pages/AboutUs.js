import style from "../styles/styleAbout.css";
import { Link } from "react-router-dom";
import Header from "./Header";



function AboutUs(){
    return(
        <>
            <Header />


            <main class="container">    
                <section class="container__conteudo">
                    <h1> Quem somos nós?</h1>     
                    <p> Olá! Somos Felipe, Vinicius e Ligia, estudantes de Engenharia de Software na Universidade Federal de Mato Grosso do Sul,
                        e estamos desenvolvendo este projeto para a matéria de Programação pra Web mestrada pelo nosso professor Ricardo Kondo
                    </p>
                </section>

                <img class="container__img" src="./assets/about.png" alt="aboutimg"/>
             </main>
        </>
    );
}

export default AboutUs;