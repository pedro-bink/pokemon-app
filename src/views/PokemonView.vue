<script>
import { reactive } from 'vue';
import axios from 'axios';
import PokemonCard from '@/components/PokemonCard.vue';

export default {
  data() {
    return {
      pokemon: reactive({}),
      pokemonName: '',
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.pokemonName);

      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`)
        .then((response) => {
          console.log(response.data);
          this.pokemon = {
            id: response.data.id,
            name: response.data.name,
            image: response.data.sprites.front_default,
            stats: response.data.stats,
            type: { ...response.data.types },
          };
        });

      this.pokemonName = '';
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
        v-model="this.pokemonName"
      />

      <button type="submit">Buscar</button>
    </form>
    <div class="content">
      <PokemonCard :pokemon="this.pokemon" />
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
  background-color: rgb(33, 31, 31);
  border-radius: 10px;
}

.content {
  display: 100%;
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
