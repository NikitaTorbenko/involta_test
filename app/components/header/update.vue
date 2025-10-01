<script setup lang="ts">
import update from "~/assets/icons/update.png";

const router = useRouter();

const isLoading = ref(false);

const handleClick = () => {
  isLoading.value = true;

  router.push({
    query: {
      source: "all_news",
      page: 1,
      search: "",
    },
  });

  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>

<template>
  <div class="block" :class="{ loader: isLoading }">
    <img @click="handleClick" :src="update" alt="" />
  </div>
</template>

<style scoped lang="scss">
.block {
  width: 50px;
  height: 50px;

  img {
    height: 50px;
    width: 50px;
  }
}

.loader {
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
