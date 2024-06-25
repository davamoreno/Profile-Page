// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@/assets/styles/main.scss'
  ],
  build: {
    loaders: {
      scss: {
        implementation: require('sass')
      }
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/_colors.scss";
          `
        }
      }
    }
  },
  vue: {
    propsDestructure: true
  }
})
