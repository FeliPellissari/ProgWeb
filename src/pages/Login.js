import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, NavLink, useNavigate } from 'react-router-dom'
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
            navigate("/")
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
                        <input class="container__login__info__campo_texto"     
                            id="email-address"                               
                            name="email"
                            type="email"                                    
                            required                                                                                
                            placeholder="Endereço de email"
                            onChange={(e)=>setEmail(e.target.value)}/>


                        <label for="password">Password</label>
                        <input class="container__login__info__campo_texto" 
                            id="password"
                            name="password"
                            type="password"                                    
                            required                                                                                
                            placeholder="Senha"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </section>





                    <button class="container__login__botao" onClick={onLogin}  type="submit">Sign In</button>

                    <Link to="/esqueciMinhaSenha"> Esqueci minha senha.</Link>
                    
                    <Link to="/signup"> Não tem conta? Crie uma agora clicando aqui</Link>

                </section>
            </main>
        
        </>
    );
}

export default Login;