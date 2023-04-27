// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/common/variables.scss";
            @import "@/assets/styles/common/mixins.scss";
          `
        }
      }
    }
  }
})
