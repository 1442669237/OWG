<template>
  <div class="about">
    <div
      v-for="(i, index) of 4"
      :key="index"
      type="button"
      class="btn btn-primary"
    >
      {{ i }}
    </div>
  </div>
</template>

<style scoped>
.about {
  width: 100vw;
  height: 30px;
  background: yellowgreen;
  text-align: center;
  line-height: 30px;
  display: flex;
  justify-content: space-around;
}
@media (min-width: 768px) {
  .btn-primary {
    /* PC端特定样式 */
  }
}

/* 移动端样式 */
@media (max-width: 767px) {
  .btn-primary {
    /* 移动端特定样式 */
    display: none;
  }
}
</style>
