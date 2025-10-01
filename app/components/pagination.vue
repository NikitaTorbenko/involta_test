<script setup lang="ts">
interface Props {
  page: number;
  totalPages: number;
}
const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "update:page", value: number): void;
}>();

// Вычисляем список видимых страниц
const visiblePages = computed(() => {
  const delta = 2; // по 2 страницы слева и справа
  const pages: number[] = [];

  let start = Math.max(1, props.page - delta);
  let end = Math.min(props.totalPages, props.page + delta);

  // если мы близко к началу
  if (props.page <= delta) {
    end = Math.min(props.totalPages, 1 + delta * 2);
  }

  // если мы близко к концу
  if (props.page > props.totalPages - delta) {
    start = Math.max(1, props.totalPages - delta * 2);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});

function goTo(page: number) {
  if (page >= 1 && page <= props.totalPages) {
    emit("update:page", page);
  }
}
</script>

<template>
  <div class="pagination">
    <button class="btn" :disabled="page === 1" @click="goTo(page - 1)">
      ◀ Назад
    </button>

    <div class="pages">
      <button
        v-for="p in visiblePages"
        :key="p"
        class="page-btn"
        :class="{ active: p === page }"
        @click="goTo(p)"
      >
        {{ p }}
      </button>
      <span class="total">/ {{ totalPages }}</span>
    </div>

    <button class="btn" :disabled="page === totalPages" @click="goTo(page + 1)">
      Вперёд ▶
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
  font-family: sans-serif;
}

.pages {
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn,
.page-btn {
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:disabled,
.page-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.page-btn.active {
  background: #3b82f6; /* синий */
  color: white;
  font-weight: bold;
  border-color: #2563eb;
}

.page-btn:hover:not(.active),
.btn:hover:not(:disabled) {
  background: #f0f0f0;
}
.total {
  margin-left: 4px;
  color: #555;
}
</style>
