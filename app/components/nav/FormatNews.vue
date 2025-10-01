<script setup lang="ts">
import Two from "~/assets/icons/nav/two.png";
import TwoActive from "~/assets/icons/nav/twoActive.png";
import Four from "~/assets/icons/nav/four.png";
import FourActive from "~/assets/icons/nav/fourActive.png";
import { useFormatNews } from "~/shered/stores";

const formatNewsStore = useFormatNews();
</script>

<template>
  <div class="format-news">
    <div @click="formatNewsStore.changeFormatNews(0)" class="first-format">
      <img
        v-if="formatNewsStore.activeFormatNews === 0"
        :src="TwoActive"
        alt=""
      />
      <img v-else :src="Two" alt="" />
    </div>
    <div @click="formatNewsStore.changeFormatNews(1)" class="second-format">
      <img
        v-if="formatNewsStore.activeFormatNews === 1"
        :src="FourActive"
        alt=""
      />
      <img v-else :src="Four" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.format-news {
  display: flex;
  gap: 10px;
}
</style>
