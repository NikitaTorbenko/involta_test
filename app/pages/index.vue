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
<!-- <script setup lang="ts">
import { navList } from "~/components/nav/model";

const router = useRouter();
const route = useRoute();
const { filtered } = useNews();

// активный таб
const activeItem = computed(() => route.query.source || "all_news");

// переключение вкладки
function setFilter(query: string) {
  router.push({ query: { ...route.query, source: query, page: 1 } });
}

// --- 🔍 Поиск
const search = computed({
  get: () => (route.query.search as string) || "",
  set: (val: string) => {
    router.push({ query: { ...route.query, search: val, page: 1 } });
  },
});

// применяем фильтрацию по строке поиска
const searched = computed(() => {
  if (!search.value) return filtered.value;
  const q = search.value.toLowerCase();
  return filtered.value.filter(
    (n) =>
      n.title.toLowerCase().includes(q) ||
      n.description?.toLowerCase().includes(q)
  );
});

// --- 📄 Пагинация
const page = computed({
  get: () => Number(route.query.page) || 1,
  set: (val: number) => {
    router.push({ query: { ...route.query, page: val } });
  },
});

const perPage = 4;

const paginated = computed(() => {
  const start = (page.value - 1) * perPage;
  return searched.value.slice(start, start + perPage);
});

const totalPages = computed(() => Math.ceil(searched.value.length / perPage));
</script>

<template>
  <input
    v-model="search"
    type="text"
    placeholder="Поиск новостей..."
    class="search-input"
  />

  <nav class="nav">
    <div
      v-for="item in navList"
      :key="item.query"
      class="nav-item"
      :class="{ 'nav-item-active': activeItem === item.query }"
      @click="setFilter(item.query)"
    >
      {{ item.title }}
    </div>
  </nav>

  <ul>
    <li v-for="news in paginated" :key="news.link">
      <a :href="news.link" target="_blank">{{ news.title }}</a>
      <p v-if="news.description">{{ news.description }}</p>
      <small>{{ news.source }} • {{ news.pubDate }}</small>
    </li>
  </ul>

  <div class="pagination">
    <button :disabled="page <= 1" @click="page--">Назад</button>
    <span>{{ page }} / {{ totalPages }}</span>
    <button :disabled="page >= totalPages" @click="page++">Вперед</button>
  </div>
</template> -->
