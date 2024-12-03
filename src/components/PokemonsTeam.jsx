import { useEffect, useState } from "react";

const PokemonsTeam = () => {
  const [pokemonsInTeam, setPokemonsInTeam] = useState([]);

  const fetchPokemonsInTeam = () => {
    fetch("https://pokebuildapi.fr/api/v1/random/team")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemonsInTeam(data);
      });
  };

  // useEffect permet d'executer du code à certains moments du cycle de vie du composant
  useEffect(() => {
    fetchPokemonsInTeam();
  }, []);

  const handleRecreateTeam = () => {
    fetchPokemonsInTeam();
  };

  return (
    <section>
        <button onClick={handleRecreateTeam}>Generate a new team</button>
        {pokemonsInTeam.length > 0 ? (
          <>
            {pokemonsInTeam.map((pokemon) => {
              return (
                <article>
                    <h3>{pokemon.name}</h3>
                    <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
                </article>
              );
            })}
          </>
      ) : (
        <p>Team assembling loading... !</p>
      )}
    </section>
  );
};

export default PokemonsTeam;