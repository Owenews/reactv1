const ListPokemon = () => {
    const pokemons = [
        {
            id : 1,
            name: "Pikachu",
            type: "Electric",
        },
        {
            id : 2,
            name: "Raichu",
            type: "Electric",
        },
        {
            id : 3,
            name: "Charmander",
            type: "Fire",
        },
        {
            id : 4,
            name: "Charmander",
            type: "Fire",
        },
        {
            id : 5,
            name: "Charmander",
            type: "Fire",
            }
    ];

    return (
        pokemons.map((pokemon, index) => {
            return (
                <article key={index}>
                    <p><strong>Name : </strong>{pokemon.name}</p> 
                    <p><strong>Type : </strong> {pokemon.type}</p>
                    ------------------------------------------------------------------
                </article>
            );
        })
    );
};

export default ListPokemon;
        
            