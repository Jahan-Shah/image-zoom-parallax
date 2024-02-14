<script setup>
useHead({
  bodyAttrs: {
    class: "m-0 bg-[rgb(24,24,24)]",
  },
});

const scrollLenis = ref(null);
const useSmoothScroll = () => {
  scrollLenis.value = new Lenis({
    duration: 1.2,
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
  });

  scrollLenis.value.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    scrollLenis.value.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
  scrollLenis.value.scrollTo(0);
};

onMounted(() => {
  useSmoothScroll();
});
</script>

<template>
  <main class="main">
    <ZoomParallax />
  </main>
</template>

<style scoped>
.main {
  margin-top: 50vh;
  margin-bottom: 100vh;
}
</style>
