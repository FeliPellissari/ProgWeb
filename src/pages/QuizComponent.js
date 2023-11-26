import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const QuizComponent = () => {
  const [perguntas, setPerguntas] = useState([]);
  const [perguntaAtual, setPerguntaAtual] = useState({
    verso: '',
    respostaCerta: '',
    respostaErrada: '',
  });

  const [popUpCertoVisible, setPopUpCertoVisible] = useState(false);
  const [popUpErradoVisible, setPopUpErradoVisible] = useState(false);


  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const querySnapshot = await firebase.firestore().collection('pergunta').get();
        const perguntasData = querySnapshot.docs.map(doc => doc.data());
        setPerguntas(perguntasData);
        mostrarPerguntaAleatoria(perguntasData);
      } catch (error) {
        console.log('Erro ao obter perguntas:', error);
      }
    };

    fetchQuestions();
  }, []);

  const mostrarPerguntaAleatoria = (perguntasArray) => {
    const perguntaAleatoria = perguntasArray[Math.floor(Math.random() * perguntasArray.length)];
    setPerguntaAtual(perguntaAleatoria);
  };

  const handleRespostaCerta = () => {
    setPopUpCertoVisible(true);
    handleReload();
  };

  const handleRespostaErrada = () => {
    setPopUpErradoVisible(true);
    handleReload();
  };

  const handleReload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };


  return (
    <div>
      <label htmlFor="container__texto">Selecione a alternativa que contém o seguinte verso:</label>
      <label id="container__verso">{perguntaAtual.verso}</label>

      <section className="container__escolha">
        <button type="button" className="container__escolha__btn" onClick={handleRespostaCerta}>
          <p id="textoRespostaCerta">{perguntaAtual.respostaCerta}</p>
        </button>
        <button type="button" className="container__escolha__btn" onClick={handleRespostaErrada}>
          <p id="textoRespostaErrada">{perguntaAtual.respostaErrada}</p>
        </button>
      </section>

      {popUpCertoVisible && (
        <section className="popUpCerto" id="popUpCerto">
          <p>Resposta Correta!</p>
        </section>
      )}

      {popUpErradoVisible && (
        <section className="popUpErrado" id="popUpErrado">
          <p>Resposta Errada!</p>
        </section>
      )}

    </div>
  );
};

export default QuizComponent;
