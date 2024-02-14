// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],
  imports: {
    dirs: ["utils"],
  },
});
