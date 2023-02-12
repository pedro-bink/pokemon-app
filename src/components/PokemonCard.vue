<script>
import FetchPokemon from '../services/api.vue';
import TypeCard from './TypeCard.vue';
import { usePokemonStore } from '../store/PokemonStore';

const pokemonStore = usePokemonStore();

export default {
  data() {
    return {
      showStats: false,
      actualPokemonId: 0,
      actualPokemon: {},
    };
  },

  computed: {
    pokemon() {
      return pokemonStore.getPokemon;
    },
  },

  methods: {
    handleToggleClick() {
      this.showStats = !this.showStats;
    },

    handleArrowClick(direction) {
      if (direction == 'next') {
        this.actualPokemonId = this.pokemon.id + 1;
        FetchPokemon(this.actualPokemonId).then((pokemon) => {
          pokemonStore.setPokemon(pokemon);
        });
      } else {
        this.actualPokemonId = this.pokemon.id - 1;
        FetchPokemon(this.actualPokemonId).then((pokemon) => {
          pokemonStore.setPokemon(pokemon);
        });
      }
    },
  },
  components: { TypeCard },
};
</script>

<template>
  <div class="guessPokemon" v-show="!pokemon?.name">
    <img src="../assets/pokemon.jpeg" alt="" />
  </div>
  <div v-show="pokemon?.name" class="card">
    <div class="header">
      <h1>{{ pokemon?.name }}</h1>
      <div class="nav-pokemon">
        <img
          class="arrow"
          v-on:click="handleArrowClick('previous')"
          src="../assets/left.svg"
          alt=""
        />
        <img
          v-on:click="handleToggleClick"
          class="pokemon"
          :src="pokemon?.image"
        />
        <img
          v-on:click="handleArrowClick('next')"
          class="arrow"
          src="../assets/right.svg"
          alt=""
        />
      </div>

      <div class="container-type">
        <div
          ref="type"
          :class="`${type.type.name} baseType`"
          v-for="(type, index) in pokemon?.type"
          :key="index"
        >
          {{ type.type.name }}
        </div>
      </div>
    </div>
    <template v-if="this.showStats">
      <div class="status">
        <p v-for="(stat, index) in pokemon.stats" :key="index">
          <TypeCard :type="stat" />
        </p>
      </div>
    </template>
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
  padding: 10px;
}

.card {
  border-radius: 10px;
  background-color: white;
  color: black;
  border: 6px dashed orangered;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}

.header {
  border-radius: 10px;
}

.pokemon {
  cursor: pointer;
  width: 170px;
  height: 170px;
}

.guessPokemon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.guessPokemon > img {
  max-height: 300px;
  max-width: 300px;
  border-radius: 10px;
  height: 100%;
  width: 100%;
}

.container-type {
  display: flex;
}

.baseType {
  border-radius: 5px;
  color: white;
  width: 70px;
  text-align: center;
  font-weight: 600;
  margin: 3px;
}

.status {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  height: 100%;
  width: 100%;
}

.nav-pokemon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow {
  cursor: pointer;
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
