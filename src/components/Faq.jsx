import { useState } from 'react';

const Faq = () => {
    //Création d'une variable state pour stocker la réponse
    const [isAnswerDisplayed, setIsAnswerDisplayed] = useState();

    const displayAnswer = () => {
      // Modification de la variable isAnswerDisplayed lors du clic
      setIsAnswerDisplayed (true);
    };


  return (
    <section>
      <h2>FAQ</h2>
      <p>What is react ?</p>

        <div>
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