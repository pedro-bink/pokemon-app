<script>
export default {
  props: {
    pokemon: Object,
  },

  data() {
    return {
      showStats: false,
    };
  },

  methods: {
    handleClick() {
      this.showStats = !this.showStats;
    },
  },
};
</script>

<template>
  <div v-show="!pokemon.name">
    <img class="guessPokemon" src="../assets/guessPokemon.webp" alt="" />
  </div>
  <div v-show="pokemon.name">
    <div class="card">
      <div class="header" v-on:click="handleClick">
        <h1>{{ pokemon?.name }}</h1>
        <img class="pokemon" :src="pokemon?.image" />
        <div
          ref="type"
          :class="`${type.type.name} baseType`"
          v-for="(type, index) in pokemon.type"
          :key="index"
        >
          {{ type.type.name }}
        </div>
      </div>
      <template v-if="this.showStats">
        <div class="status">
          <p v-for="(stat, index) in pokemon.stats" :key="index">
            <span class="stat"> {{ stat.stat.name }}</span> -
            <span class="value">{{ stat.base_stat }}</span>
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<style>
h1 {
  font-weight: 700;
}

.header,
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
}

.card {
  border-radius: 10px;
  background-color: rgb(179, 130, 79);
  color: black;
  gap: 10px;
  border: 3px dashed orangered;
  width: 100%;
}

.header {
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid black;
}

.stat,
.value {
  font-size: large;
  font-weight: 600;
}
.value {
  color: orangered;
}
.pokemon {
  max-width: 300px;
  width: 100%;
}

.guessPokemon {
  max-width: 300px;
  width: 100%;
  border-radius: 10px;
}

.baseType {
  border-radius: 5px;
  padding: 5px;
  color: white;
  width: 70px;
  text-align: center;
  font-weight: 600;
  margin: 3px;
}
.grass {
  background-color: rgb(84, 140, 56);
}
.poison {
  background-color: rgb(112, 45, 112);
}
.fire {
  background-color: rgb(169, 90, 34);
}
.flying {
  background-color: rgb(118, 101, 169);
}
.water {
  background-color: rgb(73, 101, 169);
}
.bug {
  background-color: rgb(118, 129, 22);
}
.normal {
  background-color: rgb(118, 118, 84);
}
.electric {
  background-color: rgb(174, 146, 34);
}
.ground {
  background-color: rgb(157, 135, 73);
}
.fairy {
  background-color: rgb(167, 107, 121);
}
.fighting {
  background-color: rgb(135, 34, 28);
}
.psychic {
  background-color: rgb(174, 62, 96);
}
.rock {
  background-color: rgb(129, 112, 39);
}
.ice {
  background-color: rgb(107, 152, 152);
}
.dragon {
  background-color: rgb(79, 39, 174);
}
.ghost {
  background-color: rgb(79, 62, 107);
}
.dark {
  background-color: rgb(79, 62, 51);
}
.steel {
  background-color: rgb(129, 129, 146);
}
</style>
