<script setup lang="ts">
import { useFormatNews } from "~/shered/stores";

const formatNewsStore = useFormatNews();

const { data: mosNews, pending: loadingMos } = await useRssFeed(
  "https://www.mos.ru/rss"
);

const { data: lentaNews, pending: loadingLenta } = await useRssFeed(
  "https://ria.ru/export/rss2/index.xml"
);
</script>

<template>
  <div>
    <Header />
    <Nav />
    <div v-if="mosNews" class="news-list">
      <NewsShort
        v-if="formatNewsStore.activeFormatNews === 1"
        v-for="item in mosNews"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :link="item.link"
        :pub-date="item.pubDate"
      />
      <NewsFull
        v-else
        v-for="item in mosNews"
        :key="item.link"
        :title="item.title"
        :description="item.description"
        :link="item.link"
        :pub-date="item.pubDate"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.news-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding-bottom: 50px;
}
</style>
