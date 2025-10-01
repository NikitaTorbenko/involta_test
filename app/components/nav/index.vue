<script setup lang="ts">
import { ref } from "vue";
import { navList } from "./model";

const activeItem = ref(0);
</script>

<template>
  <div class="nav-wrap">
    <nav class="nav">
      <div
        v-for="(item, index) in navList"
        :key="item.query"
        @click="() => (activeItem = index)"
        class="nav-item"
        :class="activeItem === index ? ' nav-item-active' : ''"
      >
        {{ item.title }}
      </div>
    </nav>
    <nav-format-news />
  </div>
</template>

<style scoped lang="scss">
.nav-wrap {
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav {
  display: flex;
  gap: 10px;
}

.nav-item {
  font-weight: 700;
  color: var(--blue);
  transition: 0.2s;

  &-active {
    color: #000;
  }
}
</style>
