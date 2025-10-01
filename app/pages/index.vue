<script setup lang="ts">
import { useFormatNews } from "~/shered/stores";

const mainStore = useMainStore();
const formatNewsStore = useFormatNews();
const { paginated, page, totalPages } = storeToRefs(mainStore);
</script>

<template>
  <div>
    <Header />
    <Nav />
    <div v-if="paginated" class="news-list">
      <NewsShort
        v-if="formatNewsStore.activeFormatNews === 1"
        v-for="item in paginated"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :link="item.link"
        :pub-date="item.pubDate"
      />
      <NewsFull
        v-else
        v-for="item in paginated"
        :key="item.link"
        :title="item.title"
        :description="item.description"
        :link="item.link"
        :pub-date="item.pubDate"
      />
    </div>
  </div>

  <Pagination v-model:page="page" :total-pages="totalPages" />
</template>

<style scoped lang="scss">
.news-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding-bottom: 50px;
}

.pagination {
  padding-bottom: 50px;
}
</style>
