import { useState } from 'react';

const Faq = () => {
  //Création d'une variable state pour stocker la réponse
  // Elle nous donne aussi la possibilité d'initialiser la variable
  const [isAnswerDisplayed, setIsAnswerDisplayed] = useState();

  const displayAnswer = () => {
    // Modification de la variable isAnswerDisplayed lors du clic à true
    setTimeout(setIsAnswerDisplayed, 5000, true);
  };
    
  return (
    <section>
      <h2>FAQ</h2>
      <h3><strong>What is react ?</strong></h3>
  
        <div>
            {/*Fonction : lors du clic sur le bouton :
                Affichage de la réponse
                Sinon,  affichage du bouton
            */ }
            {isAnswerDisplayed ? (
                <p>React is a JavaScript library to build user interfaces.</p>
            ) : (
                <button onClick={displayAnswer}>Wanna know the answer?</button>
                )}
        </div>
    </section>
  );
};   

export default Faq;