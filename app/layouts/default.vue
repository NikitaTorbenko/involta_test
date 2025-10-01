<script setup lang="ts">
// import { ref } from 'vue'

// interface Props {

// }
</script>

<template>
  <div class="layout">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  background-color: #fbfbfb;
  min-height: 100dvh;
}

.container {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
