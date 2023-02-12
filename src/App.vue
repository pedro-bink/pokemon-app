<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="container">
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
