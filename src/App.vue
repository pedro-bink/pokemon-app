<script setup>
import { RouterView } from 'vue-router';
import Menu from '@/components/Menu.vue';
</script>

<template>
  <div class="container">
    <header>
      <div class="wrapper">
        <Menu />
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
}
header {
}
</style>
