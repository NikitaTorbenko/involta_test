export const useMainStore = defineStore("main", () => {
  const router = useRouter();
  const route = useRoute();
  const { filtered } = useNews();

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

  return {
    activeItem,
    setFilter,
    search,
    page,
    perPage,
    paginated,
    totalPages,
  };
});
