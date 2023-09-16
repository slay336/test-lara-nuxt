// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    'vue3-carousel-nuxt',
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/main.css',
  ],
  runtimeConfig: {
    public: {
      BASE_URL: "http://localhost:3000",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    '~': resolve(__dirname),
    '@': resolve(__dirname, 'node_modules'),
  }
})
