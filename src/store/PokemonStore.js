import { defineStore } from 'pinia';

export const usePokemonStore = defineStore('pokemonStore', {
  // state
  state() {
    return {
      pokemon: {},
    };
  },
  // actions
  actions: {
    setPokemon(pokemon) {
      this.pokemon = pokemon;
      console.log('Pokemon setted');
      //   console.log(this.pokemon);
    },
  },
  // getters
  getters: {
    getPokemon() {
      console.log('Pokemon returned');
      console.log(this.pokemon);
      return this.pokemon;
    },
  },
});
