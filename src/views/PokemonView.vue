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
          };
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
        v-model="this.pokemonName"
      />

      <input type="submit" value="Buscar" />
    </form>
  </div>
  <PokemonCard :pokemon="this.pokemon" />
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;
}
</style>
