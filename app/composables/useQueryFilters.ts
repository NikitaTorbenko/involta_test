import { useRoute, useRouter } from "#imports";

export function useQueryFilters() {
  const route = useRoute();
  const router = useRouter();

  // источник (source)
  const source = computed({
    get: () => (route.query.source as string) || "all_news",
    set: (val: string) => {
      router.push({ query: { ...route.query, source: val, page: 1 } });
    },
  });

  // поиск (search)
  const search = computed({
    get: () => (route.query.search as string) || "",
    set: (val: string) => {
      router.push({ query: { ...route.query, search: val, page: 1 } });
    },
  });

  // страница (page)
  const page = computed({
    get: () => Number(route.query.page) || 1,
    set: (val: number) => {
      router.push({ query: { ...route.query, page: val } });
    },
  });

  // очистка всех параметров
  function clearAll() {
    router.push({ query: {} });
  }

  return {
    source,
    search,
    page,
    clearAll,
  };
}
