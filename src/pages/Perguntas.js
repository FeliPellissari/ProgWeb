import React, { useEffect, useState } from 'react';
import style from "../styles/styleGenero1.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function Perguntas() {
    const [popUpCertoVisible, setPopUpCertoVisible] = useState(false);
    const [popUpErradoVisible, setPopUpErradoVisible] = useState(false);

    useEffect(() => {
        getQuestions();
    }, []);

    const firebaseConfig = {
        apiKey: "AIzaSyDXoOJCzP3pC7z1Sm_x84gWHp1s5fBPPvQ",
        authDomain: "quizmusicalfb.firebaseapp.com",
        projectId: "quizmusicalfb",
        storageBucket: "quizmusicalfb.appspot.com",
        messagingSenderId: "862678532253",
        appId: "1:862678532253:web:d66874d535b17311b11474",
        measurementId: "G-BF35MG0RP4"
    };

    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    const perguntasRef = db.collection('pergunta');
    let perguntas = [];

    function getQuestions() {
        db.collection('pergunta').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const pergunta = doc.data();
                    perguntas.push(pergunta);
                });
                console.log('Perguntas carregadas:', perguntas);
                mostrarPerguntaAleatoria();
            })
            .catch((error) => {
                console.log("Erro ao obter perguntas:", error);
            });
    }

    function mostrarPerguntaAleatoria() {
        const perguntaAleatoria = perguntas[Math.floor(Math.random() * perguntas.length)];
        document.getElementById('container__verso').textContent = perguntaAleatoria.verso;
        document.getElementById('textoRespostaCerta').textContent = perguntaAleatoria.respostaCerta;
        document.getElementById('textoRespostaErrada').textContent = perguntaAleatoria.respostaErrada;
    }

    function openPopUpCorreto() {
        setPopUpCertoVisible(true);
    }

    function closePopUpCorreto() {
        setPopUpCertoVisible(false);
    }

    function openPopUpErrado() {
        setPopUpErradoVisible(true);
    }

    function closePopUpErrado() {
        setPopUpErradoVisible(false);
    }

    document.getElementById('container__escolha__btn').addEventListener('click', () => {
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    });

    return (
        <>
            <label htmlFor="container__texto">Selecione a alternativa que contém o seguinte verso: <label id="container__verso"></label> </label>
            <section className="container__escolha">
                <button type="submit" className="container__escolha__btn" id="container__escolha__btn" onClick={openPopUpCorreto}>
                    <p id="textoRespostaCerta"></p>
                </button>
                <button type="submit" className="container__escolha__btn" id="container__escolha__btn" onClick={openPopUpErrado}>
                    <p id="textoRespostaErrada"></p>
                </button>
            </section>

            {popUpCertoVisible && (
                <section className="popUpCerto" id="popUpCerto">
                    <p>Resposta Correta! <button onClick={closePopUpCorreto}>Fechar</button></p>
                </section>
            )}

            {popUpErradoVisible && (
                <section className="popUpErrado" id="popUpErrado">
                    <p>Resposta Errada! <button onClick={closePopUpErrado}>Fechar</button></p>
                </section>
            )}
        </>
    );
}

export default Perguntas;
