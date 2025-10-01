export const usePaginationStore = defineStore("paginationStore", () => {
  const currentPage = ref(1);
  const pagesAmount = ref(10);
  const setCurrentPage = (page: number) => (currentPage.value = page);
  const perPage = ref(4);

  return { currentPage, pagesAmount, setCurrentPage, perPage };
});
