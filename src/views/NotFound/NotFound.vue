<script setup lang="ts">
defineExpose({
  name: 'NotFound',
})
</script>

<template>
  <div class="NotFound">
    <h1>404 Not Found</h1>
  </div>
</template>

<style scoped>
.NotFound {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  position: relative;
  h1 {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    font-weight: bold;
  }
}
@media screen and (max-width: 768px) {
  .NotFound {
    height: calc(100vh - 60px);

    h1 {
      font-size: 30px;
      text-align: center;
    }
  }
}
</style>
