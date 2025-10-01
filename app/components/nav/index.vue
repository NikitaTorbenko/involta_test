<script setup lang="ts">
import { navList } from "./model";

const store = useMainStore();

const { activeItem } = storeToRefs(store);
</script>

<template>
  <div class="nav-wrap">
    <nav class="nav">
      <div
        v-for="item in navList"
        :key="item.query"
        class="nav-item"
        :class="{ 'nav-item-active': activeItem === item.query }"
        @click="store.setFilter(item.query)"
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
  cursor: pointer;
  font-weight: 700;
  color: var(--blue);
  transition: 0.2s;

  &-active {
    color: #000;
  }
}
</style>
