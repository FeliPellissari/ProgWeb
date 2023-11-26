import style from "../styles/styleEsqueciSenha.css";
import Header from "./Header";

function EsqueciSenha(){

    return(

        <>
            <Header />

            <main class="container">
                <section class="container__texto">
                    <p>Caso tenha esquecido sua senha, digite o e-mail utilizado durante a criação da sua conta no campo abaixo para redefinir sua senha:</p>
                    <input class="container__texto__campo" type="text" name="esqueciSenha" id="esqueciSenha" placeholder="Email"/>
                    <button class="container__texto__botao">Enviar</button>
                </section>
            </main>
        </>
    );
}

export default EsqueciSenha;