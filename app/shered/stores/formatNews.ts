export const useFormatNews = defineStore("format-news", () => {
  const activeFormatNews = ref(1);

  const changeFormatNews = (index: number) => (activeFormatNews.value = index);

  return { activeFormatNews, changeFormatNews };
});
