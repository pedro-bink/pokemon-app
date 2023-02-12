<script>
import axios from 'axios';

export default function FetchPokemon(pokemon) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => {
        const actualPokemon = {
          id: response.data.id,
          name: response.data.name,
          image: response.data.sprites.front_default,
          stats: response.data.stats,
          type: { ...response.data.types },
        };
        resolve(actualPokemon);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
</script>
