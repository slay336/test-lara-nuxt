// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    'vue3-carousel-nuxt',
    'dayjs-nuxt',
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/main.css',
    '~/assets/css/styles.scss',
  ],
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
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
  },
  app: {
    head: {
      title: 'Finter',
    }
  }
})
