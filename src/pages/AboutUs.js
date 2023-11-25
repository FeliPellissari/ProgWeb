import style from "../styles/styleAbout.css";
import foto_us from "../assets/about.png";

import Header from "./Header";



function AboutUs(){
    return(
        <>
            <Header />


            <main className={style.container}>    
                <section className="container__conteudo">
                    <h1> Quem somos nós?</h1>     
                    <p> Olá! Somos Felipe, Vinicius e Ligia, estudantes de Engenharia de Software na Universidade Federal de Mato Grosso do Sul,
                        e estamos desenvolvendo este projeto para a matéria de Programação pra Web mestrada pelo nosso professor Ricardo Kondo
                    </p>
                </section>

                <img className="container__img" src={foto_us} alt=""/>
             </main>
        </>
    );
}

export default AboutUs;