<script setup lang="ts">
// import { ref } from 'vue'

// interface Props {

// }
</script>

<template>
  <header class="header">
    <div class="left">
      <h2 class="title">Список новостей</h2>
      <HeaderUpdate />
    </div>

    <header-search />
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px 0;
  border-bottom: 1px solid #e5e5e5;
}

.left {
  display: flex;
  align-items: center;
  gap: 30px;
}

.title {
  width: fit-content;
  font-family: Arial;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0%;
}
</style>
