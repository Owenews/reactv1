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
            name: "Bulbasaur",
            type: "Grass",
        },

    ];

    return (
        pokemons.map((pokemon) => {
            return (
                <article>
                    <p><strong>Name : </strong>{pokemon.name}</p> 
                    ------------------------------------------------------------------
                </article>
            );
        })
    );
};

export default ListPokemon;
        
            