import { useEffect, useState } from "react";

const PokemonsType = () => {
    const [types, setTypes] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  
    // useEffect permet d'executer du code à certains moments du cycle de vie du composant
    useEffect(() => {
      // setIsLoading(true) sert à afficher un état de chargement
      setIsLoading(true);
      fetch("https://pokebuildapi.fr/api/v1/types")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setTypes(data);
        })
        // .finally() sert à exécuter du code après la requête est terminée
        .finally(() => {
          setIsLoading(false);
        })
        // .catch() sert à afficher une erreur si la requête est rejetée
        .catch(() => {
          setIsError(true);
        });
    }, []);
  
    if (isLoading) {
      return <p>Types en cours de chargement</p>;
    }
  
    if (isError) {
      return <p>Il y a eu une erreur de chargement. Veuillez rafraichir la page</p>;
    }
  
    return (
      <section>
        {types?.map((type) => {
          return (
            <article>
              <h3>{type.name}</h3>
              <img className="pokemon-image" src={type.image} alt={type.name} />
            </article>
          );
        })}
      </section>
    );
  };

export default PokemonsType;