<script>
import PokemonCard from '@/components/PokemonCard.vue';
import FetchPokemon from '../services/api.vue';
import { usePokemonStore } from '../store/PokemonStore';
import { useToast } from 'vue-toastification';

const pokemonStore = usePokemonStore();
const toast = useToast();

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
          toast.error('Pokémon não encontrado');
        });
      this.pokemonNameOrId = '';
    },
  },

  components: { PokemonCard },
};
</script>

<template>
  <div class="container">
    <h2>POKEMON APP</h2>
    <form v-on:submit.prevent="handleSubmit">
      <input
        type="text"
        placeholder="Qual pokémon deseja buscar?"
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
  justify-content: space-around;
  max-width: 800px;
  background-color: rgb(82, 176, 255);
  border-radius: 10px;
}
h2 {
  color: black !important;
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

input,
button {
  font-family: 'Pokemon Solid';
  font-weight: normal;
  font-style: normal;
  letter-spacing: 2px;
}

input {
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  padding: 5px;
  text-align: center;
  border: 2px solid rgb(65, 105, 171);
  background-color: rgb(251, 223, 51);
}

input::placeholder {
  color: rgb(65, 105, 171);
}

button {
  max-width: 150px;
  width: 100%;
  border-radius: 10px;
  border: 2px solid rgb(65, 105, 171);
  background-color: orangered;
  position: relative;
  color: white;
}

button:hover {
  background-color: orangered;
  color: white;
  top: -2px;
  box-shadow: 0 2px 2px #666;
}
</style>
