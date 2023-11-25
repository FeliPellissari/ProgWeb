import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import Header from "./Header";
import style from "../styles/styleLogin.css"
import user_photo from "../assets/profile_login128.png"


function Login(){

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }

    return(

        <>
            <Header />

            
            <main>
                <section class="container__login">

                    <section class="container__login__img">
                        <img src={user_photo} alt={"profile_img"}/>
                    </section>



                    <section class="container__login__info">
                        <label for="user">Email:</label>
                        <input class="container__login__info__campo_texto" type="text" name="user" id="user"/>
                        <label for="password">Password</label>
                        <input class="container__login__info__campo_texto" type="password" name="password" id="password "/>
                    </section>





                    <button class="container__login__botao" type="submit">Sign In</button>
                    <a href="esqueciSenha.html">Esqueci minha senha</a>


                </section>
            </main>
        
        </>
    );
}

export default Login;