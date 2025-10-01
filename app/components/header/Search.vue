<script setup lang="ts">
import SearchIcon from "~/assets/icons/search.svg";

const store = useMainStore();
const { search } = storeToRefs(store);
</script>

<template>
  <div class="search">
    <input
      v-model="search"
      type="text"
      placeholder="Поиск новостей..."
      class="search-input"
    />
    <div class="search-icon">
      <img :src="SearchIcon" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.search {
  position: relative;
  max-width: 320px;
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 1px 4px 0px #0000000d;
}

.search-icon {
  position: absolute;
  top: 9px;
  right: 10px;
  width: 20px;
  height: 20px;
}
</style>
