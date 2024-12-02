const ShowPokemon = () => {
  const pokemon = {
    name: "Pikachu",
    type: "Electric",
    color: "Yellow",
    hp: 100,
    attack: 50,
    defense: 40,
    evolution: {
      name: "Raichu",
      type: "Electric",
      color: "Yellow",
      hp: 120,
      attack: 70,
      defense: 60,
    },  
  };
  
  return (
    <article>
      <p><strong>Name:</strong>{pokemon.name}</p> 
      <p><strong>Type:</strong> {pokemon.type}</p>
      <p><strong>Color:</strong> {pokemon.color}</p>
      <p><strong>HP:</strong> {pokemon.hp}</p>
      <p><strong>Attack:</strong> {pokemon.attack}</p>
      <p><strong>Defense:</strong> {pokemon.defense}</p>

      ------------------------------------------------------------------
      
      <p><strong>Evolution Name:</strong> {pokemon.evolution.name}</p> 
      <p><strong>Type:</strong> {pokemon.evolution.type}</p>
      <p><strong>Color:</strong> {pokemon.evolution.color}</p>
      <p><strong>HP:</strong> {pokemon.evolution.hp}</p>
      <p><strong>Attack:</strong> {pokemon.evolution.attack}</p>
      <p><strong>Defense:</strong> {pokemon.evolution.defense}</p>
    </article>
  );
};

export default ShowPokemon;
