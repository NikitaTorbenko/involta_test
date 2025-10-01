import type { IRssItem } from "~/shered/types";

export function useNews() {
  const route = useRoute();

  // подключаем ленты
  const { data: mos } = useRssFeed("https://www.mos.ru/rss", "mos.ru");
  const { data: ria } = useRssFeed(
    "https://ria.ru/export/rss2/archive/index.xml",
    "ria.ru"
  );

  // общий список
  const allNews = computed<IRssItem[]>(() => [
    ...(mos.value ?? []),
    ...(ria.value ?? []),
  ]);

  // фильтрация по query параметру ?source=
  const filtered = computed(() => {
    if (route.query.source === "mos.ru")
      return allNews.value.filter((n) => n.source === "mos.ru");
    if (route.query.source === "ria.ru")
      return allNews.value.filter((n) => n.source === "ria.ru");
    return allNews.value;
  });

  return { allNews, filtered };
}
