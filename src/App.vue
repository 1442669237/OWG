<script setup>
import { RouterLink, RouterView } from "vue-router";
import about from "./views/AboutView.vue";
</script>

<template>
  <div>
    <header>
      <about />
    </header>
  </div>
  <div class="flex">
    <RouterView />
  </div>

  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
</template>

<style scoped>
</style>
