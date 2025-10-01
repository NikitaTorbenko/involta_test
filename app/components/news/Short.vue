<script setup lang="ts">
import type { IRssItem } from "~/shered/types";

const props = defineProps<IRssItem>();
</script>

<template>
  <div class="news-short">
    <h2 class="title">{{ props.title }}</h2>
    <p class="description">{{ props.description }}</p>
    <nuxt-link class="link" target="_blank" :to="props.link"
      >Подробнее</nuxt-link
    >
    <div class="footer">
      <div class="footer-text source">www.mos.ru</div>
      <div class="footer-text pubDate">{{ formatDate(props.pubDate) }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news-short {
  padding: 30px;
  padding-bottom: 15px;
  box-shadow: 0px 1px 4px 0px #0000000d;
  max-width: 520px;
  width: 100%;
}

.title {
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: var(--blue);
  margin-bottom: 25px;
}

.description {
  margin-bottom: 20px;
}

.link {
  color: var(--blue);
  text-decoration: underline;
}

.footer {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-text {
  color: #dcdcdc;
}

.source {
  text-decoration: underline;
}
</style>
