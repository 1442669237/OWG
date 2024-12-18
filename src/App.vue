<script setup>
import { RouterLink, RouterView } from "vue-router";
import about from "./views/AboutView.vue";
import { onMounted } from "vue";
import { aaa } from "@/api/app.js";
// const aa()=>{

// }
onMounted(aaa);
</script>

<template>
  <div>
    <header>
      <about />
    </header>
  </div>
  <van-button type="primary">按钮</van-button>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <div class="flex">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
