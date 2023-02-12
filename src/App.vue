<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="container">
    <header>
      <div class="wrapper">
        <h1>Pokémon</h1>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 20px;
}

.wrapper > h1 {
  width: 100%;
  color: orangered;
}
</style>
