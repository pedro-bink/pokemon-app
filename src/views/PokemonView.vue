<script>
import PokemonCard from '@/components/PokemonCard.vue';
import FetchPokemon from '../services/api.vue';
import { usePokemonStore } from '../store/PokemonStore';

const pokemonStore = usePokemonStore();

export default {
  data() {
    return {
      pokemonNameOrId: '',
    };
  },

  methods: {
    handleSubmit() {
      FetchPokemon(this.pokemonNameOrId)
        .then((pokemon) => {
          pokemonStore.setPokemon(pokemon);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  components: { PokemonCard },
};
</script>

<template>
  <div class="container">
    <form v-on:submit.prevent="handleSubmit">
      <input
        type="text"
        placeholder="Qual pokemon deseja buscar?"
        v-model="pokemonNameOrId"
      />

      <button type="submit">Buscar</button>
    </form>
    <div class="content">
      <PokemonCard />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  max-width: 800px;
  width: 100%;
  height: 100%;
  background-color: rgb(82, 176, 255);
  border-radius: 10px;
}

.content {
  display: 100%;
  width: 100%;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  width: 100%;
}

input {
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  padding: 10px;
  text-align: center;
}

button {
  padding: 10px;
  max-width: 150px;
  width: 100%;
  border-radius: 10px;
  background-color: white;
  font-weight: bold;
}

button:hover {
  background-color: orangered;
  color: white;
}
</style>
