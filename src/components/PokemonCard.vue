<script>
import { reactive } from 'vue';

export default {
  props: {
    pokemon: Object,
  },

  data() {
    return {
      showStats: false  ,
    };
  },

  methods: {
    handleClick() {
      this.showStats = !this.showStats;
      console.log('aqui');
    },
  },
};
</script>

<template>
  <div class="card">
    <h1>{{ pokemon?.name }}</h1>
    <img :src="pokemon?.image" />
    <button v-on:click="handleClick">Toggle information</button>
    <template v-if="this.showStats">
      <div class="status">
        <p v-for="stat in pokemon.stats">
          {{ stat.stat.name }} - {{ stat.base_stat }}
        </p>
      </div>
    </template>
  </div>
</template>

<style>
.card {
  border: 2px solid rgb(255, 102, 0);
  border-radius: 10px;
  background-color: antiquewhite;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
</style>
