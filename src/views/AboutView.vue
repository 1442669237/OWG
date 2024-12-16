<template>
  <div class="about">
    <button
      v-for="(i, index) of 3"
      :key="index"
      type="button"
      class="btn btn-primary"
    >
      {{ i }}
    </button>
  </div>
</template>

<style>
.about {
  width: 100vw;
  height: 30px;
  background: yellowgreen;
  text-align: center;
  line-height: 30px;
  display: flex;
  justify-content: space-around;
}
</style>
