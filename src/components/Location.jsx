import { useState } from 'react';

const Location = () => {
  //Création d'une variable state pour stocker la réponse
  // Elle nous donne aussi la possibilité d'initialiser la variable
  const [isLocated, setIsLocated] = useState();

  const displayLocation = () => {
    setTimeout(setIsLocated, 5000, true);    
  };  

  return (
    <section>
      <h2>Location</h2>
      <h3><strong>Vous vous baladez dans bourg pallete</strong></h3>
        {displayLocation && <p>Watch out ! Un un Ratatat sauvage vous attaque!</p>}
    </section>
  );
};

export default Location;