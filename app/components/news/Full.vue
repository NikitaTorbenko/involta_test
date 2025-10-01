<script setup lang="ts">
import type { IRssItem } from "~/shered/types";
import image from "~/assets/imgs/newsImage.png";
const props = defineProps<IRssItem>();
</script>

<template>
  <div class="news-full">
    <div class="header">
      <div class="img">
        <img :src="image" alt="" />
      </div>

      <div class="content">
        <h2 class="title">{{ props.title }}</h2>
        <p class="description">{{ props.description }}</p>
      </div>
    </div>
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
.news-full {
  padding: 30px;
  padding-bottom: 15px;
  box-shadow: 0px 1px 4px 0px #0000000d;
  width: 100%;
}

.header {
  display: flex;
  gap: 30px;
  margin-bottom: 10px;
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
