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
    },
  },
  // getters
  getters: {
    getPokemon() {
      return this.pokemon;
    },
  },
});
