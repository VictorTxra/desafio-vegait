const fetchPokemonData = async (pokemonName) => {
    try {
      return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`).then((response) => response.json());
    } catch (error) {
      console.error('Erro ao buscar dados do Pokémon:', error);
      throw error;
    }
  };
  
  export { fetchPokemonData };