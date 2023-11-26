import React, {useState} from 'react';
import style from "../styles/styleSignUp.css";
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import Header from './Header';
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    < >   
        <Header />     
        
            <main>
                <div className="headline">  
                    <div>
                    <h1> Crie sua Conta </h1>  
                    </div>                
                                                                                               
                    <form>                                                                                            
                        <div className="caixa">
                            <label htmlFor="email-address">
                                Endereço de email
                            </label>
                            <input
                                className='container__login__info__campo_texto'
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Endereço de email"                                
                            />

                            <label htmlFor="password">
                                Nova senha
                            </label>
                            <input
                                className='container__login__info__campo_texto'
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Senha"              
                            />


                                                    
                        <button
                            className='container__login__botao'
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Criar                             
                        </button>
                        </div>                                             

                                                                     
                    </form>
                   
                    <p>
                        Já possui conta? {' '}
                        <NavLink to="/login" >
                              Clique aqui
                        </NavLink>
                    </p>                   
                </div>
            </main>
       
    </>
  )
}
 
export default Signup