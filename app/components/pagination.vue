<script setup lang="ts">
const props = defineProps<{ totalPages: number }>();
const model = defineModel<{ default: 1 }>();
</script>

<template>
  <div class="pagination">
    <button :disabled="model <= 1" @click="model--">Назад</button>
    <span>{{ model }} / {{ props.totalPages }}</span>
    <button :disabled="model >= props.totalPages" @click="model++">
      Вперед
    </button>
  </div>
</template>

<style scoped lang="scss">
// .block {
// }
</style>
