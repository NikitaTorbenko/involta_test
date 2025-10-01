export const useWindowSize = () => {
  const width = ref(window?.innerWidth);
  const height = ref(window?.innerHeight);

  const handleResize = () => {
    width.value = window?.innerWidth;
    height.value = window?.innerHeight;
  };

  onMounted(() => {
    window?.addEventListener("resize", handleResize);
  });

  onUpdated(() => {
    window?.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window?.removeEventListener("resize", handleResize);
  });

  const dimensions = { width, height };

  return { dimensions };
};
